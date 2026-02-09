import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Review from "@/models/Review";
import { z } from "zod";

// Validation schema for review submission
const reviewSubmissionSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  college: z.string().min(2, "College name is required"),
  rating: z.number().min(1).max(5, "Rating must be between 1 and 5"),
  review: z
    .string()
    .min(10, "Review must be at least 10 characters")
    .max(1000, "Review must be less than 1000 characters"),
  userId: z.string().optional(),
});

/**
 * GET /api/reviews - Fetch approved reviews for public display
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const rating = searchParams.get("rating");
  const college = searchParams.get("college");

  try {
    await dbConnect();

    const filter: any = { approved: true };

    if (rating) {
      filter.rating = parseInt(rating);
    }

    if (college) {
      filter.college = { $regex: college, $options: "i" };
    }

    const skip = (page - 1) * limit;

    const [reviews, total] = await Promise.all([
      Review.find(filter)
        .select("-moderatedBy -moderatedAt -rejectionReason")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Review.countDocuments(filter),
    ]);

    return NextResponse.json({
      success: true,
      data: reviews,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch reviews" },
      { status: 500 },
    );
  }
}

/**
 * POST /api/reviews - Submit a new review (guest submission)
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = reviewSubmissionSchema.parse(body);

    await dbConnect();

    // Create review (will be pending approval)
    const review = await Review.create({
      ...validatedData,
      approved: false, // Requires admin approval
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your review! It will be published after moderation.",
        data: {
          id: review._id,
        },
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Error creating review:", error);

    if (error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: error.errors,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { success: false, error: "Failed to submit review" },
      { status: 500 },
    );
  }
}

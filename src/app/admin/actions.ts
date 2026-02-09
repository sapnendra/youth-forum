"use server";

import dbConnect from "@/lib/mongodb";
import Registration from "@/models/Registration";
import Review from "@/models/Review";
import User from "@/models/User";
import { requireAdmin, getCurrentUserId } from "@/lib/rbac";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import type {
  RegistrationUpdateDTO,
  ReviewModerationDTO,
  UserUpdateDTO,
  DashboardStats,
} from "@/types/admin";

// ============================================
// REGISTRATION MANAGEMENT
// ============================================

/**
 * Get all registrations with optional pagination and filtering
 */
export async function getRegistrations(options?: {
  page?: number;
  limit?: number;
  contacted?: boolean;
  search?: string;
}) {
  await requireAdmin();
  await dbConnect();

  const page = options?.page || 1;
  const limit = options?.limit || 20;
  const skip = (page - 1) * limit;

  const filter: any = {};

  if (options?.contacted !== undefined) {
    filter.contacted = options.contacted;
  }

  if (options?.search) {
    filter.$or = [
      { name: { $regex: options.search, $options: "i" } },
      { email: { $regex: options.search, $options: "i" } },
      { college: { $regex: options.search, $options: "i" } },
    ];
  }

  try {
    const [registrations, total] = await Promise.all([
      Registration.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Registration.countDocuments(filter),
    ]);

    return {
      success: true,
      data: JSON.parse(JSON.stringify(registrations)),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error: any) {
    console.error("Error fetching registrations:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Update registration status and notes
 */
export async function updateRegistration(
  id: string,
  data: RegistrationUpdateDTO,
) {
  await requireAdmin();
  await dbConnect();

  const updateSchema = z.object({
    contacted: z.boolean().optional(),
    internalNote: z.string().optional(),
    status: z.enum(["pending", "contacted", "accepted", "rejected"]).optional(),
  });

  try {
    const validated = updateSchema.parse(data);

    const updated = await Registration.findByIdAndUpdate(
      id,
      { $set: validated },
      { new: true },
    );

    if (!updated) {
      return { success: false, error: "Registration not found" };
    }

    revalidatePath("/admin/registrations");
    return { success: true, data: JSON.parse(JSON.stringify(updated)) };
  } catch (error: any) {
    console.error("Error updating registration:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Delete a registration
 */
export async function deleteRegistration(id: string) {
  await requireAdmin();
  await dbConnect();

  try {
    const deleted = await Registration.findByIdAndDelete(id);

    if (!deleted) {
      return { success: false, error: "Registration not found" };
    }

    revalidatePath("/admin/registrations");
    return { success: true, message: "Registration deleted successfully" };
  } catch (error: any) {
    console.error("Error deleting registration:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Link a registration to a user (future feature)
 */
export async function linkRegistrationToUser(
  registrationId: string,
  userId: string,
) {
  await requireAdmin();
  await dbConnect();

  try {
    // Verify user exists
    const user = await User.findById(userId);
    if (!user) {
      return { success: false, error: "User not found" };
    }

    const updated = await Registration.findByIdAndUpdate(
      registrationId,
      { $set: { userId } },
      { new: true },
    );

    if (!updated) {
      return { success: false, error: "Registration not found" };
    }

    revalidatePath("/admin/registrations");
    return { success: true, data: JSON.parse(JSON.stringify(updated)) };
  } catch (error: any) {
    console.error("Error linking registration to user:", error);
    return { success: false, error: error.message };
  }
}

// ============================================
// REVIEW MANAGEMENT
// ============================================

/**
 * Get all reviews with optional filtering
 */
export async function getReviews(options?: {
  page?: number;
  limit?: number;
  approved?: boolean;
  rating?: number;
  search?: string;
}) {
  await requireAdmin();
  await dbConnect();

  const page = options?.page || 1;
  const limit = options?.limit || 20;
  const skip = (page - 1) * limit;

  const filter: any = {};

  if (options?.approved !== undefined) {
    filter.approved = options.approved;
  }

  if (options?.rating) {
    filter.rating = options.rating;
  }

  if (options?.search) {
    filter.$or = [
      { name: { $regex: options.search, $options: "i" } },
      { email: { $regex: options.search, $options: "i" } },
      { college: { $regex: options.search, $options: "i" } },
      { review: { $regex: options.search, $options: "i" } },
    ];
  }

  try {
    const [reviews, total] = await Promise.all([
      Review.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Review.countDocuments(filter),
    ]);

    return {
      success: true,
      data: JSON.parse(JSON.stringify(reviews)),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error: any) {
    console.error("Error fetching reviews:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Approve a review
 */
export async function approveReview(id: string) {
  await requireAdmin();
  const userId = await getCurrentUserId();
  await dbConnect();

  try {
    const updated = await Review.findByIdAndUpdate(
      id,
      {
        $set: {
          approved: true,
          moderatedBy: userId,
          moderatedAt: new Date(),
          rejectionReason: null,
        },
      },
      { new: true },
    );

    if (!updated) {
      return { success: false, error: "Review not found" };
    }

    revalidatePath("/admin/reviews");
    revalidatePath("/"); // Revalidate public pages showing reviews
    return { success: true, data: JSON.parse(JSON.stringify(updated)) };
  } catch (error: any) {
    console.error("Error approving review:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Reject a review with optional reason
 */
export async function rejectReview(id: string, reason?: string) {
  await requireAdmin();
  const userId = await getCurrentUserId();
  await dbConnect();

  try {
    const updated = await Review.findByIdAndUpdate(
      id,
      {
        $set: {
          approved: false,
          moderatedBy: userId,
          moderatedAt: new Date(),
          rejectionReason: reason || "Not approved by moderator",
        },
      },
      { new: true },
    );

    if (!updated) {
      return { success: false, error: "Review not found" };
    }

    revalidatePath("/admin/reviews");
    return { success: true, data: JSON.parse(JSON.stringify(updated)) };
  } catch (error: any) {
    console.error("Error rejecting review:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Delete a review
 */
export async function deleteReview(id: string) {
  await requireAdmin();
  await dbConnect();

  try {
    const deleted = await Review.findByIdAndDelete(id);

    if (!deleted) {
      return { success: false, error: "Review not found" };
    }

    revalidatePath("/admin/reviews");
    revalidatePath("/");
    return { success: true, message: "Review deleted successfully" };
  } catch (error: any) {
    console.error("Error deleting review:", error);
    return { success: false, error: error.message };
  }
}

// ============================================
// USER MANAGEMENT (Future features - placeholders)
// ============================================

/**
 * Get all users with optional filtering
 */
export async function getUsers(options?: {
  page?: number;
  limit?: number;
  role?: "student" | "admin";
  profileStatus?: "incomplete" | "active" | "suspended";
  search?: string;
}) {
  await requireAdmin();
  await dbConnect();

  const page = options?.page || 1;
  const limit = options?.limit || 20;
  const skip = (page - 1) * limit;

  const filter: any = {};

  if (options?.role) {
    filter.role = options.role;
  }

  if (options?.profileStatus) {
    filter.profileStatus = options.profileStatus;
  }

  if (options?.search) {
    filter.$or = [
      { name: { $regex: options.search, $options: "i" } },
      { email: { $regex: options.search, $options: "i" } },
      { college: { $regex: options.search, $options: "i" } },
    ];
  }

  try {
    const [users, total] = await Promise.all([
      User.find(filter)
        .select("-password")
        .sort({ joinedAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      User.countDocuments(filter),
    ]);

    return {
      success: true,
      data: JSON.parse(JSON.stringify(users)),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error: any) {
    console.error("Error fetching users:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Update user role or profile status
 */
export async function updateUser(id: string, data: UserUpdateDTO) {
  await requireAdmin();
  await dbConnect();

  const updateSchema = z.object({
    role: z.enum(["student", "admin"]).optional(),
    profileStatus: z.enum(["incomplete", "active", "suspended"]).optional(),
    name: z.string().optional(),
    phone: z.string().optional(),
    college: z.string().optional(),
    city: z.string().optional(),
    bio: z.string().max(500).optional(),
  });

  try {
    const validated = updateSchema.parse(data);

    const updated = await User.findByIdAndUpdate(
      id,
      { $set: validated },
      { new: true },
    ).select("-password");

    if (!updated) {
      return { success: false, error: "User not found" };
    }

    revalidatePath("/admin/users");
    return { success: true, data: JSON.parse(JSON.stringify(updated)) };
  } catch (error: any) {
    console.error("Error updating user:", error);
    return { success: false, error: error.message };
  }
}

// ============================================
// DASHBOARD STATISTICS
// ============================================

/**
 * Get dashboard statistics
 */
export async function getDashboardStats(): Promise<DashboardStats> {
  await requireAdmin();
  await dbConnect();

  try {
    const [
      totalRegistrations,
      pendingRegistrations,
      contactedRegistrations,
      totalReviews,
      pendingReviews,
      approvedReviews,
      rejectedReviews,
      totalUsers,
      activeUsers,
    ] = await Promise.all([
      Registration.countDocuments(),
      Registration.countDocuments({ contacted: false }),
      Registration.countDocuments({ contacted: true }),
      Review.countDocuments(),
      Review.countDocuments({ approved: false, rejectionReason: null }),
      Review.countDocuments({ approved: true }),
      Review.countDocuments({
        approved: false,
        rejectionReason: { $ne: null },
      }),
      User.countDocuments(),
      User.countDocuments({ profileStatus: "active" }),
    ]);

    // Aggregation for Registration History (Last 6 Months)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
    sixMonthsAgo.setDate(1); // Start of month

    const registrationAggregation = await Registration.aggregate([
      {
        $match: {
          createdAt: { $gte: sixMonthsAgo },
        },
      },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 },
      },
    ]);

    // Format aggregation for chart
    const registrationHistory = registrationAggregation.map((item) => {
      const date = new Date(item._id.year, item._id.month - 1);
      return {
        date: date.toLocaleString("default", {
          month: "short",
          year: "2-digit",
        }),
        count: item.count,
      };
    });

    // ensure all last 6 months are present (fill gaps with 0)
    for (let i = 0; i < 6; i++) {
      const d = new Date();
      d.setMonth(d.getMonth() - i);
      const label = d.toLocaleString("default", {
        month: "short",
        year: "2-digit",
      });
      if (!registrationHistory.find((r) => r.date === label)) {
        registrationHistory.push({ date: label, count: 0 });
      }
    }
    // Sort again after filling gaps
    registrationHistory.sort((a, b) => {
      const [monthA, yearA] = a.date.split(" ");
      const [monthB, yearB] = b.date.split(" ");
      return (
        new Date(`${monthA} 1, 20${yearA}`).getTime() -
        new Date(`${monthB} 1, 20${yearB}`).getTime()
      );
    });

    // Review Stats for Pie/Bar Chart
    const reviewStats = [
      { status: "Approved", count: approvedReviews, fill: "#ECA400" }, // Saffron/Gold
      { status: "Pending", count: pendingReviews, fill: "#E07A5F" }, // Terra Cotta/Saffron-Dark
      { status: "Rejected", count: rejectedReviews, fill: "#3D405B" }, // Charcoal
    ];

    return {
      totalRegistrations,
      pendingRegistrations,
      contactedRegistrations,
      totalReviews,
      pendingReviews,
      approvedReviews,
      rejectedReviews,
      totalUsers,
      activeUsers,
      registrationHistory,
      reviewStats,
    };
  } catch (error: any) {
    console.error("Error fetching dashboard stats:", error);
    throw error;
  }
}

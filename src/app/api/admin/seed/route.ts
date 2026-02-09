import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

/**
 * Development-only API to create default admin user
 * Protected by NODE_ENV check
 */
export async function POST() {
  // Only allow in development
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { error: "This endpoint is only available in development" },
      { status: 403 },
    );
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminName = process.env.ADMIN_NAME || "Admin";

  if (!adminEmail || !adminPassword) {
    return NextResponse.json(
      {
        error:
          "ADMIN_EMAIL and ADMIN_PASSWORD must be set in environment variables",
      },
      { status: 400 },
    );
  }

  try {
    await dbConnect();

    // Check if admin already exists
    const existingAdmin = await User.findOne({
      email: adminEmail.toLowerCase(),
    });

    if (existingAdmin) {
      return NextResponse.json({
        message: "Admin user already exists",
        email: adminEmail,
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(adminPassword, 12);

    // Create admin user
    const admin = await User.create({
      email: adminEmail.toLowerCase(),
      password: hashedPassword,
      name: adminName,
      role: "admin",
      profileStatus: "active",
      emailVerified: true,
    });

    return NextResponse.json({
      success: true,
      message: "Admin user created successfully",
      email: admin.email,
      name: admin.name,
    });
  } catch (error: any) {
    console.error("Error creating admin user:", error);
    return NextResponse.json(
      { error: "Failed to create admin user", details: error.message },
      { status: 500 },
    );
  }
}

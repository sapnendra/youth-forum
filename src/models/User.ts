import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Authentication fields
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    // For future Google OAuth integration
    googleId: {
      type: String,
      sparse: true,
      unique: true,
    },
    // Password only for admin users (not for students using Google Auth)
    password: {
      type: String,
      required: function (this: any) {
        return this.role === "admin";
      },
    },

    // Profile fields
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    college: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String, // URL to profile picture
    },
    bio: {
      type: String,
      maxlength: 500,
    },

    // Authorization
    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student",
      required: true,
      index: true,
    },
    profileStatus: {
      type: String,
      enum: ["incomplete", "active", "suspended"],
      default: "incomplete",
      index: true,
    },

    // Timestamps
    joinedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  },
);

// Indexes for common queries
userSchema.index({ role: 1, profileStatus: 1 });

// Don't return password in JSON responses
userSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);

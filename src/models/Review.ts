import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    // Review content (for guest submissions)
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    college: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    review: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },

    // Moderation fields
    approved: {
      type: Boolean,
      default: false,
      index: true,
    },
    moderatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    moderatedAt: {
      type: Date,
    },
    rejectionReason: {
      type: String,
      trim: true,
    },

    // Future: User ownership (nullable for guest reviews)
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
      index: true,
    },

    // Timestamps
    createdAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  {
    timestamps: true, // Adds updatedAt automatically
  },
);

// Indexes for common queries
reviewSchema.index({ approved: 1, createdAt: -1 });
reviewSchema.index({ college: 1, approved: 1 });

export default mongoose.models.Review || mongoose.model("Review", reviewSchema);

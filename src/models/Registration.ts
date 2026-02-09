import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
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
    index: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  college: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  currentCity: {
    type: String,
    required: true,
    trim: true,
  },
  permanentAddress: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    trim: true,
  },

  // Admin management fields
  contacted: {
    type: Boolean,
    default: false,
    index: true,
  },
  internalNote: {
    type: String,
    trim: true,
  },

  // Future: Link to user account
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
    index: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    index: true,
  },

  // Keep legacy status field for backward compatibility
  status: {
    type: String,
    enum: ["pending", "contacted", "accepted", "rejected"],
    default: "pending",
  },
});

export default mongoose.models.Registration ||
  mongoose.model("Registration", registrationSchema);

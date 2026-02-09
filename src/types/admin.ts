// Admin session and authentication types
export interface AdminSession {
  user: {
    id: string;
    email: string;
    name: string;
    role: "admin" | "student";
  };
}

// Registration types
export interface Registration {
  _id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  currentCity: string;
  permanentAddress: string;
  message?: string;
  contacted: boolean;
  internalNote?: string;
  userId?: string;
  createdAt: Date;
  status: "pending" | "contacted" | "accepted" | "rejected";
}

export interface RegistrationUpdateDTO {
  contacted?: boolean;
  internalNote?: string;
  status?: "pending" | "contacted" | "accepted" | "rejected";
}

// Review types
export interface Review {
  _id: string;
  name: string;
  email: string;
  college: string;
  rating: number;
  review: string;
  approved: boolean;
  moderatedBy?: string;
  moderatedAt?: Date;
  rejectionReason?: string;
  userId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReviewModerationDTO {
  approved: boolean;
  rejectionReason?: string;
  moderatedBy: string;
  moderatedAt: Date;
}

export interface ReviewSubmissionDTO {
  name: string;
  email: string;
  college: string;
  rating: number;
  review: string;
  userId?: string;
}

// User management types (for future use)
export interface User {
  _id: string;
  email: string;
  emailVerified: boolean;
  googleId?: string;
  name: string;
  phone?: string;
  college?: string;
  city?: string;
  avatar?: string;
  bio?: string;
  role: "student" | "admin";
  profileStatus: "incomplete" | "active" | "suspended";
  joinedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserUpdateDTO {
  role?: "student" | "admin";
  profileStatus?: "incomplete" | "active" | "suspended";
  name?: string;
  phone?: string;
  college?: string;
  city?: string;
  bio?: string;
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Dashboard statistics
export interface DashboardStats {
  totalRegistrations: number;
  pendingRegistrations: number;
  contactedRegistrations: number;
  totalReviews: number;
  pendingReviews: number;
  approvedReviews: number;
  rejectedReviews: number;
  totalUsers?: number;
  activeUsers?: number;
  registrationHistory: { date: string; count: number }[];
  reviewStats: { status: string; count: number; fill: string }[];
}

// Filter and search types
export interface RegistrationFilters {
  contacted?: boolean;
  status?: string;
  search?: string;
  college?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}

export interface ReviewFilters {
  approved?: boolean;
  rating?: number;
  college?: string;
  search?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}

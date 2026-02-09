"use client";

import { useState, useEffect } from "react";
import {
  getReviews,
  approveReview,
  rejectReview,
  deleteReview,
} from "../actions";
import type { Review } from "@/types/admin";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [tab, setTab] = useState<"pending" | "approved" | "all">("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadReviews();
  }, [page, tab, search]);

  const loadReviews = async () => {
    setLoading(true);
    const approved = tab === "all" ? undefined : tab === "approved";

    const result = await getReviews({
      page,
      limit: 20,
      approved,
      search: search || undefined,
    });

    if (result.success && result.data) {
      setReviews(result.data);
      setTotalPages(result.pagination?.totalPages || 1);
    }
    setLoading(false);
  };

  const handleApprove = async (id: string) => {
    const result = await approveReview(id);
    if (result.success) {
      loadReviews();
    }
  };

  const handleReject = async (id: string) => {
    const reason = prompt("Reason for rejection (optional):");
    const result = await rejectReview(id, reason || undefined);
    if (result.success) {
      loadReviews();
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this review?")) {
      const result = await deleteReview(id);
      if (result.success) {
        loadReviews();
      }
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-slate-300"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-serif font-bold text-charcoal mb-2">
          Reviews Moderation
        </h1>
        <p className="text-charcoal-light">Approve or reject student reviews</p>
      </div>

      {/* Tabs & Search */}
      <div className="bg-white rounded-xl shadow-sm border border-beige-200 p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex gap-2">
            {(["all", "approved", "pending"] as const).map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTab(t);
                  setPage(1);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  tab === t
                    ? "bg-saffron text-white shadow-md shadow-orange-200"
                    : "bg-beige-soft text-charcoal hover:bg-beige"
                }`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <input
          type="text"
          placeholder="Search by name, email, college, or review text..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all"
        />
      </div>

      {/* Reviews Grid */}
      {loading ? (
        <div className="flex items-center justify-center p-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-saffron"></div>
        </div>
      ) : reviews.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-beige-200 p-12 text-center">
          <p className="text-charcoal-light">No reviews found</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white rounded-xl shadow-sm border border-beige-200 p-6 hover:shadow-lg transition duration-200"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-charcoal">
                      {review.name}
                    </h3>
                    <p className="text-sm text-charcoal-light">
                      {review.email}
                    </p>
                    <p className="text-sm text-charcoal-light/80">
                      {review.college}
                    </p>
                  </div>
                  <div className="text-right">
                    {renderStars(review.rating)}
                    <p className="text-xs text-charcoal-light/60 mt-1">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Review Text */}
                <div className="mb-4">
                  <p className="text-charcoal text-sm leading-relaxed italic border-l-2 border-saffron/20 pl-3">
                    "{review.review}"
                  </p>
                </div>

                {/* Status Badge */}
                <div className="mb-4">
                  {review.approved ? (
                    <span className="px-3 py-1 text-xs font-medium bg-forest/10 text-forest rounded-full border border-forest/20">
                      ✓ Approved
                    </span>
                  ) : review.rejectionReason ? (
                    <div>
                      <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full border border-red-200">
                        ✗ Rejected
                      </span>
                      <p className="text-xs text-red-600 mt-2">
                        Reason: {review.rejectionReason}
                      </p>
                    </div>
                  ) : (
                    <span className="px-3 py-1 text-xs font-medium bg-saffron/10 text-saffron-dark rounded-full border border-saffron/20">
                      ⏳ Pending
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-beige-200">
                  {!review.approved && (
                    <button
                      onClick={() => handleApprove(review._id)}
                      className="flex-1 px-4 py-2 bg-forest hover:bg-forest-light text-white text-sm font-medium rounded-lg transition shadow-sm"
                    >
                      Approve
                    </button>
                  )}
                  {review.approved && (
                    <button
                      onClick={() => handleReject(review._id)}
                      className="flex-1 px-4 py-2 bg-saffron hover:bg-saffron-dark text-white text-sm font-medium rounded-lg transition shadow-sm"
                    >
                      Reject
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="px-4 py-2 text-red-500 hover:text-red-700 hover:bg-red-50 text-sm font-medium rounded-lg transition border border-transparent hover:border-red-100"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between bg-white rounded-xl shadow-sm border border-beige-200 px-6 py-4">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 text-sm font-medium text-charcoal bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Previous
              </button>
              <span className="text-sm text-charcoal-light font-medium">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 text-sm font-medium text-charcoal bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

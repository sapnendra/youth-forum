"use client";

import { useState } from "react";
import Button from "../ui/Button";

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    rating: 5,
    review: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        college: "",
        rating: 5,
        review: "",
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-beige-200">
      {success ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-forest"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
            Thank You!
          </h3>
          <p className="text-charcoal-light mb-6">
            Your review has been submitted successfully and is pending approval.
          </p>
          <Button
            variant="outline"
            onClick={() => setSuccess(false)}
            className="border-saffron text-saffron hover:bg-saffron hover:text-white"
          >
            Submit Another
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-beige-soft border border-beige-200 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-beige-soft border border-beige-200 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* College */}
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              College / Institution
            </label>
            <input
              type="text"
              required
              value={formData.college}
              onChange={(e) =>
                setFormData({ ...formData, college: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-beige-soft border border-beige-200 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all"
              placeholder="University Name"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <svg
                    className={`w-8 h-8 ${
                      star <= formData.rating
                        ? "text-saffron fill-current"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Review */}
          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              Your Experience
            </label>
            <textarea
              required
              rows={4}
              value={formData.review}
              onChange={(e) =>
                setFormData({ ...formData, review: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-beige-soft border border-beige-200 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all resize-none"
              placeholder="Share your thoughts about the program..."
            />
          </div>

          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
              {error}
            </div>
          )}

          <Button
            variant="primary"
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 text-lg font-bold shadow-lg shadow-saffron/20 hover:shadow-saffron/40 transition-all transform hover:-translate-y-1"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Submitting...
              </div>
            ) : (
              "Submit Review"
            )}
          </Button>
        </form>
      )}
    </div>
  );
}

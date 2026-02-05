"use client";

import { useState } from "react";
import { z } from "zod";
import Button from "../ui/Button";
import { registrationSchema } from "@/lib/validations/registration";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    currentCity: "",
    permanentAddress: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus("idle");

    try {
      // Validate form data
      registrationSchema.parse(formData);

      setIsSubmitting(true);

      // Submit to API
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        currentCity: "",
        permanentAddress: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Full Name <span className="text-saffron">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron ${
            errors.name ? "border-red-500" : "border-beige"
          }`}
          placeholder="Enter your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Email Address <span className="text-saffron">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron ${
            errors.email ? "border-red-500" : "border-beige"
          }`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Phone Number <span className="text-saffron">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron ${
            errors.phone ? "border-red-500" : "border-beige"
          }`}
          placeholder="10-digit mobile number"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
        )}
      </div>

      {/* College/University */}
      <div>
        <label
          htmlFor="college"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          College/University <span className="text-saffron">*</span>
        </label>
        <input
          type="text"
          id="college"
          name="college"
          value={formData.college}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron ${
            errors.college ? "border-red-500" : "border-beige"
          }`}
          placeholder="Name of your college or university"
        />
        {errors.college && (
          <p className="mt-1 text-sm text-red-500">{errors.college}</p>
        )}
      </div>

      {/* Current City */}
      <div>
        <label
          htmlFor="currentCity"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Current City <span className="text-saffron">*</span>
        </label>
        <input
          type="text"
          id="currentCity"
          name="currentCity"
          value={formData.currentCity}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron ${
            errors.currentCity ? "border-red-500" : "border-beige"
          }`}
          placeholder="City where you currently reside"
        />
        {errors.currentCity && (
          <p className="mt-1 text-sm text-red-500">{errors.currentCity}</p>
        )}
      </div>

      {/* Permanent Address */}
      <div>
        <label
          htmlFor="permanentAddress"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Permanent Address <span className="text-saffron">*</span>
        </label>
        <textarea
          id="permanentAddress"
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleChange}
          rows={3}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron resize-none ${
            errors.permanentAddress ? "border-red-500" : "border-beige"
          }`}
          placeholder="Enter your permanent/home address"
        />
        {errors.permanentAddress && (
          <p className="mt-1 text-sm text-red-500">{errors.permanentAddress}</p>
        )}
      </div>

      {/* Message (Optional) */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-charcoal mb-2"
        >
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron resize-none"
          placeholder="Any questions or additional information you'd like to share?"
        />
      </div>

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Registration"}
        </Button>
      </div>

      {/* Success/Error Messages */}
      {submitStatus === "success" && (
        <div className="bg-forest/10 border-2 border-forest text-forest p-4 rounded-lg text-center">
          <p className="font-semibold">Registration Submitted Successfully!</p>
          <p className="text-sm mt-1">
            We'll contact you soon with next steps.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border-2 border-red-500 text-red-700 p-4 rounded-lg text-center">
          <p className="font-semibold">Something went wrong!</p>
          <p className="text-sm mt-1">
            Please try again or contact us directly.
          </p>
        </div>
      )}
    </form>
  );
}

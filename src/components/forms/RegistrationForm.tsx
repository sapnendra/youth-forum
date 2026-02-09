"use client";

import { useState } from "react";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Check, Loader2 } from "lucide-react";
import { registrationSchema } from "@/lib/validations/registration";

// Define step schemas for partial validation
const stepSchemas = [
  registrationSchema.pick({ name: true, email: true, phone: true }), // Step 1
  registrationSchema.pick({ college: true, currentCity: true }), // Step 2
  registrationSchema.pick({ permanentAddress: true, message: true }), // Step 3
];

const steps = [
  { id: 1, name: "Personal Details" },
  { id: 2, name: "Academic Info" },
  { id: 3, name: "Address & Other" },
];

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);

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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep = (stepIndex: number) => {
    try {
      stepSchemas[stepIndex].parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setDirection(1);
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setSubmitStatus("idle");
    setIsSubmitting(true);

    try {
      // Final full validation just in case
      registrationSchema.parse(formData);

      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Registration failed");

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
      setCurrentStep(0);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  if (submitStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-2xl shadow-xl text-center border-2 border-forest/20"
      >
        <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-forest" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
          Registration Successful!
        </h3>
        <p className="text-charcoal-light mb-8">
          Thank you for showing interest in BACE. Our team will review your
          details and contact you shortly.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="text-saffron font-medium hover:underline"
        >
          Submit another response
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-beige-200">
      {/* Progress Bar */}
      <div className="bg-beige-soft p-6 border-b border-beige-200">
        <div className="flex items-center justify-between mb-2">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center relative z-10"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                  index <= currentStep
                    ? "bg-saffron text-white shadow-lg"
                    : "bg-beige-200 text-charcoal-light"
                }`}
              >
                {index < currentStep ? <Check size={16} /> : step.id}
              </div>
              <span
                className={`text-xs mt-2 font-medium ${index <= currentStep ? "text-saffron" : "text-charcoal-light/60"}`}
              >
                {step.name}
              </span>
            </div>
          ))}
          {/* Progress Line Background */}
          <div className="absolute top-[44px] left-0 w-full h-0.5 bg-beige-200 -z-0 hidden" />
        </div>

        {/* Simple Progress Line */}
        <div className="w-full bg-beige-200 h-1 rounded-full mt-4 overflow-hidden">
          <motion.div
            className="h-full bg-saffron"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="space-y-6 min-h-[320px]"
          >
            {/* STEP 1: Personal Details */}
            {currentStep === 0 && (
              <>
                <FloatingInput
                  id="name"
                  label="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />
                <FloatingInput
                  id="email"
                  type="email"
                  label="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
                <FloatingInput
                  id="phone"
                  type="tel"
                  label="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  required
                />
              </>
            )}

            {/* STEP 2: Academic Info */}
            {currentStep === 1 && (
              <>
                <FloatingInput
                  id="college"
                  label="College / University"
                  value={formData.college}
                  onChange={handleChange}
                  error={errors.college}
                  required
                />
                <FloatingInput
                  id="currentCity"
                  label="Current City"
                  value={formData.currentCity}
                  onChange={handleChange}
                  error={errors.currentCity}
                  required
                />
              </>
            )}

            {/* STEP 3: Address & Message */}
            {currentStep === 2 && (
              <>
                <FloatingTextarea
                  id="permanentAddress"
                  label="Permanent Address"
                  value={formData.permanentAddress}
                  onChange={handleChange}
                  error={errors.permanentAddress}
                  required
                />
                <FloatingTextarea
                  id="message"
                  label="Message (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                />
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mt-4">
            Something went wrong. Please check your inputs and try again.
          </div>
        )}

        <div className="flex justify-between mt-8 pt-6 border-t border-beige-100">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0 || isSubmitting}
            className={`flex items-center px-6 py-2.5 rounded-lg font-medium transition-colors ${
              currentStep === 0
                ? "text-gray-300 cursor-not-allowed"
                : "text-charcoal hover:bg-beige-soft"
            }`}
          >
            <ChevronLeft size={20} className="mr-1" /> Back
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center px-8 py-2.5 bg-charcoal text-white rounded-lg font-medium hover:bg-charcoal/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Next <ChevronRight size={20} className="ml-1" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center px-8 py-2.5 bg-saffron text-white rounded-lg font-medium hover:bg-saffron/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin mr-2" size={20} />
              ) : null}
              {isSubmitting ? "Submitting..." : "Complete Registration"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

// --- Reusable Styled Components ---

function FloatingInput({ id, label, error, required, ...props }: any) {
  return (
    <div className="relative">
      <input
        name={id}
        id={id}
        className={`peer w-full px-4 py-3.5 bg-white border-2 rounded-xl text-charcoal placeholder-transparent focus:outline-none transition-all ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
            : "border-beige-200 focus:border-saffron focus:ring-4 focus:ring-saffron/10"
        }`}
        placeholder={label}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 -top-2.5 bg-white px-1.5 text-xs font-semibold uppercase tracking-wider transition-all 
          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize
          peer-focus:-top-2.5 peer-focus:text-xs peer-focus:font-semibold peer-focus:uppercase peer-focus:text-saffron
          ${error ? "text-red-500 peer-focus:text-red-500" : "text-gray-500"}`}
      >
        {label} {required && <span className="text-saffron">*</span>}
      </label>
      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-medium ml-1">{error}</p>
      )}
    </div>
  );
}

function FloatingTextarea({ id, label, error, required, ...props }: any) {
  return (
    <div className="relative">
      <textarea
        name={id}
        id={id}
        rows={4}
        className={`peer w-full px-4 py-3.5 bg-white border-2 rounded-xl text-charcoal placeholder-transparent focus:outline-none transition-all resize-none ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
            : "border-beige-200 focus:border-saffron focus:ring-4 focus:ring-saffron/10"
        }`}
        placeholder={label}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 -top-2.5 bg-white px-1.5 text-xs font-semibold uppercase tracking-wider transition-all 
          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize
          peer-focus:-top-2.5 peer-focus:text-xs peer-focus:font-semibold peer-focus:uppercase peer-focus:text-saffron
          ${error ? "text-red-500 peer-focus:text-red-500" : "text-gray-500"}`}
      >
        {label} {required && <span className="text-saffron">*</span>}
      </label>
      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-medium ml-1">{error}</p>
      )}
    </div>
  );
}

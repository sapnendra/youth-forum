"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import Button from "../ui/Button";
import {
  BookOpen,
  Users,
  Sparkles,
  MoveRight,
  TrendingUp,
  Award,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden bg-[#FDFBF7] pt-20 lg:pt-0">
      {/* Background Pattern - Subtle Mandala/Geometric */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40L40 0H20L0 20M40 40V20L20 40"
                stroke="#3D405B"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative Gradient Blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-saffron/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* Full Width Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
          {/* Left Column: Text & CTA */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-saffron/20 shadow-sm mb-6 lg:mb-10 mx-auto lg:mx-0 w-fit"
            >
              <Sparkles className="w-4 h-4 text-saffron" />
              <span className="text-xs sm:text-sm font-medium text-charcoal/80 tracking-wide uppercase">
                Welcome to the Future of Character
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-charcoal mb-8 leading-[1.05] tracking-tight"
            >
              Where <span className="text-saffron italic">Education</span>
              <br />
              Meets Spirituality
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-2xl text-charcoal-light mb-10 lg:mb-14 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              BACE provides a sanctuary for holistic growth, merging academic
              excellence with the timeless wisdom of Vedic values.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-charcoal text-white hover:bg-charcoal/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all px-8 py-4 text-lg"
                onClick={() => {
                  document
                    .getElementById("what-is-bace")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore BACE
              </Button>
              <Link href="/admissions">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-charcoal/20 text-charcoal hover:bg-charcoal/5 group px-8 py-4 text-lg"
                >
                  Apply Now
                  <MoveRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Animated Stats Card + Compact Features */}
          <div className="relative flex flex-col items-center justify-center gap-8 mt-12 lg:mt-0 lg:items-end">
            {/* Main Stats Card - Hidden on Mobile to save space per typical hero patterns, visible desktop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl rounded-[2rem] p-8 w-full max-w-md rotate-2 hover:rotate-0 transition-transform duration-500 z-10"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-saffron/20 rounded-full blur-xl animate-pulse-slow" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/20 rounded-full blur-2xl" />

              <h3 className="text-2xl font-serif font-bold text-charcoal mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-saffron" />
                Impact at a Glance
              </h3>

              <div className="space-y-5">
                <StatRow
                  icon={<Users className="w-5 h-5 text-blue-500" />}
                  label="Active Students"
                  value={250}
                  suffix="+"
                  delay={0.5}
                />
                <div className="h-px bg-gray-100/80" />
                <StatRow
                  icon={<Award className="w-5 h-5 text-saffron" />}
                  label="Years of Legacy"
                  value={15}
                  suffix="+"
                  delay={0.7}
                />
                <div className="h-px bg-gray-100/80" />
                <StatRow
                  icon={<Star className="w-5 h-5 text-gold" />}
                  label="Student Satisfaction"
                  value={98}
                  suffix="%"
                  delay={0.9}
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-charcoal text-white px-4 py-2 rounded-xl shadow-xl text-sm font-medium transform translate-x-1/2 rotate-90 origin-bottom-right tracking-wide">
                Since 2009
              </div>
            </motion.div>

            {/* Feature Pillars - Compact List */}
            {/* Stacked below text on mobile, below stats on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 gap-4 w-full max-w-md"
            >
              <CompactFeatureCard
                icon={<BookOpen className="w-5 h-5 text-saffron" />}
                title="Vedic Wisdom"
                desc="Ancient philosophy for modern life."
              />
              <CompactFeatureCard
                icon={<Users className="w-5 h-5 text-forest" />}
                title="Community"
                desc="Brotherhood rooted in service."
              />
              <CompactFeatureCard
                icon={<Sparkles className="w-5 h-5 text-gold" />}
                title="Holistic Growth"
                desc="Character, competence & spirit."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatRow({
  icon,
  label,
  value,
  suffix = "",
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
  delay: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000,
  });
  const displayValue = useTransform(springValue, (current) =>
    Math.round(current),
  );

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        springValue.set(value);
      }, delay * 1000);
    }
  }, [inView, value, delay, springValue]);

  return (
    <div className="flex items-center justify-between group py-1">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors shadow-sm">
          {icon}
        </div>
        <span className="font-medium text-base text-charcoal/80">{label}</span>
      </div>
      <div className="flex items-baseline">
        <motion.span
          ref={ref}
          className="text-2xl font-bold text-charcoal font-serif"
        >
          {displayValue}
        </motion.span>
        <span className="text-xl text-saffron font-bold ml-1">{suffix}</span>
      </div>
    </div>
  );
}

function CompactFeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-beige-200/60 hover:border-saffron/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group cursor-default">
      <div className="w-12 h-12 min-w-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-charcoal group-hover:text-saffron border border-gray-50">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-serif font-bold text-charcoal group-hover:text-saffron transition-colors mb-0.5">
          {title}
        </h3>
        <p className="text-charcoal-light text-sm font-light leading-snug">
          {desc}
        </p>
      </div>
    </div>
  );
}

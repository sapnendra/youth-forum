"use client";

import {
  motion,
  useSpring,
  useTransform,
  useInView,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import Button from "../ui/Button";
import Container from "../ui/Container";
import {
  BookOpen,
  Users,
  Sparkles,
  MoveRight,
  TrendingUp,
  Award,
  Star,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden bg-[#FDFBF7] pt-20 lg:pt-0">
      {/* Background Pattern - Subtle Mandala/Geometric */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none mix-blend-multiply">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30 60L60 30L30 0L0 30L30 60Z"
                stroke="#3D405B"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative Gradient Blurs - Refined & More Subtle */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-saffron/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* Main Container - Slightly wider than standard */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 max-w-[1540px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left Column: Text & CTA (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-saffron/20 shadow-sm mb-8 mx-auto lg:mx-0 w-fit backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-saffron" />
              <span className="text-xs font-semibold text-charcoal/80 tracking-widest uppercase">
                Est. 2009 • Vedic Wisdom
              </span>
            </motion.div>

            {/* Main Headline - Pixel Perfect Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="font-serif font-medium text-charcoal mb-8 leading-[1.05] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]"
            >
              Where{" "}
              <span className="text-saffron italic relative">
                Education
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-saffron/20"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>
              <br />
              Meets{" "}
              <span className="font-semibold text-charcoal">Spirituality</span>
            </motion.h1>

            {/* Subheadline - Improved readability and line height */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-charcoal-light/90 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              BACE provides a sanctuary for holistic growth, merging academic
              excellence with the timeless wisdom of Vedic values to forge
              character, competence, and community.
            </motion.p>

            {/* CTA Buttons - Consistent styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-charcoal text-white hover:bg-charcoal/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all px-8 h-14 text-base rounded-full"
                onClick={() => {
                  document
                    .getElementById("what-is-bace")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Start Your Journey
              </Button>
              <Link href="/admissions">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-charcoal/20 text-charcoal group px-8 h-14 text-base rounded-full backdrop-blur-sm"
                >
                  Apply Now
                  <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Animated Stats Card + Compact Features (5 Columns) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center gap-6 mt-12 lg:mt-0 lg:items-end">
            {/* Main Stats Card - Glassmorphism Refined */}
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative hidden lg:block bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] p-8 w-full max-w-sm hover:scale-[1.02] transition-transform duration-500 z-10"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-saffron/10 rounded-full blur-2xl animate-pulse-slow pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl font-serif font-bold text-charcoal mb-6 flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-saffron" />
                Impact at a Glance
              </h3>

              <div className="space-y-6">
                <StatRow
                  icon={<Users className="w-5 h-5 text-blue-500" />}
                  label="Active Students"
                  value={250}
                  suffix="+"
                  delay={0.6}
                />
                <div className="h-px bg-charcoal/5" />
                <StatRow
                  icon={<Award className="w-5 h-5 text-saffron" />}
                  label="Years of Legacy"
                  value={15}
                  suffix="+"
                  delay={0.8}
                />
                <div className="h-px bg-charcoal/5" />
                <StatRow
                  icon={<Star className="w-5 h-5 text-gold" />}
                  label="Student Satisfaction"
                  value={98}
                  suffix="%"
                  delay={1.0}
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-charcoal text-white px-3 py-1.5 rounded-lg shadow-xl text-xs font-medium transform translate-x-1/2 rotate-90 origin-bottom-right tracking-wide">
                Since 2009
              </div>
            </motion.div>

            {/* Feature Pillars - Compact List - Staggered Animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.7,
                  },
                },
              }}
              className="grid grid-cols-1 gap-3 w-full max-w-sm"
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
    stiffness: 40,
    damping: 25,
    duration: 2500,
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
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center group-hover:bg-gray-50 transition-colors shadow-sm text-charcoal/80">
          {icon}
        </div>
        <span className="font-medium text-base text-charcoal/80 font-sans">
          {label}
        </span>
      </div>
      <div className="flex items-baseline">
        <motion.span
          ref={ref}
          className="text-2xl font-bold text-charcoal font-serif"
        >
          {displayValue}
        </motion.span>
        <span className="text-lg text-saffron font-bold ml-1">{suffix}</span>
      </div>
    </div>
  );
}

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

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
    <motion.div
      variants={itemVariants}
      className="bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-beige-200/50 hover:border-saffron/20 hover:bg-white/60 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 group cursor-default"
    >
      <div className="w-10 h-10 min-w-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform text-charcoal group-hover:text-saffron border border-gray-50/50">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-serif font-bold text-charcoal group-hover:text-saffron transition-colors mb-0.5">
          {title}
        </h3>
        <p className="text-charcoal-light text-xs font-light leading-snug">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

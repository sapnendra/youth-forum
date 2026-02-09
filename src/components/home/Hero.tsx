"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  Variants,
} from "framer-motion";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Spotlight gradient
  const background = useMotionTemplate`radial-gradient(
    600px circle at ${mouseX}px ${mouseY}px,
    rgba(200, 98, 31, 0.15),
    transparent 80%
  )`;

  // Text Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Graph data - showing student growth over time (no dates)
  const graphData = [
    { label: "Jan", value: 15 },
    { label: "Feb", value: 28 },
    { label: "Mar", value: 42 },
    { label: "Apr", value: 65 },
    { label: "May", value: 89 },
    { label: "Jun", value: 120 },
    { label: "Jul", value: 156 },
    { label: "Aug", value: 198 },
  ];

  const maxValue = Math.max(...graphData.map((d) => d.value));

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#1a1a1a] group"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background }}
      />

      {/* Base Gradients (Static) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-saffron/10 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-forest/10 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse-slow delay-1000" />
      </div>

      {/* Floating Particles (Background) */}
      <Particles />

      {/* Content - Split Screen Layout */}
      <Container className="relative z-20 py-8 sm:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block py-2 px-4 rounded-full bg-saffron/10 border border-saffron/20 text-saffron-light text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Welcome to the Future of Character
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-white tracking-tight"
            >
              Where{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">
                Education
              </span>{" "}
              Meets Spirituality
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              BACE a vedic hostel, provides a sanctuary for holistic growth,
              merging academic excellence with the timeless wisdom of Vedic
              values. Discover clarity, purpose, and community.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="secondary"
                size="lg"
                className="relative overflow-hidden group/btn shadow-[0_0_20px_-5px_rgba(200,98,31,0.5)] hover:shadow-[0_0_30px_-5px_rgba(200,98,31,0.7)] transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  document
                    .getElementById("what-is-bace")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="relative z-10">Explore BACE</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              </Button>

              <Link href="/admissions">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Growth Graph */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Graph Container */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                {/* Graph Title */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Student Growth
                  </h3>
                  <p className="text-sm text-gray-400">
                    Getting guidance & clarity
                  </p>
                </div>

                {/* Graph SVG */}
                <div className="relative h-64">
                  <svg
                    viewBox="0 0 400 200"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    {/* Grid Lines */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={i * 50}
                        x2="400"
                        y2={i * 50}
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Gradient Fill */}
                    <defs>
                      <linearGradient
                        id="graphGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="rgba(200, 98, 31, 0.8)" />
                        <stop
                          offset="100%"
                          stopColor="rgba(200, 98, 31, 0.05)"
                        />
                      </linearGradient>
                    </defs>

                    {/* Area Path */}
                    <motion.path
                      d={`M 0 200 ${graphData
                        .map(
                          (d, i) =>
                            `L ${(i / (graphData.length - 1)) * 400} ${
                              200 - (d.value / maxValue) * 180
                            }`,
                        )
                        .join(" ")} L 400 200 Z`}
                      fill="url(#graphGradient)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 1 }}
                    />

                    {/* Line Path */}
                    <motion.path
                      d={`M 0 ${200 - (graphData[0].value / maxValue) * 180} ${graphData
                        .slice(1)
                        .map(
                          (d, i) =>
                            `L ${((i + 1) / (graphData.length - 1)) * 400} ${
                              200 - (d.value / maxValue) * 180
                            }`,
                        )
                        .join(" ")}`}
                      stroke="rgba(200, 98, 31, 1)"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1, duration: 2, ease: "easeOut" }}
                    />

                    {/* Data Points */}
                    {graphData.map((d, i) => (
                      <motion.g
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
                      >
                        <circle
                          cx={(i / (graphData.length - 1)) * 400}
                          cy={200 - (d.value / maxValue) * 180}
                          r="5"
                          fill="rgba(200, 98, 31, 1)"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </motion.g>
                    ))}
                  </svg>
                </div>

                {/* Stats Below Graph */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2, duration: 0.5 }}
                      className="text-2xl font-bold text-saffron"
                    >
                      {graphData[graphData.length - 1].value}+
                    </motion.div>
                    <div className="text-xs text-gray-400 mt-1">Students</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.1, duration: 0.5 }}
                      className="text-2xl font-bold text-gold"
                    >
                      {Math.round(
                        ((graphData[graphData.length - 1].value -
                          graphData[0].value) /
                          graphData[0].value) *
                          100,
                      )}
                      %
                    </motion.div>
                    <div className="text-xs text-gray-400 mt-1">Growth</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.2, duration: 0.5 }}
                      className="text-2xl font-bold text-forest"
                    >
                      100%
                    </motion.div>
                    <div className="text-xs text-gray-400 mt-1">Guidance</div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-saffron/30 to-gold/30 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-forest/30 to-teal-500/30 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/50 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0 overflow-hidden">
            <div className="w-full h-1/2 bg-white animate-drop" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Simple Particles Component
function Particles() {
  // Generate random particles
  const particles = [...Array(20)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 30 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 0.5,
  }));

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/10"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

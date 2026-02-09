"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  Variants,
} from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Lightbulb,
  Users,
  Flower2,
  Sparkles,
} from "lucide-react";
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

      {/* Floating 3D Icons (Hidden on Mobile) */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Top Left - Book (Wisdom) */}
        <FloatingElement delay={0} x="10%" y="20%" rotate={-10}>
          <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl pointer-events-auto">
            <BookOpen className="w-8 h-8 text-saffron opacity-80" />
          </div>
        </FloatingElement>

        {/* Top Right - Graduation Cap (Education) */}
        <FloatingElement delay={1} x="85%" y="15%" rotate={15}>
          <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl pointer-events-auto">
            <GraduationCap className="w-10 h-10 text-gold opacity-80" />
          </div>
        </FloatingElement>

        {/* Middle Left - Users (Community) */}
        <FloatingElement delay={2} x="5%" y="50%" rotate={5}>
          <div className="bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-xl pointer-events-auto">
            <Users className="w-6 h-6 text-forest opacity-70" />
          </div>
        </FloatingElement>

        {/* Middle Right - Flower (Culture) */}
        <FloatingElement delay={3} x="90%" y="60%" rotate={-5}>
          <div className="bg-white/5 backdrop-blur-md p-5 rounded-full border border-white/10 shadow-xl pointer-events-auto">
            <Flower2 className="w-8 h-8 text-saffron/80" />
          </div>
        </FloatingElement>

        {/* Bottom Left - Lightbulb (Clarity) */}
        <FloatingElement delay={1.5} x="15%" y="75%" rotate={-15}>
          <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl pointer-events-auto">
            <Lightbulb className="w-8 h-8 text-gold opacity-90" />
          </div>
        </FloatingElement>

        {/* Bottom Right - Sparkles (Character) */}
        <FloatingElement delay={2.5} x="80%" y="80%" rotate={10}>
          <div className="bg-white/5 backdrop-blur-md p-3 rounded-lg border border-white/10 shadow-xl pointer-events-auto">
            <Sparkles className="w-6 h-6 text-white opacity-60" />
          </div>
        </FloatingElement>
      </div>

      {/* Content - Centered & Interactive */}
      <Container className="relative z-20 py-8 sm:py-0 perspective-1000">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-4"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block py-2 px-3 sm:py-1  rounded-full bg-saffron/10 border border-saffron/20 text-saffron-light text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Welcome to the Future of Character
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-8 text-white tracking-tight"
          >
            Where{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">
              Education
            </span>{" "}
            Meets Spirituality
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            BACE a vedic hostel, provides a sanctuary for holistic growth, merging academic
            excellence with the timeless wisdom of Vedic values. Discover
            clarity, purpose, and community.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center"
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

// Floating Element Component with Local Magnetic Effect
function FloatingElement({
  children,
  delay,
  x,
  y,
  rotate,
}: {
  children: React.ReactNode;
  delay: number;
  x: string;
  y: string;
  rotate: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      ref.current?.getBoundingClientRect() || {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      };

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // User requested 30px, but we use 60px as the effective "stick" zone for better UX
    // If within range, snap to cursor (stick). Otherwise, float back.
    if (dist < 200) {
      setPosition({ x: dx, y: dy });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + 0.5, duration: 1 }}
      className="absolute p-12" // Large padding creates the "near" interaction zone
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }} // Center the hit area
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
          rotate: [rotate, rotate - 5, rotate + 5, rotate],
        }}
        transition={{
          x: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
          y: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          },
        }}
      >
        <motion.div
          animate={{ y: [0, -15, 0] }} // Bobbing animation
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }}
        >
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
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

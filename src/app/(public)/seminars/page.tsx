"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  Calendar,
  ArrowRight,
  Users,
  Brain,
  Sparkles,
  Globe2,
  Heart,
  GraduationCap,
} from "lucide-react";
import Container from "@/components/ui/Container";

// --- Types ---
type Category =
  | "All"
  | "Leadership"
  | "Philosophy"
  | "Character Building"
  | "Student Development"
  | "Culture"
  | "Wellness";

interface Seminar {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  category: Category;
  categoryColor: string;
  icon: React.ElementType;
}

// --- Data ---
const CATEGORIES: Category[] = [
  "All",
  "Leadership",
  "Philosophy",
  "Character Building",
  "Student Development",
  "Culture",
  "Wellness",
];

const SEMINARS: Seminar[] = [
  {
    id: 1,
    title: "Youth Leadership Summit 2024",
    date: "March 15, 2024",
    location: "Main Auditorium",
    description:
      "Empowering young leaders with character-based leadership principles.",
    category: "Leadership",
    categoryColor: "text-blue-600 bg-blue-50 border-blue-100",
    icon: Users,
  },
  {
    id: 2,
    title: "Vedic Philosophy Workshop",
    date: "April 8, 2024",
    location: "Library Hall",
    description: "Deep dive into timeless Vedic principles for modern life.",
    category: "Philosophy",
    categoryColor: "text-saffron-dark bg-saffron/10 border-saffron/20",
    icon: Brain,
  },
  {
    id: 3,
    title: "Character Development Bootcamp",
    date: "May 20, 2024",
    location: "Training Center",
    description:
      "Intensive program focused on building strong moral foundations.",
    category: "Character Building",
    categoryColor: "text-forest bg-forest/10 border-forest/20",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Student Empowerment Event",
    date: "June 12, 2024",
    location: "Community Hall",
    description: "Practical tools for academic excellence and personal growth.",
    category: "Student Development",
    categoryColor: "text-purple-600 bg-purple-50 border-purple-100",
    icon: GraduationCap,
  },
  {
    id: 5,
    title: "Cultural Exchange Program",
    date: "July 5, 2024",
    location: "Outdoor Pavilion",
    description: "Experience and share diverse cultural traditions and wisdom.",
    category: "Culture",
    categoryColor: "text-amber-600 bg-amber-50 border-amber-100",
    icon: Globe2,
  },
  {
    id: 6,
    title: "Mindfulness Retreat",
    date: "August 18, 2024",
    location: "Meditation Garden",
    description: "Learn practical meditation techniques for stress management.",
    category: "Wellness",
    categoryColor: "text-teal-600 bg-teal-50 border-teal-100",
    icon: Heart,
  },
];

// --- Components ---

function SeminarCard({ seminar }: { seminar: Seminar }) {
  const Icon = seminar.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group/card h-full"
    >
      <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-saffron/5 transition-all duration-300 border border-gray-200 hover:border-saffron/30 flex flex-col">
        {/* Card Header / Decorative Area */}
        <div className="h-2 bg-gradient-to-r from-saffron to-saffron-light opacity-80" />

        <div className="p-8 flex-grow flex flex-col relative">
          {/* Category Badge */}
          <div className="mb-6 flex justify-between items-start">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold border ${seminar.categoryColor}`}
            >
              {seminar.category}
            </span>
            <div className="p-2 rounded-xl bg-gray-50 group-hover/card:bg-saffron/10 transition-colors duration-300">
              <Icon className="w-5 h-5 text-gray-400 group-hover/card:text-saffron transition-colors" />
            </div>
          </div>

          <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover/card:text-saffron transition-colors duration-300 leading-tight">
            {seminar.title}
          </h3>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 font-medium">
            <Calendar className="w-4 h-4 text-saffron" />
            <span>{seminar.date}</span>
          </div>

          <p className="text-charcoal-light text-sm leading-relaxed mb-6 flex-grow">
            {seminar.description}
          </p>

          <Link href="/admissions" className="w-full mt-auto block">
            <button className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-100 text-charcoal font-semibold flex items-center justify-center gap-2 group-hover/card:bg-saffron group-hover/card:border-saffron group-hover/card:text-white transition-all duration-300">
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4 group-hover/card:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function SeminarsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  // Mouse position for soft spotlight (Page Level)
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

  const filteredSeminars =
    activeCategory === "All"
      ? SEMINARS
      : SEMINARS.filter((s) => s.category === activeCategory);

  return (
    <main
      className="min-h-screen bg-[#F9F5F0] pt-24 pb-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Texture/Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/pattern.svg')] bg-repeat" />

      {/* Subtle Spotlight */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(236, 164, 0, 0.05), transparent 80%)`,
        }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-saffron/10 border border-saffron/20 text-saffron-dark text-xs font-bold tracking-wider uppercase mb-5">
              Upcoming Events
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6 tracking-tight">
              Seminars & <span className="text-saffron-dark">Workshops</span>
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed">
              Join transformative sessions designed to nurture your character
              and connect you with a purpose-driven community.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12 overflow-x-auto pb-4 scrollbar-hide justify-center">
          {CATEGORIES.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 + 0.3 }}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border whitespace-nowrap
                ${
                  activeCategory === cat
                    ? "bg-charcoal text-white border-charcoal shadow-lg"
                    : "bg-white text-gray-500 border-gray-200 hover:border-saffron hover:text-saffron-dark"
                }
              `}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSeminars.map((seminar) => (
              <SeminarCard key={seminar.id} seminar={seminar} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSeminars.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-300"
          >
            <div className="inline-block p-4 rounded-full bg-gray-50 mb-4">
              <Sparkles className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-500 text-lg">
              No seminars found in this category.
            </p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-saffron font-bold hover:underline"
            >
              View all events
            </button>
          </motion.div>
        )}

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-charcoal-light" />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />

          <div className="relative z-10 p-12 text-center text-white">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Don't Miss Out on the Next Big Event
            </h2>
            <p className="opacity-80 max-w-2xl mx-auto mb-8 text-lg">
              Spaces are often limited. Register early to secure your spot and
              start your journey of growth today.
            </p>
            <Link href="/admissions">
              <button className="px-8 py-3.5 bg-saffron text-white rounded-xl font-bold shadow-lg hover:bg-saffron-dark hover:scale-105 transition-all duration-300 border border-saffron-light/20">
                Register for Priority Access
              </button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}

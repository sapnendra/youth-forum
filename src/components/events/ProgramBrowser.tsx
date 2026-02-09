"use client";

import { useState } from "react";
import {
  BookOpen,
  Calendar,
  Users,
  Brain,
  Sparkles,
  Target,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "All" | "Courses" | "Workshops" | "Retreats";

const programs = [
  {
    id: 1,
    category: "Courses",
    title: "Discover Yourself (DYS)",
    duration: "6 Sessions",
    audience: "Beginners",
    description:
      "A logical and scientific presentation of Vedic wisdom to answer life's essential questions about identity, purpose, and happiness.",
    topics: [
      "Am I just a body?",
      "The Science of Soul",
      "Does God exist?",
      "Law of Karma",
    ],
    icon: <Brain className="w-6 h-6" />,
    color: "bg-saffron/10 text-saffron border-saffron/20",
  },
  {
    id: 2,
    category: "Courses",
    title: "Bhagavad Gita Wisdom",
    duration: "Semester-long",
    audience: "Advanced",
    description:
      "Deep dive into the timeless wisdom of the Gita, exploring practical applications for modern student life and leadership.",
    topics: [
      "Mind Control Techniques",
      "Art of Decision Making",
      "Yoga of Dejection",
      "Modes of Material Nature",
    ],
    icon: <BookOpen className="w-6 h-6" />,
    color: "bg-charcoal/10 text-charcoal border-charcoal/20",
  },
  {
    id: 3,
    category: "Workshops",
    title: "Mind Management",
    duration: "2 Hours",
    audience: "Exam Students",
    description:
      "Practical tools to conquer stress, improve concentration, and handle academic pressure with a calm mind.",
    topics: ["Focus Enhancement", "Stress Analysis", "Meditation Basics"],
    icon: <Target className="w-6 h-6" />,
    color: "bg-forest/10 text-forest border-forest/20",
  },
  {
    id: 4,
    category: "Workshops",
    title: "Habits of Highly Effective Youth",
    duration: "Half Day",
    audience: "All Students",
    description:
      "Learn how to build character, break bad habits, and develop a lifestyle of success and integrity.",
    topics: ["Power of Habits", "Time Management", "Digital Detox"],
    icon: <CheckCircle2 className="w-6 h-6" />,
    color: "bg-terra-cotta/10 text-terra-cotta border-terra-cotta/20",
  },
  {
    id: 5,
    category: "Retreats",
    title: "Spiritual Warrior Camp",
    duration: "2 Days",
    audience: "Members",
    description:
      "An immersive weekend getaway focused on adventure, spirituality, and bonding with like-minded youth.",
    topics: ["Trekking", "Kirtan Sessions", "Prasadam Feasts", "Team Building"],
    icon: <Sparkles className="w-6 h-6" />,
    color: "bg-gold/10 text-gold-dark border-gold/20",
  },
  {
    id: 6,
    category: "Retreats",
    title: "Vrindavan Yatra",
    duration: "5 Days",
    audience: "Open to All",
    description:
      "A transformative journey to the holy land of Vrindavan, experiencing deep culture and spiritual history.",
    topics: ["Temple Visits", "Historical Tours", "Cultural Immersion"],
    icon: <Users className="w-6 h-6" />,
    color: "bg-saffron/10 text-saffron border-saffron/20",
  },
];

export default function ProgramBrowser() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredPrograms =
    activeCategory === "All"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4">
        {["All", "Courses", "Workshops", "Retreats"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as Category)}
            className={cn(
              "px-8 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base border-2",
              activeCategory === cat
                ? "bg-saffron border-saffron text-white shadow-lg scale-105"
                : "bg-white border-beige-300 text-charcoal-light hover:border-saffron/50 hover:text-saffron",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="group bg-white rounded-2xl overflow-hidden border border-beige-200 hover:border-saffron/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center border",
                    program.color,
                  )}
                >
                  {program.icon}
                </div>
                <span className="px-3 py-1 bg-beige-soft text-charcoal-light text-xs font-bold uppercase tracking-wider rounded-full">
                  {program.category}
                </span>
              </div>

              <h3 className="text-xl font-serif font-bold text-charcoal mb-2 group-hover:text-saffron transition-colors">
                {program.title}
              </h3>
              <p className="text-charcoal-light text-sm mb-6 leading-relaxed">
                {program.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-charcoal">
                  <Clock className="w-4 h-4 mr-2 text-saffron" />
                  <span className="font-semibold mr-1">Duration:</span>
                  {program.duration}
                </div>
                <div className="flex items-center text-sm text-charcoal">
                  <Users className="w-4 h-4 mr-2 text-forest" />
                  <span className="font-semibold mr-1">Audience:</span>
                  {program.audience}
                </div>
              </div>

              <div className="bg-beige-soft/50 rounded-lg p-4">
                <h4 className="text-xs font-bold text-charcoal uppercase tracking-widest mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {program.topics.map((topic, i) => (
                    <li
                      key={i}
                      className="text-sm text-charcoal-light flex items-start"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-1.5 mr-2 shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 border-t border-beige-100 bg-beige-soft/30">
              <button className="w-full py-2.5 rounded-lg bg-white border border-beige-300 text-charcoal font-medium hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

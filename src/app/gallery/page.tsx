"use client";

import { useState } from "react";
import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

// Note: In production, images would be stored in /public/images/gallery
// For now, using placeholder colors to demonstrate the layout
const galleryImages = [
  {
    id: 1,
    title: "Morning Meditation",
    category: "daily-life",
    color: "bg-saffron/20",
  },
  {
    id: 2,
    title: "Group Study Session",
    category: "academics",
    color: "bg-forest/20",
  },
  { id: 3, title: "Cultural Program", category: "events", color: "bg-gold/20" },
  { id: 4, title: "Community Meal", category: "daily-life", color: "bg-beige" },
  {
    id: 5,
    title: "Discussion Circle",
    category: "learning",
    color: "bg-saffron-light/20",
  },
  {
    id: 6,
    title: "Sports Activity",
    category: "recreation",
    color: "bg-forest-light/20",
  },
  {
    id: 7,
    title: "Workshop Session",
    category: "learning",
    color: "bg-charcoal/10",
  },
  {
    id: 8,
    title: "Festival Celebration",
    category: "events",
    color: "bg-saffron/30",
  },
  {
    id: 9,
    title: "Hostel Common Area",
    category: "facilities",
    color: "bg-beige-soft",
  },
  {
    id: 10,
    title: "Mentorship Session",
    category: "learning",
    color: "bg-gold/30",
  },
  {
    id: 11,
    title: "Evening Kirtan",
    category: "daily-life",
    color: "bg-saffron-muted/30",
  },
  {
    id: 12,
    title: "Study Room",
    category: "facilities",
    color: "bg-forest/10",
  },
];

const categories = [
  { value: "all", label: "All" },
  { value: "daily-life", label: "Daily Life" },
  { value: "academics", label: "Academics" },
  { value: "learning", label: "Learning" },
  { value: "events", label: "Events" },
  { value: "facilities", label: "Facilities" },
  { value: "recreation", label: "Recreation" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <main className="pt-20">
        <Section background="white">
          <Container>
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
                Gallery
              </h1>
              <p className="text-xl text-charcoal-light max-w-3xl mx-auto">
                Experience BACE through moments of learning, growth, and
                community
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === cat.value
                      ? "bg-saffron text-white shadow-md"
                      : "bg-beige text-charcoal hover:bg-beige-soft"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="break-inside-avoid group cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    {/* Placeholder for image - in production, use next/image */}
                    <div
                      className={`${image.color} aspect-auto ${
                        index % 3 === 0
                          ? "h-80"
                          : index % 3 === 1
                            ? "h-64"
                            : "h-72"
                      } flex items-center justify-center`}
                    >
                      <div className="text-center p-6">
                        <div className="text-4xl mb-3">📸</div>
                        <h3 className="font-semibold text-charcoal text-lg">
                          {image.title}
                        </h3>
                        <p className="text-sm text-charcoal-light mt-1 capitalize">
                          {image.category.replace("-", " ")}
                        </p>
                      </div>
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        View Image
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note about images */}
            <div className="mt-12 text-center bg-beige p-6 rounded-lg">
              <p className="text-charcoal-light text-sm">
                <strong>Note:</strong> Gallery images are placeholder
                demonstrations. In production, actual photos from BACE events,
                facilities, and daily life would be displayed here.
              </p>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}

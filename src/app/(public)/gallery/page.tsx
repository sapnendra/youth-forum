"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Camera, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { galleryItems } from "@/data/gallery";
import GalleryModal from "@/components/gallery/GalleryModal";

const categories = [
  { value: "all", label: "All Moments" },
  { value: "daily-life", label: "Daily Life" },
  { value: "academics", label: "Academics" },
  { value: "events", label: "Events" },
  { value: "recreation", label: "Recreation" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  // Filter items based on category
  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  // Get visible items
  const visibleItems = filteredItems.slice(0, visibleCount);

  // Check if there are more items to load
  const hasMore = visibleItems.length < filteredItems.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate network delay for better UX
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoading(false);
    }, 800);
  };

  const handleCategoryChange = (val: string) => {
    setActiveCategory(val);
    setVisibleCount(6);
  };

  const openModal = (item: (typeof galleryItems)[0]) => {
    // Find the index of the item in the global galleryItems array
    const index = galleryItems.findIndex((g) => g.id === item.id);
    if (index !== -1) {
      setSelectedItemIndex(index);
      setIsModalOpen(true);
    }
  };

  return (
    <main className="pt-20 bg-beige-soft">
      {/* Hero Section */}
      <Section className="bg-charcoal text-white relative overflow-hidden py-24">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-saffron/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
        <Container className="relative z-10 text-center">
          <span className="text-saffron font-bold tracking-widest uppercase text-sm mb-4 block">
            Life at BACE
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Capturing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">
              Moments
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A glimpse into the vibrant community, spiritual growth, and academic
            journey of our students.
          </p>
        </Container>
      </Section>

      {/* Gallery Section */}
      <Section className="py-24 relative">
        <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-charcoal to-beige-soft -z-10 opacity-10" />
        <Container>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 border-2 ${
                  activeCategory === cat.value
                    ? "bg-saffron border-saffron text-white shadow-lg transform scale-105"
                    : "bg-white border-beige-200 text-charcoal-light hover:border-saffron/50 hover:text-saffron"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {visibleItems.map((item, index) => (
              <div
                key={item.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 bg-gradient-to-br ${item.gradient}`}
                >
                  {/* Aspect Ratio Container */}
                  <div
                    className={`${item.size === "tall" ? "aspect-[3/4]" : "aspect-square"} flex flex-col items-center justify-center p-8 text-center relative z-10 transition-opacity duration-300 group-hover:opacity-0`}
                  >
                    {/* Icon Circle */}
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 font-serif tracking-wide opacity-90 transition-opacity">
                      {item.title}
                    </h3>

                    <span className="inline-block px-3 py-1 bg-black/20 text-white/80 text-xs rounded-full uppercase tracking-wider font-semibold">
                      {item.category.replace("-", " ")}
                    </span>
                  </div>

                  {/* Decorative Pattern overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-white/90 text-charcoal px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                      <Camera className="w-4 h-4" />
                      View Photo
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-16 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={handleLoadMore}
                disabled={isLoading}
                className="min-w-[200px] border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading Moments...
                  </>
                ) : (
                  "Load More Memories"
                )}
              </Button>
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-charcoal-light italic">
              * Actual event photos will be updated regularly by the student
              media team.
            </p>
          </div>
        </Container>
      </Section>

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        items={galleryItems}
        initialIndex={selectedItemIndex}
      />
    </main>
  );
}

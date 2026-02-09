"use client";

import { useEffect, useCallback, useState } from "react";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { galleryItems } from "@/data/gallery";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: typeof galleryItems;
  initialIndex: number;
}

export default function GalleryModal({
  isOpen,
  onClose,
  items,
  initialIndex,
}: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sync state when initialIndex changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setCurrentImageIndex(0); // Reset to first image of the selected item
    }
  }, [isOpen, initialIndex]);

  const currentItem = items[currentIndex];
  // Calculate total images across all items to enable global navigation if needed.
  // For now, let's keep it simple: Navigate between items, and then within items?
  // User request: "view all images related to that"
  // So the slider should primarily navigate through the *current item's* images.

  const currentImages = currentItem?.images || [];
  const hasImages = currentImages.length > 0;

  // Navigation handlers for images within the current item
  const nextImage = useCallback(() => {
    if (!hasImages) return;
    setCurrentImageIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1,
    );
  }, [hasImages, currentImages.length]);

  const prevImage = useCallback(() => {
    if (!hasImages) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1,
    );
  }, [hasImages, currentImages.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, nextImage, prevImage]);

  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full hover:bg-white/20 z-50"
      >
        <X size={32} />
      </button>

      <div className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center px-4 md:px-12 py-10">
        {/* Main Image Container */}
        <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center">
          {hasImages ? (
            <>
              {/* Image */}
              <img
                src={currentImages[currentImageIndex]}
                alt={`${currentItem.title} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              />

              {/* Navigation Buttons */}
              {currentImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-black/50 rounded-full transition-all"
                  >
                    <ChevronLeft size={48} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-black/50 rounded-full transition-all"
                  >
                    <ChevronRight size={48} />
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center text-white/50">
              <ImageIcon size={64} className="mb-4 opacity-50" />
              <p>No images available for this moment.</p>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <h3 className="text-2xl font-serif font-bold text-white mb-2">
            {currentItem.title}
          </h3>
          <p className="text-white/60 text-sm uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
            {currentItem.category.replace("-", " ")}
            {hasImages && (
              <span className="bg-white/10 px-2 py-0.5 rounded text-xs ml-2">
                {currentImageIndex + 1} / {currentImages.length}
              </span>
            )}
          </p>

          {/* Thumbnails (Optional - simple dots for now) */}
          {currentImages.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {currentImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex
                      ? "bg-white w-4"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

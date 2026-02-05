"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import Section from "../ui/Section";
import Container from "../ui/Container";

export default function SeminarsMarquee() {
  const seminars = [
    {
      id: 1,
      title: "Youth Leadership Summit",
      image:
        "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop", // Conference/People
      videoUrl: "https://www.youtube.com/watch?v=1F2lE0w8i_w", // Mantra Of Life
    },
    {
      id: 2,
      title: "Vedic Philosophy Workshop",
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop", // Book/Study
      videoUrl: "https://www.youtube.com/watch?v=f_h2T4hQ9K8", // Teens Class
    },
    {
      id: 3,
      title: "Character Development Program",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop", // Group/Team
      videoUrl: "https://www.youtube.com/watch?v=t5JmS72g0wA", // Youth Class Ch 5
    },
    {
      id: 4,
      title: "Student Empowerment Event",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop", // Friends/Students
      videoUrl: "https://www.youtube.com/watch?v=mHlM5lJ-dEE", // Youth Class Batch 28
    },
    {
      id: 5,
      title: "Cultural Exchange Program",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop", // Culture/Festival
      videoUrl: "https://www.youtube.com/watch?v=hBwI9g5pG1Q", // Bhakti with Fun
    },
    {
      id: 6,
      title: "Mindfulness and Meditation",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop", // Yoga/Meditation
      videoUrl: "https://www.youtube.com/watch?v=i9Yf6rN_2kY", // Radheshyam Das Youth Class
    },
  ];

  // Duplicate the array for seamless infinite loop
  const duplicatedSeminars = [...seminars, ...seminars, ...seminars];

  return (
    <Section background="white" className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            Our Seminars
          </h2>
        </div>
      </Container>

      {/* Stepped Marquee Container - Full Width */}
      <div className="relative overflow-hidden mb-8 w-full group py-4">
        {/* Row 1 - Scrolling Left to Right */}
        <div className="flex gap-6 mb-6 w-full">
          <div className="flex gap-6 animate-marquee-ltr w-max">
            {duplicatedSeminars.map((seminar, index) => (
              <a
                key={`row1-${index}`}
                href={seminar.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-80 h-64 relative rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group/card"
              >
                <Image
                  src={seminar.image}
                  alt={seminar.title}
                  fill
                  className="object-cover group-hover/card:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="font-semibold text-white text-lg drop-shadow-md">
                    {seminar.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    <span className="text-saffron bg-white rounded-full p-1.5 w-8 h-8 flex items-center justify-center">
                      ▶
                    </span>
                    <span className="text-white text-sm font-medium">
                      Watch Video
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolling Right to Left (opposite direction) */}
        <div className="flex gap-6 w-full">
          <div className="flex gap-6 animate-marquee-rtl w-max">
            {duplicatedSeminars.map((seminar, index) => (
              <a
                key={`row2-${index}`}
                href={seminar.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-80 h-64 relative rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group/card"
              >
                <Image
                  src={seminar.image}
                  alt={seminar.title}
                  fill
                  className="object-cover group-hover/card:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="font-semibold text-white text-lg drop-shadow-md">
                    {seminar.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    <span className="text-saffron bg-white rounded-full p-1.5 w-8 h-8 flex items-center justify-center">
                      ▶
                    </span>
                    <span className="text-white text-sm font-medium">
                      Watch Video
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Container>
        {/* View All Button */}
        <div className="text-center pt-8">
          <Link href="/seminars">
            <Button variant="primary" size="lg">
              VIEW ALL SEMINARS
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}

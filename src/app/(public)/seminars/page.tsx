import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Seminars & Events - BACE",
  description:
    "Explore our seminars, workshops, and events designed to empower youth through Vedic wisdom and character development.",
};

export default function SeminarsPage() {
  // Placeholder seminar data
  const seminars = [
    {
      id: 1,
      title: "Youth Leadership Summit 2024",
      date: "March 15, 2024",
      description:
        "Empowering young leaders with character-based leadership principles.",
      category: "Leadership",
    },
    {
      id: 2,
      title: "Vedic Philosophy Workshop",
      date: "April 8, 2024",
      description: "Deep dive into timeless Vedic principles for modern life.",
      category: "Philosophy",
    },
    {
      id: 3,
      title: "Character Development Bootcamp",
      date: "May 20, 2024",
      description:
        "Intensive program focused on building strong moral foundations.",
      category: "Character Building",
    },
    {
      id: 4,
      title: "Student Empowerment Event",
      date: "June 12, 2024",
      description:
        "Practical tools for academic excellence and personal growth.",
      category: "Student Development",
    },
    {
      id: 5,
      title: "Cultural Exchange Program",
      date: "July 5, 2024",
      description:
        "Experience and share diverse cultural traditions and wisdom.",
      category: "Culture",
    },
    {
      id: 6,
      title: "Mindfulness and Meditation Retreat",
      date: "August 18, 2024",
      description:
        "Learn practical meditation techniques for stress management.",
      category: "Wellness",
    },
  ];

  return (
    <>
      <main className="pt-20">
        <Section background="white">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6 text-center">
                Seminars & Events
              </h1>
              <p className="text-xl text-charcoal-light leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                Join us for transformative seminars and workshops designed to
                nurture character, wisdom, and purpose-driven living.
              </p>

              {/* Seminars Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {seminars.map((seminar) => (
                  <div
                    key={seminar.id}
                    className="bg-white border-2 border-beige rounded-lg p-6 hover:border-saffron hover:shadow-lg transition-all duration-300"
                  >
                    {/* Placeholder Image */}
                    <div className="w-full h-48 bg-gradient-to-br from-saffron/20 to-forest/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-6xl">
                        {seminar.category === "Leadership" && "🎯"}
                        {seminar.category === "Philosophy" && "📚"}
                        {seminar.category === "Character Building" && "💪"}
                        {seminar.category === "Student Development" && "🎓"}
                        {seminar.category === "Culture" && "🌍"}
                        {seminar.category === "Wellness" && "🧘"}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <span className="inline-block bg-saffron/10 text-saffron text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {seminar.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                      {seminar.title}
                    </h3>

                    {/* Date */}
                    <p className="text-sm text-charcoal-light mb-3">
                      📅 {seminar.date}
                    </p>

                    {/* Description */}
                    <p className="text-charcoal-light text-sm leading-relaxed">
                      {seminar.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-16 text-center bg-beige-soft p-8 rounded-lg">
                <h2 className="text-3xl font-serif font-bold text-charcoal mb-4">
                  Want to Attend?
                </h2>
                <p className="text-lg text-charcoal-light mb-6">
                  Register for upcoming seminars and be part of the BACE
                  community.
                </p>
                <a
                  href="/admissions"
                  className="inline-block bg-saffron text-white px-8 py-3 rounded-lg font-semibold hover:bg-saffron-dark transition-colors"
                >
                  Register Now
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}

import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About BACE - Bhaktivedanta Academic and Cultural Education",
  description:
    "Learn about BACE mission, vision, and our connection to ISKCON educational values.",
};

export default function AboutPage() {
  return (
    <>
      <main className="pt-20">
        <Section background="white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
                About BACE
              </h1>
              <p className="text-xl text-charcoal-light leading-relaxed mb-12">
                Bhaktivedanta Academic and Cultural Education is more than a
                hostel — it's a complete youth development ecosystem.
              </p>

              {/* Mission */}
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-saffron mb-4">
                  Our Mission
                </h2>
                <div className="space-y-4 text-lg text-charcoal-light leading-relaxed">
                  <p>
                    To train youth in moral and spiritual values grounded in
                    timeless Vedic principles, helping students develop clarity
                    about life, consciousness, and personal purpose.
                  </p>
                  <p>
                    We guide youth in balancing academic studies, career goals,
                    and spiritual growth while cultivating higher personal
                    integrity, emotional stability, and community service
                    orientation.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-saffron mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-charcoal-light leading-relaxed">
                  To create a generation of youth who are academically
                  successful, emotionally stable, ethically grounded, and
                  spiritually aware — young people who lead with character,
                  contribute to society with compassion, and live with clarity
                  and purpose.
                </p>
              </div>

              {/* Core Values */}
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-saffron mb-6">
                  Core Values
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Character over Convenience",
                      description:
                        "We prioritize building strong moral foundations over short-term comfort.",
                    },
                    {
                      title: "Discipline with Understanding",
                      description:
                        "Our approach explains the why, not just the what.",
                    },
                    {
                      title: "Freedom with Responsibility",
                      description:
                        "We empower students to make conscious choices.",
                    },
                    {
                      title: "Knowledge with Application",
                      description:
                        "Learning extends beyond theory to practical life skills.",
                    },
                    {
                      title: "Growth with Humility",
                      description:
                        "Progress is celebrated with gratitude and self-awareness.",
                    },
                    {
                      title: "Service-Oriented Leadership",
                      description:
                        "True leadership comes through serving others.",
                    },
                  ].map((value, index) => (
                    <div key={index} className="bg-beige-soft p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-charcoal mb-2">
                        {value.title}
                      </h3>
                      <p className="text-charcoal-light text-sm">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ISKCON Connection */}
              <div className="bg-forest/5 p-8 rounded-lg border-l-4 border-forest">
                <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  Our Roots in ISKCON
                </h2>
                <div className="space-y-4 text-charcoal-light leading-relaxed">
                  <p>
                    BACE draws inspiration from the vision of{" "}
                    <strong>A. C. Bhaktivedanta Swami Prabhupada</strong>,
                    founder of the International Society for Krishna
                    Consciousness (ISKCON), who emphasized systematic education,
                    character building, and spiritual clarity for intelligent
                    youth.
                  </p>
                  <p>
                    Operating as an extension of ISKCON's youth education
                    efforts, similar in spirit to ISKCON Youth Forum (IYF)
                    initiatives, BACE provides a structured residential and
                    lifestyle component focused on holistic development.
                  </p>
                  <p>
                    While inspired by ISKCON's educational mission, BACE
                    welcomes students from all backgrounds. No prior knowledge
                    of Vedic philosophy is required — only an openness to learn
                    and grow.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}

import Container from "../ui/Container";
import Section from "../ui/Section";

export default function WhatIsBACE() {
  return (
    <Section id="what-is-bace" background="white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
              What is BACE?
            </h2>
            <div className="space-y-4 text-lg text-charcoal-light leading-relaxed">
              <p>
                <strong className="text-saffron-dark">
                  Bhaktivedanta Academic and Cultural Education (BACE)
                </strong>{" "}
                is a youth-focused educational and cultural initiative inspired
                by the teachings of the International Society for Krishna
                Consciousness (ISKCON).
              </p>
              <p>
                BACE aims to nurture character, clarity, and consciousness among
                young people through timeless Vedic wisdom, practical life
                education, and value-based cultural learning.
              </p>
              <p>
                Designed as an extension of ISKCON's mission, BACE addresses the
                intellectual, emotional, and spiritual needs of today's youth by
                blending ancient philosophy with modern academic thinking and
                personal development frameworks.
              </p>
              <p>
                Through structured learning, dialogue, and cultural engagement,
                BACE empowers youth to live purposeful, balanced, and
                spiritually grounded lives.
              </p>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-beige to-saffron/20 rounded-2xl flex items-center justify-center p-12">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-16 h-16 text-saffron"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                  Character + Clarity + Consciousness
                </h3>
                <p className="text-charcoal-light">
                  The three pillars of BACE's educational mission
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

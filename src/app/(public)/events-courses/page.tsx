import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ProgramBrowser from "@/components/events/ProgramBrowser";

export const metadata: Metadata = {
  title: "Events & Courses - BACE",
  description:
    "Explore BACE courses including Discover Yourself, Bhagavad Gita studies, workshops, retreats, and campus programs.",
};

export default function EventsCoursesPage() {
  return (
    <main className="pt-20 bg-beige-soft">
      {/* Dynamic Hero Section */}
      <Section className="bg-charcoal text-white relative overflow-hidden py-24">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-saffron/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-forest/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

        <Container className="relative z-10 text-center">
          <span className="text-saffron font-bold tracking-widest uppercase text-sm mb-4 block">
            Learn • Grow • Connect
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Expand Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">
              Horizons
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our programs are designed to bridge the gap between academic
            knowledge and life wisdom. Dive into courses that challenge your
            intellect and feed your soul.
          </p>
        </Container>
      </Section>

      {/* Interactive Browser Section */}
      <Section className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-charcoal to-beige-soft -z-10" />
        <Container>
          <div className="relative z-10">
            <ProgramBrowser />
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-white border-t border-beige-200">
        <Container>
          <div className="bg-forest/5 rounded-3xl p-10 md:p-16 text-center border border-forest/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-forest/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-6 relative z-10">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto mb-10 relative z-10">
              Whether you're looking for stress management techniques or deep
              spiritual wisdom, we have a program for you. Join a community of
              thinkers and seekers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <a
                href="/register"
                className="px-8 py-4 bg-saffron text-white font-bold rounded-lg shadow-lg hover:bg-saffron/90 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Register for a Course
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-charcoal border-2 border-beige-300 font-bold rounded-lg hover:border-saffron hover:text-saffron transition-all"
              >
                Talk to a Mentor
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

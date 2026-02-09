import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GrowthChart from "@/components/about/GrowthChart";
import { getPublicGrowthStats } from "./actions";
import {
  ShieldCheck,
  Brain,
  Scale,
  BookOpen,
  Sprout,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About BACE - Transformative Youth Education",
  description:
    "Discover how BACE empowers youth through academic excellence and spiritual wisdom.",
};

export default async function AboutPage() {
  const { growthData, totalStudents } = await getPublicGrowthStats();

  return (
    <main className="pt-20 bg-beige-soft">
      {/* Hero Section */}
      <Section className="bg-charcoal text-white relative overflow-hidden py-32">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-saffron/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-forest/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-saffron font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Building Character,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">
                Empowering Youth
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              BACE is a holistic ecosystem where academic ambition meets
              spiritual grounding, creating leaders for tomorrow.
            </p>
          </div>
        </Container>
      </Section>

      {/* Impact Stats & Chart Section */}
      <Section className="py-24 bg-charcoal relative overflow-hidden -mt-1">
        {/* Transition gradient */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-charcoal to-transparent z-10" />

        <Container className="relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Growing Impact
              </h2>
              <p className="text-gray-400 text-lg mb-12">
                Our community is expanding rapidly as more students discover the
                value of balancing modern education with timeless wisdom.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-saffron mb-2">
                    {totalStudents + 20}+
                  </div>
                  <div className="text-gray-400 font-medium">Lives Touched</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-forest mb-2">6+</div>
                  <div className="text-gray-400 font-medium">
                    College's Student
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-md shadow-2xl">
              <h3 className="text-white font-medium mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                New Student Registrations
              </h3>
              <GrowthChart data={growthData} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center text-saffron mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-serif font-bold text-charcoal">
                Our Mission
              </h2>
              <p className="text-lg text-charcoal-light leading-relaxed">
                To train youth in moral and spiritual values grounded in
                timeless Vedic principles, helping students develop clarity
                about life, consciousness, and personal purpose. We guide youth
                in balancing academic studies with spiritual growth.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center text-forest mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-serif font-bold text-charcoal">
                Our Vision
              </h2>
              <p className="text-lg text-charcoal-light leading-relaxed">
                To create a generation of youth who are academically successful,
                emotionally stable, ethically grounded, and spiritually aware —
                young people who lead with character and contribute to society
                with compassion.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values Grid */}
      <Section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Core Values
            </h2>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              The principles that guide our interactions and growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Character over Convenience",
                description:
                  "We prioritize building strong moral foundations over short-term comfort.",
                icon: <ShieldCheck className="w-10 h-10" />,
              },
              {
                title: "Discipline with Understanding",
                description:
                  "Our approach explains the why, not just the what, fostering true acceptance.",
                icon: <Brain className="w-10 h-10" />,
              },
              {
                title: "Freedom with Responsibility conscious",
                description:
                  "We empower students to make conscious choices that uplift themselves and others.",
                icon: <Scale className="w-10 h-10" />,
              },
              {
                title: "Knowledge with Application",
                description:
                  "Learning extends beyond theory to practical life skills and wisdom.",
                icon: <BookOpen className="w-10 h-10" />,
              },
              {
                title: "Growth with Humility",
                description:
                  "Progress is celebrated with gratitude and self-awareness, avoiding arrogance.",
                icon: <Sprout className="w-10 h-10" />,
              },
              {
                title: "Service-Oriented Leadership",
                description:
                  "True leadership comes through serving others with empathy and dedication.",
                icon: <HeartHandshake className="w-10 h-10" />,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-beige-soft border border-beige-200 hover:border-saffron/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-saffron mb-4 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 font-serif group-hover:text-saffron transition-colors">
                  {value.title}
                </h3>
                <p className="text-charcoal-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ISKCON Connection */}
      <Section className="py-24 bg-beige-soft">
        <Container>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-beige-200 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">
                Our Roots in ISKCON
              </h2>
              <div className="prose prose-lg text-charcoal-light max-w-none">
                <p>
                  BACE draws inspiration from the vision of
                  <span className="text-saffron font-bold">
                    {" "}
                    A. C. Bhaktivedanta Swami Prabhupada
                  </span>
                  , founder of the International Society for Krishna
                  Consciousness (ISKCON), who emphasized systematic education,
                  character building, and spiritual clarity for intelligent
                  youth.
                </p>
                <p className="mt-4">
                  Operating as an extension of ISKCON&apos;s youth education
                  efforts, similar in spirit to ISKCON Youth Forum (IYF)
                  initiatives, BACE provides a structured residential and
                  lifestyle component focused on holistic development.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

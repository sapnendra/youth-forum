import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import {
  Users,
  Target,
  Zap,
  BookOpen,
  Music,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ISKCON Youth Forum | Empowering Youth for a Meaningful Life",
  description:
    "IYF is a dynamic platform for young individuals to explore spirituality, engage in service, and connect with like-minded peers for personal and leadership development.",
};

export default function IYFPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] py-5 sm:py-0 flex items-center bg-gradient-to-br from-charcoal via-charcoal to-saffron/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 100 L100 0 L100 100 Z" fill="#C8621F" />
          </svg>
        </div>

        <Container className="relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <Users className="w-5 h-5 text-saffron" />
              <span className="text-sm font-medium tracking-wide">
                ISKCON YOUTH FORUM
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Ignite Your <span className="text-saffron">Potential</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              A dynamic community where ambition meets purpose. Discover your
              inner strength, build leadership skills, and explore Vedic wisdom
              with like-minded peers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/admissions">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-saffron hover:bg-saffron-light text-white border-none"
                >
                  Join the Movement
                </Button>
              </Link>
              <Link href="/events">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10"
                >
                  Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <Section background="white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-charcoal">
                More Than Just a Forum
              </h2>
              <p className="text-lg text-charcoal-light/80 leading-relaxed">
                IYF is a premier youth wing of ISKCON, dedicated to creating a
                generation of value-driven leaders. We believe that true success
                is a balance of professional excellence and personal character.
              </p>
              <p className="text-lg text-charcoal-light/80 leading-relaxed">
                In a world full of distractions, we provide a scientific,
                logical, and practical approach to spirituality that empowers
                you to face life's challenges with confidence and clarity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, label: "Purpose", desc: "Find your 'Why'" },
                { icon: Zap, label: "Energy", desc: "Channel focus" },
                { icon: Heart, label: "Values", desc: "Build character" },
                { icon: Users, label: "Network", desc: "Connect deeply" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-beige p-6 rounded-2xl border border-black/5 hover:border-saffron/30 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-saffron mb-3" />
                  <h3 className="font-bold text-charcoal mb-1">{item.label}</h3>
                  <p className="text-sm text-charcoal-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Activities */}
      <Section background="beige">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">
              What We Do
            </h2>
            <p className="text-lg text-charcoal-light">
              From high-impact seminars to soul-stirring retreats, our programs
              are designed to transform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Seminars & Workshops",
                icon: BookOpen,
                items: [
                  "Art of Mind Control",
                  "Stress Management",
                  "Time Management",
                  "Leadership Principles",
                ],
                color: "bg-blue-50 text-blue-600",
              },
              {
                title: "Cultural Arts",
                icon: Music,
                items: [
                  "Theatrical Drama",
                  "Musical Instruments",
                  "Public Speaking",
                  "Event Management",
                ],
                color: "bg-orange-50 text-orange-600",
              },
              {
                title: "Spiritual Retreats",
                icon: Users,
                items: [
                  "Weekend Camps",
                  "Heritage Trips",
                  "Meditation Sessions",
                  "Nature Connection",
                ],
                color: "bg-green-50 text-green-600",
              },
            ].map((activity, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-14 h-14 ${activity.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <activity.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  {activity.title}
                </h3>
                <ul className="space-y-3">
                  {activity.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-charcoal-light"
                    >
                      <CheckCircle2 className="w-5 h-5 text-saffron mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Programs */}
      <Section background="white">
        <Container>
          <div className="bg-charcoal rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-saffron rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                  Signature Programs
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-saffron mb-2">
                      FACING YOUR FUTURE
                    </h3>
                    <p className="text-white/70">
                      A comprehensive course helping students navigate career
                      choices, relationships, and personal goals with clarity.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-saffron mb-2">
                      DISCOVER YOURSELF
                    </h3>
                    <p className="text-white/70">
                      Our flagship 6-session course demystifying the science of
                      consciousness and the art of living.
                    </p>
                  </div>
                </div>
                <div className="mt-10">
                  <Link href="/admissions">
                    <Button
                      variant="primary"
                      className="bg-white text-charcoal hover:bg-gray-100"
                    >
                      Register for Next Batch
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                {/* Placeholder for Program Image/Graphic */}
                <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="w-16 h-16 text-white/20 mx-auto mb-4" />
                    <p className="text-white/40 italic">
                      "Transforming students into leaders"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="soft">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              Ready to Upgrade Your Life?
            </h2>
            <p className="text-lg text-charcoal-light mb-8">
              Join thousands of students who have found their path, purpose, and
              people at IYF.
            </p>
            <Link href="/admissions">
              <Button
                variant="primary"
                size="lg"
                className="shadow-xl shadow-saffron/20"
              >
                Get Connected <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}

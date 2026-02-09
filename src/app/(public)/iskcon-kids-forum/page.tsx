import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import {
  Smile,
  Star,
  BookOpen,
  Music,
  Palette,
  Gamepad2,
  Heart,
  Sun,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ISKCON Kids Forum | Playful Spiritual Learning",
  description:
    "IKF offers a fun, value-based learning environment for children through stories, games, art, and festivals.",
};

export default function IKFPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] py-5 sm:py-0 flex items-center bg-[#FFF8E1] overflow-hidden">
        {/* Playful Background Shapes */}
        <div className="absolute top-10 left-10 text-saffron/20 animate-bounce delay-700">
          <Sun className="w-24 h-24" />
        </div>
        <div className="absolute bottom-10 right-10 text-forest/20 animate-pulse delay-1000">
          <Star className="w-32 h-32" />
        </div>

        <Container className="relative z-10 text-charcoal text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-2 rounded-full border-2 border-orange-200 mb-6 shadow-sm">
              <Smile className="w-6 h-6 text-orange-500" />
              <span className="text-lg font-bold tracking-wide text-orange-600 font-sans">
                ISKCON KIDS FORUM
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 text-charcoal leading-tight">
              Where Learning <br /> Meets{" "}
              <span className="text-orange-500">Fun!</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-light mb-8 leading-relaxed font-medium">
              Stories, games, and festivals that plant the seeds of values in
              little hearts.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/admissions">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white border-none rounded-full px-8 text-lg shadow-lg shadow-orange-500/30"
                >
                  Start the Adventure
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy Section */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
              Play + Learning = Growth
            </h2>
            <p className="text-xl text-charcoal-light">
              We believe that children learn best when they are happy. Our
              approach combines ancient wisdom with modern interactive learning
              methods.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Vedic Wisdom",
                desc: "Simplified Gita stories and moral tales.",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: Palette,
                title: "Creative Arts",
                desc: "Drawing, coloring, and craft workshops.",
                color: "bg-pink-100 text-pink-600",
              },
              {
                icon: Music,
                title: "Culture & Fun",
                desc: "Sloka recitation, bhajans, and festivals.",
                color: "bg-yellow-100 text-yellow-600",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-[2rem] text-center border-2 border-gray-100 hover:border-orange-200 transition-colors"
              >
                <div
                  className={`w-20 h-20 mx-auto rounded-full ${item.color} flex items-center justify-center mb-6`}
                >
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Activities Section */}
      <Section background="beige">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-charcoal">
                A World of Activities
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Storytelling Circles",
                    desc: "Magical tales from Ramayana & Mahabharata",
                    icon: Star,
                  },
                  {
                    title: "Festival Celebrations",
                    desc: "Janmashtami fancy dress & plays",
                    icon: Heart,
                  },
                  {
                    title: "Sunday School",
                    desc: "Weekly values classes & friends",
                    icon: Sun,
                  },
                  {
                    title: "Games & Puzzles",
                    desc: "Learning values through play",
                    icon: Gamepad2,
                  },
                ].map((act, i) => (
                  <div
                    key={i}
                    className="flex items-start bg-white p-4 rounded-xl shadow-sm"
                  >
                    <div className="bg-orange-100 p-3 rounded-lg mr-4">
                      <act.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-charcoal">
                        {act.title}
                      </h4>
                      <p className="text-charcoal-light text-sm">{act.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-orange-400 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white border-4 border-dashed border-orange-300 rounded-3xl p-8 h-full flex flex-col justify-center items-center text-center space-y-6">
                <h3 className="text-2xl font-bold text-charcoal">
                  For Parents
                </h3>
                <p className="text-charcoal-light">
                  "Giving your child a spiritual foundation is the greatest
                  gift. IKF helps me do that in a fun way!"
                </p>
                <div className="w-full h-px bg-gray-200"></div>
                <div className="space-y-2">
                  <p className="font-bold text-forest">Upcoming Batch:</p>
                  <p className="text-xl font-serif">Sunday, 10:00 AM</p>
                </div>
                <Link href="/admissions">
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-600 hover:bg-orange-50"
                  >
                    Contact Coordinator
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

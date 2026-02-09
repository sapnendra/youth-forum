import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import {
  Flower,
  Heart,
  Palette,
  Users,
  Feather,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ISKCON Girls Forum | Cultivating Confidence & Grace",
  description:
    "IGF is a dedicated platform for young women to cultivate self-confidence, balance spiritual life with modern responsibilities, and explore devotional arts.",
};

export default function IGFPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] py-5 sm:py-0 flex items-center bg-gradient-to-r from-beige to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-forest/5 skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-saffron/5 rounded-full blur-3xl"></div>

        <Container className="relative z-10 text-charcoal">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-forest/10 px-4 py-2 rounded-full border border-forest/20 mb-6">
              <Flower className="w-5 h-5 text-forest" />
              <span className="text-sm font-medium tracking-wide text-forest">
                ISKCON GIRLS FORUM
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-forest-DEFAULT leading-tight">
              Cultivating <span className="text-saffron">Confidence</span>{" "}
              <br /> & Grace
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-light mb-8 leading-relaxed max-w-2xl font-light">
              A nurturing space for young women to discover their inner
              strength, master life skills, and balance modern aspirations with
              timeless values.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/admissions">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-forest hover:bg-forest-light text-white border-none shadow-lg shadow-forest/20"
                >
                  Join Our Community
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Objectives Grid */}
      <Section background="white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">
              Our Vision for You
            </h2>
            <p className="text-lg text-charcoal-light">
              We empower you to become a strong contributor to society while
              maintaining deep spiritual roots.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Inner Balance",
                desc: " Harmonize spiritual growth with career and family life.",
                bg: "bg-rose-50",
                color: "text-rose-600",
              },
              {
                icon: Sparkles,
                title: "Life Skills",
                desc: "Master etiquette, stress management, and communication.",
                bg: "bg-amber-50",
                color: "text-amber-600",
              },
              {
                icon: Palette,
                title: "Devotional Arts",
                desc: "Express devotion through music, rangoli, and cooking.",
                bg: "bg-emerald-50",
                color: "text-emerald-600",
              },
              {
                icon: Users,
                title: "Sisterhood",
                desc: "Connect with a supportive network of like-minded friends.",
                bg: "bg-purple-50",
                color: "text-purple-600",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${item.bg} p-8 rounded-2xl border-2 border-transparent hover:border-white/50 transition-all hover:-translate-y-1`}
              >
                <item.icon className={`w-10 h-10 ${item.color} mb-4`} />
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal-light/80 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Activities & Programs */}
      <Section background="soft">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
              {/* Decorative Cards */}
              <div className="bg-white p-6 rounded-2xl shadow-sm space-y-2">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Palette className="w-5 h-5 text-orange-600" />
                </div>
                <h4 className="font-bold text-charcoal">Creativity</h4>
                <p className="text-xs text-charcoal-light">Rangoli & Crafts</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm space-y-2 translate-y-8">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-pink-600" />
                </div>
                <h4 className="font-bold text-charcoal">Counseling</h4>
                <p className="text-xs text-charcoal-light">Personal Guidance</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm space-y-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Feather className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="font-bold text-charcoal">Culinary Art</h4>
                <p className="text-xs text-charcoal-light">Satvik Cooking</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm space-y-2 translate-y-8">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-bold text-charcoal">Etiquette</h4>
                <p className="text-xs text-charcoal-light">Graceful Living</p>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block text-forest font-bold tracking-wider uppercase text-sm">
                {" "}
                holistic development
              </div>
              <h2 className="text-4xl font-serif font-bold text-charcoal">
                The Art of Living Gracefully
              </h2>
              <p className="text-lg text-charcoal-light leading-relaxed">
                IGF isn't just about spirituality; it's about becoming a
                complete person. We strive to help you balance your professional
                ambitions with traditional values.
              </p>
              <ul className="space-y-4">
                {[
                  "Workshops on 'Role of Women in Vedic Culture'",
                  "Interactive cooking and garland making sessions",
                  "Heart-to-heart counseling circles",
                  "Music and kirtan training",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-charcoal">
                    <span className="w-2 h-2 bg-saffron rounded-full mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Role Balance CTA */}
      <Section background="beige">
        <Container>
          <div className="bg-forest rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-serif font-bold">
                Join a Circle of Support
              </h2>
              <p className="text-white/80 text-lg">
                Whether you are a student, a working professional, or a
                homemaker, IGF offers you the tools to excel in every role.
              </p>
              <Link href="/admissions">
                <Button
                  variant="primary"
                  className="bg-white text-forest hover:bg-forest-light hover:text-white transition-colors"
                >
                  Connect on WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

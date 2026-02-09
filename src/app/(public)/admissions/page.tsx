"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import RegistrationForm from "@/components/forms/RegistrationForm";
import { CheckCircle2, MapPin, Calendar, Users } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <main className="pt-20 bg-beige-soft min-h-screen">
      {/* Hero Section */}
      <Section className="bg-charcoal text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-saffron/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-saffron font-bold tracking-widest uppercase text-sm mb-4 block">
              Join the Community
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Begin Your Journey
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              BACE is more than just a hostel; it's a family dedicated to your
              holistic growth. Take the first step towards a life of clarity and
              character.
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sidebar - Sticky Info */}
            <div className="lg:col-span-4 sticky top-24 space-y-10 order-2 lg:order-1">
              {/* Process Timeline */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-beige-200">
                <h3 className="text-xl font-serif font-bold text-charcoal mb-6 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-saffron" />
                  Admission Process
                </h3>
                <div className="space-y-6 relative ml-2 border-l-2 border-beige-200 pl-6">
                  {[
                    { title: "Register", desc: "Fill out the form" },
                    { title: "Connect", desc: "Initial team meeting" },
                    { title: "Visit BACE", desc: "Campus tour & interaction" },
                    { title: "Welcome", desc: "Move-in and orientation" },
                  ].map((item, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-saffron border-4 border-white shadow-sm" />
                      <h4 className="font-bold text-charcoal">{item.title}</h4>
                      <p className="text-sm text-charcoal-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div className="bg-forest/5 p-8 rounded-2xl border border-forest/10">
                <h3 className="text-xl font-serif font-bold text-charcoal mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-forest" />
                  Eligibility
                </h3>
                <ul className="space-y-3">
                  {[
                    "College/University Student",
                    "Interest in Self-Development",
                    "Willing to follow community rules",
                    "Respect for BACE values",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-charcoal-light"
                    >
                      <CheckCircle2 className="w-4 h-4 text-forest mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Snip */}
              <div className="flex items-center text-charcoal-light text-sm">
                <Users className="w-5 h-5 mr-3 text-saffron" />
                <p>
                  Have questions?{" "}
                  <a
                    href="/contact"
                    className="text-saffron hover:underline font-medium"
                  >
                    Contact Us
                  </a>{" "}
                  before applying.
                </p>
              </div>
            </div>

            {/* Right Content - Form */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <RegistrationForm />
              </motion.div>

              <p className="text-center text-xs text-charcoal-light mt-6">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

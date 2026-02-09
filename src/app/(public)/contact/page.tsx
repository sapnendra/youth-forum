import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - BACE",
  description: "Get in touch with BACE for inquiries, visits, or support.",
};

export default function ContactPage() {
  return (
    <main className="pt-20 bg-beige-soft">
      {/* Hero Section */}
      <Section className="bg-charcoal text-white relative overflow-hidden py-24">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-saffron/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <Container className="relative z-10 text-center">
          <span className="text-saffron font-bold tracking-widest uppercase text-sm mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            We'd Love to Hear from You
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Whether you have questions about admissions, student life, or just
            want to say hello, our team is here to help.
          </p>
        </Container>
      </Section>

      {/* Main Content */}
      <Section className="py-20 -mt-10 relative z-20">
        <Container>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-beige-200 flex flex-col lg:flex-row">
            {/* Contact Info Sidebar */}
            <div className="lg:w-1/3 bg-charcoal text-white p-10 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-saffron/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

              <h2 className="text-2xl font-serif font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-saffron group-hover:bg-saffron group-hover:text-charcoal transition-colors duration-300 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200 mb-1">Phone</h3>
                    <p className="text-gray-400 font-light">
                      +91 [Phone Number]
                    </p>
                    <p className="text-gray-400 font-light">+91 [Alt Number]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-saffron group-hover:bg-saffron group-hover:text-charcoal transition-colors duration-300 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200 mb-1">Email</h3>
                    <p className="text-gray-400 font-light">info@bace.org</p>
                    <p className="text-gray-400 font-light">
                      admissions@bace.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-saffron group-hover:bg-saffron group-hover:text-charcoal transition-colors duration-300 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200 mb-1">
                      Location
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed">
                      [BACE Hostel Address]
                      <br />
                      [City, State - PIN]
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-saffron group-hover:bg-saffron group-hover:text-charcoal transition-colors duration-300 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-200 mb-1">
                      Office Hours
                    </h3>
                    <p className="text-gray-400 font-light">
                      Mon - Sat: 10 AM - 6 PM
                    </p>
                    <p className="text-gray-400 font-light">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-saffron hover:text-charcoal transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-saffron hover:text-charcoal transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-saffron hover:text-charcoal transition-all"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:w-2/3 p-10 md:p-14 bg-white">
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-2">
                Send us a Message
              </h2>
              <p className="text-charcoal-light mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-beige-soft border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-beige-soft border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-beige-soft border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-beige-soft border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-beige-soft border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition text-charcoal-light">
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Hostel Facilities</option>
                    <option>Events & Workshops</option>
                    <option>Parent Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-beige-soft border border-beige-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full md:w-auto px-8 py-3 bg-saffron hover:bg-saffron/90 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section className="pb-24 pt-0">
        <Container>
          <div className="bg-white p-4 rounded-2xl shadow-lg border border-beige-200">
            <div className="h-[400px] w-full bg-beige-soft rounded-xl overflow-hidden relative group">
              {/* Map Placeholder Background */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-beige-200 to-beige-300 opacity-50">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/50 text-center z-10">
                  <MapPin className="w-8 h-8 text-saffron mx-auto mb-2 animate-bounce" />
                  <p className="font-semibold text-charcoal">
                    Find us on Google Maps
                  </p>
                  <p className="text-sm text-charcoal-light mt-1">
                    Click to interact
                  </p>
                </div>
                {/* Decorative Pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, #3D405B 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d530.2652891814822!2d77.4840219562436!3d23.253475783042873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41c2e5f48aa9%3A0x7e986d1867287184!2sISKCON%20Hostel%20BACE%20BHOPAL!5e0!3m2!1sen!2sin!4v1770644931707!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, opacity: 0.8 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

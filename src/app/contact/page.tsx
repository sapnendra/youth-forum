import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact Us - BACE",
  description: "Get in touch with BACE for inquiries, visits, or support.",
};

export default function ContactPage() {
  return (
    <>
      <main className="pt-20">
        <Section background="white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-charcoal-light leading-relaxed mb-12">
                Have questions? We're here to help. Reach out to us through any
                of the following channels.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="bg-beige-soft p-6 rounded-lg">
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-saffron mr-4 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1">
                          Phone
                        </h3>
                        <p className="text-charcoal-light">
                          +91 [Phone Number]
                        </p>
                        <p className="text-sm text-charcoal-light mt-1">
                          Available: 10 AM - 6 PM (Mon-Sat)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-beige-soft p-6 rounded-lg">
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-saffron mr-4 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1">
                          Email
                        </h3>
                        <p className="text-charcoal-light">info@bace.org</p>
                        <p className="text-sm text-charcoal-light mt-1">
                          We respond within 24-48 hours
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-beige-soft p-6 rounded-lg">
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-saffron mr-4 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1">
                          Address
                        </h3>
                        <p className="text-charcoal-light">
                          [BACE Hostel Address]
                          <br />
                          [City, State - PIN]
                          <br />
                          [Country]
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-beige-soft p-6 rounded-lg">
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-saffron mr-4 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1">
                          Visit Us
                        </h3>
                        <p className="text-charcoal-light text-sm">
                          Parents and students are welcome to visit BACE and
                          meet our mentors. Please schedule an appointment in
                          advance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links for Different Inquiries */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
                    What Can We Help You With?
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Admission Inquiries",
                        desc: "Questions about admission process, eligibility, and fees",
                        link: "/admissions",
                      },
                      {
                        title: "For Parents",
                        desc: "Information about safety, facilities, and student well-being",
                        link: "/parents",
                      },
                      {
                        title: "Course Information",
                        desc: "Details about programs, workshops, and learning activities",
                        link: "/events-courses",
                      },
                      {
                        title: "About BACE",
                        desc: "Our mission, vision, values, and ISKCON connection",
                        link: "/about",
                      },
                    ].map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="block bg-white border-2 border-beige p-4 rounded-lg hover:border-saffron hover:shadow-md transition-all duration-300"
                      >
                        <h3 className="font-semibold text-charcoal mb-1">
                          {item.title} →
                        </h3>
                        <p className="text-sm text-charcoal-light">
                          {item.desc}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Media Placeholder */}
              <div className="bg-saffron/5 p-8 rounded-lg border-2 border-saffron/20 text-center">
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  Connect With Us
                </h3>
                <p className="text-charcoal-light mb-4">
                  Follow BACE on social media for updates, events, and
                  inspirational content
                </p>
                <div className="flex justify-center gap-4">
                  {["Facebook", "Instagram", "YouTube"].map((platform) => (
                    <div
                      key={platform}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                      title={platform}
                    >
                      <span className="text-saffron font-bold text-sm">
                        {platform[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}

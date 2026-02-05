import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Hostel Life - BACE",
  description:
    "Experience daily life at BACE Vedic Hostel with structured routines, mentorship, and value-based living.",
};

export default function HostelLifePage() {
  return (
    <>
      <main className="pt-20">
        <Section background="white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
                Hostel Life at BACE
              </h1>
              <p className="text-xl text-charcoal-light leading-relaxed mb-12">
                Life at BACE is designed to create a rhythm where routine
                strengthens discipline, discipline protects freedom, and freedom
                leads to growth.
              </p>

              {/* Daily Routine */}
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-saffron mb-6">
                  A Day in the Life
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      time: "Morning (5:30 AM - 8:00 AM)",
                      activities: [
                        "Early rising for freshness and mental clarity",
                        "Gentle reflective practices and meditation",
                        "Light physical activity or yoga",
                        "Nutritious breakfast",
                      ],
                    },
                    {
                      time: "Daytime (8:00 AM - 5:00 PM)",
                      activities: [
                        "Attend college or university classes",
                        "Dedicated study hours in quiet environment",
                        "Academic support and peer study groups",
                        "Lunch with community",
                      ],
                    },
                    {
                      time: "Evening (5:00 PM - 9:00 PM)",
                      activities: [
                        "Interactive learning sessions on life skills",
                        "Group discussions and value education",
                        "Cultural activities and talent development",
                        "Dinner and community time",
                      ],
                    },
                    {
                      time: "Night (9:00 PM - 10:30 PM)",
                      activities: [
                        "Calm atmosphere for winding down",
                        "Personal reflection or light reading",
                        "Preparation for next day",
                        "Lights out by 10:30 PM for healthy sleep",
                      ],
                    },
                  ].map((period, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-saffron pl-6 py-2"
                    >
                      <h3 className="text-xl font-semibold text-charcoal mb-3">
                        {period.time}
                      </h3>
                      <ul className="space-y-2">
                        {period.activities.map((activity, i) => (
                          <li
                            key={i}
                            className="flex items-start text-charcoal-light"
                          >
                            <svg
                              className="w-5 h-5 text-forest mr-2 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facilities */}
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-saffron mb-6">
                  Facilities & Amenities
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: "🛏️",
                      title: "Clean Accommodation",
                      desc: "Well-maintained rooms with proper ventilation",
                    },
                    {
                      icon: "📚",
                      title: "Study Areas",
                      desc: "Quiet spaces dedicated for focused learning",
                    },
                    {
                      icon: "🍽️",
                      title: "Nutritious Meals",
                      desc: "Vegetarian meals prepared with care",
                    },
                    {
                      icon: "🏃",
                      title: "Recreation",
                      desc: "Sports and physical activity areas",
                    },
                    {
                      icon: "💻",
                      title: "Internet Access",
                      desc: "Wi-Fi for academic and learning purposes",
                    },
                    {
                      icon: "👨‍🏫",
                      title: "Mentorship",
                      desc: "Regular guidance from seniors and counselors",
                    },
                  ].map((facility, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-beige-soft p-4 rounded-lg"
                    >
                      <span className="text-3xl mr-4">{facility.icon}</span>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1">
                          {facility.title}
                        </h3>
                        <p className="text-sm text-charcoal-light">
                          {facility.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lifestyle Guidelines */}
              <div className="bg-forest/5 p-8 rounded-lg border-l-4 border-forest">
                <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  Lifestyle Guidelines
                </h2>
                <div className="space-y-4 text-charcoal-light leading-relaxed">
                  <p>
                    <strong className="text-charcoal">
                      Substance-Free Environment:
                    </strong>{" "}
                    No alcohol, smoking, or intoxicants. We maintain a clean
                    environment that supports health and mental clarity.
                  </p>
                  <p>
                    <strong className="text-charcoal">
                      Vegetarian Lifestyle:
                    </strong>{" "}
                    All meals are vegetarian, prepared with consciousness and
                    care for health.
                  </p>
                  <p>
                    <strong className="text-charcoal">
                      Respectful Conduct:
                    </strong>{" "}
                    Students are expected to maintain respectful behavior,
                    punctuality, and consideration for community living.
                  </p>
                  <p>
                    <strong className="text-charcoal">
                      Technology Balance:
                    </strong>{" "}
                    While internet is provided for academics, we encourage
                    mindful use of technology and social media.
                  </p>
                  <p className="text-sm italic mt-4">
                    Note: These guidelines are explained with reasoning, not
                    imposed blindly. Students are encouraged to understand the
                    benefits of conscious living.
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

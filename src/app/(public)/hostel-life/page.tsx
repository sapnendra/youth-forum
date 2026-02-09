import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import {
  Sun,
  BookOpen,
  Users,
  Moon,
  Wifi,
  Utensils,
  Dumbbell,
  Library,
  Leaf,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hostel Life - BACE",
  description:
    "Experience daily life at BACE Vedic Hostel with structured routines, mentorship, and value-based living.",
};

export default function HostelLifePage() {
  const routine = [
    {
      period: "Morning",
      time: "5:30 AM - 8:00 AM",
      icon: <Sun className="w-6 h-6 text-saffron" />,
      activities: [
        "Early rising for freshness and clarification",
        "Mantra meditation & spiritual focus",
        "Light physical activity / Yoga",
        "Nutritious Sattvic breakfast",
      ],
      color: "border-saffron",
      bg: "bg-saffron/10",
    },
    {
      period: "Daytime",
      time: "8:00 AM - 5:00 PM",
      icon: <BookOpen className="w-6 h-6 text-charcoal" />,
      activities: [
        "College / University classes",
        "Dedicated study hours",
        "Academic support & peer groups",
        "Lunch with community",
      ],
      color: "border-charcoal",
      bg: "bg-charcoal/10",
    },
    {
      period: "Evening",
      time: "5:00 PM - 9:00 PM",
      icon: <Users className="w-6 h-6 text-terra-cotta" />,
      activities: [
        "Life skills workshops",
        "Value education sessions",
        "Cultural activities & music",
        "Community dinner",
      ],
      color: "border-terra-cotta",
      bg: "bg-terra-cotta/10",
    },
    {
      period: "Night",
      time: "9:00 PM - 10:30 PM",
      icon: <Moon className="w-6 h-6 text-charcoal-light" />,
      activities: [
        "Wind down & reflection",
        "Personal reading / journaling",
        "Planning for the next day",
        "Lights out for restorative sleep",
      ],
      color: "border-charcoal-light",
      bg: "bg-charcoal-light/20",
    },
  ];

  const facilities = [
    {
      icon: <Library className="w-8 h-8 text-saffron" />,
      title: "Study Halls",
      desc: "Quiet, dedicated spaces optimized for deep focus and academic excellence.",
    },
    {
      icon: <Utensils className="w-8 h-8 text-forest" />,
      title: "Sattvic Meals",
      desc: "Wholesome, vegetarian food prepared with cleanliness and care.",
    },
    {
      icon: <Wifi className="w-8 h-8 text-charcoal" />,
      title: "High-Speed Wi-Fi",
      desc: "Seamless connectivity for all your academic and research needs.",
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-terra-cotta" />,
      title: "Recreation Area",
      desc: "Space for yoga, light workouts, and relaxation to stay fit.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-charcoal-light" />,
      title: "Safe Environment",
      desc: "24/7 security and a supportive community that feels like family.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-forest" />,
      title: "Eco-Conscious Living",
      desc: "Practices that encourage sustainability and respect for nature.",
    },
  ];

  return (
    <main className="pt-20 bg-beige-soft">
      {/* Hero Section */}
      <Section className="bg-charcoal text-white relative overflow-hidden py-24">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-forest/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-saffron/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />

        <Container className="relative z-10 text-center">
          <span className="text-saffron font-bold tracking-widest uppercase text-sm mb-4 block">
            Living at BACE
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            A Rhythm of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">
              Growth & Balance
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hostel life here isn&#39;t just about accommodation. It&#39;s a
            designed lifestyle where routine strengthens discipline, discipline
            protects freedom, and freedom leads to excellence.
          </p>
        </Container>
      </Section>

      {/* Routine Timeline */}
      <Section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              A Day in the Life
            </h2>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              Our schedule is crafted to balance academic rigor with spiritual
              grounding and personal care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {routine.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 border-t-4 shadow-sm hover:shadow-xl transition-all duration-300 group ${item.color}`}
              >
                <div
                  className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-1">
                  {item.period}
                </h3>
                <div className="text-sm font-semibold text-saffron mb-4 tracking-wide">
                  {item.time}
                </div>
                <ul className="space-y-3">
                  {item.activities.map((activity, i) => (
                    <li
                      key={i}
                      className="flex items-start text-charcoal-light text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-beige-300 rounded-full mt-1.5 mr-2 shrink-0 group-hover:bg-saffron transition-colors" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Facilities Grid */}
      <Section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-6">
                Designed for <br />
                <span className="text-forest decoration-saffron decoration-4 underline underline-offset-4">
                  Holistic Living
                </span>
              </h2>
              <p className="text-lg text-charcoal-light mb-8 leading-relaxed">
                We provide more than just a bed. Our facilities are thoughtfully
                curated to support your academic goals while ensuring physical
                comfort and mental peace.
              </p>

              <div className="bg-beige-soft p-8 rounded-2xl border-l-4 border-charcoal">
                <h3 className="font-bold text-charcoal text-xl mb-3">
                  Philosophy of Living
                </h3>
                <p className="text-charcoal-light italic">
                  "We encourage a substance-free, vegetarian lifestyle not as a
                  restriction, but as a pathway to higher consciousness, cleaner
                  health, and sharper focus."
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-beige-soft/50 backdrop-blur-sm p-6 rounded-xl border border-beige-200 hover:border-saffron/50 hover:bg-white transition-all duration-300"
                >
                  <div className="mb-4">{facility.icon}</div>
                  <h3 className="font-bold text-charcoal mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    {facility.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

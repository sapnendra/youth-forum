import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Link from "next/link";
import Button from "@/components/ui/Button";
import {
  ShieldCheck,
  HeartHandshake,
  BookOpen,
  Users,
  Brain,
  MessageCircle,
  Quote,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Parents - BACE",
  description:
    "Why parents trust BACE to guide and protect their children during crucial college years.",
};

export default function ParentsPage() {
  const reasons = [
    {
      title: "Safety & Security",
      desc: "A strictly substance-free environment with 24/7 supervision and clear boundaries.",
      icon: <ShieldCheck className="w-8 h-8 text-forest" />,
    },
    {
      title: "Academic Focus",
      desc: "Dedicated study hours and a distraction-free atmosphere that boosts performance.",
      icon: <BookOpen className="w-8 h-8 text-saffron" />,
    },
    {
      title: "Character Building",
      desc: "We cultivate integrity, discipline, and emotional intelligence alongside grades.",
      icon: <Brain className="w-8 h-8 text-charcoal" />,
    },
    {
      title: "Mentorship",
      desc: "Experienced mentors provide personal guidance through life's challenges.",
      icon: <Users className="w-8 h-8 text-terra-cotta" />,
    },
    {
      title: "Open Communication",
      desc: "Regular updates and channels for you to stay involved in your child's progress.",
      icon: <MessageCircle className="w-8 h-8 text-gold-dark" />,
    },
    {
      title: "Holistic Balance",
      desc: "Supporting career ambitions while nurturing spiritual and inner growth.",
      icon: <HeartHandshake className="w-8 h-8 text-saffron" />,
    },
  ];

  const outcomes = [
    "More calm and composed behavior",
    "Improved focus on studies",
    "Better time management skills",
    "Respectful communication",
    "Natural development of discipline",
    "Clarity about life goals",
    "Reduced stress and anxiety",
    "Better decision-making abilities",
  ];

  const faqs = [
    {
      q: "Will this affect my child's academics?",
      a: "No. BACE actively supports academic excellence. Students have dedicated study hours, a distraction-free environment, and peer study groups. Many parents report improved grades after joining.",
    },
    {
      q: "Is the environment too restrictive?",
      a: "BACE is value-based, not restrictive without reason. We explain the 'why' behind every guideline. Students from all backgrounds are welcome, and no forced beliefs are imposed.",
    },
    {
      q: "Can my child pursue their career goals?",
      a: "Absolutely. BACE encourages students to excel in their chosen careers. We teach balance between outer achievement and inner growth, not abandonment of ambitions.",
    },
    {
      q: "How are discipline issues handled?",
      a: "Through understanding and mentorship, not harsh punishment. We address root causes, involve parents when needed, and guide students to make better choices.",
    },
  ];

  return (
    <main className="pt-20 bg-beige-soft">
      {/* Hero Section */}
      <Section className="bg-charcoal text-white relative overflow-hidden py-24">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-saffron/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <Container className="relative z-10 text-center">
          <span className="text-saffron font-bold tracking-widest uppercase text-sm mb-4 block">
            Partnering in Parenting
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Peace of Mind <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">
              For You
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your child's college years are formative. We provide the mentorship,
            structure, and values that ensure they don't just survive away from
            home—they thrive.
          </p>
        </Container>
      </Section>

      {/* Why Choose BACE - Grid */}
      <Section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Why Parents Trust Us
            </h2>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              We understand your concerns. Here is how BACE creates a safe haven
              for your child.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-beige-200 group"
              >
                <div className="mb-6 bg-beige-soft w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 font-serif">
                  {item.title}
                </h3>
                <p className="text-charcoal-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonial / Outcomes Section */}
      <Section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fcdcd3_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />

        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block p-3 bg-saffron/10 rounded-full mb-6">
                <Quote className="w-8 h-8 text-saffron" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-8">
                The BACE <br />
                <span className="text-saffron">Difference</span>
              </h2>
              <p className="text-xl text-charcoal-light mb-8 italic">
                "Since joining BACE, I've seen a remarkable change in my son. He
                is more responsible, respectful, and focused. It feels like he
                has found a second family."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div>
                  <div className="font-bold text-charcoal">Mrs. Patil</div>
                  <div className="text-sm text-charcoal-light">
                    Mother of 2nd Year Student
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-beige-soft p-8 md:p-12 rounded-3xl border border-beige-300">
              <h3 className="text-xl font-bold text-charcoal mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-forest" />
                Positive Changes Parents Notice
              </h3>
              <div className="grid gap-4">
                {outcomes.map((change, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-saffron shrink-0" />
                    <span className="text-charcoal font-medium">{change}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-24 bg-beige-soft">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-10 text-center">
              Common Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-charcoal mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-charcoal-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center bg-charcoal text-white rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 relative z-10">
                Want to know more?
              </h3>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
                We encourage you to visit our campus, meet the mentors, and see
                the environment yourself. Your peace of mind is our priority.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    className="bg-saffron text-white border-none hover:bg-saffron/90 w-full sm:w-auto"
                  >
                    Schedule a Visit
                  </Button>
                </Link>
                <Link href="/admissions">
                  <Button
                    variant="secondary"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-charcoal w-full sm:w-auto"
                  >
                    Admission Process
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

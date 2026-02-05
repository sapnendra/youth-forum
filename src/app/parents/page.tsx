import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "For Parents - BACE",
  description:
    "Why parents trust BACE to guide and protect their children during crucial college years.",
};

export default function ParentsPage() {
  return (
    <>
      <main className="pt-20">
        <Section background="white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
                For Parents
              </h1>
              <p className="text-xl text-charcoal-light leading-relaxed mb-12">
                Your child's college years are formative. BACE provides the
                guidance, structure, and values that help them thrive.
              </p>

              {/* Why Parents Choose BACE */}
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-saffron mb-6">
                  Why Parents Choose BACE
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Safety First",
                      desc: "A substance-free, value-based environment with clear boundaries and 24/7 supervision.",
                    },
                    {
                      title: "Academic Support",
                      desc: "Dedicated study hours, quiet environment, and peer support that enhances academic performance.",
                    },
                    {
                      title: "Character Development",
                      desc: "Beyond grades, we focus on integrity, discipline, emotional intelligence, and moral clarity.",
                    },
                    {
                      title: "Mentorship & Guidance",
                      desc: "Experienced mentors provide personal guidance during vulnerable years, addressing emotional and personal challenges.",
                    },
                    {
                      title: "Transparent Communication",
                      desc: "Regular updates, open communication channels, and involvement in your child's progress.",
                    },
                    {
                      title: "Balanced Approach",
                      desc: "We support career goals while nurturing inner growth — not asking students to abandon ambitions.",
                    },
                  ].map((reason, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-beige-soft p-6 rounded-lg"
                    >
                      <div className="w-8 h-8 bg-forest rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-charcoal mb-2">
                          {reason.title}
                        </h3>
                        <p className="text-charcoal-light leading-relaxed">
                          {reason.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Parents Notice */}
              <div className="mb-12 bg-white p-8 rounded-lg shadow-lg border-2 border-beige">
                <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
                  What Parents Notice After Their Children Join BACE
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "More calm and composed behavior",
                    "Improved focus on studies",
                    "Better time management skills",
                    "Respectful communication",
                    "Natural development of discipline",
                    "Clarity about life goals",
                    "Reduced stress and anxiety",
                    "Better decision-making abilities",
                  ].map((change, index) => (
                    <div key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-forest mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-charcoal-light">{change}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs for Parents */}
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-saffron mb-6">
                  Common Questions from Parents
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "Will this affect my child's academics negatively?",
                      a: "No. BACE actively supports academic excellence. Students have dedicated study hours, a distraction-free environment, and peer study groups. Many parents report improved grades after joining.",
                    },
                    {
                      q: "Is this too religious or restrictive?",
                      a: "BACE is value-based, not religiously restrictive. We explain the reasoning behind guidelines. Students from all backgrounds are welcome, and no forced beliefs or rituals are imposed.",
                    },
                    {
                      q: "Can my child pursue their career goals?",
                      a: "Absolutely. BACE encourages students to excel in their chosen careers. We teach balance between outer achievement and inner growth, not abandonment of ambitions.",
                    },
                    {
                      q: "How do you handle discipline issues?",
                      a: "Through understanding and mentorship, not harsh punishment. We address root causes, involve parents when needed, and guide students to make better choices.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-saffron/30 pl-6 py-3"
                    >
                      <h3 className="font-semibold text-charcoal mb-2">
                        {faq.q}
                      </h3>
                      <p className="text-charcoal-light leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center bg-saffron/5 p-10 rounded-lg border-2 border-saffron/20">
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  Want to Learn More?
                </h3>
                <p className="text-charcoal-light mb-6 max-w-2xl mx-auto">
                  We encourage parents to visit BACE, meet our mentors, and see
                  the environment firsthand. Your trust and peace of mind matter
                  to us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button variant="secondary" size="lg">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/admissions">
                    <Button variant="primary" size="lg">
                      Admission Process
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}

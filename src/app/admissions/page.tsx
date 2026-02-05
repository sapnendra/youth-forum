import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import RegistrationForm from "@/components/forms/RegistrationForm";

export const metadata: Metadata = {
  title: "Admissions - BACE",
  description:
    "Join BACE - Start your journey towards character, clarity, and consciousness.",
};

export default function AdmissionsPage() {
  return (
    <>
      <main className="pt-10">
        <Section background="white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
                Admissions
              </h1>
              <p className="text-xl text-charcoal-light leading-relaxed mb-12">
                Begin your journey with BACE. Fill out the registration form
                below, and we'll guide you through the admission process.
              </p>

              {/* Admission Process */}
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-saffron mb-6">
                  Admission Process
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Submit Registration Form",
                      desc: "Fill out the form below with accurate information.",
                    },
                    {
                      step: "2",
                      title: "Initial Contact",
                      desc: "Our team will reach out within 2-3 business days to schedule a meeting.",
                    },
                    {
                      step: "3",
                      title: "Meeting & Campus Visit",
                      desc: "Visit BACE, meet our mentors, tour the facilities, and ask questions.",
                    },
                    {
                      step: "4",
                      title: "Discussion with Parents",
                      desc: "We encourage parents to be involved in understanding BACE's environment and values.",
                    },
                    {
                      step: "5",
                      title: "Mutual Fit Assessment",
                      desc: "We ensure BACE is the right fit for the student, and the student is committed to our values.",
                    },
                    {
                      step: "6",
                      title: "Admission Confirmation",
                      desc: "Once both sides agree, admission is confirmed and move-in details are shared.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-beige-soft p-6 rounded-lg"
                    >
                      <div className="w-12 h-12 bg-saffron text-white rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-charcoal mb-1">
                          {item.title}
                        </h3>
                        <p className="text-charcoal-light text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div className="mb-12 bg-white border-2 border-beige p-8 rounded-lg">
                <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  Eligibility Criteria
                </h2>
                <ul className="space-y-2">
                  {[
                    "Currently enrolled in college or university",
                    "Open to learning and personal growth",
                    "Willing to follow a disciplined, value-based lifestyle",
                    "Respectful of community living principles",
                    "Committed to academic excellence",
                  ].map((criteria, index) => (
                    <li
                      key={index}
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
                      {criteria}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Registration Form */}
              <div className="bg-beige-soft p-8 rounded-lg">
                <h2 className="text-3xl font-serif font-bold text-charcoal mb-2 text-center">
                  Registration Form
                </h2>
                <p className="text-charcoal-light text-center mb-8">
                  Fields marked with <span className="text-saffron">*</span> are
                  required
                </p>
                <RegistrationForm />
              </div>

              {/* Additional Info */}
              <div className="mt-12 bg-forest/5 p-6 rounded-lg border-l-4 border-forest">
                <p className="text-charcoal-light text-sm">
                  <strong className="textcharcoal">Note:</strong> Submission of
                  this form does not guarantee admission. BACE follows a
                  mutual-fit approach where both the student and the
                  organization assess whether this is the right environment for
                  growth.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}

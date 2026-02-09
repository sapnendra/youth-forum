import ReviewForm from "@/components/forms/ReviewForm";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Share Your Experience | BACE BYC",
  description:
    "Share your experience with BACE Bhaktivedanta Youth Center classes and programs.",
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <Section className="bg-charcoal text-white relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <Container className="relative z-10 text-center py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Share Your <span className="text-saffron">Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Your feedback helps us improve and inspire others. Let us know how
            our programs have impacted your life.
          </p>
        </Container>
      </Section>

      {/* Form Section */}
      <Section className="bg-beige-soft -mt-20 relative z-20 pb-24">
        <Container>
          <div className="max-w-2xl mx-auto">
            <ReviewForm />
          </div>
        </Container>
      </Section>
    </main>
  );
}

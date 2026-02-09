import dbConnect from "@/lib/mongodb";
import Review from "@/models/Review";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | BACE BYC",
  description:
    "Read what our students and participants say about BACE programs.",
};

async function getApprovedReviews() {
  await dbConnect();
  const reviews = await Review.find({ approved: true })
    .sort({ createdAt: -1 })
    .lean();

  return JSON.parse(JSON.stringify(reviews));
}

export default async function TestimonialsPage() {
  const reviews = await getApprovedReviews();

  return (
    <main className="min-h-screen pt-20 bg-beige-soft">
      {/* Hero Section */}
      <Section className="bg-charcoal text-white relative overflow-hidden py-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <Container className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Student <span className="text-saffron">Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Real experiences from students who have participated in our programs
            and transformed their lives.
          </p>
        </Container>
      </Section>

      {/* Reviews Grid */}
      <Section className="py-20">
        <Container>
          {reviews.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-charcoal-light font-serif italic">
                No reviews available yet. Be the first to share your experience!
              </p>
            </div>
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {reviews.map((review: any) => (
                <div
                  key={review._id}
                  className="break-inside-avoid bg-white p-8 rounded-2xl shadow-sm border border-beige-200 hover:shadow-md transition-shadow duration-300"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "text-saffron fill-current"
                            : "text-gray-200"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-charcoal-light mb-6 text-lg leading-relaxed italic relative">
                    <span className="text-6xl text-beige-200 absolute -top-4 -left-2 font-serif select-none">
                      "
                    </span>
                    <p className="relative z-10">{review.review}</p>
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-beige-100">
                    <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center text-saffron font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal font-serif">
                        {review.name}
                      </h4>
                      <p className="text-xs text-charcoal-light uppercase tracking-wider font-medium">
                        {review.college}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}

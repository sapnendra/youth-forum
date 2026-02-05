import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Events & Courses - BACE",
  description:
    "Explore BACE courses including Discover Yourself, Bhagavad Gita studies, workshops, retreats, and campus programs.",
};

export default function EventsCoursesPage() {
  const coreCourses = [
    {
      name: "Discover Yourself (DYS)",
      duration: "4-6 weeks",
      audience: "First-year and curious students",
      topics: [
        "Who am I beyond my degree and identity?",
        "Is there a soul?",
        "Science vs spirituality",
        "Purpose of life and happiness",
      ],
      description:
        "A foundational course exploring life's big questions through logical, discussion-based learning.",
    },
    {
      name: "Bhagavad Gita for Modern Youth",
      duration: "Weekly sessions / Semester-long",
      audience: "College & university students",
      topics: [
        "Handling stress, fear, and confusion",
        "Making wise decisions",
        "Duty, discipline, and detachment",
        "Leadership and responsibility",
      ],
      description:
        "Practical exploration of the Gita as a life manual for modern challenges.",
    },
  ];

  const workshops = [
    {
      title: "Mind Management & Stress Control",
      description:
        "Learn practical tools to manage exam pressure, improve focus, and reduce anxiety.",
    },
    {
      title: "Values, Ethics & Character Building",
      description:
        "Interactive sessions on integrity, self-discipline, healthy habits, and responsible freedom.",
    },
  ];

  const experiential = [
    {
      title: "Youth Retreats & Camps",
      description:
        "Short retreats combining reflection, learning, cultural activities, and guided discussions.",
    },
    {
      title: "Cultural & Festival Programs",
      description:
        "Educational programs around festivals like Janmashtami and Gita Jayanti.",
    },
  ];

  const campus = [
    {
      title: "College Outreach Programs",
      description:
        "Guest lectures, seminars, and value-education sessions conducted in colleges.",
    },
    {
      title: "Youth Discussion Circles",
      description:
        "Regular small-group sessions for open dialogue, questions, and peer learning.",
    },
  ];

  return (
    <>
      <main className="pt-20">
        {/* Hero */}
        <Section background="beige">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal mb-6">
                Events & Courses
              </h1>
              <p className="text-xl text-charcoal-light leading-relaxed">
                BACE designs its programs specifically for college students,
                blending intellectual depth, practical relevance, and
                experiential learning.
              </p>
            </div>
          </Container>
        </Section>

        {/* Core Courses */}
        <Section background="white">
          <Container>
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
              Core Courses
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {coreCourses.map((course, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <h3 className="text-2xl font-semibold text-saffron mb-3">
                    {course.name}
                  </h3>
                  <p className="text-charcoal-light mb-4">
                    {course.description}
                  </p>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-sm">
                      <span className="font-semibold text-charcoal mr-2">
                        ⏱ Duration:
                      </span>
                      <span className="text-charcoal-light">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-semibold text-charcoal mr-2">
                        🎯 Ideal for:
                      </span>
                      <span className="text-charcoal-light">
                        {course.audience}
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h4 className="font-semibold text-charcoal mb-2 text-sm">
                      Key Topics:
                    </h4>
                    <ul className="space-y-1">
                      {course.topics.map((topic, i) => (
                        <li
                          key={i}
                          className="text-sm text-charcoal-light flex items-start"
                        >
                          <span className="text-forest mr-2">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* Workshops */}
        <Section background="soft">
          <Container>
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
              Skill-Based Workshops
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {workshops.map((workshop, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-charcoal-light text-sm">
                    {workshop.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Experiential Learning */}
        <Section background="white">
          <Container>
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
              Experiential Learning Events
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {experiential.map((event, index) => (
                <div key={index} className="bg-beige p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    {event.title}
                  </h3>
                  <p className="text-charcoal-light text-sm">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Campus Engagement */}
        <Section background="beige">
          <Container>
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-12 text-center">
              Campus & Community Engagement
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {campus.map((program, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">
                    {program.title}
                  </h3>
                  <p className="text-charcoal-light text-sm">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                Interested in Joining?
              </h3>
              <p className="text-charcoal-light mb-6">
                All programs are designed around academic schedules with no
                forced beliefs or rituals. Open to all backgrounds.
              </p>
              <Link href="/admissions">
                <Button variant="primary" size="lg">
                  Register Your Interest
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}

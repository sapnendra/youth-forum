import Link from "next/link";
import Container from "../ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/about", label: "About BACE" },
    { href: "/events-courses", label: "Events & Courses" },
    { href: "/hostel-life", label: "Hostel Life" },
    { href: "/parents", label: "For Parents" },
    { href: "/gallery", label: "Gallery" },
    { href: "/admissions", label: "Admissions" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-charcoal text-white">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">BACE</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Bhaktivedanta Academic and Cultural Education - A Vedic hostel and
              youth development platform nurturing character, clarity, and
              consciousness in college students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <p className="text-sm text-gray-300 mb-2">
              Have questions? We're here to help.
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm text-saffron hover:text-saffron-light transition-colors"
            >
              Contact Us →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} BACE. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Design and Developed by{" "}
              <span className="text-blue-400"><a href="https://sapnendra.tech" target="_blank">Sapnendra</a></span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

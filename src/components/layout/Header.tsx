"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events-courses", label: "Events & Courses" },
    { href: "/hostel-life", label: "Hostel Life" },
    { href: "/parents", label: "Parents" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  // On non-homepage, always show solid background
  const showSolidBg = !isHomePage || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidBg ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* SVG Logo */}
            <div
              className={`relative w-44 h-14 transition-colors duration-300`}
            >
              <svg
                viewBox="0 0 300 80"
                className={`w-full h-full`}
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* BACE Text - Adjusted Position */}
                <text
                  x="80"
                  y="50"
                  fontFamily="serif"
                  fontWeight="bold"
                  fontSize="65"
                  letterSpacing="1"
                  className={showSolidBg ? "fill-saffron" : "fill-white"}
                >
                  BACE
                </text>
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  showSolidBg
                    ? "text-charcoal hover:text-saffron"
                    : "text-white hover:text-beige"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/admissions">
              <Button variant="primary" size="sm">
                Register Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full transition-all ${
                  showSolidBg ? "bg-charcoal" : "bg-white"
                }`}
              />
              <span
                className={`block h-0.5 w-full transition-all ${
                  showSolidBg ? "bg-charcoal" : "bg-white"
                }`}
              />
              <span
                className={`block h-0.5 w-full transition-all ${
                  showSolidBg ? "bg-charcoal" : "bg-white"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-charcoal hover:text-saffron font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/admissions" onClick={() => setIsMenuOpen(false)}>
                <Button variant="primary" size="sm" className="w-full">
                  Register Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

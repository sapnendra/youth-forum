"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../ui/Button";
import Container from "../ui/Container";

import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    { href: "/gallery", label: "Gallery" },
    {
      label: "Programs",
      dropdown: [
        { href: "/iskcon-youth-forum", label: "ISKCON Youth Forum" },
        { href: "/iskcon-girls-forum", label: "ISKCON Girls Forum" },
        { href: "/iskcon-kids-forum", label: "ISKCON Kids Forum" },
        { href: "/seminars", label: "Lectures & Seminars" },
      ],
    },
    {
      label: "Campus Life",
      dropdown: [
        { href: "/alumni", label: "Our Alumni" },
        { href: "/hostel-life", label: "Hostel Life" },
        { href: "/events-courses", label: "Events & Courses" },
        { href: "/parents-view", label: "What Parents Says" },
      ],
    },
    {
      label: "About",
      dropdown: [
        { href: "/about", label: "About Us" },
        { href: "/testimonials", label: "Student Stories" },
        { href: "/reviews", label: "Share Experience" },
      ],
    },
    { href: "/contact", label: "Contact" },
  ];

  // On non-homepage, always show solid background
  const showSolidBg = !isHomePage || isScrolled;

  // Toggle Dropdown for Mobile
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidBg ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="BACE Home"
          >
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
                  x="0"
                  y="58"
                  fontFamily="serif"
                  fontWeight="bold"
                  fontSize="65"
                  letterSpacing="1"
                  className={showSolidBg ? "fill-saffron" : "fill-white"}
                >
                  BACE
                </text>
                <text
                  x="190"
                  y="58"
                  fontFamily="serif"
                  fontWeight="bold"
                  fontSize="25"
                  letterSpacing="1"
                  className={showSolidBg ? "fill-saffron" : "fill-white"}
                >
                  BYC
                </text>
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = link.dropdown
                ? link.dropdown.some((item) => item.href === pathname)
                : pathname === link.href;

              return link.dropdown ? (
                <div key={link.label} className="relative group">
                  <button
                    className={`flex items-center space-x-1 text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full border ${
                      isActive
                        ? showSolidBg
                          ? "bg-saffron/10 text-saffron border-saffron/20"
                          : "bg-white/10 text-white border-white/20 backdrop-blur-sm"
                        : showSolidBg
                          ? "border-transparent text-charcoal hover:bg-saffron/5 hover:text-saffron"
                          : "border-transparent text-white hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-xl shadow-xl p-2 border border-black/5">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                            pathname === item.href
                              ? "bg-saffron/10 text-saffron font-medium"
                              : "text-charcoal hover:bg-beige/50 hover:text-saffron"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href!}
                  href={link.href!}
                  className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full border ${
                    isActive
                      ? showSolidBg
                        ? "bg-saffron/10 text-saffron border-saffron/20"
                        : "bg-white/10 text-white border-white/20 backdrop-blur-sm"
                      : showSolidBg
                        ? "border-transparent text-charcoal hover:bg-saffron/5 hover:text-saffron"
                        : "border-transparent text-white hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
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
          <div
            className={`lg:hidden mt-4 pb-4 px-4 rounded-xl ${
              showSolidBg ? "" : "bg-white/95 backdrop-blur-md shadow-lg py-4"
            }`}
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = link.dropdown
                  ? link.dropdown.some((item) => item.href === pathname)
                  : pathname === link.href;

                return link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className={`w-full flex items-center justify-between font-medium py-2 transition-colors ${
                        isActive
                          ? "text-saffron"
                          : "text-charcoal hover:text-saffron"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {/* Mobile Dropdown Content */}
                    {activeDropdown === link.label && (
                      <div className="pl-4 space-y-2 bg-beige/30 rounded-lg p-2 mb-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block text-sm py-1 ${
                              pathname === item.href
                                ? "text-saffron font-semibold"
                                : "text-charcoal/80 hover:text-saffron"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href!}
                    href={link.href!}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block font-medium py-2 transition-colors ${
                      isActive
                        ? "text-saffron"
                        : "text-charcoal hover:text-saffron"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Link href="/admissions" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" size="sm" className="w-full">
                    Register Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

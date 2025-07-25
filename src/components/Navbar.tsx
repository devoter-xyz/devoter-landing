"use client";

import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#workflow" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/logo_text.svg"
            alt="Logo"
            width={50}
            height={30}
            className="object-contain w-32"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className="relative group font-medium"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-gradient-to-r from-secondary to-primary" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-foreground relative h-6 w-6"
          aria-label="Toggle mobile menu"
        >
          <Menu
            size={24}
            className={clsx(
              "transition-all duration-300 ease-in-out",
              isMobileMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
            )}
          />
          <X
            size={24}
            className={clsx(
              "absolute top-0 left-0 transition-all duration-300 ease-in-out",
              isMobileMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"
            )}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="px-4 pb-4 pt-2 backdrop-blur-xl bg-black/80 rounded-b-lg space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className="block text-white font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

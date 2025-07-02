"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function Navigation() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  //   toggle menu
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <nav className=" mx-4 md:mx-12 lg:mx-32 my-4 relative z-50">
      <div
        className="flex justify-between items-center
      "
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={160}
          height={160}
          className="object-contain h-32 w-auto cursor-pointer"
        />
        {/* Desktop nav links */}
        <div className=" max-sm:hidden space-x-8 font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-[#33B3A9] transition-colors ${
                pathname === link.href ? "text-[#01796f]" : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Hamburger icon (mobile only) */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Menu">
          {menuOpen ? (
            <X className="w-8 h-8" color="#01796f" />
          ) : (
            <Menu className="w-8 h-8" color="#01796f" />
          )}
        </button>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col gap-4 mt-4 bg-white shadow-md rounded-md p-4 font-semibold absolute z-50 top-full left-0 w-full"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)} // close on click
                className={`hover:text-[#33B3A9] transition-colors ${
                  pathname === link.href ? "text-[#01796f]" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navigation;

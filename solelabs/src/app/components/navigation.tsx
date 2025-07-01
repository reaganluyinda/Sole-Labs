"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <nav className=" mx-4 md:mx-12 lg:mx-32 my-4">
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
        <div className="space-x-8 font-semibold">
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
      </div>
    </nav>
  );
}

export default Navigation;

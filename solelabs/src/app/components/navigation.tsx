import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <nav className="border-2 py-8 mx-4 md:mx-12 lg:mx-32 my-4">
      <div className="flex justify-between">
        <h1>LOGO</h1>
        <div className="space-x-8 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

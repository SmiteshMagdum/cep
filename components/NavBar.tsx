"use client";

import { navBarValue } from "@/lib/navbar";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background">
      <div className="flex items-center justify-between px-5 py-3">
        
        {/* Website Name */}
        <Link
          href="/"
          className="font-mono text-lg font-medium text-white-1 hover:text-green-2"
        >
          Learn Basic
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden font-mono text-[14px] text-gray-1 md:flex md:gap-10">
          {navBarValue.map((nav) => (
            <Link
              className="hover:text-green-2"
              href={nav.href}
              key={nav.text}
            >
              {nav.text}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-1 hover:text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex text-center flex-col border-t border-line px-5 py-3 font-mono text-[14px] text-gray-1 md:hidden">
          {navBarValue.map((nav) => (
            <Link
              key={nav.text}
              href={nav.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-line py-3 hover:text-green-2 last:border-none"
            >
              {nav.text}
            </Link>
          ))}
        </div>
      )}

      <hr className="border-line" />
    </nav>
  );
}

export default NavBar;
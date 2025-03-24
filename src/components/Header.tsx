"use client";

import { useState } from "react";
import { navItems } from "@/utils/nav-items";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between md:px-6 py-4 w-full flex-wrap md:flex-nowrap relative">
      {/* logo */}
      <div className="md:w-60 px-4 md:px-0 flex justify-center md:justify-start">
        <Image
          src="/assets/logo.png"
          alt=""
          width={320}
          height={180}
          className="w-32"
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl px-4 transition-transform duration-300 hover:scale-110"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navbar */}
      <nav
        className={`absolute top-16 left-0 w-full bg-background md:static md:w-auto md:bg-transparent flex flex-col md:flex-row items-center gap-6 uppercase font-medium transition-all duration-300 ease-in-out z-50 pb-8 shadow-xl ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        {navItems?.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className="py-2 md:py-0 transition-colors duration-300 hover:text-primary uppercase"
          >
            {item.name}
          </Link>
        ))}

        <div className="w-full md:w-auto flex justify-center md:justify-end mt-2 md:mt-0">
          <button className="w-60 bg-primary h-12 rounded transition-all duration-300 hover:bg-opacity-80 hover:bg-primary/80 cursor-pointer">
            See Pricing
          </button>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center gap-6">
        {navItems?.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className={`py-2 transition-colors duration-300 hover:text-primary uppercase font-medium tracking-wide ${
              item.id === 1 && "text-primary"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <div className="w-full md:w-auto hidden md:flex justify-center md:justify-end mt-4 md:mt-0">
        <button className="w-60 bg-primary h-12 rounded transition-all duration-300 hover:bg-opacity-80 hover:bg-primary/80 cursor-pointer">
          See Pricing
        </button>
      </div>
    </header>
  );
}

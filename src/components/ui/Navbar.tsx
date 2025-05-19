"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Wallet } from "lucide-react";
import RoundedIconButton from "./RoundedIconButton";
import LanguageSelector from "./LanguageSelector";

const navLinks = [
  "Home",
  "Earn",
  "IDO",
  "Help",
  "Charity",
  "Team",
  "My Account",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative z-50">
        {/* Left section */}
        <div className="flex items-center gap-6">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/navbar/logo.svg" alt="Logo" width={80} height={30} />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  href="/"
                  className={`hover:text-[#2E2396] transition ${
                    link === "Home" ? "text-[#2E2396] font-semibold" : ""
                  }`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <RoundedIconButton
            text="Connect Wallet"
            Icon={Wallet}
            iconSize={16}
          />
          <LanguageSelector />
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-[5000] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } rounded-r-xl`}
      >
        <div className="p-4">
          {/* Logo */}
          {/* <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="mb-6 inline-block"
          >
            <Image src="/navbar/logo.svg" alt="Logo" width={80} height={30} />
          </Link> */}

          {/* Nav Links */}
          <ul className="flex flex-col gap-5 mt-20 text-lg font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`block hover:text-[#2E2396] transition ${
                    link === "Home" ? "text-[#2E2396] font-semibold" : ""
                  }`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-[4000] md:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Navbar;

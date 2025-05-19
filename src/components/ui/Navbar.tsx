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
      {/* Main nav container - centered with max-width */}
      <div className="mx-auto max-w-[1440px] px-8">
        <nav className="flex justify-between items-center py-3 md:py-4 relative z-50">
          {/* Left section - logo and nav */}
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 cursor-pointer"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Logo - larger on desktop */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/navbar/logo.svg"
                alt="Logo"
                width={80}
                height={30}
                className="w-20 md:w-24"
              />
            </Link>

            {/* Desktop nav links - larger gaps on bigger screens */}
            <ul className="hidden md:flex gap-6 lg:gap-8 text-sm md:text-base font-medium text-gray-700">
              {navLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="/"
                    className={`hover:text-[#2E2396] transition-colors duration-200 ${
                      link === "Home" ? "text-[#2E2396] font-semibold" : ""
                    }`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right actions - larger on desktop */}
          <div className="flex items-center gap-3 sm:gap-4">
            <RoundedIconButton
              text="Connect Wallet"
              Icon={Wallet}
              iconSize={16}
              className="text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5"
            />
            <LanguageSelector />
          </div>
        </nav>
      </div>

      {/* Mobile menu - smoother transitions */}
      <div
        className={`md:hidden fixed inset-y-0 left-0 w-4/5 max-w-xs bg-white shadow-xl z-[5000] transition-all duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 h-full flex flex-col">
          {/* Mobile header with close button */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/navbar/logo.svg"
                alt="Logo"
                width={80}
                height={30}
                className="w-20"
              />
            </Link>
            <button onClick={toggleMenu} className="p-2">
              <X size={28} />
            </button>
          </div>

          {/* Mobile nav links with better spacing */}
          <ul className="flex-1 flex flex-col gap-5 text-lg font-medium text-gray-700 overflow-y-auto">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 hover:text-[#2E2396] transition-colors ${
                    link === "Home" ? "text-[#2E2396] font-semibold" : ""
                  }`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile footer actions */}
          <div className="mt-auto pt-6 border-t border-gray-100">
            <RoundedIconButton
              text="Connect Wallet"
              Icon={Wallet}
              iconSize={18}
              className="w-full justify-center py-3 text-base"
            />
            <div className="mt-4">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop - better transition */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[4000] md:hidden transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Navbar;

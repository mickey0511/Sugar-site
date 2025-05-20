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
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_6px_16px_rgba(46,35,150,0.06)]">
      <div className="mx-auto lg:max-w-[1800px] w-[100%] px-6 ">
        <nav className="flex items-center justify-between py-3 md:py-4">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-4 md:gap-6 xl:gap-10">
          {/* <div className="flex items-center gap-6 lg:gap-10"> */}
            {/* Mobile toggle */}
            <button
              className="lg:hidden text-gray-700"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/navbar/logo.svg"
                alt="Logo"
                width={80}
                height={30}
                className="w-20 md:w-24"
              />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex gap-4 xl:gap-6 text-[clamp(0.75rem,2vw,1rem)] font-medium font-poppins text-gray-700">

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

          {/* Right: Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <RoundedIconButton
              text="Connect Wallet"
              Icon={Wallet}
              iconSize={16}
              className="text-[clamp(0.75rem,2vw,1rem)] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5"
            />

            <LanguageSelector />
          </div>
        </nav>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-[5000] top-auto w-[200px] h-fit rounded-br-[30px] max-w-xs bg-white shadow-[0_6px_16px_rgba(46,35,150,0.06)] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 h-full flex flex-col">
          {/* <div className="flex justify-between items-center mb-8">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/navbar/logo.svg"
                alt="Logo"
                width={80}
                height={30}
                className="w-20"
              />
            </Link>
            <button onClick={toggleMenu}>
              <X size={28} />
            </button>
          </div> */}

          <ul className="flex-1 flex flex-col gap-2 text-lg font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 hover:text-[#2E2396] ${
                    link === "Home" ? "text-[#2E2396] font-semibold" : ""
                  }`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* <div className="mt-auto pt-6 border-t border-gray-100">
            <RoundedIconButton
              text="Connect Wallet"
              Icon={Wallet}
              iconSize={18}
              className="w-full justify-center py-3 text-base"
            />
            <div className="mt-4">
              <LanguageSelector />
            </div>
          </div> */}
        </div>
      </div>

      {/* Mobile backdrop */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 z-[4000] bg-black bg-opacity-50 transition-opacity duration-300 md:hidden"
          onClick={toggleMenu}
        />
      )} */}
    </header>
  );
};

export default Navbar;

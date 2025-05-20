"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Wallet } from "lucide-react";
import RoundedIconButton from "./RoundedIconButton";
import LanguageSelector from "./LanguageSelector";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Earn",
    href: "/earn",
  },
  {
    name: "IDO",
    href: "/ido",
  },
  {
    name: "Help",
    href: "/help",
  },
  {
    name: "Charity",
    href: "/charity",
  },
  {
    name: "Team",
    href: "/team",
  },
  {
    name: "My Account",
    href: "/account",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_6px_16px_rgba(46,35,150,0.06)]">
      <div className="mx-auto max-w-[1800px] px-6 ">
        <nav className="flex items-center justify-between py-3 md:py-4">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-4 md:gap-6 xl:gap-10">
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
              {navLinks.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className={`hover:text-[#2E2396] transition-colors duration-200 ${
                      pathname === link.href
                        ? "text-[#2E2396] font-semibold"
                        : ""
                    }`}
                  >
                    {link.name}
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
      {isOpen && (
        <div
          className={`lg:hidden absolute top-full left-0 z-40 w-[200px] bg-white rounded-br-[30px] shadow-md border-t border-gray-100 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col px-6 py-4 gap-5 text-base font-medium text-gray-700">
            {navLinks.map((link, id) => (
              <li key={id}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block hover:text-[#2E2396] ${
                    pathname === link.href
                      ? "text-[#2E2396] font-semibold"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

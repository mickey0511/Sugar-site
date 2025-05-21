"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Wallet } from "lucide-react";
import RoundedIconButton from "./RoundedIconButton";
import LanguageSelector from "./LanguageSelector";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Earn", href: "/earn" },
  { name: "IDO", href: "/ido" },
  { name: "Help", href: "/help" },
  { name: "Charity", href: "/charity" },
  { name: "Team", href: "/team" },
  { name: "My Account", href: "/account" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null); // ✅ Button ref to avoid self-close

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // ✅ Click outside detection with delay
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      timer = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 0); // delay to prevent immediate close
    }

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full my-auto bg-white shadow-[0_6px_16px_rgba(46,35,150,0.06)]">
      <div className="px-25 max-md:px-5 max-[1170px]:pl-8">
        <nav className="flex items-center justify-between h-[10vh] max-md:h-[7vh]">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-10 max-md:gap-5 ">
            {/* Mobile toggle */}
            <button
              ref={buttonRef} // ✅ Assign button ref
              className="min-[1170px]:hidden text-gray-700"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} className="max-md:size-5" /> : <Menu size={28} className="max-md:size-5" />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/navbar/logo.svg"
                alt="Logo"
                width={80}
                height={30}
                className="max-md:w-14"
              />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden min-[1170px]:flex gap-7 text-[clamp(0.75rem,2vw,1rem)] font-medium font-poppins text-gray-700">
              {navLinks.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className={`hover:text-[#2E2396] transition-colors duration-200 ${
                      pathname === link.href ? "text-[#2E2396] font-semibold" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <RoundedIconButton
              text="Connect Wallet"
              Icon={Wallet}
              iconSize={16}
              className="text-[clamp(0.75rem,2vw,1rem)] px-3"
            />
            <LanguageSelector />
          </div>
        </nav>
      </div>

      {/* Mobile menu drawer */}
      {isOpen && (
        <div
          ref={menuRef} // ✅ Attach menu ref
          className="lg:hidden absolute top-full left-0 z-40 w-[200px] bg-white rounded-br-[30px] shadow-md border-t border-gray-100 transition-transform duration-300"
        >
          <ul className="flex flex-col px-6 py-4 gap-5 text-base font-medium text-gray-700">
            {navLinks.map((link, id) => (
              <li key={id}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block hover:text-[#2E2396] ${
                    pathname === link.href ? "text-[#2E2396] font-semibold" : ""
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

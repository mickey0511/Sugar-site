import React from "react";
import { Send, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#362E94] text-white py-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            width={40}
            height={40}
            src="/navbar/logo.svg"
            alt="Sugar Logo"
            className="h-[101.37px] w-[122.16px]"
          />
        </div>

        {/* Tagline */}
        <p className="text-lg">Money Makes Life Good.</p>

        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {['Support', 'Earn', 'IDO', 'Help', 'Charity', 'Team', 'Investment'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:underline"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Stay In Touch */}
        <div className="space-y-4">
          <p className="font-medium">Stay In Touch</p>
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com/" aria-label="X (Twitter)">
              <Twitter className="h-6 w-6 hover:text-gray-300" />
            </a>
            <a href="https://t.me/" aria-label="Telegram">
              <Send className="h-6 w-6 hover:text-gray-300" />
            </a>
            <a href="https://discord.com/" aria-label="Discord">
              <Instagram className="h-6 w-6 hover:text-gray-300" />
              {/* <Instagram /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

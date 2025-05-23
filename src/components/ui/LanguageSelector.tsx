"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface LanguageOption {
  label: string;
  code: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { label: "EN", code: "en", flag: "/navbar/us.svg" },
  { label: "FR", code: "fr", flag: "/navbar/us.svg" },
  { label: "NG", code: "ng", flag: "/navbar/us.svg" },
];

const LanguageSelector = () => {
  const [selected, setSelected] = useState<LanguageOption>(languages[0]);
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleSelect = (lang: LanguageOption) => {
    setSelected(lang);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 pl-4 pr-2 py-2 max-md:py-1 max-md:pr-2 max-md:pl-2 bg-[#2E2396] text-white rounded-full text-sm font-medium  text-[clamp(0.75rem,2vw,1rem)]"
      >
        {selected.label}
        <Image
          src={selected.flag}
          alt={selected.label}
          width={20}
          height={14}
        />

        <span className="w-8 h-8 bg-white rounded-full max-md:size-6 flex items-center justify-center">
          <ChevronDown size={16} color="#2E2396"  />
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white rounded shadow-lg z-10 py-2 text-sm w-32">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="flex w-full items-center px-3 py-2 hover:bg-gray-100 gap-2"
            >
              <Image src={lang.flag} alt={lang.label} width={20} height={14} className="max-md:w-4 max-md:h-3" />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "./navBar";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sm:hidden relative">
      <button
        className="p-2 rounded-xl bg-neutral-900/95 border border-neutral-700/30 shadow-xl z-20"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={24} className="text-gray-300" /> : <Menu size={24} className="text-gray-300" />}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-neutral-900/95 border border-neutral-700/30 rounded-2xl shadow-xl z-30 flex flex-col animate-fade-in">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`
                  px-4 py-3 text-center text-sm font-medium transition-all duration-200 rounded-xl
                  ${
                    isActive
                      ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                      : "text-gray-400 hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-300 hover:bg-clip-text hover:text-transparent"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu; 
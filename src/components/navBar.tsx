"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { name: "About", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="
        flex flex-col sm:flex-row items-center
        bg-neutral-900/95 backdrop-blur-md
        border border-neutral-700/30
        rounded-2xl p-1.5
        shadow-xl shadow-black/20
        min-w-fit
      "
    >
      <div className="flex flex-col sm:flex-row w-full">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`
                flex-1 px-3 sm:px-4 py-2 sm:py-2.5 text-center
                text-sm sm:text-[15px] font-medium
                transition-all duration-200
                whitespace-nowrap
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
    </nav>
  );
};

export default NavBar;

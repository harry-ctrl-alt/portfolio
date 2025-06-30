import React from "react";
import { Linkedin, Github, Chrome, Twitter } from "lucide-react";

const SocialLinks: React.FC = () => {
  const links = [
    {
      icon: <Linkedin size={15} />,
      href: "https://linkedin.com/in/harrymurray",
      label: "LinkedIn",
    },
    {
      icon: <Github size={15} />,
      href: "https://github.com/harry-ctrl-alt",
      label: "GitHub",
    },
    {
      icon: <Chrome size={15} />,
      href: "https://harrymurray.dev",
      label: "Website",
    },
    {
      icon: <Twitter size={15} />,
      href: "https://twitter.com/harrymurray",
      label: "Twitter",
    },
  ];

  return (
    <div className="flex gap-2">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-8 h-8
            bg-neutral-800 
            border border-neutral-600 
            rounded-xl 
            flex items-center justify-center 
            text-gray-400
            hover:text-white 
            hover:bg-neutral-700
            transition-all duration-200
          "
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

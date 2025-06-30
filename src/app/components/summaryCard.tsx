import React, { ReactNode } from "react";
import IconBox from "./icon";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ icon, title, desc }) => {
  return (
    <div className="group relative h-full p-1 rounded-2xl transition-all duration-300 hover:scale-[1.02]">
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

      {/* Main card container */}
      <div
        className="
        relative h-full flex gap-4 p-6
        bg-gradient-to-br from-neutral-800/90 via-neutral-800/80 to-neutral-900/90
        backdrop-blur-sm
        rounded-2xl
        border border-neutral-700/50
        shadow-2xl shadow-black/30
        transition-all duration-300
        
        before:absolute before:inset-0 before:rounded-2xl
        before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent
        before:pointer-events-none
        
        after:absolute after:inset-0 after:rounded-2xl
        after:shadow-inner after:shadow-black/20
        after:pointer-events-none
        
        group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]
        group-hover:border-neutral-600/50
        group-hover:translate-y-[-2px]
      "
      >
        {/* Using the reusable IconBox component */}
        <IconBox size="md" variant="default" withHoverEffect>
          {icon}
        </IconBox>

        {/* Text container */}
        <div className="flex-1 flex flex-col gap-1">
          <h3
            className="
            text-lg font-semibold text-white
            transition-colors duration-300
            group-hover:text-blue-300
          "
          >
            {title}
          </h3>
          <p
            className="
            text-sm text-gray-400 leading-relaxed
            transition-colors duration-300
            group-hover:text-gray-300
          "
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;

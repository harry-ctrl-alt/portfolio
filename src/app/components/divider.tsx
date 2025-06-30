import React from "react";

const Divider = () => {
  return (
    <>
      <div className="relative w-20 h-1 mb-4 group">
        {/* Main gradient bar */}
        <div
          className="
      w-full h-full 
      bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500
      rounded-full
      shadow-lg shadow-blue-500/30
      transition-all duration-300
      group-hover:shadow-blue-500/50
      group-hover:shadow-xl
    "
        />

        {/* Subtle glow effect */}
        <div
          className="
      absolute inset-0 
      bg-gradient-to-r from-blue-500 to-purple-500
      rounded-full
      opacity-50 blur-sm
      transition-opacity duration-300
      group-hover:opacity-75
    "
        />

        {/* Inner highlight */}
        <div
          className="
      absolute inset-0 
      bg-gradient-to-r from-white/30 via-transparent to-transparent
      rounded-full
    "
        />
      </div>
    </>
  );
};

export default Divider;

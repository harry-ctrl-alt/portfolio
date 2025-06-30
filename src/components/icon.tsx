import React, { ReactNode } from "react";

interface IconBoxProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "secondary";
  withHoverEffect?: boolean;
  className?: string;
}

const IconBox: React.FC<IconBoxProps> = ({
  children,
  size = "md",
  variant = "default",
  withHoverEffect = true,
  className = "",
}) => {
  // Size classes
  const sizeClass =
    size === "sm" ? "w-10 h-10" : size === "lg" ? "w-14 h-14" : "w-12 h-12";

  // Base classes that are always applied
  const baseClass = `
    relative flex-shrink-0 ${sizeClass}
    flex items-center justify-center
    rounded-xl
    shadow-lg shadow-black/20
    transition-all duration-300
  `;

  // Variant-specific classes
  const variantClass =
    variant === "default"
      ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/20"
      : "bg-gradient-to-br from-neutral-700/20 to-neutral-600/20 border border-neutral-600/20";

  // Hover classes (only when withHoverEffect is true)
  const hoverClass =
    withHoverEffect && variant === "default"
      ? "group-hover:shadow-blue-500/20 group-hover:border-blue-400/30"
      : withHoverEffect && variant === "secondary"
      ? "group-hover:shadow-neutral-500/20 group-hover:border-neutral-500/30"
      : "";

  return (
    <div className={`${baseClass} ${variantClass} ${hoverClass} ${className}`}>
      <div
        className={`transition-transform duration-300 ${
          withHoverEffect ? "group-hover:scale-110" : ""
        }`}
      >
        {children}
      </div>

      {/* Icon glow - only for default variant */}
      {variant === "default" && (
        <div
          className={`
          absolute inset-0 rounded-xl bg-blue-400/20 blur-md 
          transition-opacity duration-300
          ${withHoverEffect ? "opacity-0 group-hover:opacity-50" : "opacity-0"}
        `}
        />
      )}
    </div>
  );
};

export default IconBox;

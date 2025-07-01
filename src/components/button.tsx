import React from "react";
import { FileText } from "lucide-react";
import { Title } from "../components/text";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  downloadUrl?: string; // Optional download URL
  fileName?: string; // Optional custom filename
  openInNewTab?: boolean; // Open in new tab instead of download
  disabled?: boolean; // Disabled state
  type?: "button" | "submit" | "reset"; // Button type
}

const Button = ({
  text,
  onClick,
  variant = "primary",
  icon,
  size = "md",
  downloadUrl,
  fileName,
  openInNewTab = false,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const baseStyles =
    "relative group flex items-center gap-2 rounded-lg transition-all duration-200 overflow-hidden";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantStyles = {
    primary: disabled
      ? "bg-blue-500/5 border border-blue-500/10 text-gray-500 cursor-not-allowed opacity-50"
      : "bg-blue-500/5 border border-blue-500/10 text-gray-300 hover:border-blue-400/30 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
    secondary: disabled
      ? "bg-gray-200/10 border border-gray-400/20 text-gray-600 cursor-not-allowed opacity-50"
      : "bg-gray-200/10 border border-gray-400/20 text-gray-400 hover:border-gray-300/30 hover:text-gray-200 hover:shadow-[0_0_20px_rgba(156,163,175,0.15)]",
    tertiary: disabled
      ? "bg-transparent border border-transparent text-gray-600 cursor-not-allowed opacity-50"
      : "bg-transparent border border-transparent text-blue-400 hover:bg-blue-500/5 hover:text-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
  };

  // Download or open function
  const handleAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Don't execute if disabled
    if (disabled) return;

    // For submit buttons, let the form handle the submission
    if (type === "submit") return;

    // Prevent default for non-submit buttons
    e.preventDefault();

    if (downloadUrl) {
      if (openInNewTab) {
        // Open in new tab
        window.open(downloadUrl, "_blank", "noopener,noreferrer");
      } else {
        // Download file
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = fileName || "download";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }

    // Call the original onClick if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={type === "submit" ? undefined : handleAction}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`}
    >
      {/* Subtle hover background - only show when not disabled */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-10 transition-opacity duration-200 ${
          disabled ? "opacity-0" : "group-hover:opacity-100"
        }`}
      />

      {/* Content */}
      {icon || <FileText size={iconSizes[size]} className="relative z-10" />}
      <Title textColour="inherit" className="relative z-10">
        {text}
      </Title>

      {/* Subtle blur glow - only show when not disabled */}
      <div
        className={`absolute inset-0 rounded-lg bg-blue-400/10 opacity-0 blur-md transition-opacity duration-200 ${
          disabled ? "opacity-0" : "group-hover:opacity-60"
        }`}
      />
    </button>
  );
};

export default Button;

import React from "react";

// Type definitions
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  bold?: boolean;
  textColour?: string;
  className?: string;
}

interface SubHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  large?: boolean;
  bold?: boolean;
  textColour?: string;
  className?: string;
}

interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  bold?: boolean;
  textColour?: string;
  className?: string;
}

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  bold?: boolean;
  textColour?: string;
  className?: string;
}

// Heading Component - 32px (text-3xl), optional bold
export const Heading: React.FC<HeadingProps> = ({
  children,
  bold = false,
  textColour = "text-white",
  className = "",
  ...props
}) => {
  const boldClass = bold ? "font-semibold" : "";
  return (
    <h1
      className={`text-[32px] ${boldClass} ${textColour} ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};

// SubHeading Component - 24px (text-2xl), optional large size 26px (text-3xl)
export const SubHeading: React.FC<SubHeadingProps> = ({
  children,
  large = false,
  bold = false,
  textColour = "text-white",
  className = "",
  ...props
}) => {
  const sizeClass = large ? "text-3xl" : "text-2xl";
  const boldClass = bold ? "font-bold" : "";
  return (
    <h2
      className={`${sizeClass} ${textColour} ${boldClass} ${className} `}
      {...props}
    >
      {children}
    </h2>
  );
};

// Body Component - 14px (text-sm), optional small size 12px (text-xs), optional bold
export const Body: React.FC<BodyProps> = ({
  children,
  size = "medium",
  bold = false,
  textColour = "text-white",
  className = "",
  ...props
}) => {
  const sizeClass =
    size === "small" ? "text-xs" : size === "large" ? "text-[15px]" : "text-sm";
  const boldClass = bold ? "font-bold" : "";

  return (
    <p
      className={`${sizeClass} ${boldClass} ${textColour} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

// Title Component - 18px (text-lg), optional bold
export const Title: React.FC<TitleProps> = ({
  children,
  bold = false,
  textColour = "text-white",
  className = "",
  ...props
}) => {
  const boldClass = bold ? "font-bold" : "";
  return (
    <h3
      className={`text-lg ${boldClass} ${textColour} ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`px-10 pb-10 pt-4 bg-neutral-900 border border-neutral-600 rounded-2xl relative ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const MyComponent: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-neutral-700 rounded-md px-2 py-1">
      <p className="text-white text-sm">{children}</p>
    </div>
  );
};

export default MyComponent;

import React from "react";
import { Body } from "./text";
import IconBox from "./icon";

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  label,
  value,
  className = "",
}) => {
  return (
    <div
      className={`group flex flex-row items-center rounded-2xl gap-4 w-full ${className}`}
    >
      <IconBox size="md" variant="default" withHoverEffect>
        {icon}
      </IconBox>
      <div className="flex flex-col overflow-hidden">
        <Body size="small" textColour="text-gray-400">
          {label}
        </Body>
        <Body className="truncate">{value}</Body>
      </div>
    </div>
  );
};

export default ContactItem;

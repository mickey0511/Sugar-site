import React from "react";
import { ArrowRight } from "lucide-react";

interface RoundedIconButtonProps {
  text: string;
  Icon?: React.ElementType;
  onClick?: () => void;
  className?: string;
  iconSize?: number;
  iconColor?: string;
}

const RoundedIconButton: React.FC<RoundedIconButtonProps> = ({
  text,
  Icon = ArrowRight,
  onClick,
  className = "",
  iconSize = 14,
  iconColor = "#2E2396",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between gap-2 pl-4 pr-2 py-2 rounded-full bg-[#2E2396] text-white font-medium transition hover:bg-[#241b78] ${className}`}
    >
      <span>{text}</span>
      <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
        <Icon size={iconSize} color={iconColor} />
      </span>
    </button>
  );
};

export default RoundedIconButton;

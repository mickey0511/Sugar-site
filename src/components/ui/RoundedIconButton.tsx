import React from "react";
import { ArrowRight } from "lucide-react";
import { useAppKit } from '@reown/appkit/react';
import { useAppKitAccount } from "@reown/appkit/react";
import ContextProvider from "@/app/context";

interface RoundedIconButtonProps {
  text: string;
  Icon?: React.ElementType;
  className?: string;
  iconSize?: number;
  iconColor?: string;
}

const truncateAddress = (address: string, chars = 4) => {
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
};

const RoundedIconButton: React.FC<RoundedIconButtonProps> = ({
  text,
  Icon = ArrowRight,
  className = "",
  iconSize = 14,
  iconColor = "#2E2396",
}) => {
  const { address, isConnected } = useAppKitAccount();
  const { open } = useAppKit();

  const displayText = isConnected && address
    ? truncateAddress(address)
    : text;

  return (
    <ContextProvider>
      <button
        onClick={() => open()}
        className={`flex items-center justify-between gap-2 pl-4 pr-2 py-2 max-md:py-1 max-md:px-2 rounded-full bg-[#2E2396] text-white font-medium transition hover:bg-[#241b78] ${className}`}
      
      >
        <span className="truncate">{displayText}</span>
        <span className="w-8 h-8 max-md:size-6 bg-white rounded-full flex items-center justify-center">
          <Icon size={iconSize} color={iconColor} />
        </span>
      </button>
    </ContextProvider>
  );
};

export default RoundedIconButton;

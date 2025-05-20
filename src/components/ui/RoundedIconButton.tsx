import React from "react";
import { ArrowRight } from "lucide-react";
// import { useDisconnect, useAppKit, useAppKitNetwork  } from '@reown/appkit/react'
import {  useAppKit  } from '@reown/appkit/react'
import ContextProvider from "@/app/context";

interface RoundedIconButtonProps {
  text: string;
  Icon?: React.ElementType;
  className?: string;
  iconSize?: number;
  iconColor?: string;
}

const RoundedIconButton: React.FC<RoundedIconButtonProps> = ({
  text,
  Icon = ArrowRight,
  className = "",
  iconSize = 14,
  iconColor = "#2E2396",
}) => {

// const { disconnect } = useDisconnect();
    const { open } = useAppKit();
    // const { switchNetwork } = useAppKitNetwork();

    // const handleDisconnect = async () => {
    //   try {
    //     await disconnect();
    //   } catch (error) {
    //     console.error("Failed to disconnect:", error);
    //   }
    // }

  return (
    <ContextProvider>
    <button
      onClick={()=>open()}
      className={`flex items-center justify-between gap-2 pl-4 pr-2 py-2 rounded-full bg-[#2E2396] text-white font-medium transition hover:bg-[#241b78] ${className}`}
    >
      <span>{text}</span>
      <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
        <Icon size={iconSize} color={iconColor} />
      </span>
    </button>
    </ContextProvider>
  );
};

export default RoundedIconButton;

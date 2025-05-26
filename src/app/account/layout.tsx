"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppKitAccount } from "@reown/appkit/react";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const { isConnected } = useAppKitAccount();
  const router = useRouter();

  useEffect(() => {
    if (!isConnected) {
      router.replace("/"); // redirect if wallet not connected
    }
  }, [isConnected, router]);

  if (!isConnected) {
    return null; // or "Access denied. Connect your wallet."
  }

  return <>{children}</>;
}

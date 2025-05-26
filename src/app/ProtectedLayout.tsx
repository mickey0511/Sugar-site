"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppKitAccount } from "@reown/appkit/react";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isConnected } = useAppKitAccount();

  useEffect(() => {
    if (pathname === "/account" && !isConnected) {
      router.replace("/");
    }
  }, [pathname, isConnected, router]);

  if (pathname === "/account" && !isConnected) {
    return null; // or loading indicator
  }

  return <>{children}</>;
}

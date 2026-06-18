"use client";

import React, { useEffect, useMemo, useState } from "react";
import FarmerSidebar from "@/components/farmer-sidebar";
import { usePathname, useRouter } from "next/navigation";

export default function FarmerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = localStorage.getItem("kizfarm_farmer_sidebar_collapsed");
      if (saved === "1") setCollapsed(true);
    } catch {}
  }, []);

  const toggleCollapsed = () => {
    setCollapsed((v) => {
      const next = !v;
      try {
        localStorage.setItem(
          "kizfarm_farmer_sidebar_collapsed",
          next ? "1" : "0",
        );
      } catch {}
      return next;
    });
  };

  const contentPaddingClass = useMemo(() => {
    return collapsed ? "md:pl-[80px]" : "md:pl-[280px]";
  }, [collapsed]);

  useEffect(() => {
    // Client-side guard:
    // - Not logged in -> /public/login
    // - No farmer registration -> /farmer/become
    // - Farmer not approved -> /farmer/verify
    // - Approved -> allow dashboard routes
    async function checkStatus() {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("kizfarm_token")
          : null;
      if (!token) {
        if (pathname !== "/public/login") router.replace("/public/login");
        return;
      }

      const isBecome = pathname === "/farmer/become";
      const isVerify = pathname === "/farmer/verify";
      try {
        const res = await fetch("http://localhost:4000/farmer/status", {
          cache: "no-store",
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) {
          if (pathname !== "/public/login") router.replace("/public/login");
          return;
        }
        const json = await res.json();
        const farmer = json?.farmer;
        const status = farmer?.status;

        // If user hasn't registered as a farmer yet, keep them on /farmer/become.
        if (!farmer) {
          if (!isBecome) router.replace("/farmer/become");
          return;
        }

        // If farmer exists but not yet approved, send them to verification flow.
        if (status !== "approved") {
          if (!isVerify) router.replace("/farmer/verify");
          return;
        }

        // Approved farmer shouldn't be stuck in onboarding routes.
        if (isBecome || isVerify) router.replace("/farmer/dashboard");
      } catch {
        // If API is unreachable, don't loop between pages; keep user on current page.
      }
    }
    checkStatus();
  }, [router, pathname]);

  return (
    <div className="min-h-screen bg-background text-on-background font-body-md overflow-x-hidden">
      {pathname !== "/farmer/become" && pathname !== "/farmer/verify" ? (
        <FarmerSidebar
          collapsed={collapsed}
          onToggleCollapsed={toggleCollapsed}
        />
      ) : null}
      <div
        className={`${pathname !== "/farmer/become" && pathname !== "/farmer/verify" ? contentPaddingClass : ""} pt-16 md:pt-0`}
      >
        <main className="min-h-screen w-full">{children}</main>
      </div>
    </div>
  );
}

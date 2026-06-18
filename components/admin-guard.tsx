"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function parseJwt(token: string | null) {
  if (!token) return null;
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(Math.ceil(base64Url.length / 4) * 4, "=");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(""),
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

function parseStoredUser() {
  try {
    const user = localStorage.getItem("kizfarm_user");
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
}

function isAdminUser(value: any) {
  return value?.role === "admin" || value?.isAdmin === true || value?.type === "admin";
}

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const token = localStorage.getItem("kizfarm_token");
    const payload = parseJwt(token);
    const storedUser = parseStoredUser();

    if (isAdminUser(payload) || isAdminUser(storedUser)) {
      setAuthorized(true);
      return;
    }
    setAuthorized(false);
    router.replace("/admin/login");
  }, [router]);

  if (authorized === null) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-sm text-gray-500">
        Loading admin...
      </div>
    );
  }
  if (!authorized) return null;
  return <>{children}</>;
}

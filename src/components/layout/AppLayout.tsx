"use client";

import { usePathname } from "next/navigation";

import AppHeader from "@/components/layout/AppHeader";
import PageHeader from "@/components/layout/PageHeader";
import BottomNavbar from "@/components/navigation/BottomNavbar";


export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();


  // Auth pages
  const authRoutes = [
    "/",
    "/login",
    "/register",
    "/forgot-password",
    "/verify-otp",
    "/reset-password",
    "/welcome",
    "/create-password",
  ];


const isAuthPage = authRoutes.includes(pathname);
const isDashboard = pathname === "/dashboard";


  return (
 <div className="relative w-full max-w-125 min-h-screen">
    {!isAuthPage &&
      (isDashboard ? (
        <AppHeader />
      ) : (
        <PageHeader
          title={
            pathname
              .split("/")
              .pop()
              ?.replace("-", " ") || ""
          }
        />
      ))}

    <main className={isAuthPage ? "" : ""}>
      {children}
    </main>

    {!isAuthPage && <BottomNavbar />}
  </div>
  );
}
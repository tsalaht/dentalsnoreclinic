"use client";

import { useEffect } from "react";
import Navbar from "./Navbar";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  useEffect(() => {
    document.title = "الرئيسيه - عيادة الشخير واضطراب التنفس أثناء النوم";
  }, []);
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Main Content with top padding for fixed navbar */}
      <div className="pt-14 lg:pt-16">{children}</div>
    </div>
  );
}

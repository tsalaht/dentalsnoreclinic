"use client"

import Navbar from './Navbar'

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Main Content with top padding for fixed navbar */}
      <div className="pt-16 lg:pt-20">
        {children}
      </div>
    </div>
  )
}

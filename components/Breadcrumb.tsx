"use client"

import Link from "next/link"
import { ChevronLeft, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      <Link 
        href="/" 
        className="flex items-center hover:text-blue-600 transition-colors duration-200 hover:scale-105 transform"
      >
        <Home className="w-4 h-4 ml-1" />
        الرئيسية
      </Link>
      
      {items.map((item, index) => (
        <div key={`${item.label}-${index}`} className="flex items-center">
          <ChevronLeft className="w-4 h-4 mx-2 text-gray-400" />
          {item.href && index < items.length - 1 ? (
            <Link 
              href={item.href} 
              className="hover:text-blue-600 transition-colors duration-200 hover:scale-105 transform"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-primary font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}

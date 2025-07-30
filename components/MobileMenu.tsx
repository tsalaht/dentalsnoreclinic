"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [studiesOpen, setStudiesOpen] = useState(false)
  const [testimonialsOpen, setTestimonialsOpen] = useState(false)
  const [medicalLibraryOpen, setMedicalLibraryOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "الرئيسية" },
    { href: "/about", label: "من نحن" },
    // خدماتنا (dropdown)
    // دراسات علمية (dropdown)
    // شهادات نجاح (dropdown)
    { href: "/sleep-challenge", label: "تحدي النوم" },
    { href: "/blog", label: "المدونة" },
    { href: "/medical-library", label: "المكتبة الطبية" },
    { href: "/contact", label: "تواصل معنا" },
  ]

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-lg hover:bg-blue-50 transition-all duration-300"
          aria-label="فتح القائمة"
        >
          {isOpen ? (
            <X className="h-7 w-7 text-primary/90" />
          ) : (
            <Menu className="h-7 w-7 text-primary/90" />
          )}
        </Button>
      </div>
      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto max-h-screen">
            <div className="flex items-center justify-between p-6 border-b bg-blue-50">
              <h2 className="text-xl font-semibold text-gray-800">
                القائمة الرئيسية
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-blue-100 rounded-lg transition-all duration-300"
                aria-label="إغلاق القائمة"
              >
                <X className="h-6 w-6 text-primary/90" />
              </Button>
            </div>
            <nav className="p-6">
              <ul className="space-y-4">
                {/* الرئيسية */}
                <li className="transition-all duration-300">
                  <Link
                    href="/"
                    className="block py-3 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    الرئيسية
                  </Link>
                </li>
                {/* من نحن */}
                <li className="transition-all duration-300">
                  <Link
                    href="/about"
                    className="block py-3 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    من نحن
                  </Link>
                </li>
                {/* خدماتنا (dropdown) */}
                <li className="transition-all duration-300">
                  <div
                    className="flex items-center justify-between py-3 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-lg cursor-pointer select-none"
                    onClick={() => setServicesOpen((open) => !open)}
                  >
                    <span>خدماتنا</span>
                    <svg className={`w-5 h-5 ml-2 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  {servicesOpen && (
                    <ul className="pl-6 mt-1 space-y-1">
                      <li>
                        <Link
                          href="/adults"
                          className="block py-2 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-base"
                          onClick={() => { setIsOpen(false); setServicesOpen(false); }}
                        >
                          علاج البالغين
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/children"
                          className="block py-2 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-base"
                          onClick={() => { setIsOpen(false); setServicesOpen(false); }}
                        >
                          علاج الأطفال
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* دراسات علمية (dropdown) */}
                <li className="transition-all duration-300">
                  <div
                    className="flex items-center justify-between py-3 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-lg cursor-pointer select-none"
                    onClick={() => setStudiesOpen((open) => !open)}
                  >
                    <span>دراسات علمية</span>
                    <svg className={`w-5 h-5 ml-2 transition-transform duration-200 ${studiesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  {studiesOpen && (
                    <ul className="pl-6 mt-1 space-y-1">
                      <li>
                        <Link
                          href="/scientific-studies/laser-effectiveness"
                          className="block py-2 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-base"
                          onClick={() => { setIsOpen(false); setStudiesOpen(false); }}
                        >
                          فعالية اجهزة الليزر
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/scientific-studies/oral-devices-effectiveness"
                          className="block py-2 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-base"
                          onClick={() => { setIsOpen(false); setStudiesOpen(false); }}
                        >
                          فعالية الأجهزة الفموية
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/scientific-studies/muscle-exercises-effectiveness"
                          className="block py-2 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-base"
                          onClick={() => { setIsOpen(false); setStudiesOpen(false); }}
                        >
                          فعالية التمارين العضلية
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/scientific-studies/misc-studies"
                          className="block py-2 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-base"
                          onClick={() => { setIsOpen(false); setStudiesOpen(false); }}
                        >
                          دراسات متفرقة
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* شهادات نجاح (dropdown) */}
                <li className="transition-all duration-300">
                  <div
                    className="flex items-center justify-between py-3 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-lg cursor-pointer select-none"
                    onClick={() => setTestimonialsOpen((open) => !open)}
                  >
                    <span>شهادات نجاح</span>
                    <svg className={`w-5 h-5 ml-2 transition-transform duration-200 ${testimonialsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  {testimonialsOpen && (
                    <ul className="pl-6 mt-1 space-y-1">
                      <li>
                        <Link
                          href="/testimonials/patients"
                          className="block py-2 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-base"
                          onClick={() => { setIsOpen(false); setTestimonialsOpen(false); }}
                        >
                          شهادات المرضى
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/testimonials/doctors"
                          className="block py-2 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-base"
                          onClick={() => { setIsOpen(false); setTestimonialsOpen(false); }}
                        >
                          شهادات الأطباء
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* تحدي النوم */}
                <li className="transition-all duration-300">
                  <Link
                    href="/sleep-challenge"
                    className="block py-3 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    تحدي النوم
                  </Link>
                </li>
                {/* المدونة */}
                <li className="transition-all duration-300">
                  <Link
                    href="/blog"
                    className="block py-3 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    المدونة
                  </Link>
                </li>
                {/* المكتبة الطبية (dropdown) */}
                <li className="transition-all duration-300">
                  <div
                    className="flex items-center justify-between py-3 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-lg cursor-pointer select-none"
                    onClick={() => setMedicalLibraryOpen((open) => !open)}
                  >
                    <span>المكتبة الطبية</span>
                    <svg className={`w-5 h-5 ml-2 transition-transform duration-200 ${medicalLibraryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  {medicalLibraryOpen && (
                    <ul className="pl-6 mt-1 space-y-1">
                      <li>
                        <Link
                          href="/medical-library/videos"
                          className="block py-2 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-base"
                          onClick={() => { setIsOpen(false); setMedicalLibraryOpen(false); }}
                        >
                          الفيديوهات التثقيفية
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/medical-library/conference"
                          className="block py-2 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-base"
                          onClick={() => { setIsOpen(false); setMedicalLibraryOpen(false); }}
                        >
                          مؤتمر الشخير
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/medical-library/materials"
                          className="block py-2 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-base"
                          onClick={() => { setIsOpen(false); setMedicalLibraryOpen(false); }}
                        >
                          المواد التثقيفية
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* تواصل معنا */}
                <li className="transition-all duration-300">
                  <Link
                    href="/contact"
                    className="block py-3 px-4 text-primary/90 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
           احجز استشارتك
                  </Link>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="https://wa.me/962797377131?text=أريد حجز موعد في Dental Snore Clinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full bg-primary/70 text-white py-3 text-lg font-medium rounded-lg hover:bg-blue-600 transition-all duration-300">
                    احجز موعداً الآن
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
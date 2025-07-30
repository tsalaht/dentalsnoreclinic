"use client"

import Link from "next/link"
import Navbar from "@/components/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"

const studies = [
  {
    slug: "laser-effectiveness",
    title: "فعالية اجهزة الليزر",
    description: "دراسات حول نتائج استخدام الليزر في علاج الشخير واضطرابات النوم.",
  },
  {
    slug: "oral-devices-effectiveness",
    title: "فعالية الأجهزة الفموية",
    description: "أبحاث حول فعالية الأجهزة الفموية في تحسين جودة النوم وتقليل الشخير.",
  },
  {
    slug: "muscle-exercises-effectiveness",
    title: "فعالية التمارين العضلية",
    description: "دراسات علمية حول دور التمارين العضلية في علاج اضطرابات التنفس أثناء النوم.",
  },
  {
    slug: "misc-studies",
    title: "دراسات متفرقة",
    description: "مجموعة من الدراسات المتنوعة حول اضطرابات النوم وطرق العلاج المختلفة.",
  },
]

export default function ScientificStudiesPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <section className="relative bg-gradient-to-l from-blue-50 to-teal-100 py-12 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 animate-fade-in-up mb-4">دراسات علمية</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 animate-fade-in-down relative">
              أحدث الدراسات العلمية حول علاج الشخير واضطرابات النوم
              <span className="block w-28 h-1 bg-secondary mx-auto mt-3 rounded-full opacity-90"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              تصفح أحدث الأبحاث والدراسات العلمية حول فعالية العلاجات المختلفة للشخير واضطرابات النوم.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studies.map((study) => (
              <Link key={study.slug} href={`/scientific-studies/${study.slug}`} className="group">
                <Card className="bg-white border-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 card-hover-lift">
                  <CardContent className="p-6 text-center relative">
                    <div className="w-full h-24 flex items-center justify-center mb-4">
                      <BookOpen className="w-12 h-12 text-green-500" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">{study.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-base line-clamp-3">{study.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 
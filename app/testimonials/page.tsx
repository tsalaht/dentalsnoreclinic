"use client"

import Link from "next/link"
import Navbar from "@/components/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, User, Stethoscope } from "lucide-react"

const testimonials = [
  {
    slug: "patients",
    title: "شهادات المرضى",
    description: "آراء وتجارب المرضى الذين خضعوا للعلاج في العيادة.",
    icon: <User className="w-10 h-10 text-yellow-500 mx-auto" />,
  },
  {
    slug: "doctors",
    title: "شهادات الأطباء",
    description: "آراء الأطباء المتخصصين حول بروتوكولات العلاج ونتائجها.",
    icon: <Stethoscope className="w-10 h-10 text-primary/70 mx-auto" />,
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <section className="relative bg-gradient-to-l from-yellow-50 to-blue-100 py-12 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 animate-fade-in-up mb-4">شهادات</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 animate-fade-in-down relative">
              شهادات المرضى والأطباء
              <span className="block w-28 h-1 bg-secondary mx-auto mt-3 rounded-full opacity-90"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              استعرض آراء وتجارب المرضى والأطباء حول العلاجات والخدمات المقدمة في العيادة.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((item) => (
              <Link key={item.slug} href={`/testimonials/${item.slug}`} className="group">
                <Card className="bg-white border-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 card-hover-lift">
                  <CardContent className="p-8 text-center relative">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-base line-clamp-3">{item.description}</p>
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
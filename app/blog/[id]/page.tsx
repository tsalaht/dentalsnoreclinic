"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import axios from "axios"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image';
export default function BlogDetail() {
  const [blog, setBlog] = useState<any>(null)
  const [comment, setComment] = useState("")
  const [email, setEmail] = useState("")

  const params = useParams()
  const id = params?.id
  console.log("🚀 ~ BlogDetail ~ id:", id)

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`https://backend.dentalsnoreclinic.com:3040/api/blogs/${id}`)
      if (res.data?.blog) {
        setBlog(res.data.blog)
      }
    } catch (error) {
      console.error("Failed to fetch blog:", error)
    }
  }

  useEffect(() => {
    if (id) fetchBlog()
  }, [id])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Comment:", comment, "Email:", email)
    setComment("")
    setEmail("")
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        جاري تحميل المقال...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <div className="mb-8">
            <Link href="/blog" className="text-primary hover:underline">← العودة للمدونة</Link>
          </div>

          <Card className="bg-white border-0 shadow-xl rounded-2xl">
            <CardContent className="p-8">
              {blog.thumbnail?.image && (
                <Image
                  src={blog.thumbnail.image}
                  alt={blog.title}
                  className="w-full h-auto object-cover rounded-xl mb-6"
                />
              )}

              <h1 className="text-3xl font-bold text-primary mb-4">{blog.title}</h1>

              <p className="text-gray-700 text-lg mb-6">{blog.content}</p>

              <p className="text-sm italic text-gray-500">
                بقلم: {blog.author?.user_name || "مجهول"} | التصنيف: {blog.category}
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">شارك بتعليقك</h2>
                <p className="text-sm text-primary/80 mb-4">لن يتم نشر عنوان بريدك الإلكتروني. الحقول الإلزامية مشار إليها بـ *</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <textarea
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={5}
                    placeholder="تعليق *"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  ></textarea>
                  <input
                    type="email"
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="البريد الإلكتروني *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    إرسال التعليق
                  </button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

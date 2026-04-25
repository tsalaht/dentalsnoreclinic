"use client"

import { useState } from "react"
import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import Image from "@/components/Image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/Navbar"
import { getBlogById } from "@/lib/blogData"

export default function BlogDetail() {
  const params = useParams<{ id: string }>()
  const id = params?.id
  const blog = id ? getBlogById(id) : undefined

  const [comment, setComment] = useState("")
  const [email, setEmail] = useState("")

  if (!blog) {
    notFound()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setComment("")
    setEmail("")
    alert("تم إرسال التعليق بنجاح!")
  }

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://dentalsnoreclinic.com" },
              { "@type": "ListItem", position: 2, name: "المدونة", item: "https://dentalsnoreclinic.com/blog" },
              { "@type": "ListItem", position: 3, name: blog.title, item: `https://dentalsnoreclinic.com/blog/${blog.id}` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: blog.title,
            description: blog.description,
            image: blog.image,
            author: { "@type": "Organization", name: "عيادة الشخير واضطراب التنفس أثناء النوم" },
            publisher: {
              "@type": "Organization",
              name: "عيادة الشخير واضطراب التنفس أثناء النوم",
              logo: { "@type": "ImageObject", url: "https://dentalsnoreclinic.com/logo.png" },
            },
            datePublished: blog.date,
            articleSection: blog.category,
            inLanguage: "ar",
            mainEntityOfPage: { "@type": "WebPage", "@id": `https://dentalsnoreclinic.com/blog/${blog.id}` },
          }),
        }}
      />

      <Navbar />

      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50 mt-12">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 space-x-reverse flex-wrap gap-y-1">
              <li>
                <Link href="/" className="text-primary hover:underline">
                  الرئيسية
                </Link>
              </li>
              <li className="mx-2 text-gray-400">/</li>
              <li>
                <Link href="/blog" className="text-primary hover:underline">
                  المدونة
                </Link>
              </li>
              <li className="mx-2 text-gray-400">/</li>
              <li className="text-gray-600" aria-current="page">
                {blog.title}
              </li>
            </ol>
          </nav>

          <div className="mb-8">
            <Link href="/blog" className="text-primary hover:underline">
              ← العودة للمدونة
            </Link>
          </div>

          <Card className="bg-white border-0 shadow-xl rounded-2xl">
            <CardContent className="p-8">
              {/* Thumbnail */}
              <div className="mb-6">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl"
                  priority
                />
              </div>

              {/* Header */}
              <header className="mb-6">
                <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/10">
                  {blog.category}
                </Badge>
                <h1 className="text-3xl font-bold text-primary mb-4">
                  {blog.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span>بقلم: عيادة الشخير واضطراب التنفس أثناء النوم</span>
                  <time>{blog.date}</time>
                </div>
              </header>

              {/* Article Content */}
              <article
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed
                  [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_h2]:mb-4 [&_h2]:mt-6
                  [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-primary [&_h3]:mb-3 [&_h3]:mt-5
                  [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-gray-800 [&_h4]:mb-2 [&_h4]:mt-4
                  [&_p]:mb-4 [&_p]:leading-relaxed
                  [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pr-6
                  [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pr-6
                  [&_li]:mb-2
                  [&_strong]:text-gray-900 [&_strong]:font-semibold
                  [&_em]:text-gray-600"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {blog.sources && blog.sources.length > 0 && (
                <section className="mt-10 pt-6 border-t border-gray-200">
                  <h2 className="text-2xl font-semibold mb-4">المصادر (ملفات PDF)</h2>
                  <ul className="space-y-2 text-sm text-primary">
                    {blog.sources.map((source) => (
                      <li key={source.url}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline break-words"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Comment Form */}
              {/* <footer className="mt-10 pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-semibold mb-4">شارك بتعليقك</h2>
                <p className="text-sm text-primary/80 mb-4">
                  لن يتم نشر عنوان بريدك الإلكتروني. الحقول الإلزامية مشار إليها بـ *
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium mb-2">
                      التعليق *
                    </label>
                    <textarea
                      id="comment"
                      className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      rows={5}
                      placeholder="اكتب تعليقك هنا..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      required
                      minLength={10}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="example@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    إرسال التعليق
                  </button>
                </form>
              </footer> */}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

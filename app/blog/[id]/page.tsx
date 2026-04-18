"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Head from "next/head"
import axios from "axios"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import Image from '@/components/Image'

interface Blog {
  id: string
  title: string
  content: string
  category: string
  thumbnail?: {
    image: string
  }
  author?: {
    user_name: string
  }
  created_at?: string
  updated_at?: string
}

export default function BlogDetail() {
  const [blog, setBlog] = useState<Blog | null>(null)
  const [comment, setComment] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const params = useParams()
  const id = params?.id

  const fetchBlog = async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await axios.get(`https://backend.dentalsnoreclinic.com:3040/api/blogs/${id}`)
      if (res.data?.blog) {
        setBlog(res.data.blog)
        // Set document title dynamically
        document.title = `${res.data.blog.title} - عيادة طب الأسنان والشخير`
      }
    } catch (error) {
      console.error("Failed to fetch blog:", error)
      setError("فشل في تحميل المقال. يرجى المحاولة مرة أخرى.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) fetchBlog()
  }, [id])

  // Generate meta description from content
  const getMetaDescription = (content: string) => {
    return content.length > 160 ? content.substring(0, 157) + "..." : content
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Here you would typically send the comment to your API
      console.log("Comment:", comment, "Email:", email)
      // Reset form after successful submission
      setComment("")
      setEmail("")
      // Show success message (you could add a toast notification here)
      alert("تم إرسال التعليق بنجاح!")
    } catch (error) {
      console.error("Failed to submit comment:", error)
      alert("فشل في إرسال التعليق. يرجى المحاولة مرة أخرى.")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          جاري تحميل المقال...
        </div>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-600">
        {error || "لم يتم العثور على المقال"}
      </div>
    )
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{blog.title} - عيادة طب الأسنان والشخير</title>
        <meta name="description" content={getMetaDescription(blog.content)} />
        <meta name="keywords" content={`${blog.category}, طب الأسنان, الشخير, صحة الفم, ${blog.title}`} />
        <meta name="author" content={blog.author?.user_name || "عيادة طب الأسنان والشخير"} />
        
        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={getMetaDescription(blog.content)} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://dentalsnoreclinic.com/blog/${blog.id}`} />
        {blog.thumbnail?.image && (
          <meta property="og:image" content={blog.thumbnail.image} />
        )}
        <meta property="og:site_name" content="عيادة طب الأسنان والشخير" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={getMetaDescription(blog.content)} />
        {blog.thumbnail?.image && (
          <meta name="twitter:image" content={blog.thumbnail.image} />
        )}
        
        {/* Article specific tags */}
        <meta property="article:author" content={blog.author?.user_name || "عيادة طب الأسنان والشخير"} />
        <meta property="article:section" content={blog.category} />
        {blog.created_at && (
          <meta property="article:published_time" content={blog.created_at} />
        )}
        {blog.updated_at && (
          <meta property="article:modified_time" content={blog.updated_at} />
        )}
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://dentalsnoreclinic.com/blog/${blog.id}`} />
        
        {/* Language and direction */}
        <meta name="language" content="ar" />
        <meta name="dir" content="rtl" />
      </Head>

      <div className="min-h-screen bg-white" dir="rtl">
        {/* Breadcrumb Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "الرئيسية",
                  "item": "https://dentalsnoreclinic.com"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "المدونة",
                  "item": "https://dentalsnoreclinic.com/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": blog.title,
                  "item": `https://dentalsnoreclinic.com/blog/${blog.id}`
                }
              ]
            })
          }}
        />

        {/* Article Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": blog.title,
              "description": getMetaDescription(blog.content),
              "image": blog.thumbnail?.image,
              "author": {
                "@type": "Person",
                "name": blog.author?.user_name || "عيادة طب الأسنان والشخير"
              },
              "publisher": {
                "@type": "Organization",
                "name": "عيادة طب الأسنان والشخير",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://dentalsnoreclinic.com/logo.png"
                }
              },
              "datePublished": blog.created_at,
              "dateModified": blog.updated_at || blog.created_at,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://dentalsnoreclinic.com/blog/${blog.id}`
              },
              "articleSection": blog.category,
              "inLanguage": "ar"
            })
          }}
        />

        <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            {/* Breadcrumb Navigation */}
            <nav className="mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 space-x-reverse">
                <li>
                  <Link href="/" className="text-primary hover:underline">
                    الرئيسية
                  </Link>
                </li>
                <li className="mx-2">/</li>
                <li>
                  <Link href="/blog" className="text-primary hover:underline">
                    المدونة
                  </Link>
                </li>
                <li className="mx-2">/</li>
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
                {blog.thumbnail?.image && (
                  <div className="mb-6">
                    <Image
                      src={blog.thumbnail.image}
                      alt={blog.title}
                      width={800}
                      height={400}
                      className="w-full h-auto object-cover rounded-xl"
                      priority
                      loading="eager"
                    />
                  </div>
                )}

                <header className="mb-6">
                  <h1 className="text-3xl font-bold text-primary mb-4">
                    {blog.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span>بقلم: {blog.author?.user_name || "مجهول"}</span>
                    <span>التصنيف: {blog.category}</span>
                    {blog.created_at && (
                      <time dateTime={blog.created_at}>
                        تاريخ النشر: {new Date(blog.created_at).toLocaleDateString('ar-EG')}
                      </time>
                    )}
                  </div>
                </header>

                <article className="prose prose-lg max-w-none">
                  <div 
                    className="text-gray-700 text-lg mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                </article>

                <footer className="mt-8 pt-6 border-t border-gray-200">
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
                </footer>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}
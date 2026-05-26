import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/Navbar"
import { getBlogById, blogPosts } from "@/lib/blogData"
import { Download, ExternalLink, FileText, Calendar, ArrowRight, ArrowLeft, BookOpen } from "lucide-react"
import Image from "@/components/Image"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export default function BlogDetail({ params }: { params: { id: string } }) {
  const blog = getBlogById(params.id)

  if (!blog) notFound()

  const related = blogPosts
    .filter((p) => p.id !== blog.id && p.category === blog.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50 py-4" dir="rtl">
      <Navbar />

      {/* Hero Image */}
      <div className="relative w-full h-72 md:h-96 mt-16 overflow-hidden py-4">
        <Image src={blog.image} alt={blog.title} width={1400} height={600} className="w-full h-full object-cover" priority />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute top-5 right-0 left-0 px-6">
          <nav className="text-xs text-white/80 flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">المدونة</Link>
            <span>/</span>
            <span className="text-white line-clamp-1 max-w-xs">{blog.title}</span>
          </nav>
        </div>
        <div className="absolute bottom-0 right-0 left-0 px-6 pb-8 max-w-4xl mx-auto w-full">
          <Badge className="mb-3 bg-[#F38025] text-white border-0 text-xs">{blog.category}</Badge>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">{blog.title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-4xl py-10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#028FC5] hover:text-[#028FC5]/80 transition-colors mb-8 font-medium">
          <ArrowRight className="w-4 h-4" />
          العودة إلى المدونة
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8 p-4">
          <div className="flex items-center justify-between px-7 py-4 border-b border-gray-100 bg-gray-50/60">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#028FC5]" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#028FC5]" />
                عيادة الشخير واضطراب التنفس أثناء النوم
              </span>
            </div>
            <Badge className="bg-[#028FC5]/10 text-[#028FC5] border-0 hover:bg-[#028FC5]/10 text-xs">{blog.category}</Badge>
          </div>

          <div className="px-7 py-8">
            <p className="text-gray-800 text-lg font-medium leading-relaxed mb-6">{blog.description}</p>
            <div className="relative bg-[#028FC5]/5 border-r-4 border-[#028FC5] rounded-lg px-6 py-5 mb-8">
              <span className="block text-[#028FC5] text-xs font-bold uppercase tracking-widest mb-2">ملخص المقال</span>
              <p className="text-gray-700 leading-relaxed text-sm">{blog.excerpt}</p>
            </div>
            <div className="flex flex-wrap gap-3 mb-2">
              <a href={blog.pdfPath} download className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#028FC5] text-white rounded-lg hover:bg-[#028FC5]/90 transition-all font-semibold text-sm">
                <Download className="w-4 h-4" />
                تحميل المقال PDF
              </a>
              <a href={blog.pdfPath} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#028FC5] text-[#028FC5] rounded-lg hover:bg-[#028FC5]/5 transition-all font-semibold text-sm">
                <ExternalLink className="w-4 h-4" />
                فتح في نافذة جديدة
              </a>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10 w-full">
          <div className="flex items-center justify-between px-5 py-3 bg-[#028FC5] text-white">
            <div className="flex items-center gap-2.5">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-semibold">قراءة المقال كاملاً</span>
            </div>
            <div className="flex items-center gap-2">
              <a href={blog.pdfPath} download className="flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-md text-white">
                <Download className="w-3.5 h-3.5" />تحميل
              </a>
              <a href={blog.pdfPath} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-md">
                <ExternalLink className="w-3.5 h-3.5" />فتح
              </a>
            </div>
          </div>
          <iframe src={blog.pdfPath} className="w-full" style={{ height: "820px" }} title={blog.title} />
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xl font-bold text-gray-900">مقالات ذات صلة</h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {related.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group block">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-36 overflow-hidden">
                      <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-[#028FC5] font-semibold mb-1.5">{post.category}</p>
                      <h3 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-[#028FC5] transition-colors leading-snug mb-2">{post.title}</h3>
                      <span className="inline-flex items-center gap-1 text-xs text-[#028FC5] font-semibold">
                        اقرأ المقال <ArrowLeft className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
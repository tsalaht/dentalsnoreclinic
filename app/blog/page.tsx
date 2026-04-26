"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "@/components/Image";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, ArrowLeft, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts } from "@/lib/blogData";

const ALL_CATEGORY = "الكل";

const categories = [
  ALL_CATEGORY,
  ...Array.from(new Set(blogPosts.map((p) => p.category))),
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);

  const filtered =
    activeCategory === ALL_CATEGORY
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-l from-[#028FC5]/10 to-teal-50 pt-28 pb-16 mt-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#028FC5]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F38025]/6 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Breadcrumb items={[{ label: "المدونة" }]} />

          <span className="inline-flex items-center gap-1.5 bg-[#028FC5]/10 text-[#028FC5] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <BookOpen className="w-3.5 h-3.5" />
            المدونة الطبية
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold text-[#028FC5] mb-4 leading-tight">
            اكتشف أحدث المقالات الطبية
          </h1>
          <div className="w-20 h-1 bg-[#F38025] mx-auto rounded-full mb-5" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            معلومات موثوقة حول الشخير، اضطرابات النوم، وصحة الفم والأسنان من
            متخصصينا
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* ── Category Filter ── */}
        <div className="flex items-center gap-2 mb-10 flex-wrap">
          <Filter className="w-4 h-4 text-gray-400 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-[#028FC5] text-white border-[#028FC5] shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#028FC5] hover:text-[#028FC5]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-20">
            لا توجد مقالات في هذا التصنيف
          </p>
        ) : (
          <>
            {/* ── Featured Post ── */}
            {featured && (
              <Link href={`/blog/${featured.id}`} className="group block mb-14">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden grid lg:grid-cols-2 mb-3">
                  <div className="relative h-64 lg:h-auto overflow-hidden ">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r" />
                    <span className="absolute top-4 right-4 bg-[#F38025] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      مميّز
                    </span>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-[#028FC5]/10 text-[#028FC5] hover:bg-[#028FC5]/10 border-0">
                      {featured.category}
                    </Badge>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#028FC5] transition-colors line-clamp-2">
                      {featured.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {featured.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {featured.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#028FC5] text-sm font-semibold group-hover:gap-2.5 transition-all">
                        اقرأ المقال
                        <ArrowLeft className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* ── Grid ── */}
            {rest.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {rest.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="group block"
                  >
                    <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <Badge className="absolute top-3 right-3 bg-white/90 text-[#028FC5] border-0 text-xs">
                          {post.category}
                        </Badge>
                      </div>

                      {/* Body */}
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#028FC5] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1 mb-4">
                          {post.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <span className="flex items-center gap-1 text-xs text-gray-400">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1 text-[#028FC5] text-xs font-semibold group-hover:gap-2 transition-all">
                            اقرأ المقال
                            <ArrowLeft className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

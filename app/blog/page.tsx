"use client";

import Link from "next/link";
import Image from "@/components/Image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogPage() {
  const [bloges, setBloges] = useState<any[]>([]);
  const router = useRouter();

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        "https://backend.dentalsnoreclinic.com:3040/api/blogs"
      );
      console.log("🚀 ~ fetchBlogs ~ res:", res);

      if (res.data.data) {
        setBloges(res.data.data);
      }
      console.log("🚀 ~ fetchBlogs ~ res:", res);
    } catch (error) {}
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
  document.title = "المُدوّنة - عيادة الشخير واضطراب التنفس أثناء النوم";
}, []);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Blog Section */}
      <section className="relative bg-gradient-to-l from-blue-50 to-teal-100 py-12  mt-12 overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-3xl animate-float morphing-shape"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-sky-200/20 rounded-full blur-3xl animate-bounce-slow morphing-shape"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl animate-scale-pulse morphing-shape"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: "المدونة" }]} />

          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 animate-fade-in-up mb-4">
              المدونة الطبية
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 animate-fade-in-down relative">
              اكتشف أحدث المقالات الطبية
              <span className="block w-28 h-1 bg-secondary mx-auto mt-3 rounded-full opacity-90"></span>
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              تعرف على معلومات قيمة حول الشخير، اضطرابات النوم، وصحة الفم
              والأسنان من خلال مقالاتنا العلمية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {bloges &&
              bloges.map((post, idx) => (
                <div
                  key={post.id}
                  onClick={() => {
                    router.push(`/blog/${post.id}`);
                  }}
                >
                  <Card className="bg-white border-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 card-hover-lift">
                    <CardContent className="p-6 text-center relative">
                      <div className="w-full h-60 rounded-xl overflow-hidden mb-4 relative">
                        {post.image?.endsWith(".mp4") ? (
                          <video
                            src={post.image}
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                          />
                        ) : (
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            width={400}
                            height={500}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        <Badge className="absolute top-3 right-3 bg-primary/70 text-white flex items-center gap-1 animate-fade-in-up">
                          <BookOpen className="w-3 h-3" />
                          مقالة
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base line-clamp-3">
                        {post.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

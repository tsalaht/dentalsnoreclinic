"use client";

import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, User, Calendar, MessageCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const videoTestimonials = [
  {
    title: "تجربة السيد عمار من موسكو",
    src: "https://www.youtube.com/embed/SvJikdXAySI",
    description: "تجربة السيد عمار من موسكو في علاج الشخير في المركز الأوروبي",
  },
  {
    title: "تجربة السيد ماهر التميمي",
    src: "https://www.youtube.com/embed/nmog1iNuFAQ",
    description: "تجربة السيد ماهر التميمي في علاج الشخير داخل المركز الأوروبي",
  },
  {
    title: "تجربة الدكتور محمد نور العبسي",
    src: "https://www.youtube.com/embed/uN9LpOMKswA",
    description:
      "تجربة الدكتور محمد نور العبسي في علاج الشخير داخل المركز الأوروبي",
  },
  {
    title: "",
    src: "https://www.youtube.com/embed/IREdfY7anSI",
    description:
      "من تجارب مرضانا في عيادتنا لعلاج الشخير والتنفس الفموي أثناء النوم",
  },
  {
    title: "",
    src: "https://www.youtube.com/embed/sKNnEGkkJ0U",
    description:
      "من تجارب مرضانا في عيادتنا لعلاج الشخير والتنفس الفموي أثناء النوم",
  },
];

export default function PatientTestimonialsPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Testimonials Section */}
      <section className="relative bg-gradient-to-l from-blue-50 to-teal-100 py-12 mt-16 overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-3xl animate-float morphing-shape"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-sky-200/20 rounded-full blur-3xl animate-bounce-slow morphing-shape"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl animate-scale-pulse morphing-shape"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: "شهادات المرضى" }]} />

          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 animate-fade-in-up mb-4">
              تجارب المرضى
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4 animate-fade-in-down">
              شهادات المرضى
              <span className="block w-28 h-1 bg-secondary mx-auto mt-3 rounded-full opacity-90"></span>
            </h1>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              "كن على قيد الأمل واستثمر في نومك نحو حياة أفضل"
              <br />
              من تجارب مرضانا في عيادتنا لعلاج الشخير والتنفس الفموي أثناء النوم
            </p>
          </div>

          {/* Text Testimonials */}

          {/* Video Testimonials */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 animate-fade-in-down">
              تجارب مرضانا بالفيديو
              <span className="block w-16 h-1 bg-secondary mx-auto mt-3 rounded-full opacity-90"></span>
            </h2>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              استمع إلى قصص نجاح مرضانا الذين حققوا تحسناً ملحوظاً في جودة نومهم
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videoTestimonials.map((video, idx) => (
              <Card
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500"
              >
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <iframe
                      className="w-full h-full object-cover"
                      src={video.src}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <Badge className="absolute top-3 right-3 bg-primary/70 text-white flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      تجربة مريض
                    </Badge>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-primary mb-3 relative">
                      {video.title}
                      <span className="block w-16 h-1 bg-secondary mx-auto mt-2 rounded-full"></span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white animate-fade-in-down">
            هل أنت مستعد لتغيير حياتك أيضاً؟
          </h2>
          <p
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            احجز استشارتك اليوم للحصول على خطة علاج مخصصة
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link href="/contact" className="group">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg w-full sm:w-auto transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5 ml-2" />
                احجز عبر النموذج
              </Button>
            </Link>
            <a
              href="https://wa.me/962797377131?text=أريد حجز موعد لعلاج الشخير"
              target="_blank"
              className="group"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg w-full sm:w-auto transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                احجز عبر واتساب
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

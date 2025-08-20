"use client";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Navigation,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    treatmentType: "",
    preferredDate: "",
    additionalNotes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Dentist",
      name: "Dental Snore Clinic",
      telephone: "+962797377131",
      address: {
        "@type": "PostalAddress",
        streetAddress: "شارع باريس - مجمع الشانزليزيه",
        addressLocality: "الصويفية",
        addressRegion: "عمان",
        addressCountry: "JO",
      },
    },
  };

  // ---------------- Handlers ----------------
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage("");
    setMessageType("");
    setIsSubmitting(true);

    try {
      const apiData = {
        name: formData.fullName,
        phone_number: formData.phoneNumber,
        email: formData.email,
        type_medicine: formData.treatmentType,
        date_of_medicine: formData.preferredDate,
        notes: formData.additionalNotes || "لا توجد ملاحظات إضافية",
      };

      const response = await axios.post(
        "https://backend.dentalsnoreclinic.com:3040/api/consultation",
        apiData,
        { headers: { "Content-Type": "application/json" }, timeout: 10000 }
      );

      if (response.data?.message) {
        setSubmitMessage(
          "تم إرسال طلب الموعد بنجاح! سنتواصل معك خلال 24 ساعة."
        );
        setMessageType("success");
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          treatmentType: "",
          preferredDate: "",
          additionalNotes: "",
        });
      } else {
        throw new Error("Invalid response");
      }
    } catch {
      setSubmitMessage(
        "حدث خطأ أثناء الإرسال. حاول مرة أخرى أو اتصل بنا مباشرة."
      );
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>اتصل بنا - عيادة الشخير وطب الأسنان | عمان، الأردن</title>
        <meta
          name="description"
          content="تواصل مع عيادة الشخير وطب الأسنان في الصويفية، عمان. هاتف: 962797377131. مواعيد العمل من السبت إلى الأربعاء."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="اتصل بنا - عيادة الشخير وطب الأسنان | عمان، الأردن"
        />
        <meta
          property="og:description"
          content="تواصل مع عيادة الشخير وطب الأسنان في الصويفية، عمان. هاتف: 962797377131. مواعيد العمل من السبت إلى الأربعاء."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_JO" />
        <meta
          property="og:url"
          content="https://dentalsnoreclinic.com/contact"
        />
        <meta property="og:site_name" content="Dental Snore Clinic" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="اتصل بنا - عيادة الشخير وطب الأسنان | عمان، الأردن"
        />
        <meta
          name="twitter:description"
          content="تواصل مع عيادة الشخير وطب الأسنان في الصويفية، عمان."
        />
      </Head>
      <Script
        id="contact-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactStructuredData),
        }}
      />
      <div className="min-h-screen bg-white" dir="rtl">
        <Navbar />

        <section className="bg-gradient-to-l from-blue-50 to-blue-100 py-12 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary mb-6">
              اتصل بنا - عيادة الشخير وطب الأسنان
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              فريقنا الطبي جاهز لمساعدتك في علاج الشخير واضطرابات النوم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/962797377131?text=أريد حجز موعد لعلاج الشخير"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                >
                  <MessageCircle className="w-5 h-5 ml-2" />
                  احجز عبر الواتساب
                </Button>
              </a>
              <a href="tel:+962797377131">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/70 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل الآن
                </Button>
              </a>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  احجز موعدك عبر النموذج الإلكتروني
                </h2>
                <p className="text-gray-600 mb-6">
                  املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة لتأكيد موعدك
                </p>
                {submitMessage && (
                  <div
                    className={`p-4 rounded-lg mb-6 ${
                      messageType === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={submitForm} className="space-y-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium mb-2"
                    >
                      الاسم الكامل *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-4 py-3"
                      placeholder="اكتب اسمك الكامل"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium mb-2"
                    >
                      رقم الهاتف *
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-4 py-3"
                      placeholder="07xxxxxxxx or +962xxxxxxxx"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-4 py-3"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="treatmentType"
                      className="block text-sm font-medium mb-2"
                    >
                      نوع العلاج المطلوب *
                    </label>
                    <select
                      id="treatmentType"
                      name="treatmentType"
                      value={formData.treatmentType}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-4 py-3"
                      required
                    >
                      <option value="">اختر نوع العلاج</option>
                      <option value="علاج الشخير للبالغين">
                        علاج الشخير للبالغين
                      </option>
                      <option value="علاج الشخير للأطفال">
                        علاج الشخير للأطفال
                      </option>
                      <option value="استشارة عامة">استشارة عامة</option>
                      <option value="مراجعة">مراجعة</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-sm font-medium mb-2"
                    >
                      التاريخ المفضل *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-4 py-3"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      max="2030-12-31"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="additionalNotes"
                      className="block text-sm font-medium mb-2"
                    >
                      ملاحظات إضافية
                    </label>
                    <textarea
                      rows={4}
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-4 py-3"
                      placeholder="اكتب أي ملاحظات أو أسئلة إضافية..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5 ml-2" />
                        إرسال طلب الموعد
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <WhatsAppButton />
      </div>
    </>
  );
}

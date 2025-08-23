
"use client";
import Link from "next/link"
import { useState ,useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, MessageCircle, Calendar, Navigation } from "lucide-react"
import Navbar from "@/components/Navbar"
import WhatsAppButton from "@/components/WhatsAppButton"
import axios from "axios";
import Head from "next/head"
import Script from "next/script"

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
    setFormData((prev:any) => ({ ...prev, [name]: value }));
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
      {/* Navigation */}
      <Navbar />

      {/* Contact Hero Section */}
      <section className="bg-gradient-to-l from-blue-50 to-blue-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-6">
              تواصل معنا - احجز موعدك الآن
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              فريقنا الطبي جاهز لمساعدتك في علاج الشخير واضطرابات النوم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/962797377131?text=أريد حجز موعد لعلاج الشخير" target="_blank">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  احجز عبر الواتساب
                </Button>
              </a>
              <a href="tel:+962797377131">
                <Button size="lg" variant="outline" className="border-primary/70 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل الآن
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">معلومات التواصل</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">الهاتف</h3>
                          <p className="text-gray-600 mb-2">للمواعيد والاستفسارات</p>
                          <a href="tel:+962797377131" className="text-blue-600 font-medium hover:underline">
                            962797377131
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">الواتساب</h3>
                          <p className="text-gray-600 mb-2">حجز سريع ومباشر</p>
                          <a href="https://wa.me/962797377131?text=أريد حجز موعد لعلاج الشخير" target="_blank" className="text-green-600 font-medium hover:underline">
                            اضغط للدردشة
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">العنوان</h3>
                          <p className="text-gray-600 mb-2"> لأردن-عمان- الصوفية-شارع باريس-مجمع 15</p>
                          <p className="text-gray-700">عمان، الأردن</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">ساعات العمل</h3>
                          <div className="space-y-1 text-gray-600">
                            <p>السبت - الأربعاء : 10:00  - 6:00 </p>
                            <p>الخميس  : 10:00  - 2:00 </p>
                            <p>الجمعة:  عطلة </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Social Media */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">فيسبوك</h3>
                          <p className="text-gray-600 mb-2">تابعنا على فيسبوك</p>
                          <a href="https://www.facebook.com/HealthyStartCenter" target="_blank" className="text-blue-600 font-medium hover:underline">
                            Healthy Start Center
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center flex-shrink-0">
 <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path fill="red" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                    </svg>

                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">إنستغرام</h3>
                          <p className="text-gray-600 mb-2">تابعنا على إنستغرام</p>
                          <a href="https://www.instagram.com/edc.snore/" target="_blank" className="text-pink-600 font-medium hover:underline">
                            @edc.snore
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
<Card>
  <CardContent className="p-6">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
        {/* YouTube Icon */}
        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a2.994 2.994 0 0 0-2.11-2.115C19.225 3.5 12 3.5 12 3.5s-7.225 0-9.388.571a2.994 2.994 0 0 0-2.11 2.115A29.94 29.94 0 0 0 0 12a29.94 29.94 0 0 0 .502 5.814 2.994 2.994 0 0 0 2.11 2.115C4.775 20.5 12 20.5 12 20.5s7.225 0 9.388-.571a2.994 2.994 0 0 0 2.11-2.115A29.94 29.94 0 0 0 24 12a29.94 29.94 0 0 0-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"/>
        </svg>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">يوتيوب</h3>
        <p className="text-gray-600 mb-2">اشترك في قناتنا على يوتيوب</p>
        <a href="https://www.youtube.com/@dentalsnoreclinic" target="_blank" className="text-red-600 font-medium hover:underline">
          EuroDentalCenterJO
        </a>
      </div>
    </div>
  </CardContent>
</Card>
                  {/* Google Map */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">موقعنا على الخريطة</h3>
                          <p className="text-gray-600 mb-4">زورونا في المركز الأوروبي لطب الأسنان</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.168010193968!2d35.8571081150921!3d31.956571981231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca10fe790e783%3A0x8e8500e7e7762c87!2z2YXYr9mF2LHYqSDYp9mE2KzYsdmF2K3YqSDYp9mE2YPYqNin2K3Yrw!5e0!3m2!1sar!2sjo!4v1697051234567"
                          width="100%"
                          height="300"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">احجز موعدك عبر النموذج الإلكتروني</h2>
                  <p className="text-gray-600 mb-6">املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة لتأكيد موعدك</p>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
                      <input
                        id="fullName"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/70"
                        placeholder="اكتب اسمك الكامل"
                        required
                                  value={formData.fullName}
                      onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/70"
                    placeholder="07xxxxxxxx or +962xxxxxxxx"
                        required
                           value={formData.phoneNumber}
                      onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/70"
                        placeholder="your.email@example.com"
                        required
                               value={formData.email}
                      onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="treatment-type" className="block text-sm font-medium text-gray-700 mb-2">نوع العلاج المطلوب</label>
                      <select id="treatment-type" name="treatment-type" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/70">
                        <option value="">اختر نوع العلاج</option>
                        <option value="adult">علاج الشخير للبالغين</option>
                        <option value="child">علاج الشخير للأطفال</option>
                        <option value="consultation">استشارة عامة</option>
                        <option value="follow-up">مراجعة</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="preferred-date" className="block text-sm font-medium text-gray-700 mb-2">التاريخ المفضل</label>
                      <input
                        type="date"
                        id="preferred-date"
                        name="preferred-date"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/70"
                           value={formData.preferredDate}
                      onChange={handleInputChange}
                          min={new Date().toISOString().split("T")[0]}
                      max="2030-12-31"
                      />
                    </div>
                    <div>
                      <label htmlFor="additional-notes" className="block text-sm font-medium text-gray-700 mb-2">ملاحظات إضافية</label>
                      <textarea
                        rows={4}
                        id="additional-notes"
                        name="additional-notes"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/70"
                        placeholder="اكتب أي ملاحظات أو أسئلة إضافية..."
                              value={formData.additionalNotes}
                      onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-primary text-white">
                      <Calendar className="w-5 h-5 ml-2" />
                      إرسال طلب الموعد
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      {/* <section className="bg-red-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-4">حالات الطوارئ</h2>
            <p className="text-red-700 mb-6">
              في حالة وجود صعوبة شديدة في التنفس أو توقف التنفس أثناء النوم، يرجى التوجه فوراً لأقرب مستشفى
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:911">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل بالطوارئ: 911
                </Button>
              </a>
              <a href="https://wa.me/962797377131?text=لدي حالة طارئة متعلقة بالتنفس" target="_blank">
                <Button size="lg" variant="outline" className="border-red-500 text-red-600 hover:bg-red-50">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  واتساب الطوارئ
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Quick Access */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">أسئلة شائعة</h2>
            <p className="text-gray-600 mb-8">اطلع على الأسئلة الأكثر شيوعاً حول علاج الشخير</p>
            <Link href="/faq">
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                <Navigation className="w-5 h-5 ml-2" />
                اطلع على الأسئلة الشائعة
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Dental Snore Clinic</h3>
                  <p className="text-gray-300 mb-4">عيادة ضمن أقسام 
المركز الأوروبي لطب الأسنان
</p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>د. مهند الكسواني</p>
                <p>أخصائي علاج الشخير واضطرابات النوم</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/adults" className="hover:text-white">علاج البالغين</Link></li>
                <li><Link href="/children" className="hover:text-white">علاج الأطفال</Link></li>
                <li><Link href="/medical-library" className="hover:text-white">المكتبة الطبية</Link></li>
                <li><Link href="/sleep-challenge" className="hover:text-white">تحدي النوم</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">خدماتنا</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>تشخيص أسباب الشخير</li>
                <li>علاج انقطاع التنفس النومي</li>
                <li>تقويم الفكين</li>
                <li>العلاج الوقائي للأطفال</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">تواصل معنا</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📞 962797377131</p>
                <p>📍الأردن - عمان - صويفية - شارع باريس - مجمع الشانزليزيه</p>
             <p>السبت - الأربعاء : 10:00  - 6:00 </p>
                            <p>الخميس  : 10:00  - 2:00 </p>
                            <p>الجمعة:  عطلة </p>
                <div className="flex gap-2 mt-4">
                  <a href="https://wa.me/962797377131" target="_blank" className="hover:text-green-400">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a href="tel:+962797377131" className="hover:text-blue-400">
                    <Phone className="w-5 h-5" />
                  </a>
                  <a href="https://www.facebook.com/HealthyStartCenter" target="_blank" className="hover:text-blue-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/edc.snore/" target="_blank" className="hover:text-pink-400">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
       <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
  <p>
    © 2025 Dental Snore Clinic - المركز الأوروبي لطب الأسنان. جميع الحقوق محفوظة. | حقوق التصميم والتطوير: كريبتون
  </p>
</div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
   </>
  )
}
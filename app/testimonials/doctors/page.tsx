"use client"

import Navbar from "@/components/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, Star, Calendar, MessageCircle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"

const testimonials = [
  {
    name: "د. ليلى المصري",
    text: "أوصي دائمًا بعيادة Dental Snore Clinic لمرضاى الذين يعانون من اضطرابات النوم. النتائج ممتازة والفريق الطبي متميز.",
    rating: 5,
  },
  {
    name: "د. سامر الحاج",
    text: "البروتوكولات العلاجية في العيادة متقدمة جدًا وتعتمد على أحدث الدراسات العلمية. أشكرهم على جهودهم المستمرة.",
    rating: 5,
  },
]

const doctorContent = [
  {
    text: `بعد أسبوع من تبادل الخبرات في المركز الأوروبي لطب الأسنان مع المحاضر الدولي الأسترالي د. ديفيد ماكنتوش أخصائي جراحة الأنف والأذن والحنجرة، والدكتور فادي عنتر  أخصائي طب أسنان الأطفال.
تعرف على رأي الأطباء في البرنامج العلاجي لدكتور مهند الكسواني والبروتوكول المتبع في علاج الشخير في `,
    video: "https://www.youtube.com/embed/HlahCt5LN78", 
    title: "رأي الدكتور ديفيد والدكتور فادي",
  },
  {
    text: `في إطار التعاون الطبي متعدد التخصصات، ثمّن الدكتور محمد الطراونةاستشاري أمراض الصدر واضطرابات النومالجهود المبذولة في المركز الأوروبي لطب الأسنان في مجال تشخيص وعلاج الشخير والتنفس الفموي.
وقد عبّر عن دعمه للبروتوكول العلاجي المتبع في المركز، والذي يستند إلى أحدث الأبحاث العلمية ويعكس رؤية الدكتور مهند الكسواني في تطوير حلول فعالة تجمع بين الطب وطب الأسنان لتحقيق نتائج مستدامة وشاملة للمرضى`,
    video: "https://www.youtube.com/embed/_IO5Mk83qVg", 
    title: "رأي د. محمد الطراونة استشاري أمراض الصدرية في البروتوكول المتبع في علاج الشخير في المركز الأوروبي",
  },
  {
    text: `أعرب البروفيسور مهند القضاة، استشاري أمراض وجراحة الأنف والأذن والحنجرة، عن تقديره الكبير للبروتوكول المتبع في المركز الأوروبي لطب الأسنان لعلاج الشخير وانقطاع النفس أثناء النوم، مشيدًا بتعامل المركز مع هذه الحالات كمنظومة متكاملة.
وقد لفت إلى أهمية العودة إلى طبيب الأسنان بعد إجراء عمليات الأنف أو الحنجرة، بهدف كسر عادة التنفس الفموي المزمنة، وذلك من خلال الأجهزة الفموية أو العلاج الشمولي الذي يشمل تمارين عضلات الفم والوجه، ما يساهم في تحقيق نتائج طويلة الأمد وتحسين جودة التنفس والنوم بشكل فعّال`,
    video: "https://www.youtube.com/embed/bQdij65wnr8", 
    title: "البرفيسور مهند القضاة أبدى دعمه العلمي لما يقوم  به مركزنا من بروتوكول علاج الشخير",
  },
  {
    text: `لتعزيز التعاون الطبي في علاج الشخير واضطراب التنفس الليلي ومشكلة التنفس الفموي، تم استضافة الأطباء في مؤتمر الشخير. في هذا السياق، أشارت الدكتورة فاتن المعايطة، استشارية طب الأطفال وحديثي الولادة، أن البروتوكول العلاجي الذي يقدمه الدكتور مهند الكسواني في عيادة علاج الشخير ضمن المركز الأوروبي  يشتمل على نقاط تتكامل بفاعلية مع اختصاص طب الأطفال وحديثي الولادة

وقد عبّرت عن دعمها للبروتوكول العلاجي المتبع في المركز، والذي يستند إلى أحدث الأبحاث العلمية والدراسات الطبية الحديثة`,
    video: "https://www.youtube.com/embed/WHM0vOF32sw", 
    title: "رأي د.فاتن المعايطة استشارية طب الأطفال وحديثي الولادة في علاج الشخير في مركزنا",
  },
  {
    text: `أبدى الدكتور أسامة حمارنة، استشاري أمراض وجراحة الأنف والأذن والحنجرة، إعجابه الكبير بالبروتوكول العلاجي المتبع في عيادة الشخير بالمركز الأوروبي لطب الأسنان، مؤكدًا على أهمية التعاون بين التخصصات لتحقيق نتائج فعالة ومستدامة.
وقد نوّه بشكل خاص بدور العلاج الوظيفي للعضلات الفموية (Myofunctional Therapy)، معتبرًا إياه مكمّلًا ضروريًا بعد عمليات الأنف أو اللوز أو اللحمية، لضمان استمرارية التحسن ومنع عودة الأعراض.
هذا الإعجاب يعكس ثقة الأطباء المتخصصين بجهود الدكتور مهند الكسواني في تطوير بروتوكول متكامل مبني على العلم والخبرة لتحسين جودة النوم والتنفس لدى المرضى.
`,
    video: "https://www.youtube.com/embed/pQ3htIiRO8o", 
    title: "رأي د.أسامة حمارنة استشاري أمراض وجراحة الأنف والأذن والحنجرة في البروتوكولنا المتبع في علاج الشخير",
  },
  {
    text: `أكّد الدكتور سلطان سعد جابر، أخصائي أمراض وجراحة الأنف والأذن والحنجرة، وعيه العميق بأهمية معالجة مشكلة التنفس الفموي وتأثيرها على جودة حياة المرضى. وأشار إلى أنه لطالما بحث عن جهة طبية تمتلك رؤية متكاملة لحل هذه المشكلة.
وقد أبدى إعجابه الكبير بالكفاءة العلمية التي يتمتع بها الدكتور مهند الكسواني، خاصة في قدرته على ربط مختلف التخصصات الطبية وابتكار حلول علاجية مدروسة تستند إلى بروتوكولات علمية دقيقة، ضمن إطار من التكامل بين طب الأسنان وطب الأنف والأذن والحنجرة.`,
    video: "https://www.youtube.com/embed/6rSSDz2kz14", 
    title: "رأي د.سلطان سعد جابر أخصائي أمراض وجراحة الأنف والأذن والحنجرة في علاج الشخير المتبع في مركزنا",
  },
  {
    text: `خلال الندوة الطبية العلمية أعربت الدكتورة حميدة شاهين، استشارية طب الأطفال وحديثي الولادة، عن إعجابها الشديد بالبروتوكول المتبع في المركز الأوروبي لعلاج الشخير. 
وأكدت  الدكتورة حميدة على أهمية أن يكون أطباء الأطفال وأخصائيي الأنف والأذن والحنجرة على دراية بالخدمات المتوفرة في المركز للاستفادة منها ومساعدة الأطفال الصغار. كما عبرت عن سعادتها بما يقوم به الدكتور مهند من تعاون طبي متعدد التخصصات`,
    video: "https://www.youtube.com/embed/0xIU6WTwHQo", 
    title: "رأي د. حميدة شاهين استشارية طب الأطفال وحديثي الولادة في علاج الشخير المتبع في مركزنا",
  },
  {
    text: `في المؤتمر الذي أقامه الدكتور مهند الكسواني أشار الدكتور محمد طوالبة، استشاري أمراض وجراحة الأنف والأذن والحنجرة ، إلى أنه يؤيد البروتوكول المتبع المركز الأوروبي لعلاج الشخير.
ويأمل الدكتور طوالبة في زيادة التعاون المستقبلي بين الزملاء في مجال الأنف والأذن والحنجرة والدكتور مهند وتوسيع نطاق التعاون ليشمل تخصصات أخرى مثل طب الأطفال وأمراض الصدر`,
    video: "https://www.youtube.com/embed/6ba5VWh4Dxg", 
    title: "رأي د.محمد طوالبة استشاري أمراض وجراحة الأنف والأذن والحنجرة في علاج الشخير المتبع في مركزنا",
  },
  {
    text: `أكّد الدكتور سليمان السعودي، استشاري أمراض وجراحة الأنف والأذن والحنجرة، على دعمه تقنيات علاج الشخير المتوفرة في المركز الأوروبي، مؤكداً على فعاليتها في مساعدة المرضى لعلاج الشخير. ويشدد على أهمية هذا البروتوكول للمرضى لضمان تحقيق أفضل النتائج. 

وقد أشار الدكتور إلى أهمية استخدام تقنيات مثل الأجهزة الفموية، وعملية شد عضلات سقف الحلق المترهلة بالليزر لرفعه للأعلى. وكما أعرب عن سعادته بالتعاون المستمر مع الدكتور مهند ورضا المرضى عن النتائج المحققة.`,
    video: "https://www.youtube.com/embed/Lk-WsJXmlb8", 
    title: "رأي د.سليمان السعودي استشاري أمراض وجراحة الأنف والأذن والحنجرة في علاج الشخير في مركزنا",
  },
]

export default function DoctorTestimonialsPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Testimonials Section */}
      <section className="relative bg-gradient-to-l from-blue-50 to-teal-100 py-12 overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-3xl animate-float morphing-shape"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-sky-200/20 rounded-full blur-3xl animate-bounce-slow morphing-shape"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl animate-scale-pulse morphing-shape"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
       



          {/* Text Testimonials */}
     

          {/* Detailed Content with Videos */}
          <div className="text-center mb-12">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 animate-fade-in-up mb-4">شهادات الأطباء</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 animate-fade-in-down">
              تجارب وآراء الأطباء
              <span className="block w-16 h-1 bg-secondary mx-auto mt-3 rounded-full opacity-90"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              استمع إلى شهادات الأطباء المتخصصين حول التعاون مع المركز الأوروبي
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12 mb-16">
            {doctorContent.map((content, idx) => (
              <Card key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-3 relative">
                          {content.title}
                          <span className="block w-16 h-1 bg-secondary mb-4 rounded-full"></span>
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base mb-6">{content.text}</p>
                      </div>
                    </div>
                    <div className="relative h-full rounded-xl overflow-hidden">
                      <iframe
                        className="w-full h-full object-cover"
                        src={content.video}
                        title={content.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <Badge className="absolute top-3 right-3 bg-primary/70 text-white flex items-center gap-1">
                        <Stethoscope className="w-3 h-3" />
                        شهادة طبيب
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white -mb-14">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white animate-fade-in-up">
              انضم إلى شبكة التعاون الطبي
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              تواصلوا معنا لمعرفة المزيد عن بروتوكولاتنا العلاجية وكيفية التعاون مع المركز الأوروبي
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <Link href="/contact" className="group">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg w-full sm:w-auto rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <Calendar className="w-5 h-5 ml-2" />
                  <span>احجز استشارة</span>
                </Button>
              </Link>
              <a href="https://wa.me/962797377131?text=أريد معرفة المزيد عن التعاون مع المركز الأوروبي" target="_blank" className="group">
                <Button size="lg" variant="outline" className=" text-blue-600 border-blue-600 hover:bg-blue-100 hover:text-blue-600 px-8 py-4 text-lg w-full sm:w-auto transition-all duration-300 hover:scale-105">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  <span>تواصل عبر واتساب</span>
                </Button>
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
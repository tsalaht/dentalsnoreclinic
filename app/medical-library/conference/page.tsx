import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function MedicalLibraryConferencePage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">مؤتمر الشخير</h2>
            <p className="text-lg text-gray-600">ورشة علمية نظمها المركز الأوروبي لطب الأسنان بتاريخ 30-4-2024</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">“الشخير واضطرابات التنفس أثناء النوم / بروتوكول علاجي متعدد الاختصاصات”</h3>
              <p className="text-gray-600 leading-relaxed">
                إيمانًا من الدكتور مهند الكسواني بما يقدمه من علم في مجال طب الأسنان المتعلق بمشكلة الشخير وتقديم طرق علاج حديثة له، نظم المركز الأوروبي لطب الأسنان ورشة علمية بتاريخ 30-4-2024. جمعت الندوة نخبة من أطباء الأسنان المهتمين بعلاج الشخير والتنفس الفموي، واستشاريين طب وجراحة الأنف والأذن والحنجرة، واستشاريين الأمراض الصدرية، واستشاريين طب الأطفال.
              </p>
              <p className="text-gray-600 leading-relaxed">
                يوفر المركز الأوروبي لطب الأسنان أجهزة فموية خاصة لكسر عادة التنفس الفموي، بالإضافة إلى استخدام ليزر عالي التردد لعلاج الشخير أثناء النوم بدون جراحة وبدون بنج، من خلال شد اللهاة وأنسجة الحلق الطرية إلى الأعلى لفتح مجرى التنفس.
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/confirense.JPG"
                  alt="مؤتمر الشخير 2024"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-800">ورشة علمية - 30 أبريل 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/ANSU1PZ6A4U"
                    title="جلسة افتتاح مؤتمر الشخير"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  {/* <h4 className="font-bold text-primary mb-2">جلسة افتتاح مؤتمر الشخير</h4> */}
                  <p className="text-sm text-gray-600 mb-3">نظم المركز الأوروبي ورشة بحث علمية حول الشخير واضطرابات التنفس أثناء النوم</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/-92gKrJaegI"
                    title="التنفس الفموي وعلاجه"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  {/* <h4 className="font-bold text-primary mb-2">التنفس الفموي وعلاجه</h4> */}
                  <p className="text-sm text-gray-600 mb-3">ورشة علمية بعنوان "الشخير واضطربات التنفس أثناء النوم/ بروتوكول علاجي متعدد الاختصاصات</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/YoYGb9DZ5io"
                    title="تقنيات الليزر في علاج الشخير"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  {/* <h4 className="font-bold text-primary mb-2">تقنيات الليزر في علاج الشخير</h4> */}
                  <p className="text-sm text-gray-600 mb-3">  لقطات من ورشة الشخير التي أقامها المركز الأوروبي وحضرها عدد من الأطباء المهتمين</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/K4-KYwk8n8U"
                    title="الشخير عند الأطفال"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  {/* <h4 className="font-bold text-primary mb-2">الشخير عند الأطفال</h4> */}
                  <p className="text-sm text-gray-600 mb-3">مقتطفات من مؤتمر المركز الأوروبي لطب الأسنان لعرض البروتوكول الخاص بعلاج الشخير 22 May 2024</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 
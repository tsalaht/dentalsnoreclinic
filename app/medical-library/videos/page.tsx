import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video,Badge } from "lucide-react";
import Link from "next/link";
import { MessageCircle, PlayCircle,  Brain } from "lucide-react";

export default function MedicalLibraryVideosPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />
      <section className="relative bg-gradient-to-l from-purple-50 to-indigo-100 py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[
            { label: "المكتبة الطبية", href: "/medical-library" },
            { label: "الفيديوهات التثقيفية" }
          ]} />
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary leading-tight mb-4">الفيديوهات التثقيفية</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">مجموعة من الفيديوهات التعليمية حول الشخير واضطرابات النوم</p>
          </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/_XhyV1vNMuI"
                    title="لماذا يحدث الشخير؟"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">مكافحة الشخير مع طبيب الأسنان</h4>
                  <p className="text-sm text-gray-600 mb-3"> يعمل أطباء الأسنان على تشخيص وعلاج العديد من الحالات التي تؤدي إلى الشخير</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/Wrr9Z9CiATY"
                    title="أفضل العلاجات الحديثة"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">ما هو التنفس الفموي؟!</h4>
                  <p className="text-sm text-gray-600 mb-3">تعرف على أسباب التنفس الفموي</p>
                </div>
              </CardContent>
            </Card>
     <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/QCQBFqfRzaM"
                    title="أفضل العلاجات الحديثة"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">التنفس الفموي.. أعراضه و مضاره</h4>
                  <p className="text-sm text-gray-600 mb-3">يعد المركز الأوروبي لطب الأسنان بإدارة الدكتور مهند الكسواني واحد من أكبر مراكز طب الأسنان على مستوى الشرق الأوسط، ويتميز بخدماته التجميلية والطبية فيما يخص زراعة الاسنان وتجميل الاسنان وجراحة الوجه والفكين وعلاج الشخير وانقطاع التنفس الانسدادي 
وغيرها من الخدمات التي تتم على ايدي أمهر الاخصائيين والأطباء بخبرات تجاوزت ال 25 سنة.</p>
                </div>
              </CardContent>
            </Card>
     <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/MI_P6dhPfh8"
                    title="أفضل العلاجات الحديثة"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">اختناقات النوم تذكرني بسكرات الموت!</h4>
                  <p className="text-sm text-gray-600 mb-3"> 
                    لو كنت تعتقد أن انقطاع نفسك وأنت نائم شيء طبيعي؛ عليك أن تراجع الطبيب فورا 
انتقطاع التنفس والشخير عبارة عن مؤشرات من الجسم تنبيها منه بالخطر
يؤدي الاختناق المتكرر إلى نقص الأوكسجين وضعف عضلة القلب ووصولا الموت
 </p>
                </div>
              </CardContent>
            </Card>
     <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/rF6D2mnqM3A"
                    title="أفضل العلاجات الحديثة"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">
ما هو علاج الشخير وانقطاع التنفس عند النوم؟</h4>
                  <p className="text-sm text-gray-600 mb-3"> 
لا تترددوا باستشارة #الدكتور_مهند_الكسواني  ليقدم لكم أفضل الحلول للتخلص من الشخير و انقطاع النفس أثناء النوم.

 </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/l7RlJzxwk_k"
                    title="كيف يساعد الليزر؟"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    15:20
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">رحلة الدكتور مهند الكسواني لعلاج الشخي</h4>
                  <p className="text-sm text-gray-600 mb-3">   رحلة الدكتور مهند الكسواني لعلاج الشخير: تقنيات الليزر المتطورة في المركز الأوروبي لطب الأسنان  </p>
                 
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/haWdsUIrJeg"
                    title="الشخير عند الأطفال - الخطر الخفي"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    6:15
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2"> ما يميز عيادتنا في علاج الشخير واضطراب التنفس أثناء النوم</h4>
                  <p className="text-sm text-gray-600 mb-3">ما يميز عيادتنا في علاج الشخير هو التعاون مع الأطباء المختصين لعلاج الشخير مثل :
طبيب الصدرية وطبيب الأنف والأذن والحنجرة، وطبيب الأطفال </p>
              
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/fqgjlBycmCo"
                    title="توقف التنفس أثناء النوم"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    10:45
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">البروتوكول العلاجي المتبع لمعالجة الشخير واضطراب التنفس أثناء النوم</h4>
                  <p className="text-sm text-gray-600 mb-3">عيادة تخصصية في علاج الشخير ضمن المركز الأوروبي لطب الأسنان بإدارة د. مهند الكسواني، تتبع بروتوكولًا متقدمًا يهدف إلى توفير أفضل الطرق للتخلص من عادة الشخير والتنفس الفموي.</p>
        
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video rounded-t-lg"
                    src="https://www.youtube.com/embed/SmuFVRI0AEQ"
                    title="الأجهزة الفموية - دليل شامل"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    7:30
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-primary mb-2">لماذا طبيب الأسنان يعالج الشخير ؟</h4>
                  <p className="text-sm text-gray-600 mb-3">يطرح الدكتور مهند الكسواني تعاوناً مُبتكراً مع الأطباء في التخصصات  الطبية المختلفة  لِعلاجِ الشخير واضطراب التنفس الليلي والتحدياتِ الطبيةِ  التي قد  يواجهها بعض  الأشخاص اثناء رحلتهم ومحاولتهم   الحصول  على نوم هانىء ومريح  و التخلص من الشخير </p>
                
                </div>
              </CardContent>
            </Card>
              <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/_o9ohoJ8r9w"
                    title="أحدث تقنيات العلاج بالليزر 2024"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <Badge className="absolute top-3 right-3 bg-primary text-white flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    فيديو جديد
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-primary/20 p-1 rounded">
                      <Video className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary">فيديو تعليمي</span>
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-2">علاج الشخير بالليزر | الدكتور مهند الكسواني</h3>
                  <p className="text-gray-600 text-sm mb-4">في هذا الفيديو، يشرح الدكتور مهند الكسواني، المحاضر الدولي في علوم طب الأسنان، أحدث طرق علاج الشخير باستخدام تقنية الليزر. يعتمد العلاج على تقنيات متطورة لشد عضلات سقف الحلق وتقليل الشخير بشكل فعال ودون الحاجة للجراحة.</p>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a href="https://www.youtube.com/@dentalsnoreclinic" target="_blank">
                  <Button className="w-full bg-primary/80 hover:bg-primary text-white btn-hover-scale">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    مشاهدة الفيديو التعليمي
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/iClh79sqQ-Q"
                    title="كيف تعمل أجهزة Myobrace للأطفال؟"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <Badge className="absolute top-3 right-3 bg-green-500 text-white flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    الأكثر مشاهدة
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-accent/20 0 p-1 rounded">
                      <Video className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-accent">فيديو تعليمي</span>
                  </div>
                  <h3 className="font-bold text-lg text-accent mb-2">كتاب "الشخير حتى الموت" | مناقشة مع الدكتور مهند الكسواني</h3>
                  <p className="text-gray-600 text-sm mb-4">في هذا الفيديو، يستعرض الدكتور مهند الكسواني، المحاضر الدولي في علوم طب الأسنان، كتاب "الشخير حتى الموت" لمؤلفه ديفيد ماكنتوش. يقدم الدكتور مهند رؤىً شاملة حول المخاطر الصحية المرتبطة بالشخير وتأثيراته السلبية على نوعية الحياة.</p>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a href="https://www.youtube.com/@dentalsnoreclinic" target="_blank">
                  <Button className="w-full bg-accent/80 hover:bg-accent text-white btn-hover-scale">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    مشاهدة الفيديو التعليمي
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative">
                  <iframe
                    className="w-full aspect-video"
                    src="https://www.youtube.com/embed/NQK5SWteZbE"
                    title="دراسة: العلاقة بين الشخير وأمراض القلب"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <Badge className="absolute top-3 right-3 bg-secondary text-white flex items-center gap-1">
                    <Brain className="w-3 h-3" />
                    دراسة علمية
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-secondary/20 p-1 rounded">
                      <Brain className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm font-medium text-secondary">دراسة علمية</span>
                  </div>
                  <h3 className="font-bold text-lg text-secondary mb-2">الشخير المزمن هو القاتل الصامت!!</h3>
                  <p className="text-gray-600 text-sm mb-4">الشخير المزمن ليس مجرد إزعاج بسيط، بل هو مؤشر على مشكلة صحية قد تؤثر على صحتك ونومك وجودة حياتك.</p>
                </div>
              </CardContent>
              <div className="px-6 pb-6">
                <a href="https://www.youtube.com/@dentalsnoreclinic" target="_blank">
                  <Button className="w-full bg-secondary/80 hover:bg-secondary text-white btn-hover-scale">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    مشاهدة الفيديو التعليمي
                  </Button>
                </a>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <a href="https://www.youtube.com/@EuroDentalCenterJO" target="_blank">
              <Button size="lg" className="bg-blue-600 hover:bg-primary text-white px-8 py-4">
                <Video className="w-5 h-5 ml-2" />
                شاهد جميع الفيديوهات
              </Button>
            </a>
          </div>
          
        </div>
        
      </section>
 
    </div>
  );
} 
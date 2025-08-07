import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Video, Baby, User, Stethoscope, Heart, Play, Eye, ThumbsUp, PlayCircle, HelpCircle, Phone, MessageCircle, Zap, BookOpen, CheckCircle, Calendar } from "lucide-react"
import WhatsAppButton from "@/components/WhatsAppButton"
import Navbar from "@/components/Navbar"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-4">          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">❓ الأسئلة الشائعة</Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
                  إجابات شاملة من د. مهند الكسواني
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  أكثر الأسئلة شيوعاً حول الشخير وعلاجه مع إجابات مفصلة بالفيديو والنصوص
                </p>
              </div>

            
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/86.jpg"
                  alt="د. مهند الكسواني يجيب على الأسئلة الشائعة"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                       loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-800">إجابات من خبير متخصص</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Quick Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/scientific-studies/laser-effectiveness">
              <Button variant="outline" className="border-primary/70 text-blue-600 hover:bg-blue-50">
              <Video className="w-4 h-4 ml-2" />
              العلاج بالليزر
            </Button>
            </a>
          <a href="/children">
                 <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
              <Baby className="w-4 h-4 ml-2" />
              الأطفال
            </Button>
          </a>
          <a href="/adults">
                <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50">
              <User className="w-4 h-4 ml-2" />
              البالغين
            </Button>
          </a>
          <a href="/scientific-studies/oral-devices-effectiveness">
    <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
              <Stethoscope className="w-4 h-4 ml-2" />
              الأجهزة الفموية
            </Button>
          </a>
      
        
        
       
          </div>
        </div>
      </section>

      {/* Most Popular Questions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">الأسئلة الأكثر شيوعاً</h2>
            <p className="text-lg text-gray-600">الأسئلة التي يطرحها المرضى أكثر مع إجابات بالفيديو</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/SmuFVRI0AEQ"
                    title="لماذا طبيب الأسنان يعالج الشخير ؟
"
                    className="w-full aspect-video rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-red-500 text-white">الأكثر مشاهدة</Badge>
                  </div>
                </div>
                <h4 className="font-bold text-lg text-primary mb-2">لماذا طبيب الأسنان يعالج الشخير ؟
</h4>
                <p className="text-sm text-gray-600 mb-4">
                  هل أنت أيضا تعتقد أن الأمر غريب ؟
"لماذا طبيب الأسنان يعالج الشخير ؟"

                </p>
         
                <a href="https://www.youtube.com/embed/SmuFVRI0AEQ" target="_blank">
                  <Button className="w-full bg-blue-600 hover:bg-primary text-white">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    شاهد على يوتيوب
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/Je8bOUxaRTU"
                    title="
لا يكفي علاج انغلاق الانف لننتقل من مرحلة تنفس الأنفي إلى الفموي"
                    className="w-full aspect-video rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-green-500 text-white">شائع</Badge>
                  </div>
                </div>
                <h4 className="font-bold text-lg text-primary mb-2">
                 لا يكفي علاج انغلاق الانف لننتقل من مرحلة تنفس الأنفي إلى الفموي
                 </h4>
                <p className="text-sm text-gray-600 mb-4">
  لا يكفي علاج انغلاق الانف لننتقل من مرحلة تنفس الأنفي إلى الفموي
</p>
          
                <a href="https://www.youtube.com/embed/Je8bOUxaRTU" target="_blank">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    شاهد على يوتيوب
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/_XhyV1vNMuI"
                    title="
مكافحة الشخير مع طبيب الأسنان"
                    className="w-full aspect-video rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute top-2 left-2">
                  <Badge className="bg-green-500 text-white">شائع</Badge>
                  </div>
                </div>
                <h4 className="font-bold text-lg text-primary mb-2">
                 مكافحة الشخير مع طبيب الأسنان</h4>
                <p className="text-sm text-gray-600 mb-4"> 
                  كيف يمكن لطبيب الأسنان مساعدتك؟
 يعمل أطباء الأسنان على تشخيص وعلاج العديد من الحالات التي تؤدي إلى الشخير

                 </p>
           
                <a href="https://www.youtube.com/watch?v=_XhyV1vNMuI" target="_blank">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <PlayCircle className="w-4 h-4 ml-2" />
                    شاهد على يوتيوب
                  </Button>
                </a>
              </CardContent>
            </Card>

          

    

      
          </div>
        </div>
      </section>

      {/* FAQ by Category */}


      {/* Text FAQ Section */}


<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">الأسئلة النصية الشائعة</h2>
        <p className="text-lg text-gray-600">إجابات سريعة ومفصلة للأسئلة الأكثر تكراراً</p>
      </div>

      <div className="space-y-6">
        {/* Existing Questions */}
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-green-600" />
              كم مدة علاج الأطفال بالجهاز العضلي الوظيفي الفموي
            </h3>
            <p className="text-gray-600 mb-4">
              مدة العلاج تتراوح من 12-24 شهر حسب عمر الطفل وشدة الحالة. النتائج الأولية تظهر خلال 3-6 أشهر، والتحسن الكامل يحتاج للمدة الكاملة.
            </p>
            <a href="https://wa.me/962797377131?text=أريد معرفة مدة علاج طفلي بأجهزة     فموية" target="_blank">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="w-4 h-4 ml-2" />
        فريقنا هنا للمساعدة
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-orange-600" />
              هل هناك آثار جانبية للعلاج؟
            </h3>
            <p className="text-gray-600 mb-4">
              العلاجات التي نستخدمها آمنة جداً. قد يشعر المريض بانزعاج بسيط في الأيام الأولى مع الأجهزة الفموية، وهذا طبيعي ويختفي خلال أسبوع.
            </p>
            <a href="https://wa.me/962797377131?text=أريد معرفة المزيد عن أمان العلاج والآثار الجانبية" target="_blank">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                <MessageCircle className="w-4 h-4 ml-2" />
         فريقنا هنا للمساعدة
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* Snoring Questions */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              كل الناس بتشخر... بس هل ممكن يكون علامة على مشكلة صحية محتاجة انتباه؟
            </h3>
            <p className="text-gray-600 mb-4">
              الشخير هو الصوت الذي يصدر عندما يضيق مجرى الهواء أثناء النوم وتتذبذب الأنسجة الرخوة في الحلق. على الرغم من أنه قد يبدو غير ضار، إلا أنه غالباً ما يكون عرضاً لمشكلة أكبر تسمى "انقطاع التنفس الانسدادي النومي" (OSA). هذا الاضطراب يمكن أن يؤدي إلى نقص الأكسجين في الدم، مما يزيد من مخاطر الإصابة بأمراض القلب، ارتفاع ضغط الدم، السكري، الجلطات، والإرهاق المزمن. في عيادة المركز الأوروبي لعلاج الشخير والتنفس الفموي، نؤكد على أهمية تشخيص الشخير بدقة لتحديد ما إذا كان مجرد شخير بسيط أم جزءاً من مشكلة صحية أعمق.
            </p>
            <a href="https://wa.me/962797377131?text=أريد معرفة المزيد عن تشخيص الشخير" target="_blank">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <MessageCircle className="w-4 h-4 ml-2" />
        فريقنا هنا للمساعدة
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              كيف يختلف التنفس الفموي عن التنفس الأنفي، وما هي مخاطره؟
            </h3>
            <p className="text-gray-600 mb-4">
              الأنف هو الفلتر الطبيعي للجسم، حيث يقوم بترطيب وتدفئة وتصفية الهواء قبل وصوله إلى الرئتين. التنفس الفموي المزمن، خصوصاً لدى الأطفال، يؤثر على نمو عظام الوجه والفكين، مما قد يؤدي إلى ضيق الفك العلوي، تزاحم الأسنان، وتغيرات في ملامح الوجه. في عيادة المركز الأوروبي لعلاج الشخير والتنفس الفموي، نركز على إعادة تأهيل نمط التنفس الصحي.
            </p>
            <a href="https://wa.me/962797377131?text=أريد معرفة المزيد عن التنفس الفموي" target="_blank">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <MessageCircle className="w-4 h-4 ml-2" />
       فريقنا هنا للمساعدة
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              هل علاج الشخير يتطلب جراحة؟
            </h3>
            <p className="text-gray-600 mb-4">
              <strong>الإجابة السريعة:</strong> لا، في عيادة المركز الأوروبي لعلاج الشخير والتنفس الفموي، نقدم حلول غير جراحية فعالة لمعظم حالات الشخير والتنفس الفموي.<br /><br />
              على عكس الاعتقاد الشائع، فإن العديد من حالات الشخير واضطرابات التنفس الفموي يمكن علاجها بنجاح دون الحاجة إلى تدخل جراحي. يعتمد نهجنا في المركز الأوروبي على التشخيص الدقيق أولاً لتحديد السبب الجذري للمشكلة، ثم وضع خطة علاجية مخصصة قد تشمل الليزر، الأجهزة الفموية، التمارين، وتغييرات في نمط الحياة. الجراحة تتم بالتعاون مع أطباء الأنف والأذن والحنجرة للحالات التي تستدعي ذلك.
            </p>
            <a href="https://wa.me/962797377131?text=أريد معرفة المزيد عن علاج الشخير غير الجراحي" target="_blank">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <MessageCircle className="w-4 h-4 ml-2" />
       فريقنا هنا للمساعدة
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              ما هي أحدث التقنيات المستخدمة لعلاج الشخير في المركز الأوروبي؟
            </h3>
            <p className="text-gray-600 mb-4">
              في عيادة المركز الأوروبي لعلاج الشخير والتنفس الفموي - عيادة الشخير، نفخر بتقديم بروتوكول علاجي متكامل ومتطور وغير جراحي. نستخدم تقنية الليزر المتطورة التي تعمل على شد الأنسجة الرخوة في سقف الحلق، مما يقلل من اهتزازها ويحسن تدفق الهواء بشكل ملحوظ، وكل ذلك يتم بدون ألم أو جراحة. كما نقدم حلولاً مثل الأجهزة الفموية المخصصة التي تساعد على كسر عادة التنفس الفموي، بالإضافة إلى برامج تمارين الوجه والعضلات لتعزيز قوة الأنسجة وتحسين وظيفة التنفس.
            </p>
            <a href="https://wa.me/962797377131?text=أريد معرفة المزيد عن تقنيات علاج الشخير" target="_blank">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <MessageCircle className="w-4 h-4 ml-2" />
          فريقنا هنا للمساعدة
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* Children's Treatment Questions */}
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-green-600" />
              متى يجب أن أقلق بشأن تنفس طفلي من فمه؟
            </h3>
            <p className="text-gray-600 mb-4">
              من المهم جداً مراقبة طريقة تنفس الأطفال، فالتنفس الأنفي هو الأساس لنمو صحي. يجب القلق إذا لاحظت أن طفلك:<br />
              • يتنفس من فمه معظم الوقت، حتى أثناء اللعب أو مشاهدة التلفاز.<br />
              • يشخر بصوت عالٍ أو يتوقف تنفسه لفترات قصيرة أثناء النوم.<br />
              • يعاني من جفاف الفم أو الشفاه المتشققة.<br />
              • يظهر عليه علامات "وجه التنفس الفموي" مثل الفك السفلي المتراجع، أو تضيق الفك العلوي، أو تزاحم الأسنان.<br />
              • يعاني من التهابات متكررة في الحلق أو الأذن.<br />
              • يواجه صعوبة في التركيز أو يعاني من فرط النشاط بسبب قلة النوم.<br />
              التدخل المبكر أمر حيوي لتصحيح هذه العادة ومنع المضاعفات المستقبلية.
            </p>
            <a href="https://wa.me/962797377131?text=أريد استشارة حول تنفس طفلي من فمه" target="_blank">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="w-4 h-4 ml-2" />
          فريقنا هنا للمساعدة
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-green-600" />
              هل الأجهزة الفموية آمنة ومريحة للأطفال؟
            </h3>
            <p className="text-gray-600 mb-4">
              الأجهزة الفموية المستخدمة للأطفال تختلف عن تلك المخصصة للبالغين. فهي لا تعالج الشخير فقط، بل تهدف أيضاً إلى توجيه نمو الفك العلوي والسفلي بشكل صحيح، وتوسيع مجرى الهواء، وتشجيع التنفس الأنفي. هذه الأجهزة مصممة لتكون مريحة قدر الإمكان، ويتم تعديلها بانتظام لتناسب مراحل نمو الطفل. يحرص أطباؤنا في عيادة المركز الأوروبي لعلاج الشخير والتنفس الفموي على اختيار الجهاز الأنسب لكل طفل وشرح كيفية استخدامه والعناية به لضمان أقصى درجات الأمان والفعالية.
            </p>
            <a href="https://wa.me/962797377131?text=أريد معرفة المزيد عن أجهزة الفم للأطفال" target="_blank">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="w-4 h-4 ml-2" />
                فريقنا هنا للمساعدة
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-green-600" />
              هل يمكن علاج التنفس الفموي عند الأطفال دون جراحة؟
            </h3>
            <p className="text-gray-600 mb-4">
              في عيادة المركز الأوروبي لعلاج الشخير والتنفس الفموي، نؤمن بالنهج الشامل للعلاج. حتى لو كان هناك عائق مثل اللحمية أو اللوزتين وتمت إزالته جراحياً، فإن عادة التنفس الفموي قد تستمر كنمط سلوكي. لذلك، نركز على العلاج الوظيفي لعضلات الوجه والفكين، والذي يشمل تمارين محددة واستخدام أجهزة فموية مصممة لتدريب الطفل على التنفس من الأنف بشكل صحيح. هذا النهج يساعد على تصحيح نمو الفك وتطوير عادات تنفس صحية ودائمة، مما يقلل الحاجة إلى التدخلات الجراحية المتكررة.
            </p>
            <a href="https://wa.me/962797377131?text=أريد معرفة المزيد عن علاج التنفس الفموي للأطفال" target="_blank">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="w-4 h-4 ml-2" />
             فريقنا هنا للمساعدة
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* Oral Appliances Questions */}
        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-purple-600" />
              ما هي الأجهزة الفموية المستخدمة في علاج الشخير والتنفس الفموي؟
            </h3>
            <p className="text-gray-600 mb-4">
              الأجهزة الفموية هي حلول غير جراحية وفعالة لعلاج الشخير وانقطاع التنفس الانسدادي الخفيف إلى المتوسط. يتم تصميمها لتناسب كل مريض، تعمل عن طريق دفع الفك السفلي أو اللسان إلى الأمام قليلاً أثناء النوم، مما يوسع مجرى الهواء ويمنع انسداده. هذه الأجهزة مريحة وسهلة الاستخدام.
            </p>
            <a href="https://wa.me/962797377131?text=أريد معرفة المزيد عن الأجهزة الفموية" target="_blank">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <MessageCircle className="w-4 h-4 ml-2" />
            فريقنا هنا للمساعدة
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-purple-600" />
              هل الأجهزة الفموية مريحة للاستخدام أثناء النوم؟
            </h3>
            <p className="text-gray-600 mb-4">
              على الرغم من أن التكيف الأولي قد يستغرق بضعة أيام، إلا أن الأجهزة الفموية الحديثة مصممة لتكون مريحة قدر الإمكان. يحرص أطباؤنا على تعديل الجهاز حتى يشعر المريض بالراحة التامة، مما يسمح له بالنوم بشكل طبيعي دون إزعاج. يجد معظم المرضى أنهم يتكيفون مع الجهاز بسرعة ويصبح جزءًا طبيعيًا من روتين نومهم.
            </p>
            <a href="https://wa.me/962797377131?text=أريد معرفة المزيد عن راحة الأجهزة الفموية" target="_blank">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <MessageCircle className="w-4 h-4 ml-2" />
                فريقنا هنا للمساعدة
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* Laser Treatment Questions */}
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-orange-600" />
              ما هو علاج الشخير بالليزر وكيف يعمل؟
            </h3>
            <p className="text-gray-600 mb-4">
              يعتمد علاج الشخير بالليزر على استخدام طاقة ليزر آمنة وموجهة بدقة، لتسخين الأنسجة الرخوة في الحلق وسقف الحلق. هذا التسخين اللطيف يحفز إنتاج الكولاجين الجديد في الأنسجة، مما يؤدي إلى شدها وتقويتها بمرور الوقت. النتيجة هي فتح مجرى الهواء بشكل أكبر وتقليل اهتزاز الأنسجة المسببة لصوت الشخير، مما يمنحك نوماً أعمق وأكثر هدوءاً.
            </p>
            <a href="https://wa.me/962797377131?text=أريد معرفة المزيد عن علاج الشخير بالليزر" target="_blank">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                <MessageCircle className="w-4 h-4 ml-2" />
               فريقنا هنا للمساعدة
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-orange-600" />
              هل علاج الشخير بالليزر مؤلم؟ وهل يتطلب فترة تعافٍ طويلة؟
            </h3>
            <p className="text-gray-600 mb-4">
              يتميز علاج الشخير بالليزر بكونه إجراءً لطيفاً وغير مؤلمٍ. معظم المرضى لا يشعرون بأي ألم أثناء الج sepsis: "لسة، وقد يشعر البعض بانزعاج خفيف أو شعور بالدفء. لا يتطلب العلاج تخديراً، وبعد الجلسة مباشرة، يمكن للمريض العودة إلى أنشطته اليومية بشكل طبيعي، بخلاف تجنب الأطعمة والمشروبات شديدة الحرارة أو البرودة لبضع ساعات.
            </p>
            <a href="https://wa.me/962797377131?text=أريد معرفة المزيد عن راحة علاج الليزر" target="_blank">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                <MessageCircle className="w-4 h-4 ml-2" />
           فريقنا هنا للمساعدة
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-orange-600" />
              هل علاج الشخير بالليزر آمن وفعال؟
            </h3>
            <p className="text-gray-600 mb-4">
              يعتبر علاج الشخير بالليزر إجراءً آمناً للغاية عند إجرائه بواسطة أطباء متخصصين ومدربين. تم اعتماد هذه التقنية على نطاق واسع وأظهرت الدراسات العلمية نتائج فعالة في تقليل الشخير وتحسين جودة النوم لدى العديد من المرضى. كما أن الليزر المستخدم آمن للأنسجة الرخوة ولا يسبب أي ضرر للأصوات أو التنفس. في عيادة المركز الأوروبي لعلاج الشخير والتنفس الفموي، نستخدم أحدث أجهزة الليزر ونتبع بروتوكولات علاجية دقيقة لضمان أعلى مستويات الأمان والفعالية.
            </p>
            <a href="https://wa.me/962797377131?text=أريد معرفة المزيد عن أمان وفعالية علاج الليزر" target="_blank">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                <MessageCircle className="w-4 h-4 ml-2" />
               فريقنا هنا للمساعدة
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>

      {/* Ask Your Question */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">لم تجد إجابة سؤالك؟</h2>
            <p className="text-xl text-blue-100">اسأل د. مهند مباشرة واحصل على إجابة شخصية</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-center text-white">🤔 اطرح سؤالك الآن</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="اسمك الكريم"
                    className="w-full p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                  <textarea
                    placeholder="اكتب سؤالك هنا بالتفصيل..."
                    rows={4}
                    className="w-full p-3 border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent"
                  ></textarea>
                    <a href="https://wa.me/962797377131?text=لدي سؤال خاص حول الشخير وأريد إجابة من الدكتور" target="_blank" className="w-full">
                      <Button className="bg-blue-500 hover:bg-blue-700 text-white w-full py-3">
                        إرسال الى واتساب
                      </Button>
                    </a>
                  <div className="grid grid-cols-2 gap-4">
                    <a href="https://wa.me/962797377131?text=لدي سؤال خاص حول الشخير وأريد إجابة من الدكتور" target="_blank" className="w-full">
                      <Button className="bg-green-500 hover:bg-green-600 text-white w-full py-3">
                        <MessageCircle className="w-4 h-4 ml-2" />
                        أرسل عبر واتساب
                      </Button>
                    </a>
                    <a href="tel:+962797377131" className="w-full">
                      <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 w-full py-3">
                        <Phone className="w-4 h-4 ml-2" />
                        اتصل مباشرة
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

  
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">قد يهمك أيضاً</h2>
            <p className="text-lg text-gray-600">روابط مفيدة لمعلومات إضافية</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">المكتبة الطبية</h3>
                <p className="text-gray-600 text-sm mb-4">فيديوهات ومقالات تعليمية شاملة</p>
                <Link href="/medical-library">
                  <Button variant="outline" className="border-primary/70 text-blue-600 hover:bg-blue-50 w-full">
                    تصفح المكتبة
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">اختبار التقييم</h3>
                <p className="text-gray-600 text-sm mb-4">قيّم حالتك واكتشف مدى خطورة الشخير</p>
                <Link href="/adults#assessment">
                  <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 w-full">
                    ابدأ التقييم
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">احجز استشارة</h3>
                <p className="text-gray-600 text-sm mb-4">احجز موعد مع د. مهند للفحص والعلاج</p>
                <Link href="/contact">
                  <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50 w-full">
                    احجز الآن
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

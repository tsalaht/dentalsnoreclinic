import Image from "@/components/Image";

export default function ImanPage() {
  return (
    <div className="container mx-auto py-16 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        {/* First Image and Header */}
        <div className="text-center mb-8">
          <Image
            src="/iman.JPG"
            alt="د. إيمان نزال - صورة رئيسية"
            width={200}
            height={200}
            className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-primary/10"
            priority
          />
          <h1 className="text-3xl font-extrabold text-primary mt-6 mb-2">د. إيمان نزال</h1>
          <p className="text-lg text-gray-600 mb-4">أخصائية الأشعة السنية التشخيصية</p>
          <p className="text-primary/80 text-base leading-relaxed">
            تصوير الأسنان الإشعاعي – التصوير الطبقي ثلاثي الأبعاد (CBCT) وطب الأسنان الرقمي
          </p>
        </div>

        <div className="space-y-10 text-gray-700 text-right">
          {/* About Section with Second Image */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">نبذة عن الدكتورة إيمان</h2>
              <p className="text-base leading-relaxed text-gray-700">
                الدكتورة إيمان نزال من الرواد في مجال طب الأسنان، حيث شاركت في تأسيس المركز الأوروبي لطب الأسنان وعملت على مساعدة الدكتور مهند الكسواني للوصول إلى التميز وتقديم خدمات متخصصة في طب الأسنان وعلاج الشخير والتنفس الفموي. كانت الدكتورة إيمان سباقة في تطبيق أحدث التقنيات في طب الأسنان، مما جعلها إضافة ثمينة للمركز.
              </p>
            </div>
        
          </div>

          {/* Academic and Professional Background Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">المسيرة الأكاديمية والمهنية</h2>
            <ul className="list-disc list-inside mb-4 space-y-3 text-base leading-relaxed text-gray-700">
              <li>بكالوريوس في طب وجراحة الفم والأسنان - الجامعة الأردنية (2002-2007).</li>
              <li>ماجستير في طب أسنان الأطفال - جامعة العلوم والتكنولوجيا الأردنية (2010-2013).</li>
              <li>خبير ومدرب معتمد في تصميم الابتسامة الرقمية - من GPS/كندا (2014).</li>
              <li>برنامج شامل لزراعة الأسنان لمدة عام - نقابة أطباء الأسنان الأردنية (2017).</li>
              <li>شهادة دراسات عليا في التفسير الإشعاعي لصور الأشعة المقطعية المخروطية للأسنان (Dental CBCT) - كلية كينغز في لندن (2023-2024).</li>
            </ul>
          </div>

          {/* Exceptional Diagnostic Expertise Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">خبرتها الاستثنائية في التشخيص الدقيق</h2>
            <p className="text-base leading-relaxed text-gray-700">
              خبرة الدكتورة إيمان الاستثنائية في التشخيص الدقيق للأشعة المقطعية قد أضفت بعداً فريداً على خدمات عيادتنا. بفضل قدرتها على قراءة ودراسة صور الأشعة الطبقية (CBCT) بدقة متناهية، أصبح تشخيص حالات الشخير والتنفس الفموي أكثر دقة من أي وقت مضى. هذه الخبرة تمكّن فريقنا من تحديد الأسباب الجذرية للمشكلة بدقة، ووضع خطة علاجية مخصصة ومبنية على أسس علمية متينة، مما يضمن لمرضانا أعلى مستويات النجاح والفعالية في العلاج.
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
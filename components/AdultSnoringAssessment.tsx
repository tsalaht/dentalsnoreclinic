"use client"

import { useState } from "react"
import { CheckCircle, AlertTriangle, MessageCircle, User, Mail, Phone, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


interface Question {
  id: string
  question: string
  options: { value: number; text: string }[]
}

interface UserInfo {
  name: string
  email: string
  phone: string 
}

export default function AdultSnoringAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [showSaveForm, setShowSaveForm] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', email: '', phone: '' })

  const questions: Question[] = [
    {
      id: "snore",
      question: "هل تشخر أثناء النوم بصوت عالٍ لدرجة إزعاج من حولك؟",
      options: [
        { value: 1, text: "نعم" },
        { value: 0, text: "لا" }
      ]
    },
    {
      id: "tired",
      question: "هل تشعر أنك مرهق أو متعب أو تشعر بالنعاس خلال النهار؟",
      options: [
        { value: 1, text: "نعم" },
        { value: 0, text: "لا" }
      ]
    },
    {
      id: "stopBreath",
      question: "هل لاحظ أحد أنك تتوقف عن التنفس أو تختنق / تلهث أثناء النوم؟",
      options: [
        { value: 1, text: "نعم" },
        { value: 0, text: "لا" }
      ]
    },
    {
      id: "bloodPressure",
      question: "هل كنت تأخذ أو تتناول علاجاً حالياً لارتفاع ضغط الدم؟",
      options: [
        { value: 1, text: "نعم" },
        { value: 0, text: "لا" }
      ]
    },
    {
      id: "age",
      question: "هل يزيد عمرك عن 50 عاماً؟",
      options: [
        { value: 1, text: "نعم" },
        { value: 0, text: "لا" }
      ]
    },
    {
      id: "neck",
      question: "هل مقياس رقبتك كبير (القياس حول تفاحة آدم)؟",
      options: [
        { value: 1, text: "نعم" },
        { value: 0, text: "لا" }
      ]
    },
    {
      id: "gender",
      question: "هل أنت ذكر؟",
      options: [
        { value: 1, text: "نعم" },
        { value: 0, text: "لا" }
      ]
    },
    {
      id: "weight",
      question: "هل وزنك يزيد عن 100 كغ للرجال / 75 كغ للنساء؟",
      options: [
        { value: 1, text: "نعم" },
        { value: 0, text: "لا" }
      ]
    }
  ]

  const handleAnswer = (value: number) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const saveResult = () => {
    if (!userInfo.name || !userInfo.email || !userInfo.phone) {
      alert("يرجى ملء جميع الحقول المطلوبة")
      return
    }

    const score = getTotalScore()
    const results = getResultsData()

    const message = [
      "🦷 *نتيجة اختبار الشخير - Dental Snore Clinic*",
      "",
      `👤 *الاسم:* ${userInfo.name}`,
      `📞 *الهاتف:* ${userInfo.phone}`,
      `📧 *البريد الإلكتروني:* ${userInfo.email}`,
      "",
      `📊 *نتيجة الاختبار:* ${score}/8 نقطة`,
      `⚠️ *مستوى الخطر:* ${results.level}`,
      `🏷️ *التشخيص:* ${results.title}`,
      `⏰ *الإجراء المطلوب:* ${results.urgency}`,
      "",
      `📝 *التوصيات:*`,
      ...results.recommendations.map((r) => `• ${r}`),
    ].join("\n")

    const url = `https://wa.me/962797377131?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
    setShowSaveForm(false)
  }

  const getTotalScore = () => {
    return Object.values(answers).reduce((sum, value) => sum + value, 0)
  }

  const getResultsData = () => {
    const score = getTotalScore()

    if (score <= 2) {
      return {
        level: "قليل",
        color: "green",
        icon: CheckCircle,
        title: "خطر منخفض لانقطاع التنفس الانسدادي",
        description: "أمورك جيدة لكن ننصحك باتباع بعض العادات الصحية للوقاية.",
        recommendations: [
          "تقليل الوزن إن وجد",
          "المشي لمدة 20 دقيقة يوميًا",
          "تناول آخر وجبة قبل الساعة 8 مساءً",
          "ممارسة تمارين التنفس الصحيحة",
          "الابتعاد عن مسببات الحساسية"
        ],
        urgency: "متابعة دورية ونمط حياة صحي"
      }
    } else if (score <= 4) {
      return {
        level: "متوسط",
        color: "yellow",
        icon: AlertTriangle,
        title: "خطر متوسط - ننصح بزيارة الطبيب",
        description: "بعض المؤشرات تستدعي التقييم الطبي لتجنب التدهور.",
        recommendations: [
          "فحص سريري لتقييم الحالة",
          "المشي اليومي وتحسين النوم",
          "الالتزام بوجبات صحية ومواعيد منتظمة",
          "زيارة الطبيب في أقرب وقت"
        ],
        urgency: "زيارة خلال أسبوعين"
      }
    } else {
      return {
        level: "عالي",
        color: "red",
        icon: AlertTriangle,
        title: "خطر مرتفع - تحتاج لفحص عاجل",
        description: "قد تكون تعاني من انقطاع التنفس الانسدادي وتحتاج تدخل طبي فوري.",
        recommendations: [
          "إجراء فحص طبي شامل",
          "دراسة نوم ليلية",
          "بدء علاج حسب تشخيص الحالة",
          "متابعة طبية مكثفة"
        ],
        urgency: "موعد خلال 48 ساعة"
      }
    }
  }

  const restartAssessment = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setShowSaveForm(false)
    setUserInfo({ name: '', email: '', phone: '' })
  }

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    setUserInfo(prev => ({ ...prev, [field]: value }))
  }

  if (showSaveForm) {
    return (
      <div className="max-w-md mx-auto">
        <Card className="border-2 border-blue-500 bg-blue-50">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <Save className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-blue-800">حفظ النتائج</h3>
              <p className="text-sm text-gray-600 mt-2">أدخل بياناتك لحفظ نتائج الاختبار</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <User className="w-4 h-4 inline ml-1" />
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  value={userInfo.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Mail className="w-4 h-4 inline ml-1" />
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Phone className="w-4 h-4 inline ml-1" />
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  value={userInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0791234567"
                  required
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                onClick={saveResult}
                disabled={!userInfo.name || !userInfo.email || !userInfo.phone}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="w-4 h-4 ml-2" />
                إرسال عبر الواتساب
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowSaveForm(false)}
                className="flex-1"
              >
                إلغاء
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showResults) {
    const results = getResultsData()
    const score = getTotalScore()

    return (
      <div className="max-w-4xl mx-auto">
        <Card className={`border-2 ${
          results.color === 'green' ? 'border-green-500 bg-green-50' :
          results.color === 'yellow' ? 'border-yellow-500 bg-yellow-50' :
          'border-red-500 bg-red-50'
        }`}>
          <CardContent className="p-8 text-center">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
              results.color === 'green' ? 'bg-green-500' :
              results.color === 'yellow' ? 'bg-yellow-500' :
              'bg-red-500'
            }`}>
              <results.icon className="w-10 h-10 text-white" />
            </div>

            <Badge className={`mb-4 ${
              results.color === 'green' ? 'bg-green-100 text-green-800' :
              results.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              مستوى الخطر: {results.level} ({score}/8 نقطة)
            </Badge>

            <h3 className="text-2xl font-bold text-primary mb-4">{results.title}</h3>
            <p className="text-lg text-gray-600 mb-6">{results.description}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-right">
                <h4 className="font-semibold text-primary mb-3">التوصيات:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary/70 mt-1">•</span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-right">
                <h4 className="font-semibold text-primary mb-3">خطوات العلاج:</h4>
                <div className={`p-4 rounded-lg ${
                  results.color === 'green' ? 'bg-green-100' :
                  results.color === 'yellow' ? 'bg-yellow-100' :
                  'bg-red-100'
                }`}>
                  <p className="font-medium text-primary mb-2">{results.urgency}</p>
                  <p className="text-sm text-gray-600">
                    {results.color === 'red' ? 
                      "حالتك تتطلب تدخل طبي فوري" :
                      "نوصي بحجز موعد للفحص والمتابعة"
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://wa.me/962797377131?text=أريد حجز موعد عاجل - نتيجة اختبار الشخير: ${results.level} (${score}/8)`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className={`${
                  results.color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                  results.color === 'yellow' ? 'bg-yellow-600 hover:bg-yellow-700' :
                  'bg-red-600 hover:bg-red-700'
                } text-white`}>
                  <MessageCircle className="w-4 h-4 ml-2" />
                  احجز موعد الآن
                </Button>
              </a>
              
              <Button
                variant="outline"
                onClick={() => setShowSaveForm(true)}
                className="border-blue-500 text-blue-600 hover:bg-blue-50"
              >
                <Save className="w-4 h-4 ml-2" />
                إرسال النتائج
              </Button>
              
              <Button variant="outline" onClick={restartAssessment}>
                إعادة الاختبار
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            السؤال {currentQuestion + 1} من {questions.length}
          </span>
          <div className="flex gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index < currentQuestion 
                    ? 'bg-primary/70' 
                    : index === currentQuestion 
                    ? 'bg-blue-300' 
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <Card className="bg-white shadow-lg">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-primary mb-6 text-center">
            {questions[currentQuestion].question}
          </h3>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full p-4 text-right border-2 border-gray-200 rounded-lg hover:border-primary/70 hover:bg-blue-50 transition-all"
              >
                <span className="font-medium">{option.text}</span>
              </button>
            ))}
          </div>

          {currentQuestion > 0 && (
            <div className="mt-6 text-center">
              <Button 
                variant="outline" 
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
              >
                السؤال السابق
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>جميع إجاباتك سرية ولن يتم حفظها</p>
      </div>
    </div>
  )
}
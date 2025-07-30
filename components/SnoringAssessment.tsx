'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, Heart, Brain, Moon } from "lucide-react"

interface Question {
  id: number
  text: string
  options: string[]
  values: number[]
}

const questions: Question[] = [
  {
    id: 1,
    text: "كم مرة تشخر أثناء النوم؟",
    options: ["نادراً أو لا أشخر", "أحياناً", "غالباً", "كل ليلة"],
    values: [0, 1, 2, 3]
  },
  {
    id: 2,
    text: "هل يوقظك الشخير أو شريك الحياة؟",
    options: ["لا مطلقاً", "نادراً", "أحياناً", "كثيراً"],
    values: [0, 1, 2, 3]
  },
  {
    id: 3,
    text: "هل تشعر بالتعب حتى بعد النوم الكافي؟",
    options: ["لا", "أحياناً", "غالباً", "دائماً"],
    values: [0, 1, 2, 3]
  },
  {
    id: 4,
    text: "هل تتنفس من فمك أثناء النوم؟",
    options: ["لا", "أحياناً", "غالباً", "دائماً"],
    values: [0, 1, 2, 3]
  },
  {
    id: 5,
    text: "هل تستيقظ مع جفاف في الفم أو التهاب الحلق؟",
    options: ["لا", "نادراً", "أحياناً", "كثيراً"],
    values: [0, 1, 2, 3]
  }
]

export default function SnoringAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const totalScore = newAnswers.reduce((sum, answer) => sum + answer, 0)
      setScore(totalScore)
      setShowResult(true)
    }
  }

  const getResultInfo = (score: number) => {
    if (score <= 3) {
      return {
        level: "منخفض",
        color: "green",
        icon: CheckCircle,
        title: "خطر منخفض - وضعك جيد!",
        description: "نومك صحي نسبياً، لكن ننصحك بالمحافظة على عادات النوم الصحية",
        recommendations: [
          "تجنب النوم على الظهر",
          "حافظ على وزن صحي",
          "تجنب الكحول قبل النوم"
        ]
      }
    } else if (score <= 8) {
      return {
        level: "متوسط",
        color: "yellow",
        icon: AlertTriangle,
        title: "خطر متوسط - يحتاج لانتباه",
        description: "لديك أعراض تستدعي المراجعة الطبية لتجنب تفاقم المشكلة",
        recommendations: [
          "استشر طبيب متخصص",
          "فحص شامل للتنفس",
          "تقييم حالة الفكين"
        ]
      }
    } else {
      return {
        level: "عالي",
        color: "red",
        icon: Heart,
        title: "خطر عالي - يتطلب تدخل عاجل!",
        description: "حالتك تتطلب تدخل طبي فوري لحماية صحتك وتجنب المضاعفات الخطيرة",
        recommendations: [
          "حجز موعد عاجل",
          "فحص شامل فوري",
          "علاج متخصص"
        ]
      }
    }
  }

  const resetAssessment = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setScore(0)
  }

  if (showResult) {
    const result = getResultInfo(score)
    const IconComponent = result.icon
    
    return (
      <div className="max-w-2xl mx-auto">
        <Card className={`border-2 ${result.color === 'green' ? 'border-green-200 bg-green-50' : result.color === 'yellow' ? 'border-yellow-200 bg-yellow-50' : 'border-red-200 bg-red-50'}`}>
          <CardContent className="p-8 text-center">
            <div className={`w-20 h-20 ${result.color === 'green' ? 'bg-green-600' : result.color === 'yellow' ? 'bg-yellow-600' : 'bg-red-600'} rounded-full flex items-center justify-center mx-auto mb-6`}>
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            
            <div className={`inline-block px-4 py-2 rounded-full text-white text-sm font-medium mb-4 ${result.color === 'green' ? 'bg-green-600' : result.color === 'yellow' ? 'bg-yellow-600' : 'bg-red-600'}`}>
              مستوى الخطر: {result.level}
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-4">{result.title}</h3>
            <p className="text-gray-600 mb-6">{result.description}</p>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-primary mb-4">توصياتنا لك:</h4>
              <ul className="text-right space-y-2">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/962797377131?text=أجريت اختبار الشخير وحصلت على نتيجة: ${result.level}. أريد استشارة طبية.`} target="_blank">
                <Button size="lg" className={`${result.color === 'green' ? 'bg-green-600 hover:bg-green-700' : result.color === 'yellow' ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-red-600 hover:bg-red-700'} text-white px-8 py-3`}>
                  احجز استشارة طبية
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={resetAssessment}
                className="px-8 py-3"
              >
                إعادة الاختبار
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="border-2 border-blue-200">
        <CardContent className="p-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-blue-600">
                السؤال {currentQuestion + 1} من {questions.length}
              </span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-6">
              {questions[currentQuestion].text}
            </h3>
          </div>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(questions[currentQuestion].values[index])}
                className="w-full p-4 text-right border border-gray-300 rounded-lg hover:border-primary/70 hover:bg-blue-50 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Brain className="w-4 h-4" />
              <span>تقييم علمي معتمد</span>
            </div>
            <p>مبني على معايير طبية دولية معتمدة</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

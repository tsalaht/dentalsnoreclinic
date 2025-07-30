"use client"

import { useState } from "react"
import { Star, ThumbsUp, Heart, MessageCircle, CheckCircle, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface EvaluationSection {
  id: string
  title: string
  questions: {
    id: string
    question: string
    type: 'stars' | 'thumbs' | 'heart' | 'rating'
    required?: boolean
  }[]
}

const evaluationSections: EvaluationSection[] = [
  {
    id: 'website-experience',
    title: 'تجربة الموقع الإلكتروني',
    questions: [
      {
        id: 'website-ease',
        question: 'ما رأيك في سهولة استخدام موقعنا؟',
        type: 'stars',
        required: true
      },
      {
        id: 'information-clarity',
        question: 'هل المعلومات الطبية واضحة ومفهومة؟',
        type: 'heart'
      },
      {
        id: 'appointment-booking',
        question: 'هل تجد سهولة في حجز المواعيد؟',
        type: 'thumbs'
      }
    ]
  },
  {
    id: 'medical-services',
    title: 'الخدمات الطبية',
    questions: [
      {
        id: 'medical-confidence',
        question: 'هل تشعر بالثقة في خدماتنا الطبية؟',
        type: 'heart',
        required: true
      },
      {
        id: 'treatment-options',
        question: 'ما رأيك في وضوح خيارات العلاج المقدمة؟',
        type: 'stars'
      },
      {
        id: 'doctor-expertise',
        question: 'كيف تقيم خبرة الطبيب المتخصص؟',
        type: 'stars'
      }
    ]
  },
  {
    id: 'treatment-expectations',
    title: 'توقعات العلاج',
    questions: [
      {
        id: 'treatment-effectiveness',
        question: 'كم تتوقع أن يكون العلاج فعالاً؟',
        type: 'stars',
        required: true
      },
      {
        id: 'treatment-comfort',
        question: 'هل تشعر بالراحة مع طرق العلاج المقترحة؟',
        type: 'heart'
      },
      {
        id: 'family-comfort',
        question: 'هل تعتقد أن العلاج سيحسن راحتك العائلية؟',
        type: 'thumbs'
      }
    ]
  },
  {
    id: 'communication',
    title: 'التواصل والخدمة',
    questions: [
      {
        id: 'response-speed',
        question: 'كيف تقيم سرعة الاستجابة لاستفساراتك؟',
        type: 'stars'
      },
      {
        id: 'staff-communication',
        question: 'كيف تقيم التواصل مع فريق العيادة؟',
        type: 'stars'
      },
      {
        id: 'recommend-clinic',
        question: 'هل ستنصح أصدقاءك بزيارة عيادتنا؟',
        type: 'thumbs',
        required: true
      }
    ]
  }
]

export default function ComprehensivePatientEvaluation() {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [currentSection, setCurrentSection] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const renderRatingInput = (question: any, sectionId: string) => {
    const answer = answers[question.id]
    
    if (question.type === 'stars') {
      return (
        <div className="flex items-center justify-center gap-1 my-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className="transition-colors p-1"
              onClick={() => handleAnswer(question.id, star)}
            >
              <Star
                className={`w-8 h-8 ${
                  star <= (answer || 0)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300 hover:text-yellow-200"
                }`}
              />
            </button>
          ))}
        </div>
      )
    }

    if (question.type === 'thumbs') {
      return (
        <div className="flex items-center justify-center gap-6 my-4">
          <button
            type="button"
            className={`flex items-center gap-2 p-4 rounded-lg border-2 transition-all ${
              answer === 1 
                ? "bg-green-100 text-green-600 border-green-300 shadow-md" 
                : "bg-gray-50 text-gray-400 hover:bg-green-50 border-gray-300"
            }`}
            onClick={() => handleAnswer(question.id, 1)}
          >
            <ThumbsUp className="w-6 h-6" />
            <span className="font-medium">راضٍ</span>
          </button>
          <button
            type="button"
            className={`flex items-center gap-2 p-4 rounded-lg border-2 transition-all ${
              answer === 0 
                ? "bg-red-100 text-red-600 border-red-300 shadow-md" 
                : "bg-gray-50 text-gray-400 hover:bg-red-50 border-gray-300"
            }`}
            onClick={() => handleAnswer(question.id, 0)}
          >
            <ThumbsUp className="w-6 h-6 rotate-180" />
            <span className="font-medium">غير راضٍ</span>
          </button>
        </div>
      )
    }

    if (question.type === 'heart') {
      return (
        <div className="flex items-center justify-center gap-1 my-4">
          {[1, 2, 3, 4, 5].map((heart) => (
            <button
              key={heart}
              type="button"
              className="transition-colors p-1"
              onClick={() => handleAnswer(question.id, heart)}
            >
              <Heart
                className={`w-8 h-8 ${
                  heart <= (answer || 0)
                    ? "fill-red-400 text-red-400"
                    : "text-gray-300 hover:text-red-200"
                }`}
              />
            </button>
          ))}
        </div>
      )
    }

    return null
  }

  const getCompletedQuestions = () => {
    return Object.keys(answers).length
  }

  const getTotalQuestions = () => {
    return evaluationSections.reduce((total, section) => total + section.questions.length, 0)
  }

  const getAverageRating = () => {
    const values = Object.values(answers).filter(val => val > 0)
    if (values.length === 0) return 0
    return values.reduce((sum, val) => sum + val, 0) / values.length
  }

  const canProceed = (sectionIndex: number) => {
    const section = evaluationSections[sectionIndex]
    const requiredQuestions = section.questions.filter(q => q.required)
    return requiredQuestions.every(q => answers[q.id] !== undefined)
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const scrollToSection = (sectionIndex: number) => {
    setCurrentSection(sectionIndex)
    const element = document.getElementById(`section-${sectionIndex}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (showResults) {
    const averageRating = getAverageRating()
    const completedQuestions = getCompletedQuestions()
    const totalQuestions = getTotalQuestions()
    
    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="text-2xl text-green-600 mb-4 flex items-center justify-center gap-2">
            <CheckCircle className="w-8 h-8" />
            شكراً لك على تقييمك الشامل!
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {averageRating.toFixed(1)}/5
            </div>
            <div className="text-lg text-gray-600 mb-4">
              متوسط تقييمك العام
            </div>
            <Progress value={(averageRating / 5) * 100} className="mb-4" />
            <p className="text-sm text-gray-500">
              أجبت على {completedQuestions} من {totalQuestions} سؤال
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-primary mb-2">تقييمك مهم لنا</h3>
              <p className="text-sm text-gray-600">
                نستخدم ملاحظاتك لتحسين خدماتنا باستمرار
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-primary mb-2">متابعة دورية</h3>
              <p className="text-sm text-gray-600">
                سنتواصل معك لمتابعة تجربتك وتحسينها
              </p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href={`https://wa.me/962797377131?text=أكملت تقييم تجربة المريض الشامل وحصلت على متوسط ${averageRating.toFixed(1)}/5. أريد مشاركة المزيد من الملاحظات.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <MessageCircle className="w-5 h-5 ml-2" />
                شارك المزيد من الملاحظات
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Progress Header */}
      <Card className="sticky top-4 z-10 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-primary">تقييم تجربة المريض الشامل</h2>
            <Badge variant="outline" className="text-sm">
              {getCompletedQuestions()}/{getTotalQuestions()} أسئلة
            </Badge>
          </div>
          <Progress 
            value={(getCompletedQuestions() / getTotalQuestions()) * 100} 
            className="mb-3"
          />
          <div className="flex flex-wrap gap-2">
            {evaluationSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(index)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  index === currentSection
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Evaluation Sections */}
      {evaluationSections.map((section, sectionIndex) => (
        <Card 
          key={section.id} 
          id={`section-${sectionIndex}`}
          className="scroll-mt-24"
        >
          <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {sectionIndex + 1}
              </span>
              {section.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-8">
              {section.questions.map((question) => (
                <div key={question.id} className="text-center">
                  <h4 className="font-semibold text-primary mb-2">
                    {question.question}
                    {question.required && <span className="text-red-500 mr-1">*</span>}
                  </h4>
                  {renderRatingInput(question, section.id)}
                  {answers[question.id] && (
                    <div className="text-sm text-green-600 font-medium mt-2">
                      ✓ تم التقييم
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Submit Section */}
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold text-primary mb-4">
            إنهاء التقييم
          </h3>
          <p className="text-gray-600 mb-6">
            شكراً لوقتك! تقييمك يساعدنا في تقديم أفضل رعاية طبية ممكنة.
          </p>
          <Button 
            onClick={handleSubmit}
            disabled={getCompletedQuestions() === 0}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
          >
            <CheckCircle className="w-5 h-5 ml-2" />
            إرسال التقييم
          </Button>
          {getCompletedQuestions() === 0 && (
            <p className="text-sm text-gray-500 mt-2">
              يرجى الإجابة على سؤال واحد على الأقل
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

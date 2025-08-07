'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, Target, Trophy, GamepadIcon, Timer, Medal, Gift } from 'lucide-react'

const sleepQuestions = [
  {
    id: 1,
    question: "كم ساعة تنام عادة في الليلة؟",
    options: [
      { value: "less-than-5", label: "أقل من 5 ساعات", score: 0 },
      { value: "5-6", label: "5-6 ساعات", score: 1 },
      { value: "7-8", label: "7-8 ساعات", score: 3 },
      { value: "more-than-8", label: "أكثر من 8 ساعات", score: 2 }
    ]
  },
  {
    id: 2,
    question: "هل تشخر أثناء النوم؟",
    options: [
      { value: "always", label: "دائماً وبصوت عالي", score: 0 },
      { value: "often", label: "غالباً", score: 1 },
      { value: "sometimes", label: "أحياناً", score: 2 },
      { value: "never", label: "نادراً أو أبداً", score: 3 }
    ]
  },
  {
    id: 3,
    question: "هل تستيقظ متعباً حتى بعد نوم كامل؟",
    options: [
      { value: "always", label: "دائماً", score: 0 },
      { value: "often", label: "غالباً", score: 1 },
      { value: "sometimes", label: "أحياناً", score: 2 },
      { value: "never", label: "نادراً أو أبداً", score: 3 }
    ]
  },
  {
    id: 4,
    question: "هل تتنفس من فمك أثناء النوم؟",
    options: [
      { value: "always", label: "دائماً", score: 0 },
      { value: "often", label: "غالباً", score: 1 },
      { value: "sometimes", label: "أحياناً", score: 2 },
      { value: "through-nose", label: "أتنفس من أنفي", score: 3 }
    ]
  },
  {
    id: 5,
    question: "كم مرة تستيقظ أثناء الليل؟",
    options: [
      { value: "more-than-5", label: "أكثر من 5 مرات", score: 0 },
      { value: "3-5", label: "3-5 مرات", score: 1 },
      { value: "1-2", label: "1-2 مرة", score: 2 },
      { value: "never", label: "نادراً أو أبداً", score: 3 }
    ]
  },
  {
    id: 6,
    question: "هل تشعر بالنعاس أثناء النهار؟",
    options: [
      { value: "always", label: "دائماً ولا أستطيع التركيز", score: 0 },
      { value: "often", label: "غالباً", score: 1 },
      { value: "sometimes", label: "أحياناً", score: 2 },
      { value: "never", label: "نادراً أو أبداً", score: 3 }
    ]
  }
]

export default function InteractiveSleepChallenge() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [challengeStarted, setChallengeStarted] = useState(false)

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const nextQuestion = () => {
    const currentAnswer = answers[sleepQuestions[currentQuestion].id]
    if (currentAnswer) {
      const selectedOption = sleepQuestions[currentQuestion].options.find(opt => opt.value === currentAnswer)
      if (selectedOption) {
        setScore(prev => prev + selectedOption.score)
      }

      if (currentQuestion < sleepQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1)
      } else {
        setShowResults(true)
      }
    }
  }

  const getResultLevel = () => {
    const percentage = (score / 18) * 100 // 18 is max possible score
    if (percentage >= 80) return "ممتاز"
    if (percentage >= 60) return "جيد"
    if (percentage >= 40) return "متوسط"
    return "يحتاج تحسين"
  }

  const getResultColor = () => {
    const percentage = (score / 18) * 100
    if (percentage >= 80) return "text-green-600"
    if (percentage >= 60) return "text-blue-600"
    if (percentage >= 40) return "text-yellow-600"
    return "text-red-600"
  }

  const getRecommendedChallenge = () => {
    const percentage = (score / 18) * 100
    if (percentage >= 80) return "تحدي 14 يوم للحفاظ على النوم الممتاز"
    if (percentage >= 60) return "تحدي جودة النوم لتحسين النتائج"
    if (percentage >= 40) return "تحدي 14 يوم مع متابعة طبية"
    return "تحدي شامل مع استشارة طبية فورية"
  }

  const resetChallenge = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setScore(0)
    setShowResults(false)
    setChallengeStarted(false)
  }

  if (!challengeStarted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-purple-600 mb-4">
            <GamepadIcon className="w-8 h-8 mx-auto mb-2" />
            تحدي النوم التفاعلي
          </CardTitle>
          <p className="text-gray-600">
            اختبار تفاعلي سريع لتقييم جودة نومك والحصول على توصيات مخصصة
          </p>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-purple-50 rounded-lg p-3">
              <div className="font-bold text-purple-600">6</div>
              <div className="text-gray-600">أسئلة</div>
            </div>
            <div className="bg-pink-50 rounded-lg p-3">
              <div className="font-bold text-pink-600">3</div>
              <div className="text-gray-600">دقائق</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="font-bold text-blue-600">فوري</div>
              <div className="text-gray-600">النتيجة</div>
            </div>
          </div>
          
          <Button 
            onClick={() => setChallengeStarted(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
          >
            <Target className="w-5 h-5 ml-2" />
فريقنا هنا لمساعدتك
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (showResults) {
    const percentage = Math.round((score / 18) * 100)
    
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-green-600 mb-4">
            <CheckCircle className="w-8 h-8 mx-auto mb-2" />
            نتيجة تحدي النوم
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className={`text-4xl font-bold mb-2 ${getResultColor()}`}>
              {percentage}%
            </div>
            <div className={`text-xl font-semibold mb-4 ${getResultColor()}`}>
              مستوى نومك: {getResultLevel()}
            </div>
            <Progress value={percentage} className="mb-4" />
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-primary mb-3">التوصية المخصصة لك:</h3>
            <p className="text-gray-700 mb-4">{getRecommendedChallenge()}</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {percentage >= 60 ? (
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">نتيجة ممتازة!</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    تستحق الانضمام لتحدي المحافظة على النوم الصحي
                  </p>
                </div>
              ) : (
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold text-orange-800">فرصة للتحسن</span>
                  </div>
                  <p className="text-orange-700 text-sm">
                    يمكنك تحسين جودة نومك بشكل كبير مع التحدي
                  </p>
                </div>
              )}
              
          
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`https://wa.me/962797377131?text=أكملت تحدي النوم التفاعلي وحصلت على نتيجة ${percentage}%. أريد الانضمام للتحدي المناسب لي: ${getRecommendedChallenge()}`}
              target="_blank"
              className="flex-1"
            >
              <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full py-3">
                <GamepadIcon className="w-5 h-5 ml-2" />
                انضم للتحدي المناسب
              </Button>
            </a>
            <Button 
              onClick={resetChallenge}
              variant="outline" 
              className="border-purple-500 text-purple-600 hover:bg-purple-50"
            >
              إعادة الاختبار
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const progress = ((currentQuestion + 1) / sleepQuestions.length) * 100
  const question = sleepQuestions[currentQuestion]

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">
            السؤال {currentQuestion + 1} من {sleepQuestions.length}
          </span>
          <span className="text-sm text-purple-600 font-semibold">
            {Math.round(progress)}%
          </span>
        </div>
        <Progress value={progress} className="mb-4" />
        <CardTitle className="text-xl text-primary">{question.question}</CardTitle>
      </CardHeader>        <CardContent className="space-y-8">
        <RadioGroup 
          value={answers[question.id] || ""} 
          onValueChange={(value) => handleAnswer(question.id, value)}
          className="space-y-4"
        >
          {question.options.map((option) => (
            <div key={option.value} className="flex items-center space-x-3 space-x-reverse">
              <RadioGroupItem value={option.value} id={option.value} />
              <Label 
                htmlFor={option.value} 
                className="flex-1 cursor-pointer p-4 rounded-lg border-2 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 font-medium text-right"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <div className="flex justify-between pt-4">
          <Button 
            variant="outline" 
            onClick={() => setCurrentQuestion(prev => prev - 1)}
            disabled={currentQuestion === 0}
            className="px-6 py-3 hover:scale-105 transition-transform duration-200"
          >
            السابق
          </Button>
          <Button 
            onClick={nextQuestion}
            disabled={!answers[question.id]}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 hover:scale-105 transition-transform duration-200"
          >
            {currentQuestion === sleepQuestions.length - 1 ? "إنهاء الاختبار" : "التالي"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

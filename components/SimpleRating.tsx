"use client"

import { useState } from "react"
import { Star, ThumbsUp, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface SimpleRatingProps {
  question: string
  type?: "stars" | "thumbs" | "heart"
  onRate?: (rating: number) => void
}

export default function SimpleRating({ question, type = "stars", onRate }: SimpleRatingProps) {
  const [rating, setRating] = useState<number>(0)
  const [hoveredRating, setHoveredRating] = useState<number>(0)
  const [hasRated, setHasRated] = useState(false)

  const handleRate = (value: number) => {
    setRating(value)
    setHasRated(true)
    onRate?.(value)
  }

  const renderStars = () => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className="transition-colors"
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => handleRate(star)}
        >
          <Star
            className={`w-6 h-6 ${
              star <= (hoveredRating || rating)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  )

  const renderThumbs = () => (
    <div className="flex items-center gap-6 justify-center">
      <button
        type="button"
        className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${
          rating === 1 
            ? "bg-green-100 text-green-600 border-green-300" 
            : "bg-gray-100 text-gray-400 hover:bg-green-50 border-gray-300"
        }`}
        onClick={() => handleRate(1)}
      >
        <ThumbsUp className="w-5 h-5" />
        <span className="text-sm font-medium">راضٍ</span>
      </button>
      <button
        type="button"
        className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${
          rating === 0 
            ? "bg-red-100 text-red-600 border-red-300" 
            : "bg-gray-100 text-gray-400 hover:bg-red-50 border-gray-300"
        }`}
        onClick={() => handleRate(0)}
      >
        <ThumbsUp className="w-5 h-5 rotate-180" />
        <span className="text-sm font-medium">غير راضٍ</span>
      </button>
    </div>
  )

  const renderHeart = () => (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((heart) => (
        <button
          key={heart}
          type="button"
          className="transition-colors"
          onMouseEnter={() => setHoveredRating(heart)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => handleRate(heart)}
        >
          <Heart
            className={`w-6 h-6 ${
              heart <= (hoveredRating || rating)
                ? "fill-red-400 text-red-400"
                : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  )

  return (
    <Card className="bg-blue-50 border-blue-200">
      <CardContent className="p-6 text-center">
        <h4 className="font-semibold text-primary mb-4">{question}</h4>
        
        <div className="flex justify-center mb-4">
          {type === "stars" && renderStars()}
          {type === "thumbs" && renderThumbs()}
          {type === "heart" && renderHeart()}
        </div>

        {hasRated && (
          <div className="text-center">
            <p className="text-sm text-green-600 font-medium mb-2">
              شكراً لك على تقييمك! 🙏
            </p>
            <p className="text-xs text-gray-500">
              تقييمك يساعدنا على تحسين خدماتنا
            </p>
          </div>
        )}

        {!hasRated && (
          <p className="text-xs text-gray-500">
            اضغط للتقييم
          </p>
        )}
      </CardContent>
    </Card>
  )
}

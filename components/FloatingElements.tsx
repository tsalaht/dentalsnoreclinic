"use client"

import React from 'react'

interface FloatingElementsProps {
  variant?: 'default' | 'colorful' | 'minimal'
  density?: 'low' | 'medium' | 'high'
}

export default function FloatingElements({ variant = 'default', density = 'medium' }: FloatingElementsProps) {
  const getElementCount = () => {
    switch (density) {
      case 'low': return 3
      case 'medium': return 6
      case 'high': return 9
      default: return 6
    }
  }

  const getVariantColors = () => {
    switch (variant) {
      case 'colorful':
        return [
          'from-pink-400/20 to-purple-400/20',
          'from-blue-400/20 to-cyan-400/20',
          'from-green-400/20 to-emerald-400/20',
          'from-orange-400/20 to-red-400/20',
          'from-yellow-400/20 to-orange-400/20',
          'from-indigo-400/20 to-purple-400/20'
        ]
      case 'minimal':
        return [
          'from-gray-200/20 to-gray-300/20',
          'from-slate-200/20 to-slate-300/20',
          'from-zinc-200/20 to-zinc-300/20'
        ]
      default:
        return [
          'from-blue-200/20 to-teal-200/20',
          'from-teal-200/20 to-green-200/20',
          'from-purple-200/20 to-pink-200/20'
        ]
    }
  }

  const colors = getVariantColors()
  const elementCount = getElementCount()

  const generateElements = () => {
    const elements = []
    
    for (let i = 0; i < elementCount; i++) {
      const size = Math.random() * 300 + 100 // 100px to 400px
      const top = Math.random() * 100
      const left = Math.random() * 100
      const animationDelay = Math.random() * 10
      const animationDuration = Math.random() * 10 + 10 // 10s to 20s
      const colorIndex = i % colors.length
      
      elements.push(
        <div
          key={i}
          className={`absolute rounded-full blur-3xl bg-gradient-to-br ${colors[colorIndex]} animate-float morphing-shape`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${animationDelay}s`,
            animationDuration: `${animationDuration}s`,
          }}
        />
      )
    }
    
    return elements
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {generateElements()}
    </div>
  )
}

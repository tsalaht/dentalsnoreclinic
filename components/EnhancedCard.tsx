"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface EnhancedCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'gradient' | 'glass' | 'neon' | 'minimal'
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'none'
  glowColor?: 'blue' | 'green' | 'purple' | 'orange' | 'pink'
  animationDelay?: number
}

export default function EnhancedCard({ 
  children, 
  className, 
  variant = 'default',
  hoverEffect = 'lift',
  glowColor = 'blue',
  animationDelay = 0
}: EnhancedCardProps) {
    const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30 border-blue-200/50'
      case 'glass':
        return 'glass-effect border-white/20'
      case 'neon':
        return `bg-gray-900 border-${glowColor}-400/50 shadow-glow-${glowColor}`
      case 'minimal':
        return 'bg-white border-gray-200'
      default:
        return 'bg-white/80 backdrop-blur-sm border-white/50'
    }
  }

  const getHoverEffectClasses = () => {
    switch (hoverEffect) {
      case 'lift':
        return 'card-hover-lift'
      case 'glow':
        return 'hover-glow'
      case 'scale':
        return 'hover:scale-105 transition-transform duration-300'
      default:
        return ''
    }
  }

  const getGlowClasses = () => {
    if (variant === 'neon' || hoverEffect === 'glow') {
      return `hover:shadow-glow-${glowColor}`
    }
    return ''
  }

  return (
    <Card 
      className={cn(
        'relative overflow-hidden transition-all duration-500 border-2',
        getVariantClasses(),
        getHoverEffectClasses(),
        getGlowClasses(),
        'animate-fade-in-up',
        className
      )}
      style={{
        animationDelay: `${animationDelay}s`
      }}
    >
      {/* Floating particles for enhanced visual effect */}
      {variant !== 'minimal' && (
        <div className="floating-particles absolute inset-0 pointer-events-none"></div>
      )}
      
      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <CardContent className="relative z-10">
        {children}
      </CardContent>
    </Card>
  )
}

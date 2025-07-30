"use client"

import React from 'react'
import Image from 'next/image'
import FloatingElements from './FloatingElements'
import { cn } from '@/lib/utils'

interface ModernHeroProps {
  readonly title: string
  readonly subtitle?: string
  readonly description?: string
  readonly backgroundImage?: string
  readonly gradientOverlay?: string
  readonly children?: React.ReactNode
  readonly className?: string
  readonly variant?: 'default' | 'minimal' | 'vibrant'
  readonly height?: 'screen' | 'large' | 'medium'
}

export default function ModernHero({
  title,
  subtitle,
  description,
  backgroundImage,
  gradientOverlay = 'from-black/60 to-black/40',
  children,
  className,
  variant = 'default',
  height = 'large'
}: ModernHeroProps) {
    const getHeightClass = () => {
    switch (height) {
      case 'screen': return 'min-h-screen'
      case 'large': return 'min-h-[60vh]'
      case 'medium': return 'min-h-[50vh]'
      default: return 'min-h-[60vh]'
    }
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'minimal':
        return 'bg-gradient-to-br from-gray-50 to-white'
      case 'vibrant':
        return 'bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600'
      default:
        return 'bg-gradient-to-br from-teal-800 via-teal-900 to-gray-900'
    }
  }

  return (
    <section className={cn(
      'relative overflow-hidden',
      getHeightClass(),
      !backgroundImage && getVariantClasses(),
      className
    )}>
      {/* Floating Elements */}
      <FloatingElements variant={variant === 'minimal' ? 'minimal' : 'colorful'} density="medium" />
      
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-t ${gradientOverlay} z-10`}></div>
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"
            priority
                 loading="lazy"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 flex items-center h-full">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          {subtitle && (
            <div className="mb-6 animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20">
                {subtitle}
              </span>
            </div>
          )}
          
          {/* Title */}
          <h1 className={cn(
            'font-bold leading-tight mb-8 animate-fade-in-up',
            variant === 'minimal' ? 'text-primary' : 'text-white',
            'text-4xl lg:text-6xl xl:text-7xl'
          )} style={{animationDelay: '0.1s'}}>
            <span className={cn(
              'block gradient-text neon-glow',
              variant === 'minimal' ? 'text-primary' : ''
            )}>
              {title}
            </span>
          </h1>
          
          {/* Description */}
          {description && (
            <p className={cn(
              'text-xl lg:text-2xl mb-12 animate-fade-in-up leading-relaxed max-w-3xl mx-auto',
              variant === 'minimal' ? 'text-gray-600' : 'text-gray-200'
            )} style={{animationDelay: '0.2s'}}>
              {description}
            </p>
          )}
          
          {/* Children (CTA buttons, etc.) */}
          {children && (
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              {children}
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className={cn(
          'w-8 h-8 border-r-2 border-b-2 transform rotate-45',
          variant === 'minimal' ? 'border-gray-400' : 'border-white'
        )}></div>
      </div>
    </section>
  )
}

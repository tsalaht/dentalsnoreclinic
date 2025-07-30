"use client"

import { 
  User, 
  Baby, 
  BookOpen, 
  GamepadIcon, 
  Stethoscope, 
  Heart, 
  Award, 
  Brain,
  Target,
  Trophy,
  Video,
  FileText,
  PlayCircle,
  MessageCircle,
  Phone,
  Calendar,
  Star,
  CheckCircle,
  AlertTriangle,
  Home,
  ChevronLeft,
  Eye,
  Clock,
  Download
} from "lucide-react"

// Standardized icon sizes
export const iconSizes = {
  xs: "w-3 h-3",
  sm: "w-4 h-4", 
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
  "2xl": "w-10 h-10",
  "3xl": "w-12 h-12"
}

// Standardized icon components with consistent styling
export const Icons = {
  // Medical & Treatment
  stethoscope: Stethoscope,
  heart: Heart,
  brain: Brain,
  award: Award,
  target: Target,
  trophy: Trophy,
  
  // User & Demographics  
  user: User,
  baby: Baby,
  
  // Content & Media
  bookOpen: BookOpen,
  video: Video,
  fileText: FileText,
  playCircle: PlayCircle,
  
  // Interactive & Gaming
  gamepad: GamepadIcon,
  
  // Communication & Actions
  messageCircle: MessageCircle,
  phone: Phone,
  calendar: Calendar,
  
  // UI & Navigation
  star: Star,
  checkCircle: CheckCircle,
  alertTriangle: AlertTriangle,
  home: Home,
  chevronLeft: ChevronLeft,
  eye: Eye,
  clock: Clock,
  download: Download
}

// Standardized icon wrapper with consistent hover effects
interface StandardIconProps {
  icon: keyof typeof Icons
  size?: keyof typeof iconSizes
  className?: string
  color?: string
  hoverEffect?: boolean
}

export function StandardIcon({ 
  icon, 
  size = "md", 
  className = "", 
  color = "currentColor",
  hoverEffect = false 
}: StandardIconProps) {
  const IconComponent = Icons[icon]
  const sizeClass = iconSizes[size]
  const hoverClass = hoverEffect ? "icon-hover" : ""
  
  return (
    <IconComponent 
      className={`${sizeClass} ${hoverClass} ${className}`}
      style={{ color }}
    />
  )
}

// Predefined icon combinations for common use cases
export const IconCombos = {
  videoContent: { icon: "video" as const, color: "#dc2626" },
  articleContent: { icon: "fileText" as const, color: "#2563eb" },
  studyContent: { icon: "brain" as const, color: "#7c3aed" },
  adultTreatment: { icon: "user" as const, color: "#2563eb" },
  childTreatment: { icon: "baby" as const, color: "#059669" },
  medicalLibrary: { icon: "bookOpen" as const, color: "#7c3aed" },
  sleepChallenge: { icon: "gamepad" as const, color: "#db2777" },
  expertCare: { icon: "stethoscope" as const, color: "#2563eb" },
  comprehensiveCare: { icon: "heart" as const, color: "#059669" },
  guaranteedResults: { icon: "award" as const, color: "#ea580c" }
}

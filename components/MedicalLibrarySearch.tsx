'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Video, FileText, Play, Eye, ThumbsUp, Clock, Filter } from "lucide-react"

interface ContentItem {
  id: number
  title: string
  description: string
  type: 'video' | 'article' | 'study'
  category: 'adults' | 'children' | 'general'
  duration?: string
  views: number
  likes: number
  featured?: boolean
}

const contentItems: ContentItem[] = [
  {
    id: 1,
    title: "أحدث تقنيات العلاج بالليزر 2024",
    description: "شرح مفصل للتقنيات الجديدة في علاج الشخير بالليزر ونسب النجاح",
    type: 'video',
    category: 'adults',
    duration: "15:32",
    views: 15400,
    likes: 892,
    featured: true
  },
  {
    id: 2,
    title: "دليل الوالدين: علامات الشخير عند الأطفال",
    description: "كيفية التعرف على أعراض اضطرابات النوم عند الأطفال ومتى يجب استشارة الطبيب",
    type: 'article',
    category: 'children',
    views: 8200,
    likes: 445,
    featured: true
  },
  {
    id: 3,
    title: "دراسة: تأثير الشخير على صحة القلب",
    description: "بحث حديث يكشف العلاقة بين الشخير وأمراض القلب والأوعية الدموية",
    type: 'study',
    category: 'adults',
    views: 5600,
    likes: 234
  },
  {
    id: 4,
    title: "تقنية Myobrace للأطفال - شرح شامل",
    description: "كيف تعمل أجهزة Myobrace في تصحيح التنفس وعلاج الشخير عند الأطفال",
    type: 'video',
    category: 'children',
    duration: "12:45",
    views: 9800,
    likes: 567
  },
  {
    id: 5,
    title: "أجهزة الفم: الحل الأمثل للشخير",
    description: "مقارنة شاملة بين أنواع أجهزة الفم المختلفة وفعاليتها في العلاج",
    type: 'article',
    category: 'adults',
    views: 12300,
    likes: 698
  },
  {
    id: 6,
    title: "النوم الصحي: دليل شامل للعائلة",
    description: "نصائح وإرشادات لتحسين جودة النوم لجميع أفراد العائلة",
    type: 'article',
    category: 'general',
    views: 18900,
    likes: 1240
  }
]

export default function MedicalLibrarySearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [filteredItems, setFilteredItems] = useState(contentItems)

  const handleSearch = () => {
    let filtered = contentItems

    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.includes(searchTerm) || 
        item.description.includes(searchTerm)
      )
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(item => item.type === selectedType)
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory)
    }

    setFilteredItems(filtered)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />
      case 'article':
        return <FileText className="w-4 h-4" />
      case 'study':
        return <Search className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video':
        return 'bg-red-500'
      case 'article':
        return 'bg-primary/70'
      case 'study':
        return 'bg-purple-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'adults':
        return 'bg-blue-100 text-blue-800'
      case 'children':
        return 'bg-green-100 text-green-800'
      case 'general':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث عن المواد التعليمية..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/70 focus:border-transparent"
            />
          </div>
          
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/70"
          >
            <option value="all">جميع الأنواع</option>
            <option value="video">الفيديوهات</option>
            <option value="article">المقالات</option>
            <option value="study">الدراسات</option>
          </select>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/70"
          >
            <option value="all">جميع الفئات</option>
            <option value="adults">البالغين</option>
            <option value="children">الأطفال</option>
            <option value="general">عام</option>
          </select>
          
          <Button onClick={handleSearch} className="bg-blue-600 hover:bg-primary text-white px-8">
            بحث
          </Button>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-primary">
            النتائج ({filteredItems.length})
          </h3>
          {searchTerm && (
            <p className="text-gray-600">البحث عن: "{searchTerm}"</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                {item.type === 'video' && (
                  <div className="relative">
                    <div className="bg-gradient-to-br from-red-100 to-red-200 aspect-video flex items-center justify-center">
                      <Play className="w-12 h-12 text-red-600" />
                    </div>
                    {item.featured && (
                      <Badge className="absolute top-3 right-3 bg-red-500 text-white">مميز</Badge>
                    )}
                    {item.duration && (
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {item.duration}
                      </div>
                    )}
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={`${getTypeColor(item.type)} text-white flex items-center gap-1`}>
                      {getTypeIcon(item.type)}
                      <span>
                        {item.type === 'video' ? 'فيديو تعليمي' : item.type === 'article' ? 'مقال طبي' : 'دراسة علمية'}
                      </span>
                    </Badge>
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category === 'adults' ? 'البالغين' : item.category === 'children' ? 'الأطفال' : 'عام'}
                    </Badge>
                  </div>
                  
                  <h4 className="font-bold text-lg text-primary mb-2 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {item.views.toLocaleString()} مشاهدة
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      {item.likes}
                    </span>
                  </div>
                  
                  <a href={`https://wa.me/962797377131?text=أريد معرفة المزيد عن: ${item.title}`} target="_blank">
                    <Button className="w-full bg-blue-600 hover:bg-primary text-white flex items-center justify-center gap-2">
                      {item.type === 'video' ? (
                        <>
                          <Play className="w-4 h-4" />
                          شاهد الفيديو
                        </>
                      ) : item.type === 'article' ? (
                        <>
                          <FileText className="w-4 h-4" />
                          اقرأ المقال
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4" />
                          اطّلع على الدراسة
                        </>
                      )}
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">لم نجد نتائج</h3>
            <p className="text-gray-600 mb-6">جرب تغيير كلمات البحث أو الفلاتر</p>
            <Button 
              onClick={() => {
                setSearchTerm('')
                setSelectedType('all')
                setSelectedCategory('all')
                setFilteredItems(contentItems)
              }}
              variant="outline"
            >
              إعادة تعيين البحث
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

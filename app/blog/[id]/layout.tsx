import type { Metadata } from 'next'
import { getBlogById } from '@/lib/blogData'

const baseUrl = 'https://dentalsnoreclinic.com'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const blog = getBlogById(id)

  if (!blog) {
    return {
      title: 'مقال طبي',
      description: 'مقال طبي من عيادة الشخير واضطرابات التنفس أثناء النوم.',
    }
  }

  return {
    title: blog.title,
    description: blog.description,
    alternates: { canonical: `${baseUrl}/blog/${id}` },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `${baseUrl}/blog/${id}`,
      type: 'article',
      images: [{ url: blog.image, width: 800, height: 500, alt: blog.title }],
    },
  }
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

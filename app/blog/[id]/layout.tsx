import type { Metadata } from 'next'

const baseUrl = 'https://dentalsnoreclinic.com'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  try {
    const res = await fetch(`https://backend.dentalsnoreclinic.com:3040/api/blogs/${id}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error('not found')
    const data = await res.json()
    const blog = data.data || data.blog || data

    const title = blog.title || 'مقال طبي'
    const description =
      blog.summary ||
      (typeof blog.content === 'string' ? blog.content.slice(0, 160) : '') ||
      'مقال طبي من عيادة الشخير واضطرابات التنفس أثناء النوم.'
    const image = blog.thumbnail?.image

    return {
      title,
      description,
      alternates: { canonical: `${baseUrl}/blog/${id}` },
      openGraph: {
        title,
        description,
        url: `${baseUrl}/blog/${id}`,
        type: 'article',
        publishedTime: blog.created_at,
        modifiedTime: blog.updated_at,
        authors: [blog.author?.user_name || 'د. مهند الكسواني'],
        ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: title }] } : {}),
      },
    }
  } catch {
    return {
      title: 'مقال طبي',
      description: 'مقال طبي من عيادة الشخير واضطرابات التنفس أثناء النوم.',
    }
  }
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

// app/sitemap.ts (for Next.js 13+ App Router)
// This file tells Google about all your website pages

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dentalsnoreclinic.com' // Replace with your actual domain
  const currentDate = new Date()
  
  return [
    // Homepage - Most important page
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0, // Highest priority
    },
    
    // Main pages that should appear in Google sitelinks
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9, // High priority - important for business
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    
    // Service-specific pages (create these if you have them)
    {
      url: `${baseUrl}/services/snoring-treatment`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/sleep-apnea`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/dental-care`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Additional useful pages
    {
      url: `${baseUrl}/appointments`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    
    // If you want to add blog posts dynamically, you would do:
    // ...await getBlogPosts(), // This would fetch from your API
  ]
}

// Alternative: If you want to fetch blog posts dynamically
export async function generateDynamicSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://dentalsnoreclinic.com'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/adults`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ]
  
  // Dynamic blog pages (if you want to include them)
  try {
    const response = await fetch('https://backend.dentalsnoreclinic.com:3040/api/blogs')
    const data = await response.json()
    
    const blogPages: MetadataRoute.Sitemap = data.blogs?.map((blog: any) => ({
      url: `${baseUrl}/blog/${blog.id}`,
      lastModified: new Date(blog.updated_at || blog.created_at),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })) || []
    
    return [...staticPages, ...blogPages]
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error)
    return staticPages
  }
}

// For Pages Router (if you're using pages/ instead of app/)
// pages/sitemap.xml.ts

import { GetServerSideProps } from 'next'

function generateSiteMap(posts: any[]) {
  const baseUrl = 'https://dentalsnoreclinic.com'
  
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Static pages -->
     <url>
       <loc>${baseUrl}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${baseUrl}/about</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${baseUrl}/adults</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${baseUrl}/contact</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${baseUrl}/blog</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.7</priority>
     </url>
     <!-- Dynamic blog posts -->
     ${posts
       .map((post) => {
         return `
       <url>
           <loc>${baseUrl}/blog/${post.id}</loc>
           <lastmod>${new Date(post.updated_at || post.created_at).toISOString()}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.6</priority>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Fetch blog posts
  let posts = []
  try {
    const response = await fetch('https://backend.dentalsnoreclinic.com:3040/api/blogs')
    const data = await response.json()
    posts = data.blogs || []
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error)
  }

  // Generate the XML sitemap
  const sitemap = generateSiteMap(posts)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}
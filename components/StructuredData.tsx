import Script from 'next/script'

export function OrganizationStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "DentistOffice", 
    "name": "Dental Snore Clinic",
    "alternateName": "عيادة الشخير وطب الأسنان",
    "description": "عيادة متخصصة في علاج الشخير واضطرابات التنفس أثناء النوم وطب الأسنان في عمان، الأردن",
    "url": "https://dentalsnoreclinic.com",
    "logo": "https://dentalsnoreclinic.com/logo.png",
    "image": "https://dentalsnoreclinic.com/clinic-image.jpg",
    "telephone": "+962797377131",
    "email": "info@dentalsnoreclinic.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "شارع باريس - مجمع الشانزليزيه",
      "addressLocality": "الصويفية",
      "addressRegion": "عمان",
      "addressCountry": "JO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.9566",
      "longitude": "35.9106" 
    },
    "areaServed": {
      "@type": "City",
      "name": "عمان"
    },
    "currenciesAccepted": "JOD",
    "paymentAccepted": "Cash, Credit Card",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
        "opens": "10:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": "Thursday",
        "opens": "10:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "00:00",
        "closes": "00:00",
        "validFrom": "2024-01-01",
        "validThrough": "2024-12-31"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/dentalsnoreclinic",
      "https://www.instagram.com/dentalsnoreclinic",
      "https://twitter.com/dentalsnoreclinic"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدماتنا الطبية",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "علاج الشخير",
            "description": "علاج الشخير بأحدث التقنيات الطبية"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "علاج انقطاع التنفس أثناء النوم",
            "description": "تشخيص وعلاج اضطرابات التنفس أثناء النوم"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure", 
            "name": "طب الأسنان العام",
            "description": "خدمات طب الأسنان الشاملة"
          }
        }
      ]
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "مراجع"
        },
        "reviewBody": "خدمة ممتازة وعلاج فعال للشخير"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    }
  }

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  )
}
import { Helmet } from 'react-helmet-async';
import { BRAND } from '../constants';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  additionalSchema?: any[];
}

export function SEO({ 
  title, 
  description, 
  canonical, 
  ogType = 'website',
  ogImage = 'https://www.aespi.com.sg/images/about.JPG',
  additionalSchema = []
}: SEOProps) {
  const siteTitle = BRAND.name;
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Live Stronger. Age Better. | Healthy Ageing Singapore`;
  const defaultDescription = "AESPI helps adults and seniors stay active, independent and resilient through science-backed wellness technologies focused on mobility, recovery and healthy ageing.";
  const metaDescription = description || defaultDescription;
  const baseUrl = 'https://www.aespi.com.sg';
  const url = canonical ? `${baseUrl}${canonical}` : `${baseUrl}/`;

  // Fix relative images for OG
  const finalOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  // Base LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "WellnessCenter",
    "name": "AESPI Wellness Studio",
    "description": "AESPI helps adults and seniors stay active, independent and resilient through science-backed wellness technologies focused on mobility, recovery and healthy ageing.",
    "image": "https://www.aespi.com.sg/images/about.JPG",
    "@id": "https://www.aespi.com.sg",
    "url": "https://www.aespi.com.sg",
    "telephone": "+65 8799 7199",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2 Venture Drive, #02-22 Vision Exchange",
      "addressLocality": "Singapore",
      "postalCode": "608526",
      "addressCountry": "SG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 1.3323,
      "longitude": 103.7431
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ]
  };

  // Breadcrumb Schema
  const pathParts = canonical ? canonical.split('/').filter(p => p) : [];
  const breadcrumbElements = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": baseUrl
    }
  ];

  pathParts.forEach((part, index) => {
    const partUrl = `${baseUrl}/${pathParts.slice(0, index + 1).join('/')}`;
    const name = part.charAt(0).toUpperCase() + part.slice(1).replace('-', ' ');
    breadcrumbElements.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": name,
      "item": partUrl
    });
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbElements
  };

  const schemas = [localBusinessSchema, breadcrumbSchema, ...additionalSchema];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={finalOgImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={finalOgImage} />

      {/* Structured Data */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

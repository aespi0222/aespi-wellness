import { Helmet } from 'react-helmet-async';
import { BRAND } from '../constants';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

export function SEO({ 
  title, 
  description, 
  canonical, 
  ogType = 'website',
  ogImage = '/images/about.JPG'
}: SEOProps) {
  const siteTitle = BRAND.name;
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Active Aging & Muscle Health Singapore`;
  const defaultDescription = "AESPI Wellness Studio at Jurong East offers BIXEPS, Power Plate, and H2 Hydrogen therapy. Specialized in active aging, muscle recovery, and senior vitality in Singapore.";
  const metaDescription = description || defaultDescription;
  const url = canonical ? `https://www.aespi.com.sg${canonical}` : 'https://www.aespi.com.sg/';

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
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (Local Business) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WellnessCenter",
          "name": "AESPI Wellness Studio",
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
        })}
      </script>
    </Helmet>
  );
}

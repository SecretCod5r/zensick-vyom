import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  ogImageAlt?: string;
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

const DEFAULT_IMAGE = 'https://www.zensick.in/og-image.png';
const DEFAULT_KEYWORDS = 'performance marketing, analytics, ROAS, D2C marketing, Meta ads, Google ads, revenue attribution, digital growth';

export function SEO({
  title,
  description,
  canonicalUrl,
  keywords = DEFAULT_KEYWORDS,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  ogImageAlt = 'ZENSICK - 360° Digital Growth Company',
  noindex = false,
  publishedTime,
  modifiedTime,
  author,
  section,
  schema,
}: SEOProps) {
  // Prevent duplicate branding if title already includes ZENSICK
  const fullTitle = title.toLowerCase().includes('zensick') ? title : `${title} | ZENSICK`;
  const robotsDirective = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsDirective} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / LinkedIn / WhatsApp */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:site_name" content="ZENSICK" />
      <meta property="og:locale" content="en_US" />

      {/* Article Specific Open Graph */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {ogType === 'article' && section && (
        <meta property="article:section" content={section} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* Structured Data (Schema.org JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(
            Array.isArray(schema)
              ? {
                  '@context': 'https://schema.org',
                  '@graph': schema,
                }
              : schema
          )}
        </script>
      )}
    </Helmet>
  );
}

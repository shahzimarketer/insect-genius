import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "InsectID - AI-Powered Insect Identifier | Identify Any Insect Instantly",
  description = "Upload a photo and instantly identify any insect with our AI-powered tool. Get detailed information about species, habitat, behavior, and fascinating facts. Free and easy to use.",
  keywords = "insect identifier, insect identification, bug identifier, AI insect recognition, identify insects, butterfly identification, beetle identifier, moth identification, insect species, entomology",
  canonicalUrl = "https://insectid.app",
  ogImage = "/og-image.jpg"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "InsectID",
    "description": description,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "AI-powered insect identification",
      "Detailed species information",
      "Habitat and behavior details",
      "Free to use"
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the insect identifier work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI-powered insect identifier uses advanced machine learning algorithms to analyze your uploaded photo and compare it against our database of over 10,000 insect species to provide accurate identification."
        }
      },
      {
        "@type": "Question",
        "name": "Is the insect identifier free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our insect identifier is completely free to use. Simply upload a clear photo of any insect and receive instant identification results."
        }
      },
      {
        "@type": "Question",
        "name": "What information do I get after identifying an insect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After identification, you receive comprehensive information including the insect's common and scientific name, family, habitat, diet, lifespan, danger level, and fascinating facts about the species."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="InsectID" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="InsectID" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;

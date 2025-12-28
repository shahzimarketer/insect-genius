import React from 'react';
import { Helmet } from 'react-helmet-async';

interface AnimalSEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const AnimalSEOHead: React.FC<AnimalSEOHeadProps> = ({
  title = "Animal Identifier - AI-Powered Animal Recognition | Identify Any Animal Instantly",
  description = "Upload a photo and instantly identify any animal with our AI-powered tool. Get detailed information about species, habitat, behavior, conservation status, and fascinating facts. Free and easy to use.",
  keywords = "animal identifier, animal identification, wildlife identifier, AI animal recognition, identify animals, mammal identification, bird identifier, species recognition, wildlife app, animal species",
  canonicalUrl = "https://insectid.app/animal-identifier",
  ogImage = "/og-image-animal.jpg"
}) => {
  // WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Animal Identifier",
    "description": description,
    "url": canonicalUrl,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "AI-powered animal identification",
      "Detailed species information",
      "Habitat and behavior details",
      "Conservation status tracking",
      "Free to use"
    ]
  };

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the animal identifier work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI-powered animal identifier uses advanced machine learning algorithms to analyze your uploaded photo and compare it against our database of over 5,000 animal species to provide accurate identification."
        }
      },
      {
        "@type": "Question",
        "name": "Is the animal identifier free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our animal identifier is completely free to use. Simply upload a clear photo of any animal and receive instant identification results."
        }
      },
      {
        "@type": "Question",
        "name": "What information do I get after identifying an animal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After identification, you receive comprehensive information including the animal's common and scientific name, family, habitat, diet, lifespan, conservation status, behavior patterns, and fascinating facts about the species."
        }
      },
      {
        "@type": "Question",
        "name": "Can I identify any type of animal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our database includes mammals, birds, reptiles, amphibians, fish, and more. We can identify over 5,000 species from around the world."
        }
      }
    ]
  };

  // SoftwareApplication Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Animal Identifier",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2450"
    }
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InsectID",
    "url": "https://insectid.app",
    "logo": "https://insectid.app/logo.png",
    "sameAs": [
      "https://twitter.com/insectid",
      "https://github.com/insectid"
    ]
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://insectid.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Animal Identifier",
        "item": canonicalUrl
      }
    ]
  };

  // HowTo Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Identify an Animal Using AI",
    "description": "Learn how to use our AI-powered tool to instantly identify any animal from a photo.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Upload Your Photo",
        "text": "Take or upload a clear photo of the animal you want to identify.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "AI Analysis",
        "text": "Our AI analyzes the image against our database of 5,000+ species.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Get Results",
        "text": "Receive detailed information about the identified animal including species, habitat, and conservation status.",
        "position": 3
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
      <meta property="og:site_name" content="InsectID - Wildlife Identification Tools" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Data - Multiple Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(webAppSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(softwareSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(howToSchema)}
      </script>
    </Helmet>
  );
};

export default AnimalSEOHead;

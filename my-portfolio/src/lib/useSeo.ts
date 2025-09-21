import { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  schema?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

const useSEO = ({
  title = 'CodeKage - Full Stack Developer Portfolio',
  description = 'Professional full-stack developer specializing in modern web technologies. View my projects, skills, and experience in React, Node.js, and more.',
  keywords = 'full stack developer, web developer, React, Node.js, JavaScript, TypeScript, portfolio, CodeKage',
  author = 'CodeKage',
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = '/assets/me.jpg',
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = '@luqmanola60',
  twitterCreator = '@luqmanola60',
  twitterTitle,
  twitterDescription,
  twitterImage,
  schema,
  noIndex = false,
  noFollow = false,
}: SEOProps = {}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (tag) {
        tag.content = content;
      } else {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        tag.content = content;
        document.head.appendChild(tag);
      }
    };

    // Helper function to update link tags
    const updateLinkTag = (rel: string, href: string) => {
      let tag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (tag) {
        tag.href = href;
      } else {
        tag = document.createElement('link');
        tag.rel = rel;
        tag.href = href;
        document.head.appendChild(tag);
      }
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('charset', 'UTF-8');

    // Robots meta tag
    const robotsContent = `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`;
    updateMetaTag('robots', robotsContent);

    // Canonical URL
    if (canonicalUrl) {
      updateLinkTag('canonical', canonicalUrl);
    }

    // Open Graph tags
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', ogUrl || window.location.href, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:site_name', 'CodeKage Portfolio', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:site', twitterSite);
    updateMetaTag('twitter:creator', twitterCreator);
    updateMetaTag('twitter:title', twitterTitle || ogTitle || title);
    updateMetaTag('twitter:description', twitterDescription || ogDescription || description);
    updateMetaTag('twitter:image', twitterImage || ogImage);

    // Additional meta tags for better SEO
    updateMetaTag('theme-color', '#000000');
    updateMetaTag('application-name', 'CodeKage Portfolio');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    updateMetaTag('apple-mobile-web-app-title', 'CodeKage');
    updateMetaTag('format-detection', 'telephone=no');
    updateMetaTag('msapplication-TileColor', '#000000');
    updateMetaTag('msapplication-config', '/browserconfig.xml');

    // Structured data (JSON-LD)
    if (schema) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      
      if (scriptTag) {
        scriptTag.textContent = JSON.stringify(schema);
      } else {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        scriptTag.textContent = JSON.stringify(schema);
        document.head.appendChild(scriptTag);
      }
    }

    // Language and region
    document.documentElement.lang = 'en';
    updateMetaTag('language', 'English');
    updateMetaTag('geo.region', 'NG');
    updateMetaTag('geo.placename', 'Nigeria');

    updateLinkTag('icon', '/favicon.ico');
    updateLinkTag('apple-touch-icon', '/apple-touch-icon.png');
    updateLinkTag('icon', '/favicon-32x32.png');
    updateLinkTag('icon', '/favicon-16x16.png');
    updateLinkTag('manifest', '/site.webmanifest');

  }, [
    title,
    description,
    keywords,
    author,
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    ogType,
    twitterCard,
    twitterSite,
    twitterCreator,
    twitterTitle,
    twitterDescription,
    twitterImage,
    schema,
    noIndex,
    noFollow,
  ]);
};

export default useSEO;
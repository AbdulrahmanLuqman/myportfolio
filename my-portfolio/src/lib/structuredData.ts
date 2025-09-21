// Common structured data schemas for your portfolio

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "CodeKage",
  "jobTitle": "Full Stack Developer",
  "url": "https://codekage.pxxl.xyz",
  "sameAs": [
    "https://github.com/AbdulrahmanLuqman",
    "https://www.linkedin.com/in/abdulrahman-luqman-80243a23a",
    "https://x.com/luqmanola60"
  ],
  "knowsAbout": [
    "JavaScript",
    "TypeScript",
    "React",
    "Nextjs",
    "Node.js",
    "Python",
    "Web Development",
    "Software Engineering"
  ],
  "description": "Professional full-stack developer with expertise in modern web technologies and software engineering practices.",
  "image": "https://codekage.pxxl.xyz/assets/me.jpg",
  "email": "luqmanola60@gmail.com"
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CodeKage Portfolio",
  "url": "https://codekage.pxxl.xyz",
  "description": "Professional portfolio showcasing full-stack development projects and technical expertise",
  "author": {
    "@type": "Person",
    "name": "CodeKage"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://codekage.pxxl.xyz/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "CodeKage Developer Portfolio",
  "description": "A comprehensive portfolio showcasing web development projects, technical skills, and professional experience",
  "url": "https://codekage.pxxl.xyz",
  "author": {
    "@type": "Person",
    "name": "CodeKage",
    "jobTitle": "Full Stack Developer"
  },
  "dateCreated": "2025",
  "inLanguage": "en-US",
  "keywords": "web development, portfolio, full stack developer, React, Node.js"
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "CodeKage Development Services",
  "description": "Professional web development and software engineering services",
  "url": "https://codekage.pxxl.xyz",
  "telephone": "+234 9167 596 491", // Replace with actual phone
  "email": "luqmanola60@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Nigeria"
  },
  "founder": {
    "@type": "Person",
    "name": "CodeKage"
  },
  "serviceType": [
    "Web Development",
    "Software Engineering",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development"
  ]
};

// Project schema generator
export const createProjectSchema = (project: {
  name: string;
  description: string;
  url: string;
  image: string;
  technologies: string[];
  dateCreated: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  "name": project.name,
  "description": project.description,
  "url": project.url,
  "image": project.image,
  "programmingLanguage": project.technologies,
  "dateCreated": project.dateCreated,
  "author": {
    "@type": "Person",
    "name": "CodeKage"
  },
  "codeRepository": project.url
});

// Breadcrumb schema generator
export const createBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// FAQ schema generator
export const createFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Review/Testimonial schema generator
export const createReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CodeKage Development Services",
  "review": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished
  }))
});
import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { SARAH, MICHAEL, LISA } from "./_BLOG_SETUP";

// main article list to display all atricles
// /**
//  * Example article object
//  *
//  {
//     path: '/pages/tutorial/tutorial/how-to-setup-blog',
//     featureArticle: true,
//     preview: {
//         // the author object you created in _BLOG_SETUP file
//         author: SARAH,
//         date: "March 03 2022",
//         articleTitle: "How to setup this plog template",
//         tags: "demo, blog setup",
//         thumbnail: "/images/tutorials/demo-image.jpg",
//         shortIntro: "These are the steps to setup your blog",
//     },
//     seo: {
//         title: "These are the steps to setup your blog",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//         keywords: "demo, blog setup",
//         ogImage: "/images/tutorials/demo-image.jpg",
//         twitterHandle: "@mayur_nalwala",
//     }
// }
//  */

// clear this article list and add your own
const ARTICLES_LIST: iArticle[] = [
  {
    path: "/pages/blog/revenue-cycle-management-guide.tsx",
    featureArticle: true,
    preview: {
      author: LISA,
      date: "December 15 2024",
      articleTitle: "Complete Guide to Revenue Cycle Management in Healthcare",
      tags: "revenue cycle management, healthcare billing, medical coding, RCM",
      thumbnail: "/public/imp_assets/tutorials/revenue-cycle-management.svg",
      shortIntro:
        "Learn the essential components of revenue cycle management and how to optimize your healthcare practice's financial performance.",
      category: "revenue-cycle"
    },
    seo: {
      title: "Complete Guide to Revenue Cycle Management in Healthcare",
      description:
        "Learn the essential components of revenue cycle management and how to optimize your healthcare practice's financial performance.",
      keywords:
        "revenue cycle management, healthcare billing, medical coding, RCM, healthcare finance",
      ogImage: "/public/imp_assets/tutorials/revenue-cycle-management.svg",
      twitterHandle: "@CPCCodingClaims",
      author: LISA.name
    }
  },
  {
    path: "/pages/blog/icd-10-coding-updates-2024.tsx",
    featureArticle: true,
    preview: {
      author: SARAH,
      date: "December 10 2024",
      articleTitle: "ICD-10 Coding Updates for 2024: What You Need to Know",
      tags: "ICD-10, medical coding, coding updates, healthcare compliance",
      thumbnail: "/public/imp_assets/tutorials/icd-10-updates.svg",
      shortIntro:
        "Stay compliant with the latest ICD-10 coding updates for 2024. Learn about new codes, deleted codes, and coding guidelines.",
      category: "coding-updates"
    },
    seo: {
      keywords:
        "ICD-10, medical coding, coding updates, healthcare compliance, 2024 updates",
      ogImage: "/public/imp_assets/tutorials/icd-10-updates.svg"
    }
  },
  {
    path: "/pages/blog/denial-management-strategies.tsx",
    featureArticle: true,
    preview: {
      author: MICHAEL,
      date: "December 05 2024",
      articleTitle:
        "Effective Denial Management Strategies for Healthcare Providers",
      tags: "denial management, claims processing, healthcare billing, revenue optimization",
      thumbnail: "/public/imp_assets/tutorials/denial-management.svg",
      shortIntro:
        "Discover proven strategies to reduce claim denials and improve your practice's revenue cycle through effective denial management.",
      category: "denial-management"
    },
    seo: {
      ogImage: "/public/imp_assets/tutorials/denial-management.svg"
    }
  },
  {
    path: "/pages/blog/cpt-coding-best-practices.tsx",
    preview: {
      author: SARAH,
      date: "November 28 2024",
      articleTitle: "CPT Coding Best Practices for Medical Practices",
      tags: "CPT coding, medical coding, healthcare billing, coding guidelines",
      thumbnail: "/public/imp_assets/tutorials/cpt-coding.svg",
      shortIntro:
        "Master CPT coding with these essential best practices that will help improve accuracy and reduce coding errors.",
      category: "coding-practices"
    },
    seo: {
      title: "CPT Coding Best Practices for Medical Practices",
      description:
        "Master CPT coding with these essential best practices that will help improve accuracy and reduce coding errors.",
      keywords:
        "CPT coding, medical coding, healthcare billing, coding guidelines, best practices",
      ogImage: "/public/imp_assets/tutorials/cpt-coding.svg",
      author: SARAH.name
    }
  },
  {
    path: "/pages/blog/healthcare-compliance-essentials.tsx",
    preview: {
      author: LISA,
      date: "November 20 2024",
      articleTitle:
        "Healthcare Compliance Essentials: What Every Practice Should Know",
      tags: "healthcare compliance, HIPAA, medical billing compliance, regulatory requirements",
      thumbnail: "/public/imp_assets/tutorials/healthcare-compliance.svg",
      shortIntro:
        "Ensure your practice meets all regulatory requirements with this comprehensive guide to healthcare compliance.",
      category: "compliance"
    },
    seo: {
      keywords:
        "healthcare compliance, HIPAA, medical billing compliance, regulatory requirements, healthcare regulations",
      ogImage: "/public/imp_assets/tutorials/healthcare-compliance.svg"
    }
  },
  {
    path: "/pages/blog/medical-billing-automation.tsx",
    preview: {
      author: MICHAEL,
      date: "November 15 2024",
      articleTitle:
        "Automation in Medical Billing: Streamlining Your Revenue Cycle",
      tags: "medical billing automation, revenue cycle, healthcare technology, billing efficiency",
      thumbnail: "/public/imp_assets/tutorials/billing-automation.svg",
      shortIntro:
        "Explore how automation can transform your medical billing processes and improve your practice's efficiency.",
      category: "technology"
    },
    seo: {
      keywords:
        "medical billing automation, revenue cycle, healthcare technology, billing efficiency, automation tools",
      ogImage: "/public/imp_assets/tutorials/billing-automation.svg"
    }
  },
  {
    path: "/pages/blog/credentialing-process-guide.tsx",
    preview: {
      author: LISA,
      date: "November 10 2024",
      articleTitle: "Provider Credentialing: A Complete Process Guide",
      tags: "provider credentialing, medical billing, healthcare enrollment, insurance credentialing",
      thumbnail: "/public/imp_assets/tutorials/credentialing-guide.svg",
      shortIntro:
        "Navigate the complex world of provider credentialing with our comprehensive guide to the process.",
      category: "credentialing"
    },
    seo: {
      keywords:
        "provider credentialing, medical billing, healthcare enrollment, insurance credentialing, provider enrollment",
      ogImage: "/public/imp_assets/tutorials/credentialing-guide.svg"
    }
  },
  {
    path: "/pages/blog/medical-coding-specialties.tsx",
    preview: {
      author: SARAH,
      date: "November 05 2024",
      articleTitle: "Specialty-Specific Medical Coding: Key Considerations",
      tags: "medical coding, specialty coding, healthcare specialties, coding guidelines",
      thumbnail: "/public/imp_assets/tutorials/specialty-coding.svg",
      shortIntro:
        "Learn about the unique coding requirements and considerations for different medical specialties.",
      category: "specialty-coding"
    },
    seo: {
      keywords:
        "medical coding, specialty coding, healthcare specialties, coding guidelines, specialty-specific coding",
      ogImage: "/public/imp_assets/tutorials/specialty-coding.svg"
    }
  },
  {
    path: "/pages/blog/patient-statement-strategies.tsx",
    preview: {
      author: MICHAEL,
      date: "October 30 2024",
      articleTitle:
        "Effective Patient Statement Strategies for Better Collections",
      tags: "patient statements, collections, patient billing, revenue cycle",
      thumbnail: "/public/imp_assets/tutorials/patient-statements.svg",
      shortIntro:
        "Improve your patient collections with effective statement strategies and billing practices.",
      category: "collections"
    },
    seo: {
      keywords:
        "patient statements, collections, patient billing, revenue cycle, patient collections",
      ogImage: "/public/imp_assets/tutorials/patient-statements.svg"
    }
  },
  {
    path: "/pages/blog/healthcare-analytics-revenue.tsx",
    preview: {
      author: LISA,
      date: "October 25 2024",
      articleTitle: "Leveraging Healthcare Analytics for Revenue Optimization",
      tags: "healthcare analytics, revenue optimization, data analysis, healthcare metrics",
      thumbnail: "/public/imp_assets/tutorials/healthcare-analytics.svg",
      shortIntro:
        "Discover how healthcare analytics can drive revenue optimization and improve your practice's financial performance.",
      category: "analytics"
    },
    seo: {
      keywords:
        "healthcare analytics, revenue optimization, data analysis, healthcare metrics, revenue cycle analytics",
      ogImage: "/public/imp_assets/tutorials/healthcare-analytics.svg"
    }
  }
];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);

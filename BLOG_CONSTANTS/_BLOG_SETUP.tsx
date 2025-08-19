import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook
} from "react-icons/ai";

/**
 * EXAMPLE AUTHOR
 * 
 export const AUTHOR_NAME: IAuthor = {
    name: "Full Name",
    designation: "Work Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
     social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/'
        },
    ]
}
 */

export const SARAH: IAuthor = {
  name: "Sarah Johnson",
  designation: "Certified Professional Coder (CPC)",
  bio: "Sarah is a certified medical coder with over 8 years of experience in healthcare revenue cycle management. She specializes in ICD-10 coding, CPT coding, and medical billing compliance.",
  profilePic: "",
  social: [
    {
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/sarah-johnson-cpc"
    }
  ]
};

export const MICHAEL: IAuthor = {
  name: "Michael Chen",
  designation: "Senior Medical Billing Specialist",
  bio: "Michael has 12+ years of experience in medical billing and revenue cycle management. He specializes in denial management, claims processing, and healthcare compliance.",
  profilePic: "",
  social: [
    {
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/michael-chen-rcm"
    }
  ]
};

export const LISA: IAuthor = {
  name: "Lisa Rodriguez",
  designation: "Healthcare Revenue Cycle Manager",
  bio: "Lisa is a healthcare revenue cycle expert with extensive experience in medical coding, billing optimization, and healthcare analytics.",
  profilePic: "",
  social: [
    {
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/lisa-rodriguez-rcm"
    }
  ]
};

// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = "PreciseRCM Company";
export const WEBSITE_URL: string = "https://cpccodingclaims.com/";

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
  type: NavbarType.DEFAULT,
  // max logo image height 40px
  // you can add logo light version if using image
  // logo: {
  //     type: LogoType.IMAGE,
  //     logo: '/images/logo.png',
  //     logoLight: '/images/logo-light.png'
  // },
  logo: {
    type: LogoType.IMAGE,
    logo: "/images/preciseRCM-combined.svg",
    logoLight: "/images/preciseRCM-combined.svg"
  },
  // navLinks are the main navbar links that apper on top of every page
  navLinks: [
    {
      label: "Home",
      path: "/"
    },
    {
      label: "Services",
      path: "/services"
    },
    {
      label: "Articles",
      path: "/blog"
    },
    {
      label: "About Us",
      path: "/about-us"
    },
    {
      label: "Contact Us",
      path: "/contact-us"
    }
  ],
  // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
  sideNavLinks: [
    {
      label: "Home",
      path: "/"
    },
    {
      label: "Services",
      path: "/services"
    },
    {
      label: "About Us",
      path: "/about-us"
    },
    {
      label: "Contact Us",
      path: "/contact-us"
    }
  ],
  socials: [
    {
      link: "https://www.facebook.com/cpccodingclaims",
      icon: <AiFillFacebook />
    },
    {
      link: "https://www.linkedin.com/company/cpc-coding-claims",
      icon: <AiFillLinkedin />
    },
    {
      link: "https://twitter.com/CPCCodingClaims",
      icon: <AiOutlineTwitter />
    }
  ]
};

export const DEFAULT_SEO: iSEO = {
  title: "PreciseRCM Company - Expert Medical Coding & Billing Services",
  description:
    "PreciseRCM Company provides accurate medical coding and billing services for healthcare providers, ensuring compliance and maximizing revenue. Our certified coders handle claims processing, denials, and audits.",
  keywords:
    "medical coding, medical billing, healthcare revenue cycle, CPC certified, claims processing, denial management, healthcare compliance, medical billing services, revenue cycle management",
  url: WEBSITE_URL,
  author: `${SARAH.name}, ${MICHAEL.name}, ${LISA.name}`,
  twitterHandle: "@CPCCodingClaims",
  ogImage: "/public/images/og-image.jpg"
};

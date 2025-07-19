// Site Configuration - Easily customizable by LLM
export const siteConfig = {
  // Basic Site Information
  site: {
    name: "YourCompany",
    title: "Professional Business Solutions",
    description: "We provide innovative solutions for modern businesses",
    url: "https://yourcompany.com",
    logo: "/logo.png",
    favicon: "/favicon.ico"
  },

  // Contact Information
  contact: {
    email: "hello@yourcompany.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Business Street",
      city: "Business City",
      state: "BC",
      zip: "12345",
      country: "USA"
    },
    social: {
      twitter: "https://twitter.com/yourcompany",
      linkedin: "https://linkedin.com/company/yourcompany",
      facebook: "https://facebook.com/yourcompany",
      instagram: "https://instagram.com/yourcompany"
    }
  },

  // Theme Configuration
  theme: {
    primary: "blue", // blue, green, purple, red, orange, pink
    style: "modern", // modern, classic, minimal, bold
    layout: "centered", // centered, wide, compact
  },

  // Color Schemes - Tailwind compatible
  colors: {
    blue: {
      primary: "bg-blue-600",
      primaryHover: "hover:bg-blue-700",
      accent: "bg-blue-100",
      text: "text-blue-600",
      gradient: "from-blue-600 to-blue-800"
    },
    green: {
      primary: "bg-green-600",
      primaryHover: "hover:bg-green-700",
      accent: "bg-green-100",
      text: "text-green-600",
      gradient: "from-green-600 to-green-800"
    },
    purple: {
      primary: "bg-purple-600",
      primaryHover: "hover:bg-purple-700",
      accent: "bg-purple-100",
      text: "text-purple-600",
      gradient: "from-purple-600 to-purple-800"
    },
    red: {
      primary: "bg-red-600",
      primaryHover: "hover:bg-red-700",
      accent: "bg-red-100",
      text: "text-red-600",
      gradient: "from-red-600 to-red-800"
    },
    orange: {
      primary: "bg-orange-600",
      primaryHover: "hover:bg-orange-700",
      accent: "bg-orange-100",
      text: "text-orange-600",
      gradient: "from-orange-600 to-orange-800"
    },
    pink: {
      primary: "bg-pink-600",
      primaryHover: "hover:bg-pink-700",
      accent: "bg-pink-100",
      text: "text-pink-600",
      gradient: "from-pink-600 to-pink-800"
    }
  },

  // Hero Section Configuration
  hero: {
    title: "Transform Your Business with Our Solutions",
    subtitle: "We deliver innovative, scalable solutions that drive growth and efficiency for modern enterprises",
    ctaText: "Explore Our Products",
    ctaLink: "/products",
    backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overlayOpacity: "bg-opacity-50" // bg-opacity-30, bg-opacity-50, bg-opacity-70
  },

  // Client Logos for Marquee
  clients: [
    {
      name: "TechCorp",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&w=200&h=100&fit=crop&auto=format",
      alt: "TechCorp Logo"
    },
    {
      name: "Innovation Labs",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=200&h=100&fit=crop&auto=format",
      alt: "Innovation Labs Logo"
    },
    {
      name: "Global Solutions",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&w=200&h=100&fit=crop&auto=format",
      alt: "Global Solutions Logo"
    },
    {
      name: "StartupXYZ",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&w=200&h=100&fit=crop&auto=format",
      alt: "StartupXYZ Logo"
    },
    {
      name: "Enterprise Inc",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=200&h=100&fit=crop&auto=format",
      alt: "Enterprise Inc Logo"
    },
    {
      name: "Future Tech",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&w=200&h=100&fit=crop&auto=format",
      alt: "Future Tech Logo"
    }
  ],

  // Testimonials Configuration
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "CEO, TechStartup",
      company: "TechStartup Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b4c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      content: "This solution transformed our business operations completely. The efficiency gains we've seen are remarkable, and the support team is exceptional.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "CTO, InnovateCorp",
      company: "InnovateCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      content: "Outstanding product quality and incredible customer service. Our productivity has increased by 40% since implementation.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Operations Director",
      company: "Global Enterprises",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      content: "The implementation was seamless, and the results exceeded our expectations. Highly recommend for any growing business.",
      rating: 5
    }
  ],

  // Products Configuration
  products: [
    {
      id: 1,
      name: "Business Analytics Pro",
      slug: "business-analytics-pro",
      shortDescription: "Advanced analytics platform for data-driven decisions",
      description: "Comprehensive business analytics solution that transforms your data into actionable insights. Features real-time dashboards, predictive analytics, and automated reporting.",
      price: "Starting at $99/month",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Real-time data visualization",
        "Predictive analytics",
        "Custom dashboard builder",
        "Automated reporting",
        "API integration",
        "24/7 support"
      ],
      category: "Analytics"
    },
    {
      id: 2,
      name: "Cloud Infrastructure Suite",
      slug: "cloud-infrastructure-suite",
      shortDescription: "Scalable cloud solutions for modern enterprises",
      description: "Complete cloud infrastructure management platform with automated scaling, security monitoring, and cost optimization features.",
      price: "Starting at $199/month",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      features: [
        "Auto-scaling infrastructure",
        "Security monitoring",
        "Cost optimization",
        "Multi-cloud support",
        "DevOps integration",
        "99.9% uptime SLA"
      ],
      category: "Infrastructure"
    },
    {
      id: 3,
      name: "Customer Experience Platform",
      slug: "customer-experience-platform",
      shortDescription: "Enhance customer relationships with AI-powered insights",
      description: "AI-driven customer experience platform that helps you understand, engage, and retain customers through personalized interactions and predictive analytics.",
      price: "Starting at $149/month",
      image: "https://images.unsplash.com/photo-1553028826-f4804a6dfd3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "AI-powered insights",
        "Personalization engine",
        "Multi-channel support",
        "Customer journey mapping",
        "Sentiment analysis",
        "Integration ecosystem"
      ],
      category: "Customer Experience"
    }
  ],

  // About Us Configuration
  about: {
    title: "About Our Company",
    description: "We are a forward-thinking technology company dedicated to delivering innovative solutions that empower businesses to thrive in the digital age.",
    story: "Founded in 2020, our company has grown from a small startup to a trusted partner for enterprises worldwide. We believe in the power of technology to transform businesses and create meaningful impact.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    stats: [
      { number: "500+", label: "Happy Clients" },
      { number: "1000+", label: "Projects Completed" },
      { number: "50+", label: "Team Members" },
      { number: "99.9%", label: "Uptime" }
    ],
    values: [
      {
        title: "Innovation",
        description: "We constantly push boundaries to deliver cutting-edge solutions."
      },
      {
        title: "Quality",
        description: "Excellence in every project, ensuring superior outcomes."
      },
      {
        title: "Partnership",
        description: "Building long-term relationships based on trust and mutual success."
      }
    ]
  },

  // Navigation Configuration
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" }
  ]
};
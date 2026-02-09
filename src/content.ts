// ============================================
// SITEROUND - EDITABLE CONTENT FILE
// Edit this file to update all website content
// ============================================

export const siteConfig = {
  name: "SiteRound",
  tagline: "Web Design • SEO • AI Automation",
  email: "siteround.org@gmail.com",
  whatsappNumber: "8801700524647",
  whatsappLink: "https://wa.me/8801700524647",
};

export const images = {
  heroBackground: "https://i.ibb.co.com/Fkk3BTdP/main-1.png",
  portfolio: {
    plumber: "https://i.ibb.co.com/C5FkbkKr/plumber-mockup.jpg",
    dentist: "https://i.ibb.co.com/rG2yzmsV/dentist.png",
    ambulance: "https://i.ibb.co.com/Ngd52288/ambulance.png",
    chiropractor: "https://i.ibb.co.com/7sL8Gmh/chiropractos.png",
    hvac: "https://i.ibb.co.com/Q3QNFM8w/hvac.png",
  },
  aiServices: {
    chatbot: "https://i.ibb.co.com/Txn2RM48/chatbot.png",
    whatsapp: "https://i.ibb.co.com/KjvLBCc9/whatspp.jpg",
    workflow: "https://i.ibb.co.com/HTYMyDwG/247.jpg",
  },
};

export const heroContent = {
  title: "Build Your Digital",
  subtitle: "Presence with Care",
  description: "We craft beautiful websites, optimize your visibility, and automate your workflows — all with a personal touch.",
  ctaPrimary: "Start Your Journey",
  ctaSecondary: "See Our Work",
};

export const whyChooseUs = {
  title: "Why Work With Us",
  subtitle: "Simple, honest, and effective digital solutions",
  features: [
    {
      title: "Dedicated Team",
      description: "We treat your project as our own, with personalized attention to every detail.",
      icon: "Users",
    },
    {
      title: "Quick Turnaround",
      description: "We respect your time and deliver quality work within agreed timelines.",
      icon: "Zap",
    },
    {
      title: "Always Available",
      description: "Questions? Concerns? We're here whenever you need support.",
      icon: "Headphones",
    },
    {
      title: "Proven Success",
      description: "Our clients see measurable improvements in their online presence.",
      icon: "TrendingUp",
    },
  ],
};

export const servicesOverview = {
  title: "What We Do",
  subtitle: "Thoughtful solutions for your digital needs",
  services: [
    {
      title: "Web Design",
      description: "Clean, modern websites that represent your brand beautifully.",
      icon: "Globe",
    },
    {
      title: "SEO",
      description: "Help your customers find you when they search online.",
      icon: "Search",
    },
    {
      title: "AI Automation",
      description: "Smart tools that save time and improve customer experience.",
      icon: "Bot",
    },
  ],
};

export const webDesignServices = [
  {
    title: "Custom Websites",
    description: "Unique designs tailored to your brand identity and business goals.",
    features: ["Responsive Design", "Brand-Focused", "SEO-Ready", "Fast Loading"],
    icon: "Palette",
  },
  {
    title: "Online Stores",
    description: "Seamless e-commerce experiences that make selling simple.",
    features: ["Easy Checkout", "Product Management", "Order Tracking", "Analytics"],
    icon: "ShoppingCart",
  },
  {
    title: "Landing Pages",
    description: "Focused pages designed to convert visitors into customers.",
    features: ["Conversion-Optimized", "Lead Capture", "Clear CTAs", "Mobile-First"],
    icon: "Layout",
  },
  {
    title: "Maintenance",
    description: "Keep your website secure, updated, and running smoothly.",
    features: ["Security Updates", "Content Edits", "Performance Checks", "Backups"],
    icon: "Settings",
  },
];

export const aiServices = [
  {
    title: "AI Chatbot",
    description: "Friendly, intelligent chat support that answers questions and captures leads around the clock.",
    image: images.aiServices.chatbot,
    features: ["Natural Conversations", "Lead Capture", "Instant Responses", "Multi-Language"],
  },
  {
    title: "WhatsApp Automation",
    description: "Stay connected with customers on their favorite messaging platform with smart, automated responses.",
    image: images.aiServices.whatsapp,
    features: ["Auto-Replies", "Broadcast Messages", "Quick Updates", "Order Notifications"],
  },
  {
    title: "Workflow Automation",
    description: "Streamline repetitive tasks so you can focus on what matters most — your business.",
    image: images.aiServices.workflow,
    features: ["Task Automation", "CRM Integration", "Email Workflows", "Simple Dashboard"],
  },
];

export const portfolioItems = [
  {
    title: "Plumber Pro",
    category: "Web Design",
    description: "Modern website for a local plumbing company",
    image: images.portfolio.plumber,
  },
  {
    title: "Smile Dental",
    category: "Web Design & SEO",
    description: "Friendly dental clinic website with online booking",
    image: images.portfolio.dentist,
  },
  {
    title: "Swift Ambulance",
    category: "Web Development",
    description: "Emergency services website with clear information",
    image: images.portfolio.ambulance,
  },
  {
    title: "Align Chiropractic",
    category: "Web Design",
    description: "Professional chiropractor website",
    image: images.portfolio.chiropractor,
  },
  {
    title: "Cool Air HVAC",
    category: "Web Design & SEO",
    description: "HVAC company website with service scheduling",
    image: images.portfolio.hvac,
  },
];

export const testimonials = [
  {
    name: "James Wilson",
    role: "Plumber Pro",
    content: "SiteRound made the whole process so easy. Our new website looks great and we're getting more calls than ever.",
    rating: 5,
  },
  {
    name: "Dr. Sarah Chen",
    role: "Smile Dental",
    content: "The team was wonderful to work with. Our patients love the new booking system!",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Swift Ambulance",
    content: "Their AI chatbot handles so many inquiries for us. It's like having extra help 24/7.",
    rating: 5,
  },
  {
    name: "Emily Thompson",
    role: "Cool Air HVAC",
    content: "Professional, friendly, and they really know their stuff. Highly recommend!",
    rating: 5,
  },
];

export const footerContent = {
  description: "Your partner in creating thoughtful digital solutions that help your business grow.",
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ],
  services: ["Web Design", "SEO", "AI Chatbots", "Automation"],
  copyright: `© ${new Date().getFullYear()} SiteRound. All rights reserved.`,
};

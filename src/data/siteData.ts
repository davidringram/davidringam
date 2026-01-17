export const siteData = {
  name: "David R. Ingram, fCMO",
  tagline: "Navigate the Chaos. Scale with Precision",
  description: "Tactical Marketing for Strategic Growth. Data-Driven Command. Revenue-Focused Strategy.",
  address: "Southern California",
  phone: "+1 (951) 858-2320",
  email: "davidingram.marketing@gmail.com",
  social: {
    instagram: "https://www.instagram.com/davidingram.marketing/",
    linkedin: "https://www.linkedin.com/in/davidingrammkt/",
    behance: "https://www.behance.net/davidingram",
    github: "https://github.com/davidringram",
  },
};

export const socialLinks = [

  { name: "instagram", icon: "ri-instagram-fill", label: "Instagram" },
  { name: "linkedin", icon: "ri-linkedin-fill", label: "LinkedIn" },
  { name: "behance", icon: "ri-behance-fill", label: "Behance" },
  { name: "github", icon: "ri-github-fill", label: "Github" },
];

export const contactInfo = [
  {
    icon: "ri-map-pin-line",
    title: "Address",
    content: siteData.address,
    link: null,
  },
  {
    icon: "ri-phone-line",
    title: "Phone",
    content: siteData.phone,
    link: `tel:${siteData.phone}`,
  },
  {
    icon: "ri-mail-line",
    title: "Email",
    content: siteData.email,
    link: `mailto:${siteData.email}`,
  },
  {
    icon: "ri-time-line",
    title: "Hours",
    content: ["Open 24/7 for Premium and Elite members", "Basic members: 5 AM - 11 PM daily"],
    link: null,
  },
];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export const expertise = [
  {
    title: "Marketing Strategy",
    description: "Strategy Development, Full-Funnel Optimization, Campaign Management",
    icon: "ri-bar-chart-box-line",
  },
  {
    title: "Brand Strategy",
    description: "Brand Development, Brand Positioning, Brand Identity, Brand Management",
    icon: "ri-user-star-line",
  },
  {
    title: "Marketing Operations",
    description: "MarTech, AI, Automation, Campaign Management, Campaign Optimization",
    icon: "ri-computer-line",
  },
  {
    title: "Marketing Analytics",
    description: "Data-Driven Marketing, Market Research, Forecasting, Campaign Analysis, and Campaign Reporting",
    icon: "ri-line-chart-line",
  },
  {
    title: "Digital Marketing",
    description: "Landing Pages, SEO, SEM, PPC, Email, Affiliate, Content, Video, Social Media Marketing",
    icon: "ri-window-line",
  },
  {
    title: "Unconventional Marketing",
    description: "Guerrilla, Stunt, Viral, Event, Experience, and Influencer Marketing",
    icon: "ri-community-line",
  },
];

export const services = [
  {
    name: "Marketing Strategy",
    description: "Strategy Development, Customer Segmentation, Journey Mapping",
    detailedDescription: "Develop a comprehensive marketing strategy that aligns with your business goals. We will work with you to identify your target audience, develop your brand positioning, and create a roadmap for success.",
    duration: "One Quarter",
    difficulty: " ",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/mktstrat.jpg",
    benefits: ["Build Impactful Strategies", "Improve Customer Segmentation", "Build Journey Mapping", "Develop Cost-effective Strategies"],
    tool: "David Ingram",
    whatToExpect: "Weekly Updates, Monthly Strategy Reviews",
  },
  {
    name: "Brand Development",
    description: "Brand Development, Brand Positioning, Brand Identity, Brand Management",
    detailedDescription: "Develop your brand image and identity to create a cohesive and memorable brand that stands out from the competition.",
    duration: "One Quarter",
    difficulty: " ",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/brandstrat.jpg",
    benefits: ["Gain Brand Advocates", "Stronger Brand Positioning", "Increased Brand Awareness", "Better Brand Loyalty"],
    tool: "David Ingram",
    whatToExpect: "Weekly Updates, Monthly Strategy Reviews",
  },
  {
    name: "Marketing Analytics",
    description: "Market Analysis, Market Research, Market Forecasting, Marketing Attribution",
    detailedDescription: "Leverage data to drive decisions. We provide market analysis, customer segmentation, forecasting, and attribution modeling to optimize your marketing performance.",
    duration: "1 Month",
    difficulty: " ",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/mktresearch.jpg",
    benefits: ["Define Customer Segmentation", "Develop Market Forecasts", "Marketing Attribution", "Conduct Market Research"],
    tool: "David Ingram",
    whatToExpect: "Weekly Updates, Monthly Strategy Reviews",
  },

  {
    name: "Campaign Management",
    description: "Campaign Development, Campaign Optimization, Campaign Analysis, Campaign Reporting",
    detailedDescription: "Plan, build, implement, and mangage marketing campaigns and funnels that have low acquisiton costs, high return on ad spends, and valuable clients and customers.",
    duration: "Month over Month",
    difficulty: " ",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/campmng.jpg",
    benefits: ["Improved Acquisition Costs", "Improved Return on Ad Spends", "Improved Customer Value", "Improved Campaign Performance"],
    tool: "David Ingram",
    whatToExpect: "Weekly Updates, Monthly Strategy Reviews",
  },
  {
    name: "MarTech Implementation",
    description: "MarTech, AI, Automation, Campaign Management, Campaign Optimization",
    detailedDescription: "Implement marketing technology, AI, and automation tools to improve marketing efficiency and effectiveness.",
    duration: "One Quarter",
    difficulty: " ",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/martech.jpg",
    benefits: ["CRM/ERP Implementation", "Marketing Automation", "AI & Machine Learning Integration", "Marketing Technology Optimization"],
    tool: "David Ingram",
    whatToExpect: "Weekly Updates, Monthly Strategy Reviews",
  },
  {
    name: "Unconventional Marketing",
    description: "Guerrilla, Stunt, Viral, Event, Experience, and Influencer Marketing",
    detailedDescription: "Push the limit of marketing by creating moments that last with clients and consumers by leveraging unconvertional marketing tactics..",
    duration: "Unknown",
    difficulty: " ",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/unvcov.jpg",
    benefits: ["Guerrilla Tactics", "Stunt & Viral Marketing", "Experience & Events", "Influencer Marketing"],
    tool: "David Ingram",
    whatToExpect: "Weekly Updates, Monthly Strategy Reviews",
  },
];

export const pricingPlans = [
  {
    name: "By Hour",
    price: "$300",
    period: "/Hour",
    features: [
      "For Coaching",
      "For Consulting",
      "For Small Issues",
      "For Quick Questions",
    ],
    popular: false,
  },
  {
    name: "Retainer",
    price: "$3000",
    period: "/month",
    features: [
      "Best Value",
      "Priority Access",
      "Continous Works",
      "Hollistic Marketing",

    ],
    popular: true,
  },
  {
    name: "By Project",
    price: "As Quoted",
    period: "/project",
    features: [
      "Help on Specific Projects",
      "Build Internal Systems",
      "Automate Workflows",
      "Clean Up Existing Systems",
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Member for 2 years",
    content: "FitZone has completely transformed my fitness journey. The trainers are amazing and the community is so supportive!",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Member for 1 year",
    content: "Best gym in town! The equipment is top-notch and the 24/7 access fits perfectly with my schedule.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Member for 6 months",
    content: "I love the variety of classes offered. The HIIT sessions are intense but so rewarding. Highly recommend!",
    rating: 5,
  },
];

export const industries = [
  {
    title: "Law Firms",
    description: "We help all types of law and legal servicesm for example, Family Law, Personal Injury, Document Prep, and more.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/lawfirm.jpg",
  },
  {
    title: "Medical Practices",
    description: "We help all types of medical and health services, for example, Dentists, Doctors, Chiropractors, and more.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/medical.jpg",
  },
  {
    title: "Real Estate",
    description: "We help all types of real estate and property services, for example, Agents, Brokers, Property Managers, and more.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/realestate.jpg",
  },
  {
    title: "Financial Services",
    description: "We help all types of financial services, for example, Financial Advisors, Accountants, and more.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/finance.jpg",
  },
  {
    title: "Services and Trades",
    description: "We help all types of services and trades, for exmaple, contractors, HVAC, Roofing, and more.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/construction.jpg",
  },
  {
    title: "Retail & Restaurants",
    description: "We help all types of retail and restaurant businesses, for example, Gyms, Fitness Centers, and more.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/retail.jpg",
  },
];

export const faqs = [
  {
    question: "Have you worked in my industry before?",
    answer: "Yes, I have worked in many industries, including law, medical, real estate, financial services, services and trades, retail, and restaurants.",
  },
  {
    question: "What should I bring to the meeting?",
    answer: "Where your business currently is at, what are you goals for the next year and 5 years, what are your pain points, and what are your expectations.",
  },
  {
    question: "Do you have a retainer?",
    answer: "I can work on a retainer basis, or by project or horly, although the retainer is the best value.",
  },
  {
    question: "Do you work alone or with a team?",
    answer: "I often work alone, integrating with your marketing team, but do have a team of contractors I can work with if needed.",
  },
  {
    question: "What are your operating hours?",
    answer: "I am available 24/7, but I am most active from 9am to 5pm Monday through Friday.",
  },
  {
    question: "Do you have a minimum project size?",
    answer: "No, I can work on any size project.",
  },
];

export const serviceSchedule = [
  { time: "Monday, 9 AM", service: "Local Service Weekly Masterclass", tool: "Marketing & Management" },
  { time: "Monday, 1 PM", service: "Getting Local Leads from Google Search, LSA, & Google My Business", tool: "SEO & GMB" },
  { time: "Tuesday, 11 AM", service: "Local Service Video Production, Content Marketing & Going Viral", tool: "Video & Content" },
  { time: "Thursday, 1 PM", service: "Social Media Marketing for Local Business, Leveraging Paid & Organic", tool: "Social Media" },
  { time: "Friday, 11 AM", service: "How Automation Can Help Your Local Service Business Thrive", tool: "Automation" },
];

export const successStories = [
  {
    name: "Jessica Martinez",
    age: 32,
    duration: "8 months",
    result: "Lost 45 lbs",
    story: "I was skeptical at first, but FitZone changed my life. The supportive trainers and community kept me motivated. I've never felt better!",
    beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=600&fit=crop&q=80",
  },
  {
    name: "David Thompson",
    age: 28,
    duration: "6 months",
    result: "Gained 20 lbs muscle",
    story: "The strength training program and nutrition guidance helped me build the physique I always wanted. The trainers are true professionals.",
    beforeImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=600&fit=crop&q=80",
  },
  {
    name: "Lisa Anderson",
    age: 35,
    duration: "1 year",
    result: "Completed first marathon",
    story: "From never running to completing a marathon - FitZone's cardio programs and group classes gave me the endurance and confidence I needed.",
    beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
  },
];

export const statistics = [
  { number: "15+", label: "Years Experience", icon: "ri-user-line" },
  { number: "10+", label: "Brands Built", icon: "ri-user-star-line" },
  { number: "800+", label: "Projects Completed", icon: "ri-calendar-check-line" },
  { number: "30+", label: "Happy Clients", icon: "ri-line-chart-line" },
  { number: "5000+", label: "cups of Coffee", icon: "ri-heart-line" },
  { number: "5+", label: "Marketing Certifications", icon: "ri-award-line" },
];

export const fullSchedule = {
  monday: [
    { time: "10:00 AM", service: "Marketing Monday Mastermind", tool: "Mike Chen" },
    { time: "5:00 PM", service: "Meeting Wrap", tool: "Mike Chen" },
  ],
  tuesday: [
    { time: "9:00 AM", service: "Law Firm Marketing", tool: "Mike Chen" },
  ],
  wednesday: [
    { time: "9:00 AM", service: "Cardio Blast", tool: "Mike Chen" },
  ],
  thursday: [
    { time: "2:00 PM", service: "Cardio Blast", tool: "Mike Chen" },
    { time: "3:00 PM", service: "Cardio Blast", tool: "Mike Chen" },
    { time: "4:00 PM", service: "Cardio Blast", tool: "Mike Chen" },
    { time: "5:00 PM", service: "Cardio Blast", tool: "Mike Chen" },
  ],
  friday: [
    { time: "9:00 AM", service: "Cardio Blast", tool: "Mike Chen" },
    { time: "12:00 PM", service: "Pilates", tool: "Sarah Johnson" },
    { time: "5:00 PM", service: "HIIT Training", tool: "Mike Chen" },
  ],
  saturday: [

  ],
  sunday: [

  ],
};

export const tools = [
  {
    name: "Customer Relationship Management",
    role: "Your last customer is your best customer",
    specialization: "Customer Relationship Management",
    experience: "10+ years",
    bio: "At it's core, HubSpot is a Customer Relationship Management tool that can be used on it's free tier, or we could upgrade to a whole suite of tools to manage business and marketing.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/hubspot.jpg",
    certifications: ["CRM", "Email Marketing", "Analytics"],
  },
  {
    name: "Analytics and Tracking",
    role: "You can't management what you can't measure",
    specialization: "Attribution and Reporting",
    experience: "13+ years",
    bio: "Google Marketing Suite is a comprehensive set of tools that helps businesses track and analyze their marketing campaigns and optimize their marketing strategies.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/gmsuite.jpg",
    certifications: ["Analytics", "Tracking", "Attribution"],
  },
  {
    name: "Campaign Management",
    role: "Make your customers the hero of your stories. People will never forget how you made them feel.",
    specialization: "Digital Campaign Management",
    experience: "13+ years",
    bio: "From Google Ads to Facebook Ads, from programatic, to Geo-location, to AdRoll Remarketing, we effective target your audience and drive traffic to your website.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/digads.jpg",
    certifications: ["Search Ads", "Display Ads", "Remarketing"],
  },
  {
    name: "Creative Design",
    role: "Creative with strategy is called 'advertising.' Creative without strategy is called 'art.',",
    specialization: "Design & Marketing",
    experience: "20+ years",
    bio: "With a background in design and marketing, we create engaging content that makes exercise enjoyable. Her classes are perfect for those who want to have fun while getting fit.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/adobe.jpg",
    certifications: ["Design", "Marketing", "Audio & Video"],
  },
  {
    name: "Data Science and Machine Learning",
    role: "Data science is a mix of three things: quantitative analysis, programming, and storytelling.",
    specialization: "Data Analysis",
    experience: "8+ years",
    bio: "We now have the ability to use advanced statistics and machine learning to analyze data and make informed decisions on your customers, campaigns, and business.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/python.jpg",
    certifications: ["Segmentation", "Analytics", "MDS"],
  },

];

export const history = [
  {
    year: "One",
    title: "Start - Initial Consultation",
    description: "We start with a consultation to understand your needs and goals. We will discuss your current marketing efforts and identify areas for improvement.",
  },
  {
    year: "Two",
    title: "Prepare - Development",
    description: "We will develop a marketing plan that is tailored to your business and goals. We will use data and analytics to make informed decisions on your customers, campaigns, and business.",
  },
  {
    year: "Three",
    title: "Align - Review & KPIs",
    description: "We will review the plan, align all departments and stakeholers, go over KPIs/OKRs, and ensure that all parties are heading the right direstion.",
  },
  {
    year: "Four",
    title: "Execute -Implementation",
    description: "We will implement the plan and monitor progress to ensure it is on track to achieving your goals and objectives.",
  },
  {
    year: "Five",
    title: "Adjust - Monitor & Initial Adjustments",
    description: "We will monitor the plan and make any necessary adjustments to ensure it aligns with your goals and objectives.",
  },
  {
    year: "Six",
    title: "Review - After Action Review",
    description: "We will analyze the data and provide you with a detailed report of your marketing efforts.",
  },
  {
    year: "Seven",
    title: "Repeat - Analyze & Optimize",
    description: "From here all programs, services, and projects will enter the last phase, analyze and optimze, increasing lift and effectiveness.",
  },

];

export const paymentOptions = {
  methods: ["Cash", "Check", "Money Order", "Zelle", "PayPal", "Venmo"],
  plans: [
    { type: "Hourly", description: "Pay hourly for your services" },
    { type: "Retainer", description: "Pay a retainer for monthly " },
    { type: "By Project", description: "Pay for a specific project" },
  ],
  guarantee: "7-day money-back guarantee on all memberships",
  trial: "Free 7-day trial available for new members",
};


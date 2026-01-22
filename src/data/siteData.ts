export const siteData = {
  name: "David R. Ingram, fCMO",
  tagline: "Navigate the Chaos. Scale with Precision",
  description: "Tactical Marketing for Strategic Growth. Data-Driven Command. Revenue-Focused Strategy.",
  address: "Riverside, California",
  phone: "+1 (951) 858-2320",
  email: "david@davidringram.com",
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
    content: ["9:00 to 17:00 Monday - Friday"],
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
    icon: "ri-map-2-line",
  },
  {
    title: "Brand Strategy",
    description: "Brand Development, Brand Positioning, Brand Identity, Brand Management",
    icon: "ri-fire-line",
  },
  {
    title: "Operations",
    description: "Hubspot, Salesforce, Zapier, APIs, Pixels, Events, CRM/ERP",
    icon: "ri-compass-line",
  },
  {
    title: "Analytics",
    description: "Python, R, Regression, GA4, Looker Studio, Forecasting, Data Visualization",
    icon: "ri-binoculars-line",
  },
  {
    title: "Automation & AI",
    description: "AI Agents, Marketing Automation, Win-Back, RAG & LLM",
    icon: "ri-robot-2-line",
  },
  {
    title: "Infrastructure",
    description: "Astro, Tailwind, Alpine, Docker, DNS, Servers, Cloud, Security",
    icon: "ri-tent-line",
  },
  {
    title: "Research",
    description: "Competitive Analysis, Market Research, Consumer Behavior, Product Development",
    icon: "ri-microscope-line",
  },
  {
    title: "Digital Marketing",
    description: "Landing Pages, SEO, SEM, PPC, Email, Affiliate, Content, Video, Social Media Marketing",
    icon: "ri-advertisement-line",
  },
  {
    title: "Budgeting & Economics",
    description: "Budget Management, Financial Modeling, Forecasting, Budget Optimization",
    icon: "ri-calculator-line",
  },
];

export const services = [
  {
    name: "Go-To-Market Strategy",
    description: "Strategy Development, Customer Segmentation, Market Penetration",
    detailedDescription: "Develop a comprehensive marketing strategy that aligns with your business goals. Identify your target audience, penetrate the market, and create a roadmap for success.",
    duration: "One Quarter",
    difficulty: " ",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/gtm.jpg",
    benefits: ["Launch with Precision", "Market Penetration", "Customer Segmentation", "Shorter Time-to-Revenue"],
    tool: "David Ingram",
    whatToExpect: "Weekly Updates, Monthly Strategy Reviews",
  },
  {
    name: "Brand Positioning",
    description: "Brand Development, Brand Positioning, Brand Identity, Brand Management",
    detailedDescription: "Develop your brand image and identity to create a cohesive and memorable brand that stands out from the competition.",
    duration: "One Quarter",
    difficulty: " ",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/brand.jpg",
    benefits: ["Gain Brand Advocates", "Escape Commodity Trap", "Command Premium Pricing", "Stronger Brand Loyalty"],
    tool: "David Ingram",
    whatToExpect: "Weekly Updates, Monthly Strategy Reviews",
  },

  {
    name: "Unit Economics & P&L",
    description: "Budget Management, Financial Modeling, Forecasting, Budget Optimization",
    detailedDescription: "No longer wonder if your marketing it working for you, we will calculate ROAS, CAC, LTV, and profit margins.",
    duration: "One Quarter",
    difficulty: " ",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/econ.jpg",
    benefits: ["Marketing as Investment", "Optimze LTV/CAC", "Improve ROAS", "Eliminate Budget Bleed"],
    tool: "David Ingram",
    whatToExpect: "Weekly Updates, Monthly Strategy Reviews",
  },

  {
    name: "RevOps and DataOps",
    description: "MarTech, CRM/ERP, Automation, Data Integration, Data Management",
    detailedDescription: "Implement marketing technology, AI, and automation tools to improve marketing efficiency and effectiveness.",
    duration: "One Quarter",
    difficulty: " ",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/revops.jpg",
    benefits: ["Single Source of Truth", "Plug the Leaks", "Automated Hygiene", "Sales Alignment"],
    tool: "David Ingram",
    whatToExpect: "Weekly Updates, Monthly Strategy Reviews",
  },
  {
    name: "Autonomous Systems",
    description: "AI Agents, Marketing Automation, RAG & LLM",
    detailedDescription: "Triple your marketing team with AI agents that work 24/7/365 to deliver results.",
    duration: "One Quarter",
    difficulty: " ",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/auto.jpg",
    benefits: ["Scale Output, not Headcount", "24/7/365 Operations", "Eliminate Manual Toil", "Error-Free Execution"],
    tool: "David Ingram",
    whatToExpect: "Weekly Updates, Monthly Strategy Reviews",
  },
  {
    name: "Marketing Engineering",
    description: "Landing Pages, Technical SEO, APIs, Pixel & Event Tracking",
    detailedDescription: "We build and optimize marketing assets that drive results. From landing pages to technical SEO, to full API and Pixel integrations.",
    duration: "One Quarter",
    difficulty: " ",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/eng.jpg",
    benefits: ["High-Performance Architecture", "SEO Domincance", "Platform Ownership", "Seemless Intragrations"],
    tool: "David Ingram",
    whatToExpect: "Weekly Updates, Monthly Strategy Reviews",
  },
  {
    name: "Marketing Intelligence",
    description: "Market Analysis, Market Research, Market Forecasting, Marketing Attribution",
    detailedDescription: "Leverage data to drive decisions. We provide market analysis, customer segmentation, forecasting, and attribution modeling to optimize your marketing performance.",
    duration: "One Quarter",
    difficulty: " ",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/intel.jpg",
    benefits: ["Decision Superiority", "Predictive Forecasting", "Competitive Recon", "Real-Time Visualizations"],
    tool: "David Ingram",
    whatToExpect: "Weekly Updates, Monthly Strategy Reviews",
  },
  {
    name: "Demand Generation",
    description: "Campaign Development, Paid Media, Content Marketing, Conversion Optimization",
    detailedDescription: "Plan, build, implement, and mangage marketing campaigns and funnels that have low acquisiton costs, high return on ad spends, and valuable clients and customers.",
    duration: "One Quarter",
    difficulty: " ",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/demand.jpg",
    benefits: ["Predictable Pipeline", "High-Intent Targeting", "Omnichannel Presence", "Automated Nurture"],
    tool: "David Ingram",
    whatToExpect: "Weekly Updates, Monthly Strategy Reviews",
  },
  {
    name: "Guerrilla and Asymmetric",
    description: "Guerrilla, Stunt, Viral, Event, Experience, and Influencer Marketing",
    detailedDescription: "Push the limit of marketing by creating moments that last with clients and consumers by leveraging unconvertional marketing tactics.",
    duration: "Unknown",
    difficulty: " ",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/guer.jpg",
    benefits: ["Asymmetric Advantage", "Hyper-Local Impact", "Disruptive Presence", "High-Impact Storytelling"],
    tool: "David Ingram",
    whatToExpect: "Weekly Updates, Monthly Strategy Reviews",
  },
];



export const pricingPlans = [
  {
    name: "The Audit",
    price: "$300",
    period: "/Hour",
    features: [
      "For Coaching",
      "For Consulting",
      "For Small Issues",
    ],
    popular: false,
  },
  {
    name: "Fractional Retainer",
    price: "$3000",
    period: "/month",
    features: [
      "The Best Value",
      "Set Working Hours",
      "Hollistic Marketing",

    ],
    popular: true,
  },
  {
    name: "The Sprint",
    price: "As Quoted",
    period: "/project",
    features: [
      "Build Internal Systems",
      "Automate Workflows",
      "Clean Up Existing Systems",
    ],
    popular: false,
  },
];

export const antiPortfolio = [
  {
    service: "Graphic Design, Video, and Photography",
    role: "Instead, I define the Visual Identity",
    story: "I do not design flyers, business cards, or do video production (unless there is a specific need). I can assist hiring a designer for you, but I do not push pixels.",
    lesson: "I can help with idenity design, can assist in ordering, and collateral strategy.",
  },
  {
    service: "Social Media Management",
    role: "Instead, I design the Content Strategy",
    story: "I do not schedule posts, reply to DMs and reviews, or manage your community. I can assist in hiring and managing a social media and/or commuinity manager.",
    lesson: "I can help with content creation, editorial calendar, and the content hub.",
  },
  {
    service: "IT & General Web Development",
    role: "Instead, I engineer Conversion Engines",
    story: "I build high-performance landing pages and funnels (with Astro). I do not build generic brochure sites, fix WordPress plugins, or act as IT support.",
    lesson: "I can help design and plan, but will not build the website.",
  },
  {
    service: "Sales Closing, ISA, & Intake",
    role: "Instead, I generate the Demand",
    story: "I deliver qualified leads to your doorstep. I do not pick up the phone and close the deal for you. I can enable your sales team, but I cannot replace them.",
    lesson: "I can enable your sales team, help with the CRM, pipelines and KPIs.",
  },
  {
    service: "Event Logistics & Trade Show Management",
    role: "Instead, I design the Field Strategy",
    story: "I define the ROI goals and messaging for your trade shows. I do not book the venue, order the catering, book hotels, or set up the booth.",
    lesson: "I can help at the event, develop the the strategy, and promote it.",
  },
  {
    service: "Public Relations & Media Relations",
    role: "Instead, I build Brand Authority",
    story: "I position you as a market leader. I do not send press releases to journalists or manage crisis communications when things go wrong.",
    lesson: "I can help with technical SEO surrouding PR, and influencer marketing.",
  },
];

export const industries = [
  {
    title: "Law Firms",
    description: "We help law firms and legal services, document prep, and more.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/lawfirm.jpg",
  },
  {
    title: "Medical Practices",
    description: "We help medical practices, health services, medspas, and more.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/medical.jpg",
  },
  {
    title: "Real Estate",
    description: "We help real estate, property services, developers, and more.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/realestate.jpg",
  },
  {
    title: "Financial Services",
    description: "We help financial services, banks, CPAs, advisors, brokers, and more.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/finance.jpg",
  },
  {
    title: "Services and Trades",
    description: "We help skilled trades, services, contractors, landscapers, and more.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/construction.jpg",
  },
  {
    title: "Retail & Restaurants",
    description: "We help gyms, fitness centers, and multi-location retail, bars, restaurants.",
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
    name: "Heath Baker Law",
    industry: "Criminal and Family Law",
    geo: "Inland Empire, CA",
    result: "$1M Revenue Growth / Month",
    story: "Working with David and his framework has institutionally changed how my business operates. We are now generating qualified leads and closing more cases than ever before.",
    beforeImage: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/heath.jpg",
    afterImage: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/logo.png",
  },
  {
    name: "Carl Thompson Realty",
    industry: "Real Estate",
    geo: "Orange County, CA",
    result: "Content Hub Sped Up Sales",
    story: "Before working with David, I had an old hard drive full of photos and videos of my houses on the market. David was able to build a working contnet hub to share this info easily.",
    beforeImage: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/heath.jpg",
    afterImage: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/logo.png",
  },
  {
    name: "Dr. Mark Plastics Surgery & MedSpa",
    industry: "Plastic Surgery",
    geo: "Phoenix, AZ",
    result: "3x Revenue Growth",
    story: "It is always difficult to parse out a plan for both a surgery center and a medspa, let alone run them. David was able to help us create a plan and execute it.",
    beforeImage: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/heath.jpg",
    afterImage: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/logo.png",
  },
];

export const statistics = [
  { number: "15+", label: "Years Experience", icon: "ri-calendar-line" },
  { number: "12+", label: "Brands Built", icon: "ri-fire-line" },
  { number: "$2.6B+", label: "Revenue Growth", icon: "ri-currency-line" },
  { number: "34+", label: "Happy Clients", icon: "ri-emotion-happy-line" },
  { number: "6500+", label: "cups of Coffee", icon: "ri-cup-line" },
  { number: "11+", label: "Marketing Certifications", icon: "ri-award-line" },
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

export const credentials = [
  {
    name: "Master of Business Administration (MBA)",
    role: "California Polytechnic State University, Pomona",
    subtitle: "Hollistic business strategy, management, and leadership education.",
    experience: "2020",
    bio: "With a specialized focus on Business Strategy, Management, and Leadership, moving beyond simple tactics to understand the mechanics of organizational growth. This academic foundation ensures that every marketing initiative he proposes is financially sound and aligned with broader corporate objectives.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/cpp.jpg",
    certifications: ["Marketing", "Management", "Leadership"],
  },
  {
    name: "Advanced Certificate in Marketing Analytics and Brand Management",
    role: "State University of New York, Empire State College",
    subtitle: "Using data science to inform brand management methodologies.",
    experience: "2024",
    bio: "Bridging the gap between creative ideas and hard numbers, this Advanced Certificate in Marketing Analytics emphasizes data science methodologies. This qualification allows marketers to strip away guesswork, ensuring that campaign performance is rigorously tracked, measured, and optimized for ROI",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/suny.jpg",
    certifications: ["Branding", "Data Science", "Research"],
  },
  {
    name: "Executive Education: Advanced Certificate in Brand Strategy & Digital Marketing",
    role: "Kellogg School of Management, Northwestern University",
    subtitle: "The 'Gold Standard' of modern brand theory, AI, and digital marketing.",
    experience: "2026",
    bio: "Training at the Kellogg School of Management exposed me to the 'Gold Standard' of modern brand theory and digital strategy. By studying at one of the world’s premier marketing institutions, he brings a sophisticated, high-level perspective to brand positioning that is rarely found in freelance consultants.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/kellogg.jpg",
    certifications: ["Branding", "AI", "Automation", "Strategy"],
  },
  {
    name: "Combat Veteran",
    role: "U.S. Army Infantry (OIF 07-09)",
    subtitle: "Leadership under extreme pressure.",
    experience: "2006-2009",
    bio: "As an Infantryman during Operation Iraqi Freedom, I forged my leadership style in environments demanding immediate decision-making and absolute accountability. I translate this combat-tested discipline into the business world, executing mission-critical projects with a level of focus and resilience that standard corporate training cannot replicate",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/army.jpg",
    certifications: ["Leadership", "Accountability", "Decision-Making", "Pressure Testing"],
  },
  {
    name: "Eagle Scout",
    role: "Boy Scouts of America",
    subtitle: "The foundation of preparedness.",
    experience: "1999",
    bio: "Achieving the rank of Eagle Scout provided me with a lifelong foundation of preparedness, resourcefulness, and ethical leadership. This early commitment to 'being prepared' fundamentally shapes my consulting approach, ensuring that I anticipate challenges before they become crises.",
    image: "https://img.perceptpixel.com/cvsgntdr/DavidRIngram/bsa.jpg",
    certifications: ["Preparedness", "Resourcefulness", "Leadership", "Teamwork"],
  },

];

export const history = [
  {
    year: "One",
    title: "Initial Consultation",
    description: "Action: We start with a consultation to understand your needs and goals. We will discuss your current marketing efforts and identify areas for improvement.",
  },
  {
    year: "Two",
    title: "Audit and Reconnaissance",
    description: "Action: 30-day deep dive. We audit your data, interview your team, and expose the cracks in your revenue pipeline. Deliverable: The Situation Report (a comprehensive audit document).",
  },
  {
    year: "Three",
    title: "The Battle Plan & Strategy",
    description: "Action: We define the GTM strategy, positioning, codify the plan, and create the 12-month roadmap. Deliverable: The Mission Brief (Strategy Deck).",
  },
  {
    year: "Four",
    title: "Execute and Implementation",
    description: "Action: We implement the CRM, code the APIs, pipelines, and events, build the automations, and launch the new assets. Deliverable: Operational Capability (The systems go live).",
  },
  {
    year: "Five",
    title: "Monitor & Adjustments",
    description: "Action: Monitor the plan and make any necessary adjustments to ensure it aligns with your goals and objectives. Deliverable: Adjusted Plan (Updated Strategy Deck).",
  },
  {
    year: "Six",
    title: "After Action Review",
    description: "Action: Analyze the data and provide you with a detailed report of your marketing efforts. Deliverable: After Action Review (Detailed Report).",
  },
  {
    year: "Seven",
    title: "Analyze & Optimize",
    description: "Action: Analyze and optimize your marketing efforts to increase lift and effectiveness. Deliverable: Optimized Plan (Updated Strategy Plan).",
  },

];

export const paymentOptions = {
  methods: ["stripe", "Cash", "Check", "Zelle", "PayPal", "Venmo"],
  plans: [
    { type: "Hourly", description: "Pay hourly for small projects" },
    { type: "Retainer", description: "Best value & best support" },
    { type: "By Project", description: "Pay for a specific project" },
  ],
  guarantee: "7-day money-back guarantee on all memberships",
  trial: "Free 7-day trial available for new members",
};


export const siteData = {
  name: "David R. Ingram, fCMO",
  tagline: "Navigate the Chaos. Scale with Precision",
  description: "Tactical Marketing for Strategic Growth. Data-Driven Command. Revenue-Focused Strategy.",
  address: "Southern California",
  phone: "+1 (951) 858-2320",
  email: "david@davidringram.com",
  social: {
    facebook: "https://facebook.com/davidringram",
    instagram: "https://instagram.com/davidringram",
    twitter: "https://twitter.com/davidringram",
    youtube: "https://youtube.com/davidringram",
  },
};

export const socialLinks = [
  { name: "facebook", icon: "ri-facebook-fill", label: "Facebook" },
  { name: "instagram", icon: "ri-instagram-fill", label: "Instagram" },
  { name: "twitter", icon: "ri-twitter-x-fill", label: "Twitter" },
  { name: "youtube", icon: "ri-youtube-fill", label: "YouTube" },
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
    detailedDescription: "Push your limits with our high-intensity interval training. This class alternates between intense bursts of activity and fixed periods of rest, maximizing calorie burn and improving cardiovascular fitness. Perfect for those looking to torch calories and build endurance.",
    duration: "One Quarter",
    difficulty: "Start Fresh",
    image: "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?w=800&h=600&fit=crop&q=80",
    benefits: ["Start With Strategy", "Improve Customer Segmentation", "Build Journey Mapping", "Cost-effective strategy"],
    tool: "David Ingram",
    whatToExpect: "Dynamic movements, short rest periods, high energy atmosphere",
  },
  {
    name: "Brand Image and Identity",
    description: "Brand Development, Brand Positioning, Brand Identity, Brand Management",
    detailedDescription: "Find your inner peace while improving flexibility and strength. Our yoga classes combine traditional poses with modern techniques to enhance balance, reduce stress, and increase mobility. Suitable for all levels, from beginners to advanced practitioners.",
    duration: "One Quarter",
    difficulty: "Start Fresh",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=800&h=600&fit=crop&q=80",
    benefits: ["Increase flexibility", "Reduce stress", "Improve balance", "Enhance mental clarity"],
    tool: "Sarah Johnson",
    whatToExpect: "Gentle stretches, breathing exercises, meditation, peaceful environment",
  },
  {
    name: "Marketing Research",
    description: "Market Research, Market Analysis, Market Forecasting, Market Strategy",
    detailedDescription: "Build lean muscle and increase your strength with our comprehensive strength training program. Our expert trainers guide you through proper form and technique using free weights, machines, and bodyweight exercises. Perfect for building a strong, toned physique.",
    duration: "1 Month",
    difficulty: "Gain Insight",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&q=80",
    benefits: ["Build muscle mass", "Increase strength", "Improve bone density", "Boost metabolism"],
    tool: "John Smith",
    whatToExpect: "Progressive weight training, form correction, personalized guidance",
  },
  {
    name: "Campaign Management",
    description: "Campaign Development, Campaign Optimization, Campaign Analysis, Campaign Reporting",
    detailedDescription: "Plan, build, implement, and mangage marketing campaigns that have low acquisiton costs, high return on ad spends, and valuable clients and customers.",
    duration: "Month over Month",
    difficulty: "Continous",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop&q=80",
    benefits: ["Improve heart health", "Burn calories", "Boost endurance", "Increase energy levels"],
    tool: "Mike Chen",
    whatToExpect: "Energetic music, varied movements, supportive group atmosphere",
  },
  {
    name: "MarTech Implementation",
    description: "MarTech, AI, Automation, Campaign Management, Campaign Optimization",
    detailedDescription: "Implement marketing technology and automation tools to improve marketing efficiency and effectiveness.",
    duration: "One Quarter",
    difficulty: "Build Systems",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&q=80",
    benefits: ["Strengthen core", "Improve posture", "Enhance flexibility", "Reduce back pain"],
    tool: "Sarah Johnson",
    whatToExpect: "Controlled movements, focus on form, mind-body connection",
  },
  {
    name: "Unconventional Marketing",
    description: "Guerrilla, Stunt, Viral, Event, Experience, and Influencer Marketing",
    detailedDescription: "Experience the ultimate functional fitness challenge with our CrossFit classes. Combining weightlifting, gymnastics, and cardio, each workout is different and designed to push you to new limits. Build strength, endurance, and mental toughness.",
    duration: "Unknown",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1763931790956-b57d1214c9d0?w=800&h=600&fit=crop&q=80",
    benefits: ["Build functional strength", "Improve all-around fitness", "Challenge yourself", "Join a community"],
    tool: "John Smith",
    whatToExpect: "Varied workouts, high intensity, supportive community, measurable progress",
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
    image: "https://images.unsplash.com/photo-1623008946073-ad1c850ad0dd?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Medical Practices",
    description: "We help all types of medical and health services, for example, Dentists, Doctors, Chiropractors, and more.",
    image: "https://images.unsplash.com/photo-1762603677582-7b809b5490d8?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Real Estate",
    description: "We help all types of real estate and property services, for example, Agents, Brokers, Property Managers, and more.",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Financial Services",
    description: "We help all types of financial services, for example, Financial Advisors, Accountants, and more.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Services and Trades",
    description: "We help all types of services and trades, for exmaple, contractors, HVAC, Roofing, and more.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Retail & Restaurants",
    description: "We help all types of retail and restaurant businesses, for example, Gyms, Fitness Centers, and more.",
    image: "https://images.unsplash.com/photo-1546213290-e1b492ab3eee?w=800&h=600&fit=crop&q=80",
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
  { time: "Month over Month", service: "SEO/GEO/AEO", tool: "Various" },
  { time: "Month over Month", service: "Search & Display Ads", tool: "Google/Meta" },
  { time: "Month over Month", service: "Retargeting Ads", tool: "AdRoll/Google" },
  { time: "Quarter", service: "Marketing Automation", tool: "HubSpot/N8N" },
  { time: "Quarter", service: "MarTech Implementation", tool: "HubSpot" },
  { time: "Quarter", service: "Segmentation & Personas", tool: "R & Python" },
  { time: "Quarter", service: "Marketing Forecasting", tool: "R & Python" },
  { time: "Quarter", service: "Content Marketing", tool: "Blogs/Videos" },
  { time: "Quarter", service: "Conversion Rate Optimization", tool: "R & Python" },
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
    name: "HubSpot",
    role: "Customer Management",
    specialization: "Customer Relationship Management",
    experience: "10+ years",
    bio: "At it's core, HubSpot is a Customer Relationship Management tool that can be used on it's free tier, or we could upgrade to a whole suite of tools to manage business and marketing.",
    image: "https://www.hubspot.com/hs-fs/hubfs/leads%20captured%20from%20a%20form%20on%20hubspot.webp?width=540&name=leads%20captured%20from%20a%20form%20on%20hubspot.webp",
    certifications: ["CRM", "Email Marketing", "Analytics"],
  },
  {
    name: "Google Marketing Suite",
    role: "Analytics and Tracking",
    specialization: "Attribution and Reporting",
    experience: "13+ years",
    bio: "Google Marketing Suite is a comprehensive set of tools that helps businesses track and analyze their marketing campaigns and optimize their marketing strategies.",
    image: "https://unito.io/wp-content/uploads/2023/11/image2.png",
    certifications: ["Analytics", "Tracking", "Attribution"],
  },
  {
    name: "Digital Ads",
    role: "Campaign Management",
    specialization: "Digital Campaign Management",
    experience: "13+ years",
    bio: "From Google Ads to Facebook Ads, from programatic, to Geo-location, to AdRoll Remarketing, we effective target your audience and drive traffic to your website.",
    image: "https://storage.googleapis.com/support-forums-api/attachment/thread-108780564-17623934576314322721.PNG",
    certifications: ["Search Ads", "Display Ads", "Remarketing"],
  },
  {
    name: "Adobe Creative Cloud",
    role: "Design & Marketing",
    specialization: "Design & Marketing",
    experience: "20+ years",
    bio: "With a background in design and marketing, we create engaging content that makes exercise enjoyable. Her classes are perfect for those who want to have fun while getting fit.",
    image: "https://cloudfront.slrlounge.com/wp-content/uploads/2016/12/Screen-Shot-2016-12-10-at-8.38.16-PM.png",
    certifications: ["Design", "Marketing", "Audio & Video"],
  },
  {
    name: "Python & R",
    role: "Data Analysis",
    specialization: "Data Analysis",
    experience: "8+ years",
    bio: "We now have the ability to use advanced statistics and machine learning to analyze data and make informed decisions on your customers, campaigns, and business.",
    image: "https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png",
    certifications: ["Segmentation", "Analytics", "MDS"],
  },

];

export const history = [
  {
    year: "One",
    title: "Initial Consultation",
    description: "We start with a consultation to understand your needs and goals. We will discuss your current marketing efforts and identify areas for improvement.",
  },
  {
    year: "Two",
    title: "Development",
    description: "We will develop a marketing plan that is tailored to your business and goals. We will use data and analytics to make informed decisions on your customers, campaigns, and business.",
  },
  {
    year: "Three",
    title: "Review & KPIs",
    description: "We will review the plan, align all departments and stakeholers, go over KPIs/OKRs, and ensure that all parties are heading the right direstion.",
  },
  {
    year: "Four",
    title: "Implementation",
    description: "We will implement the plan and monitor progress to ensure it is on track to achieving your goals and objectives.",
  },
  {
    year: "Five",
    title: "Monitor & Initial Adjustments",
    description: "We will monitor the plan and make any necessary adjustments to ensure it aligns with your goals and objectives.",
  },
  {
    year: "Six",
    title: "Analytics and Reporting",
    description: "We will analyze the data and provide you with a detailed report of your marketing efforts.",
  },
  {
    year: "Seven",
    title: "Analyze & Optimize",
    description: "From here all programs, services, and prokjects will enter the last phase, analyze and optimze, increasing lift and effectiveness.",
  },

];

export const paymentOptions = {
  methods: ["Credit/Debit Cards", "Bank Transfer", "PayPal", "Apple Pay", "Google Pay"],
  plans: [
    { type: "Hourly", description: "Pay hourly for your services" },
    { type: "Retainer", description: "Pay a retainer for monthly " },
    { type: "By Project", description: "Pay for a specific project" },
  ],
  guarantee: "7-day money-back guarantee on all memberships",
  trial: "Free 7-day trial available for new members",
};


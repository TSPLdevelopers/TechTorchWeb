// Single place that decides where every menu label goes.
// (Before this, every dropdown link was href="#" and went nowhere.)
// Change a path here and the desktop menu, mobile menu and footer links all follow.

export const ROUTES = {
  // About Us
  "Company Overview": "/Philosophy",
  Leadership: "/Philosophy",
  Idea: "/KnowMore",
  Investors: "/Philosophy",
  "Partners Ecosystem": "/vendor-partnership",
  News: "/blogs",
  "Customer Centricity": "/KnowMore",

  // Capabilities – Digital Solutions
  ERP: "/digitalsolution",
  "Operations Management": "/digitalsolution",
  "Supply Chain Management": "/digitalsolution",
  "Aviation Management": "/digitalsolution",
  "People Management": "/digitalsolution",
  "Web Portals": "/digitalsolution",
  "Financial Management": "/industries/finance",
  "Payment Management": "/industries/finance",
  "Healthcare & Hospital Management": "/industries/healthcare",
  CRM: "/digitalsolution",
  Ecommerce: "/industries/e-commerce",
  "Project Management": "/digitalsolution",

  // Capabilities – IT Augmentation
  "IT Consultancy": "/ItAugmentation",
  "Artificial Intelligence (AaaS)": "/ArtificialIntelligent",
  "Cloud Infrastructure Services (IaaS)": "/ItAugmentation",
  "Cyber Security": "/cyber-security",
  "Software Engineering Outsourcing": "/offshore-teams",
  "Business process Outsourcing": "/ItAugmentation",
  "Software Development & Support": "/Dedicated-Development-Teams",
  "Resource and Staffing": "/Contract-Staffing",
  "TorchX Suite": "/platform",
  "TorchX Campus": "/platform",

  // Industries
  Finance: "/industries/finance",
  Education: "/industries/education",
  Healthcare: "/industries/healthcare",
  Manufacturing: "/industries/manufacturing",
  "Information Technology": "/industries/information-technology",
  Insurance: "/industries/insurance",
  Energy: "/industries/energy",
  FMCG: "/industries/fmcg",
  Transportation: "/industries/transportation",
  Telecommunications: "/industries/telecommunications",

  // Insights
  "Case Studies": "/TechTorchView",
  Media: "/think-ahead",
  "Company Profile": "/Philosophy",
  "Quick Brochure": "/KnowMore",

  // Careers
  "The TechTorch Way": "/Philosophy",
  "Culture & Inclusion": "/Philosophy",
  "Join Us": "/careers",
};

export const routeFor = (label) => ROUTES[label] || "/";

// Tree used by the mobile menu
export const MOBILE_MENU = [
  { label: "About Us", children: ["Company Overview", "Leadership", "Idea", "Investors", "Partners Ecosystem", "News", "Customer Centricity"] },
  {
    label: "Capabilities",
    children: [
      "ERP", "Operations Management", "Supply Chain Management", "Web Portals", "CRM", "Ecommerce",
      "IT Consultancy", "Artificial Intelligence (AaaS)", "Cyber Security", "Resource and Staffing", "TorchX Suite",
    ],
  },
  {
    label: "Industries",
    children: ["Finance", "Education", "Healthcare", "Manufacturing", "Information Technology", "Insurance", "Energy", "FMCG", "Transportation", "Telecommunications"],
  },
  { label: "Insights", children: ["Case Studies", "Media", "Company Profile", "Quick Brochure"] },
  { label: "Careers", children: ["The TechTorch Way", "Culture & Inclusion", "Join Us"] },
  { label: "Contact Us", to: "/start-conversation" },
];
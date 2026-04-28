// Mighty Rides - Premium Data Types and Sample Data
// ============================================
// DISCLAIMER: Vehicle inventory, rental listings, and specific pricing shown below
// are EXAMPLE DATA for demonstration purposes. In production, these would be 
// managed via CMS (Sanity/Strapi) with real inventory data.
// ============================================

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  engine: string;
  transmission: string;
  fuelType: string;
  bodyType: string;
  color: string;
  condition: string;
  description: string;
  features: string[];
  images: string[];
  isFeatured: boolean;
  isSold: boolean;
}

export interface RentalVehicle {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  category: string;
  dailyRate: number;
  weeklyRate?: number;
  monthlyRate?: number;
  description: string;
  features: string[];
  images: string[];
  isAvailable: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  vehiclePurchased: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  benefits: string[];
  isFeatured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  featuredImage: string;
  author: string;
  publishedAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

// ============================================
// EXAMPLE VEHICLE INVENTORY
// In production, this data would come from CMS
// ============================================
export const vehicles: Vehicle[] = [
  {
    id: "1",
    make: "Mercedes-Benz",
    model: "S-Class",
    year: 2024,
    price: 0, // Contact for price
    mileage: 0,
    engine: "Contact for specs",
    transmission: "Automatic",
    fuelType: "Petrol",
    bodyType: "Sedan",
    color: "Black",
    condition: "New",
    description: "Premium luxury sedan available. Contact us for specifications and pricing.",
    features: ["Premium Interior", "Advanced Safety", "Luxury Amenities"],
    images: [],
    isFeatured: true,
    isSold: false,
  },
  {
    id: "2",
    make: "Range Rover",
    model: "Sport",
    year: 2024,
    price: 0,
    mileage: 0,
    engine: "Contact for specs",
    transmission: "Automatic",
    fuelType: "Petrol",
    bodyType: "SUV",
    color: "White",
    condition: "New",
    description: "Luxury SUV available. Contact us for specifications and pricing.",
    features: ["Premium Interior", "Advanced Safety", "Off-Road Capability"],
    images: [],
    isFeatured: true,
    isSold: false,
  },
  {
    id: "3",
    make: "Toyota",
    model: "Land Cruiser",
    year: 2024,
    price: 0,
    mileage: 0,
    engine: "Contact for specs",
    transmission: "Automatic",
    fuelType: "Petrol",
    bodyType: "SUV",
    color: "Black",
    condition: "New",
    description: "Legendary SUV available. Contact us for specifications and pricing.",
    features: ["Reliability", "Capability", "Premium Interior"],
    images: [],
    isFeatured: true,
    isSold: false,
  },
  {
    id: "4",
    make: "BMW",
    model: "X7",
    year: 2024,
    price: 0,
    mileage: 0,
    engine: "Contact for specs",
    transmission: "Automatic",
    fuelType: "Petrol",
    bodyType: "SUV",
    color: "Blue",
    condition: "New",
    description: "Premium luxury SUV available. Contact us for specifications and pricing.",
    features: ["Premium Interior", "Advanced Technology", "Luxury Amenities"],
    images: [],
    isFeatured: true,
    isSold: false,
  },
];

// ============================================
// EXAMPLE RENTAL VEHICLES
// In production, this data would come from CMS
// ============================================
export const rentalVehicles: RentalVehicle[] = [
  {
    id: "r1",
    name: "Executive Wedding Vehicle",
    make: "Mercedes-Benz",
    model: "S-Class",
    year: 2024,
    category: "Wedding",
    dailyRate: 0, // Contact for pricing
    description: "Premium wedding vehicle available. Contact us for rates and availability.",
    features: ["Professional Chauffeur Available", "Premium Service"],
    images: [],
    isAvailable: true,
  },
  {
    id: "r2",
    name: "VIP Airport Transfer",
    make: "Range Rover",
    model: "Sport",
    year: 2024,
    category: "Airport Pickup",
    dailyRate: 0,
    description: "VIP airport transfer service available. Contact us for rates.",
    features: ["Meet & Greet", "Luggage Assistance"],
    images: [],
    isAvailable: true,
  },
  {
    id: "r3",
    name: "Corporate Vehicle",
    make: "BMW",
    model: "7 Series",
    year: 2024,
    category: "Corporate",
    dailyRate: 0,
    description: "Corporate transport available. Contact us for rates.",
    features: ["Professional Service", "Flexible Scheduling"],
    images: [],
    isAvailable: true,
  },
  {
    id: "r4",
    name: "VIP Transport",
    make: "Mercedes-Benz",
    model: "G-Class",
    year: 2024,
    category: "VIP",
    dailyRate: 0,
    description: "VIP transport available. Contact us for rates.",
    features: ["Discrete Service", "Professional Drivers"],
    images: [],
    isAvailable: true,
  },
  {
    id: "r5",
    name: "Event Vehicle",
    make: "Lexus",
    model: "LX",
    year: 2024,
    category: "Events",
    dailyRate: 0,
    description: "Event transport available. Contact us for rates.",
    features: ["Group Transport", "Professional Service"],
    images: [],
    isAvailable: true,
  },
  {
    id: "r6",
    name: "Long-Term Rental",
    make: "Toyota",
    model: "Land Cruiser",
    year: 2024,
    category: "Long-term",
    dailyRate: 0,
    description: "Long-term rental options available. Contact us for rates.",
    features: ["Flexible Terms", "Maintenance Included"],
    images: [],
    isAvailable: true,
  },
];

// ============================================
// TESTIMONIALS
// Note: In production, real testimonials would be collected and displayed
// For now, this section shows a placeholder structure
// ============================================
export const testimonials: Testimonial[] = [];

// ============================================
// SERVICES (VERIFIED - These are real services offered)
// ============================================
export const services: Service[] = [
  {
    id: "s1",
    title: "Vehicle Servicing",
    slug: "servicing",
    description: "Professional vehicle servicing by trained technicians using quality parts.",
    icon: "Wrench",
    benefits: ["Professional Technicians", "Quality Parts", "Reliable Service"],
    isFeatured: true,
  },
  {
    id: "s2",
    title: "Body Kits & Customization",
    slug: "customization",
    description: "Premium body kits and vehicle customization services.",
    icon: "Sparkles",
    benefits: ["Custom Solutions", "Quality Materials", "Expert Installation"],
    isFeatured: true,
  },
  {
    id: "s3",
    title: "Vehicle Sourcing",
    slug: "sourcing",
    description: "We help source vehicles to your specifications. Contact us with your requirements.",
    icon: "Search",
    benefits: ["Global Network", "Specification Matching", "Transparent Process"],
    isFeatured: true,
  },
  {
    id: "s4",
    title: "Premium Detailing",
    slug: "detailing",
    description: "Professional vehicle detailing and care services.",
    icon: "Car",
    benefits: ["Interior & Exterior", "Paint Protection", "Premium Products"],
    isFeatured: true,
  },
  {
    id: "s5",
    title: "Spare Parts",
    slug: "spare-parts",
    description: "Quality spare parts for various vehicle makes and models.",
    icon: "Package",
    benefits: ["Quality Parts", "Various Brands", "Expert Advice"],
    isFeatured: false,
  },
  {
    id: "s6",
    title: "Maintenance",
    slug: "maintenance",
    description: "Regular maintenance services to keep your vehicle in optimal condition.",
    icon: "ClipboardCheck",
    benefits: ["Scheduled Service", "Preventive Care", "Expert Diagnostics"],
    isFeatured: false,
  },
];

// ============================================
// BLOG POSTS (EXAMPLE CONTENT)
// ============================================
export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Choosing the Right Luxury Vehicle in Uganda",
    slug: "choosing-luxury-vehicle-uganda",
    excerpt: "Key considerations when selecting a premium vehicle for Ugandan roads and conditions.",
    content: "Full article content here...",
    category: "Buying Guide",
    featuredImage: "",
    author: "Mighty Rides Team",
    publishedAt: "2024-01-15",
  },
  {
    id: "b2",
    title: "Maintaining Your Vehicle: Essential Tips",
    slug: "vehicle-maintenance-tips",
    excerpt: "Practical maintenance tips to keep your vehicle performing at its best.",
    content: "Full article content here...",
    category: "Maintenance",
    featuredImage: "",
    author: "Mighty Rides Team",
    publishedAt: "2024-01-10",
  },
  {
    id: "b3",
    title: "Understanding Vehicle Imports in Uganda",
    slug: "vehicle-imports-guide",
    excerpt: "What you need to know about importing vehicles into Uganda.",
    content: "Full article content here...",
    category: "Imports",
    featuredImage: "",
    author: "Mighty Rides Team",
    publishedAt: "2024-01-05",
  },
];

// ============================================
// TEAM MEMBERS
// Note: Team member information would be provided by the business
// Placeholder structure for CMS integration
// ============================================
export const teamMembers: TeamMember[] = [];

// ============================================
// CONTACT INFORMATION (VERIFIED)
// ============================================
export const contactInfo = {
  name: "Mighty Rides",
  tagline: "Premium Automotive Dealership",
  address: "Mirembe Business Centre, Lugogo Bypass, Kampala, Uganda",
  phones: ["+256 785 642 717", "+256 754 642 717"],
  email: "info@themightyrides.com",
  whatsapp: "256785642717",
  hours: {
    weekdays: "9:00 AM – 6:00 PM",
    saturday: "9:00 AM – 5:00 PM",
    sunday: "Closed",
  },
  social: {
    facebook: "https://facebook.com/mightyrides",
    instagram: "https://instagram.com/mightyrides",
    linkedin: "https://linkedin.com/company/mightyrides",
  },
};

// Categories for rentals
export const rentalCategories = [
  { id: "wedding", name: "Wedding", icon: "Heart", description: "Premium wedding transport" },
  { id: "airport", name: "Airport Pickup", icon: "Plane", description: "VIP arrival services" },
  { id: "corporate", name: "Corporate", icon: "Briefcase", description: "Professional transport" },
  { id: "vip", name: "VIP", icon: "Crown", description: "VIP transport" },
  { id: "events", name: "Events", icon: "Calendar", description: "Event vehicles" },
  { id: "longterm", name: "Long-term", icon: "Clock", description: "Extended rentals" },
];

// Vehicle body types for filtering
export const bodyTypes = ["Sedan", "SUV", "Coupe", "Convertible", "Hatchback", "Wagon", "Pickup"];
export const fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric"];
export const transmissions = ["Automatic", "Manual"];

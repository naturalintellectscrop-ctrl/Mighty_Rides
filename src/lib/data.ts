// Mighty Rides - Premium Data Types and Sample Data

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

// Sample Vehicles Data
export const vehicles: Vehicle[] = [
  {
    id: "1",
    make: "Mercedes-Benz",
    model: "S-Class S580",
    year: 2024,
    price: 285000,
    mileage: 1200,
    engine: "4.0L V8 Biturbo",
    transmission: "9G-TRONIC Automatic",
    fuelType: "Petrol",
    bodyType: "Sedan",
    color: "Obsidian Black",
    condition: "New",
    description: "The pinnacle of luxury sedans. This S-Class represents the absolute best in automotive engineering, comfort, and technology. Features executive rear seating with massage functions, MBUX infotainment, and advanced driver assistance systems.",
    features: ["Executive Rear Package", "Burmester 4D Sound", "Magic Body Control", "Active Ambient Lighting", "Rear Axle Steering", "Panoramic Sunroof"],
    images: ["/images/mercedes-s-class.jpg"],
    isFeatured: true,
    isSold: false,
  },
  {
    id: "2",
    make: "Range Rover",
    model: "Autobiography",
    year: 2024,
    price: 320000,
    mileage: 800,
    engine: "4.4L V8 Twin-Turbo",
    transmission: "8-Speed Automatic",
    fuelType: "Petrol",
    bodyType: "SUV",
    color: "Santorini Black",
    condition: "New",
    description: "The ultimate expression of luxury and capability. This Range Rover Autobiography combines British craftsmanship with legendary off-road ability. Features a fully loaded specification with every available option.",
    features: ["Executive Class Rear Seats", "Meridian Signature Sound", "Terrain Response 2", "Pixel LED Headlights", "Air Suspension", "Four-Zone Climate"],
    images: ["/images/range-rover.jpg"],
    isFeatured: true,
    isSold: false,
  },
  {
    id: "3",
    make: "BMW",
    model: "7 Series 760i",
    year: 2024,
    price: 245000,
    mileage: 2500,
    engine: "4.4L V8 TwinPower Turbo",
    transmission: "8-Speed Sport Automatic",
    fuelType: "Petrol",
    bodyType: "Sedan",
    color: "Carbon Black",
    condition: "New",
    description: "BMW's flagship sedan reimagined. The new 7 Series sets new standards in luxury with its theater screen, executive lounge seating, and advanced technology suite.",
    features: ["31-inch 8K Theater Screen", "Executive Lounge Package", "Bowers & Wilkins Sound", "Sky Lounge Panoramic Roof", "Gesture Control", "Running Board"],
    images: ["/images/bmw-7-series.jpg"],
    isFeatured: true,
    isSold: false,
  },
  {
    id: "4",
    make: "Porsche",
    model: "Cayenne Turbo GT",
    year: 2024,
    price: 265000,
    mileage: 1500,
    engine: "4.0L V8 Twin-Turbo",
    transmission: "8-Speed Tiptronic S",
    fuelType: "Petrol",
    bodyType: "SUV",
    color: "Carrara White Metallic",
    condition: "New",
    description: "The most powerful Cayenne ever built. Track-bred performance meets everyday practicality in this exceptional SUV. Nürburgring-tested and refined for the ultimate driving experience.",
    features: ["Sport Chrono Package", "Porsche Active Suspension", "Carbon Ceramic Brakes", "Sport Exhaust", "Lightweight Package", "Race-Tex Interior"],
    images: ["/images/porsche-cayenne.jpg"],
    isFeatured: true,
    isSold: false,
  },
  {
    id: "5",
    make: "Lexus",
    model: "LX 600",
    year: 2024,
    price: 185000,
    mileage: 3200,
    engine: "3.5L V6 Twin-Turbo",
    transmission: "10-Speed Automatic",
    fuelType: "Petrol",
    bodyType: "SUV",
    color: "Nori Green Pearl",
    condition: "New",
    description: "The flagship Lexus SUV combines legendary reliability with unmatched luxury. The LX 600 offers exceptional off-road capability wrapped in sophisticated Japanese craftsmanship.",
    features: ["Executive Seating Package", "Mark Levinson Audio", "Kinetic Dynamic Suspension", "Multi-Terrain Monitor", "Rear Seat Entertainment", "Ventilated Seats"],
    images: ["/images/lexus-lx.jpg"],
    isFeatured: false,
    isSold: false,
  },
  {
    id: "6",
    make: "Toyota",
    model: "Land Cruiser V8",
    year: 2023,
    price: 145000,
    mileage: 15000,
    engine: "5.7L V8",
    transmission: "8-Speed Automatic",
    fuelType: "Petrol",
    bodyType: "SUV",
    color: "Attitude Black",
    condition: "Certified Pre-Owned",
    description: "The legendary Land Cruiser needs no introduction. This certified pre-owned example has been thoroughly inspected and comes with extended warranty coverage. Built to conquer any terrain.",
    features: ["Kinetic Dynamic Suspension", "Multi-Terrain Select", "Crawl Control", "JBL Premium Audio", "Four-Zone Climate", "Moonroof"],
    images: ["/images/land-cruiser.jpg"],
    isFeatured: false,
    isSold: false,
  },
  {
    id: "7",
    make: "Mercedes-Benz",
    model: "G-Wagon G63 AMG",
    year: 2024,
    price: 295000,
    mileage: 500,
    engine: "4.0L V8 Biturbo",
    transmission: "9G-TRONIC Automatic",
    fuelType: "Petrol",
    bodyType: "SUV",
    color: "G Manufaktur Opalite White",
    condition: "New",
    description: "An icon redefined. The G63 AMG combines military-grade ruggedness with AMG performance and ultimate luxury. This example features the exclusive Manufaktur paint and fully loaded specification.",
    features: ["AMG Performance Exhaust", "Night Package", "Burmester Sound", "Rear Entertainment", "Active Ride Control", "21-inch AMG Wheels"],
    images: ["/images/g-wagon.jpg"],
    isFeatured: true,
    isSold: false,
  },
  {
    id: "8",
    make: "Audi",
    model: "RS Q8",
    year: 2024,
    price: 198000,
    mileage: 2800,
    engine: "4.0L V8 Twin-Turbo",
    transmission: "8-Speed Tiptronic",
    fuelType: "Petrol",
    bodyType: "SUV",
    color: "Nardo Gray",
    condition: "New",
    description: "Audi's performance flagship SUV. The RS Q8 delivers supercar performance in a practical family package. Features the latest MMI infotainment and virtual cockpit plus.",
    features: ["RS Sport Suspension", "Quattro Sport Differential", "Bang & Olufsen 3D Sound", "Matrix LED Headlights", "Carbon Fiber Package", "Alcantara Interior"],
    images: ["/images/audi-rsq8.jpg"],
    isFeatured: false,
    isSold: false,
  },
];

// Sample Rentals Data
export const rentalVehicles: RentalVehicle[] = [
  {
    id: "r1",
    name: "Executive Wedding Fleet",
    make: "Mercedes-Benz",
    model: "S-Class",
    year: 2024,
    category: "Wedding",
    dailyRate: 800,
    weeklyRate: 4800,
    monthlyRate: 16000,
    description: "Make your special day unforgettable with our flagship Mercedes S-Class. Features white exterior, premium interior, and professional chauffeur service available.",
    features: ["White Exterior", "Executive Seating", "Champagne Cooler", "Professional Chauffeur Available", "Red Carpet Service", "Floral Arrangements"],
    images: ["/images/rental-s-class.jpg"],
    isAvailable: true,
  },
  {
    id: "r2",
    name: "VIP Airport Transfer",
    make: "Range Rover",
    model: "Autobiography",
    year: 2024,
    category: "Airport Pickup",
    dailyRate: 600,
    weeklyRate: 3500,
    description: "Arrive in style with our VIP airport transfer service. Meet and greet, luggage assistance, and refreshments included. Perfect for executives and dignitaries.",
    features: ["Meet & Greet", "Luggage Assistance", "Refreshments", "WiFi", "Phone Chargers", "Newspapers"],
    images: ["/images/rental-range-rover.jpg"],
    isAvailable: true,
  },
  {
    id: "r3",
    name: "Corporate Fleet",
    make: "BMW",
    model: "7 Series",
    year: 2024,
    category: "Corporate",
    dailyRate: 500,
    weeklyRate: 2800,
    monthlyRate: 9000,
    description: "Professional executive transport for business. Features full connectivity, privacy glass, and rear workspace. Ideal for client meetings and corporate events.",
    features: ["WiFi Hotspot", "Privacy Glass", "Rear Workspace", "Phone Conference System", "Mineral Water", "Daily Newspaper"],
    images: ["/images/rental-bmw.jpg"],
    isAvailable: true,
  },
  {
    id: "r4",
    name: "VIP Protection Vehicle",
    make: "Mercedes-Benz",
    model: "G-Wagon",
    year: 2024,
    category: "VIP",
    dailyRate: 900,
    weeklyRate: 5400,
    description: "Discreet yet commanding VIP transport. The G-Wagon provides security, presence, and comfort. Available with security trained drivers.",
    features: ["Armored Option Available", "Security Trained Drivers", "GPS Tracking", "Emergency Communication", "Privacy Features", "24/7 Support"],
    images: ["/images/rental-gwagon.jpg"],
    isAvailable: true,
  },
  {
    id: "r5",
    name: "Event Convoy Vehicle",
    make: "Lexus",
    model: "LX 600",
    year: 2024,
    category: "Events",
    dailyRate: 450,
    weeklyRate: 2700,
    description: "Perfect for events, conferences, and group transport. Spacious, comfortable, and reliable. Multiple units available for convoy services.",
    features: ["7-Seater", "Event Coordination", "Group Discounts", "Flexible Pickup", "Professional Drivers", "Meet & Greet"],
    images: ["/images/rental-lexus.jpg"],
    isAvailable: true,
  },
  {
    id: "r6",
    name: "Long-Term Executive Lease",
    make: "Toyota",
    model: "Land Cruiser",
    year: 2024,
    category: "Long-term",
    dailyRate: 250,
    weeklyRate: 1400,
    monthlyRate: 4500,
    description: "Cost-effective long-term vehicle solutions for expatriates, project managers, and businesses. Full maintenance and insurance included.",
    features: ["Full Maintenance Included", "Insurance Covered", "Flexible Terms", "Vehicle Replacement", "24/7 Roadside Assistance", "Monthly Reporting"],
    images: ["/images/rental-landcruiser.jpg"],
    isAvailable: true,
  },
];

// Sample Testimonials
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Sarah Namuli",
    role: "CEO",
    company: "Namuli Investments Ltd",
    content: "Mighty Rides delivered an exceptional experience from start to finish. The Range Rover Autobiography I purchased exceeded all expectations. Their attention to detail and after-sales service is unmatched in East Africa.",
    rating: 5,
    vehiclePurchased: "Range Rover Autobiography 2024",
  },
  {
    id: "t2",
    name: "Eng. James Kato",
    role: "Director",
    company: "Kampala Construction Group",
    content: "We've sourced our entire executive fleet through Mighty Rides. Their sourcing service found us specific vehicles we couldn't find elsewhere. Professional, reliable, and truly premium service.",
    rating: 5,
    vehiclePurchased: "Fleet of 5 BMW 7 Series",
  },
  {
    id: "t3",
    name: "Hon. Victoria Nambi",
    role: "Member of Parliament",
    company: "Parliament of Uganda",
    content: "The VIP rental service for my constituency tours was impeccable. Discrete, professional, and the vehicles were in pristine condition. Mighty Rides understands what premium service means.",
    rating: 5,
    vehiclePurchased: "Long-term Rental",
  },
  {
    id: "t4",
    name: "Mr. David Mugisha",
    role: "Entrepreneur",
    company: "DM Holdings",
    content: "Bought my dream G-Wagon from Mighty Rides. The process was smooth, transparent, and they even helped with registration and insurance. A dealership that truly cares about their customers.",
    rating: 5,
    vehiclePurchased: "Mercedes G63 AMG 2024",
  },
  {
    id: "t5",
    name: "Mrs. Agnes Nakityo",
    role: "Managing Director",
    company: "Nakityo Enterprises",
    content: "Our daughter's wedding was made extra special with the S-Class rental. The car arrived spotless, the driver was professional, and the whole experience was seamless. Highly recommend!",
    rating: 5,
    vehiclePurchased: "Wedding Rental Package",
  },
];

// Sample Services
export const services: Service[] = [
  {
    id: "s1",
    title: "Premium Servicing",
    slug: "servicing",
    description: "Factory-trained technicians and genuine parts ensure your vehicle performs at its best. We service all major luxury brands with precision and care.",
    icon: "Wrench",
    benefits: ["Certified Technicians", "Genuine Parts", "Digital Service Records", "Complimentary Health Check", "Collection & Delivery", "Service Loan Vehicles"],
    isFeatured: true,
  },
  {
    id: "s2",
    title: "Customization & Upgrades",
    slug: "customization",
    description: "Transform your vehicle with premium body kits, performance upgrades, and bespoke interior modifications. Express your individuality.",
    icon: "Sparkles",
    benefits: ["Body Kits", "Performance Tuning", "Custom Interiors", "Audio Upgrades", "Lighting Modifications", "Wheels & Suspension"],
    isFeatured: true,
  },
  {
    id: "s3",
    title: "Vehicle Sourcing",
    slug: "sourcing",
    description: "Can't find what you're looking for? Our global network can source any vehicle to your exact specifications. From rare classics to the latest releases.",
    icon: "Search",
    benefits: ["Global Network", "Specific Models", "Rare Classics", "Inspection Reports", "Import Assistance", "Transparent Process"],
    isFeatured: true,
  },
  {
    id: "s4",
    title: "Premium Detailing",
    slug: "detailing",
    description: "Restore and protect your vehicle's finish with our professional detailing services. Paint correction, ceramic coating, and interior rejuvenation.",
    icon: "Car",
    benefits: ["Paint Correction", "Ceramic Coating", "Interior Deep Clean", "Leather Conditioning", "Engine Bay Detail", "Protection Packages"],
    isFeatured: true,
  },
  {
    id: "s5",
    title: "Spare Parts",
    slug: "spare-parts",
    description: "Genuine and OEM parts for all major luxury brands. Quick availability and competitive pricing for all your maintenance and repair needs.",
    icon: "Package",
    benefits: ["Genuine Parts", "OEM Alternatives", "Quick Availability", "Warranty Coverage", "Expert Advice", "Delivery Service"],
    isFeatured: false,
  },
  {
    id: "s6",
    title: "Vehicle Inspections",
    slug: "inspections",
    description: "Comprehensive vehicle inspections before purchase or for peace of mind. Detailed reports covering mechanical, electrical, and cosmetic condition.",
    icon: "ClipboardCheck",
    benefits: ["150+ Point Check", "Diagnostic Scanning", "Detailed Report", "Photographic Evidence", "Market Valuation", "Purchase Advice"],
    isFeatured: false,
  },
];

// Sample Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "The Complete Guide to Buying a Luxury SUV in Uganda",
    slug: "guide-luxury-suv-uganda",
    excerpt: "Everything you need to know about purchasing a premium SUV in the East African market. From choosing the right model to navigating import regulations.",
    content: "Full article content here...",
    category: "Buying Guide",
    featuredImage: "/images/blog-suv-guide.jpg",
    author: "Mighty Rides Team",
    publishedAt: "2024-01-15",
  },
  {
    id: "b2",
    title: "Maintaining Your German Luxury Vehicle: Expert Tips",
    slug: "maintaining-german-luxury-vehicle",
    excerpt: "Expert advice on keeping your Mercedes, BMW, or Audi in peak condition. Service intervals, common issues, and preventive maintenance strategies.",
    content: "Full article content here...",
    category: "Maintenance",
    featuredImage: "/images/blog-german-cars.jpg",
    author: "Mighty Rides Team",
    publishedAt: "2024-01-10",
  },
  {
    id: "b3",
    title: "Import vs Local Purchase: Making the Right Choice",
    slug: "import-vs-local-purchase",
    excerpt: "Weighing the pros and cons of importing a vehicle versus buying locally. Understanding taxes, timelines, and total cost of ownership.",
    content: "Full article content here...",
    category: "Imports",
    featuredImage: "/images/blog-import.jpg",
    author: "Mighty Rides Team",
    publishedAt: "2024-01-05",
  },
];

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: "m1",
    name: "Robert Mugisha",
    role: "Founder & Managing Director",
    bio: "With over 15 years in the automotive industry, Robert founded Mighty Rides with a vision to bring world-class automotive services to East Africa.",
    image: "/images/team-robert.jpg",
  },
  {
    id: "m2",
    name: "Sarah Nambi",
    role: "Sales Director",
    bio: "Sarah leads our sales team with expertise in luxury vehicles and a deep understanding of our discerning clientele's needs.",
    image: "/images/team-sarah.jpg",
  },
  {
    id: "m3",
    name: "James Okello",
    role: "Service Manager",
    bio: "Factory-trained and certified, James ensures every vehicle that leaves our service center meets the highest standards.",
    image: "/images/team-james.jpg",
  },
];

// Contact Information
export const contactInfo = {
  name: "Mighty Rides",
  tagline: "East Africa's Premium Automotive Dealership",
  address: "Mirembe Business Centre, Lugogo Bypass, Kampala, Uganda",
  phones: ["0785 642 717", "0754 642 717"],
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
  { id: "wedding", name: "Wedding", icon: "Heart", description: "Make your special day unforgettable" },
  { id: "airport", name: "Airport Pickup", icon: "Plane", description: "VIP arrival services" },
  { id: "corporate", name: "Corporate", icon: "Briefcase", description: "Professional executive transport" },
  { id: "vip", name: "VIP", icon: "Crown", description: "Discrete, secure transport" },
  { id: "events", name: "Events", icon: "Calendar", description: "Special occasion vehicles" },
  { id: "longterm", name: "Long-term", icon: "Clock", description: "Extended lease options" },
];

// Vehicle body types for filtering
export const bodyTypes = ["Sedan", "SUV", "Coupe", "Convertible", "Hatchback", "Wagon"];
export const fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric"];
export const transmissions = ["Automatic", "Manual"];

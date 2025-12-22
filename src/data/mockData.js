// Mock data for businesses
const businesses = [
  // Accounting
  {
    id: 1,
    name: "ABC Accounting Services",
    category: "Accounting",
    phone: "(416) 123-4567",
    address: "123 Main Street, Toronto, ON M5V 1A1",
    website: "https://abc-accounting.com",
    premium: true,
    image: "/src/assets/images/sample1.png"
  },
  {
    id: 2,
    name: "Prime Tax Solutions",
    category: "Accounting",
    phone: "(647) 987-6543",
    address: "456 Bay Street, Toronto, ON M5H 2T6",
    website: null,
    premium: false,
    image: "/src/assets/images/sample2.png"
  },
  {
    id: 3,
    name: "QuickBooks Pro Services",
    category: "Accounting",
    phone: "(416) 555-0123",
    address: "789 King Street West, Toronto, ON M5V 1N4",
    website: "https://quickbookspro.ca",
    premium: false,
    image: "/src/assets/images/sample3.png"
  },
  
  // Automotive
  {
    id: 4,
    name: "Speed Auto Repair",
    category: "Automotive",
    phone: "(905) 555-1234",
    address: "101 Auto Lane, Mississauga, ON L5B 1M2",
    website: "https://speedautorepair.com",
    premium: true,
    image: "/src/assets/images/sample4.png"
  },
  {
    id: 5,
    name: "Elite Car Wash",
    category: "Automotive",
    phone: "(416) 888-9999",
    address: "202 Wash Drive, Toronto, ON M4B 2C3",
    website: null,
    premium: false,
    image: "/src/assets/images/sample1.png"
  },
  {
    id: 6,
    name: "TireMax Plus",
    category: "Automotive",
    phone: "(647) 222-3333",
    address: "303 Tire Road, Scarborough, ON M1P 4R5",
    website: "https://tiremaxplus.ca",
    premium: false,
    image: "/src/assets/images/sample2.png"
  },
  
  // Beauty & Spa
  {
    id: 7,
    name: "Glow Beauty Salon",
    category: "Beauty & Spa",
    phone: "(416) 444-5555",
    address: "50 Beauty Ave, Toronto, ON M5T 1R8",
    website: "https://glowbeauty.ca",
    premium: true,
    image: "/src/assets/images/sample3.png"
  },
  {
    id: 8,
    name: "Zen Spa & Wellness",
    category: "Beauty & Spa",
    phone: "(647) 666-7777",
    address: "75 Wellness Blvd, North York, ON M2N 5S7",
    website: "https://zenspawellness.com",
    premium: false,
    image: "/src/assets/images/sample4.png"
  },
  
  // Catering
  {
    id: 9,
    name: "Delicious Catering Co.",
    category: "Catering",
    phone: "(416) 321-6789",
    address: "400 Food Street, Toronto, ON M5A 1N1",
    website: "https://deliciouscatering.ca",
    premium: true,
    image: "/src/assets/images/sample1.png"
  },
  {
    id: 10,
    name: "Party Perfect Events",
    category: "Catering",
    phone: "(905) 432-1098",
    address: "500 Event Plaza, Brampton, ON L6T 4M2",
    website: null,
    premium: false,
    image: "/src/assets/images/sample2.png"
  },
  
  // Dental
  {
    id: 11,
    name: "Bright Smile Dental",
    category: "Dental",
    phone: "(416) 789-0123",
    address: "600 Dental Way, Toronto, ON M4S 2C1",
    website: "https://brightsmiledental.ca",
    premium: false,
    image: "/src/assets/images/sample3.png"
  },
  {
    id: 12,
    name: "Family Dentistry Plus",
    category: "Dental",
    phone: "(647) 890-1234",
    address: "700 Health Street, Markham, ON L3R 5G2",
    website: "https://familydentistryplus.com",
    premium: true,
    image: "/src/assets/images/sample4.png"
  },
  
  // Education
  {
    id: 13,
    name: "Excel Tutoring Academy",
    category: "Education",
    phone: "(416) 111-2222",
    address: "800 Learning Lane, Toronto, ON M5G 1Z8",
    website: "https://exceltutoring.ca",
    premium: false,
    image: "/src/assets/images/sample1.png"
  },
  {
    id: 14,
    name: "Future Leaders Prep",
    category: "Education",
    phone: "(905) 333-4444",
    address: "900 Education Blvd, Richmond Hill, ON L4B 3P7",
    website: null,
    premium: false,
    image: "/src/assets/images/sample2.png"
  },
  
  // Fitness
  {
    id: 15,
    name: "PowerFit Gym",
    category: "Fitness",
    phone: "(416) 555-6666",
    address: "1000 Muscle Road, Toronto, ON M6H 2T4",
    website: "https://powerfitgym.ca",
    premium: true,
    image: "/src/assets/images/sample3.png"
  },
  {
    id: 16,
    name: "Yoga Harmony Studio",
    category: "Fitness",
    phone: "(647) 777-8888",
    address: "1100 Peace Ave, Etobicoke, ON M9C 1A9",
    website: "https://yogaharmony.com",
    premium: false,
    image: "/src/assets/images/sample4.png"
  },
  
  // Insurance
  {
    id: 17,
    name: "SafeGuard Insurance",
    category: "Insurance",
    phone: "(416) 999-0000",
    address: "1200 Protection Blvd, Toronto, ON M5J 2N8",
    website: "https://safeguardins.ca",
    premium: false,
    image: "/src/assets/images/sample1.png"
  },
  
  // Legal
  {
    id: 18,
    name: "Justice Law Firm",
    category: "Legal",
    phone: "(416) 246-8024",
    address: "1300 Court Street, Toronto, ON M5H 3Y2",
    website: "https://justicelawfirm.ca",
    premium: true,
    image: "/src/assets/images/sample2.png"
  },
  {
    id: 19,
    name: "Smith & Associates",
    category: "Legal",
    phone: "(647) 135-7911",
    address: "1400 Legal Lane, Mississauga, ON L5L 1C6",
    website: null,
    premium: false,
    image: "/src/assets/images/sample3.png"
  },
  
  // Real Estate
  {
    id: 20,
    name: "Dream Homes Realty",
    category: "Real Estate",
    phone: "(416) 369-1472",
    address: "1500 Property Ave, Toronto, ON M4W 3E2",
    website: "https://dreamhomesrealty.ca",
    premium: true,
    image: "/src/assets/images/sample4.png"
  },
  {
    id: 21,
    name: "Urban Living Estates",
    category: "Real Estate",
    phone: "(905) 258-3690",
    address: "1600 Urban Blvd, Oakville, ON L6H 0C3",
    website: "https://urbanliving.ca",
    premium: false,
    image: "/src/assets/images/sample1.png"
  },
  
  // Restaurants
  {
    id: 22,
    name: "The Golden Fork",
    category: "Restaurants",
    phone: "(416) 741-8520",
    address: "1700 Dining Street, Toronto, ON M5V 3L9",
    website: "https://thegoldenfork.com",
    premium: true,
    image: "/src/assets/images/sample2.png"
  },
  {
    id: 23,
    name: "Spice Paradise",
    category: "Restaurants",
    phone: "(647) 852-9630",
    address: "1800 Flavor Ave, North York, ON M3C 1T1",
    website: "https://spiceparadise.ca",
    premium: false,
    image: "/src/assets/images/sample3.png"
  },
  {
    id: 24,
    name: "Ocean Breeze Seafood",
    category: "Restaurants",
    phone: "(416) 963-0741",
    address: "1900 Seafood Lane, Toronto, ON M6K 3P2",
    website: null,
    premium: false,
    image: "/src/assets/images/sample4.png"
  }
];

// Get all unique categories sorted alphabetically
export const getCategories = () => {
  const categories = [...new Set(businesses.map(b => b.category))];
  return categories.sort();
};

// Get businesses grouped by category (alphabetically)
export const getBusinessesByCategory = () => {
  const categories = getCategories();
  const grouped = {};
  categories.forEach(category => {
    grouped[category] = businesses.filter(b => b.category === category);
  });
  return grouped;
};

// Get only premium businesses
export const getPremiumBusinesses = () => {
  return businesses.filter(b => b.premium);
};

// Get all businesses
export const getAllBusinesses = () => businesses;

// Get a single business by ID
export const getBusinessById = (id) => {
  return businesses.find(b => b.id === parseInt(id));
};

// Search businesses by query (name, category, phone, address)
export const searchBusinesses = (query, businessList = businesses) => {
  if (!query || query.trim() === '') return businessList;
  
  const searchTerm = query.toLowerCase().trim();
  return businessList.filter(b => 
    b.name.toLowerCase().includes(searchTerm) ||
    b.category.toLowerCase().includes(searchTerm) ||
    b.phone.includes(searchTerm) ||
    b.address.toLowerCase().includes(searchTerm)
  );
};

export default businesses;

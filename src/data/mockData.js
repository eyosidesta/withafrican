// Business Directory Data - WithAfrican
// Data extracted from With Africa Magazine 2026

const businesses = [
  // =============================================
  // ACCOUNTING / INCOME TAX
  // =============================================
  {
    id: 1,
    name: "Discount Income Tax Services",
    category: "Accounting / Income Tax",
    phone: "416-531-0073 / 416-841-1739",
    email: "discountincometax@yahoo.ca / infor@discountincometax.com",
    address: "959 Bloor St. West, Toronto, ON M6H 1L7",
    website: "https://www.discountincometax.com",
    premium: false,
    image: "/src/assets/images/accounting_income_tax/discount_income_tax.png",
    description: [
      "Tax preparation specialist with over 30 years of experience",
      "Open and accessible year-round for all your tax needs"
    ],
    whatWeOffer: [
      "Personal Tax Returns",
      "Corporate Tax Returns",
      "Business Tax Returns",
      "Instant Tax Refund",
      "Financial Reports",
      "Payroll Services",
      "Consultation",
      "and more..."
    ]
  },
  {
    id: 2,
    name: "Abdu Income Tax Services",
    category: "Accounting / Income Tax",
    phone: "647-717-1483 / 416-693-4888",
    email: "abdu@abdutax.com",
    address: "3200 Danforth Ave, Scarborough, ON M1L 1B7",
    website: null,
    premium: false,
    image: "/src/assets/images/accounting_income_tax/abdu_income_tax.JPG",
    whatWeOffer: [
      "Tax Preparation & Filing",
      "Payroll Processing",
      "Business Registration (GST/HST)",
      "Family Court Cases",
      "Power of Attorney",
      "Ethiopian Origin ID",
      "Passport Application",
      "Others"
    ]
  },

  // =============================================
  // AUTO MECHANIC / AUTO SALES / AUTO BODY SHOP
  // =============================================
  {
    id: 3,
    name: "AH Wai Auto",
    category: "Auto Mechanic / Auto Sales / Auto Body Shop",
    phone: "416-462-0404 / 416-778-0185",
    email: "akrem@ahwaiauto.com",
    address: "346 Eastern Ave, Toronto, ON M4M 3G5",
    website: "https://www.ahwaiauto.com",
    premium: false,
    image: "/src/assets/images/auto_mechanic/ah_wai_auto.png",
    description: [
      "Full service auto repair and sales center",
      "Experienced mechanics for all vehicle makes and models"
    ],
    whatWeOffer: [
      "Tune Up",
      "Tire / Balance / Alignment",
      "Brakes",
      "Shocks",
      "Electrical",
      "Transmission",
      "Air Conditioning",
      "Engine Repair"
    ]
  },
  {
    id: 4,
    name: "Auto Trin Body & Collision Repair",
    category: "Auto Mechanic / Auto Sales / Auto Body Shop",
    phone: "416-755-0241 / 437-755-9031",
    email: "autotrin23@gmail.com",
    address: "777 Warden Ave, Unit 16, Scarborough, ON M1L 4C2",
    website: "https://www.autotrin.net",
    premium: false,
    image: "/src/assets/images/auto_mechanic/autotrin_collision_repair.jpg",
    description: [
      "ልዩነታችን በስራ ጥራታችን"
    ]
  },
  {
    id: 5,
    name: "B.F. Auto Sales",
    category: "Auto Mechanic / Auto Sales / Auto Body Shop",
    phone: "416-304-1261 / 416-817-6855",
    email: null,
    address: "3500 Danforth Ave, Toronto",
    website: null,
    premium: false,
    image: "/src/assets/images/auto_mechanic/b_f_auto.png",
    description: [
      "Quality pre-owned vehicles",
      "Financing available"
    ],
    whatWeOffer: [
      "Buy, Sell & Trade Cars",
      "Financing Available",
      "Quality Pre-Owned Vehicles"
    ]
  },
  {
    id: 6,
    name: "BRTT Auto Sales",
    category: "Auto Mechanic / Auto Sales / Auto Body Shop",
    phone: "416-856-8437",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/auto_mechanic/BRTT_auto.png",
  },
  {
    id: 7,
    name: "Manna Auto Service",
    category: "Auto Mechanic / Auto Sales / Auto Body Shop",
    phone: "416-832-1816",
    email: "mannaautoservice@gmail.com",
    address: "3 Musgrave St. Victoria Park & Danforth",
    website: null,
    premium: false,
    image: "/src/assets/images/auto_mechanic/mana_auto.png",
    description: [
      "Specialists in VW, Audi, BMW",
      "General repair for all imports and domestic vehicles"
    ],
    whatWeOffer: [
      "Brakes",
      "Maintenance",
      "Repairs"
    ]
  },

  // =============================================
  // BAKERY
  // =============================================
  {
    id: 8,
    name: "Serano Bakery",
    category: "Bakery",
    phone: "416-462-2735",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/bakery/serano_bakery.png",
    description: [
      "Specializing in European pastries",
      "Fresh baked goods daily"
    ],
    whatWeOffer: [
      "European Pastries",
      "Fresh Bread",
      "Cakes & Desserts",
      "Coffee & Beverages"
    ]
  },

  // =============================================
  // BEAUTY SALON & SUPPLY
  // =============================================
  {
    id: 9,
    name: "Impress Hair Salon",
    category: "Beauty Salon & Supply",
    phone: "416-824-1334 / 416-913-0855",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/beauty_salon/impress_beauty.png",
    description: [
      "Professional hair styling services"
    ],
    whatWeOffer: [
      "Hair Styling",
      "Hair Coloring",
      "Hair Treatments"
    ]
  },
  {
    id: 10,
    name: "Lily Hair Salon & Spa",
    category: "Beauty Salon & Supply",
    phone: "647-804-2546 / 416-867-7703",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/beauty_salon/lily_beauty.png",
    description: [
      "Full service hair salon and spa"
    ],
    whatWeOffer: [
      "Hair Styling",
      "Spa Services",
      "Beauty Treatments"
    ]
  },
  {
    id: 11,
    name: "Sunrise Beauty Supply",
    category: "Beauty Salon & Supply",
    phone: "416-465-8154",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/beauty_salon/sunrise_beauty.png",
  },

  // =============================================
  // CATERING
  // =============================================

  {
    id: 12,
    name: "Desta Market & Catering",
    category: "Catering",
    phone: "416-850-4854 / 647-708-1653",
    email: null,
    address: "843 Danforth Ave, Toronto, ON M4J 1L2",
    website: null,
    premium: true,
    image: "/src/assets/images/catering/desta_market.png",
    description: [
      "Fresh halal meats and Ethiopian groceries",
      "Quality meats at affordable prices"
    ],
    whatWeOffer: [
      "Fresh Halal Meat",
      "Ethiopian Groceries",
      "Catering Services"
    ]
  },

  // =============================================
  // CAR DETAILING
  // =============================================
  {
    id: 13,
    name: "Miko Car Detailing",
    category: "Car Detailing",
    phone: "647-886-5700",
    email: "msy.abera@gmail.com",
    address: "7 Dibble Street, Toronto, ON M4M 2K2 (Eastern Avenue East of Broadview)",
    website: null,
    premium: false,
    image: "/src/assets/images/car_detailing/miko_car_detailing.png",
    description: [
      "Professional car detailing services",
      "Mesay Bekele - Detailer"
    ],
    whatWeOffer: [
      "Interior Detailing",
      "Exterior Detailing",
      "Full Car Detailing"
    ]
  },
  {
    id: 14,
    name: "Parkview Hills Car Spa",
    category: "Car Detailing",
    phone: "416-285-9590",
    email: null,
    address: "795 O'Connor Dr, East York, ON M4B 2S6",
    website: "https://parkviewhillscarspa.com",
    premium: false,
    image: "/src/assets/images/car_detailing/parkview_hills_car_spa.JPG",
    description: [
      "Affordable monthly memberships available",
      "Full service car spa"
    ],
    whatWeOffer: [
      "Hand Car Wash",
      "Interior Detailing",
      "Mobile Detailing",
      "UHAUL & Car Rentals"
    ]
  },

  // =============================================
  // COFFEE SUPPLY
  // =============================================
  {
    id: 15,
    name: "Ethiopian Coffee & Spicy",
    category: "Coffee Supply",
    phone: "647-551-0856",
    email: "solomonadem1611@gmail.com",
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/coffee_supply/ethiopian_coffee_spicy.png",
    description: [
      "Importer & Exporter of Ethiopian coffee",
      "Sidamo Coffee - Medium Roast"
    ],
    whatWeOffer: [
      "Ethiopian Coffee",
      "Sidamo Coffee (Medium Roast)",
      "Clothing and Arts",
      "Spices"
    ]
  },
  {
    id: 16,
    name: "Nunu Buna",
    category: "Coffee Supply",
    phone: "289-680-9955",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/coffee_supply/nunu_buna.png",
    description: [
      "Beautiful handcrafted Ethiopian coffee sets",
      "Bring authentic Eritrean and Ethiopian coffee ceremony culture to your home",
      "Each set includes high-quality traditional items crafted by skilled artisans, designed for both functionality and beauty"
    ],
    whatWeOffer: [
      "Ethiopian Coffee Sets",
      "Traditional Coffee Ceremony Items",
      "Handcrafted Artisan Pieces"
    ]
  },
  {
    id: 17,
    name: "Megalo Coffee",
    category: "Coffee Supply",
    phone: "416-427-7385",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/coffee_supply/megalo_coffee.png",
  },
  {
    id: 18,
    name: "T&M Wholesale Inc",
    category: "Coffee Supply",
    phone: "204-894-0552 | 204-691-0777",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/coffee_supply/t_m_coffee.png",
  },
  {
    id: 19,
    name: "Sheba Enterprises Inc. (Saba Sabina)",
    category: "Coffee Supply",
    phone: "416-431-4344",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/coffee_supply/sheba_coffee.png",
  },
  // =============================================
  // DENTIST
  // =============================================
  {
    id: 20,
    name: "Christie Park Dental",
    category: "Dentist",
    phone: "416-531-5796",
    email: null,
    address: "745 Bloor St W, Toronto, ON M6G 1L6",
    website: null,
    premium: false,
    image: "/src/assets/images/dentist/chrstie_dental.png",
    description: [
      "Dr. Andre Hughes - Associates",
      "Professional dental care for the whole family",
      "የቤተሰብ የጥርስ ሀኪም",
      "ለእርስዎ የተመቸ ጥሩ የጥርስ ሀኪም"
    ],
    whatWeOffer: [
      "Orthodontics",
      "Cosmetics",
      "Implants",
      "General Dentistry"
    ]
  },

  {
    id: 21,
    name: "Dr. Zabher Dandelhai",
    category: "Dentis",
    phone: "416-690-2438",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/dentist/zabher_dental.png",
  },

  // =============================================
  // DUCT CLEANING
  // =============================================
  {
    id: 22,
    name: "Air Life Duct Cleaning & HVAC Services",
    category: "Duct Cleaning",
    phone: "416-456-4628 / 647-530-1740",
    email: "airlifeduct@gmail.com",
    address: null,
    website: "https://www.airlifeduct.com",
    premium: false,
    image: "/src/assets/images/duct_cleaning/air_duct_cleaning.png",
    description: [
      "We are working in your area!",
      "Your neighbour has just enjoyed our services",
      "The most powerful truck mounted equipment"
    ],
    whatWeOffer: [
      "Duct Cleaning",
      "HVAC Services",
      "Air Quality Improvement"
    ]
  },

  // =============================================
  // ELECTRICIANS
  // =============================================
  {
    id: 23,
    name: "Black Stone Electrical Solutions",
    category: "Electricians",
    phone: "416-402-7253",
    email: "alielectrico@gmail.com",
    address: "513-1500 Keele Street Toronto, ON",
    website: null,
    premium: false,
    image: "/src/assets/images/electricians/BLACK_STONE.JPG",
    description: [
      "Ali Gahar - Master Electrician",
      "Contractor Licensed & Insured WSIB",
      "Toronto Hydro Authorized Contractor"
    ],
    whatWeOffer: [
      "New Construction Site",
      "Noble Tub Removal",
      "Medical Facility",
      "Renovation - Institute",
      "EV Car Charger",
      "Industrial Battery Chargers"
    ]
  },

  // =============================================
  // FURNITURE STORE
  // =============================================
  {
    id: 24,
    name: "Selam Furniture & Mattress",
    category: "Furniture Store",
    phone: "416-690-6118 / 416-834-7094",
    email: null,
    address: "2448 Danforth Ave, Toronto",
    website: null,
    premium: true,
    image: "/src/assets/images/furniture_store/selam_furniture.JPG",
    description: [
      "Quality furniture and mattresses",
      "Great selection at affordable prices"
    ],
    whatWeOffer: [
      "Furniture",
      "Mattresses",
      "Bedroom Sets",
      "Living Room Furniture"
    ]
  },
  // =============================================
  // Grill
  // =============================================
  {
    id: 25,
    name: "T&M Wholesale Inc",
    category: "Grill",
    phone: "204-894-0552 | 204-691-0777",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/coffee_supply/t_m_coffee.png",
  },
  // =============================================
  // HOME SUPPLY
  // =============================================
  {
    id: 26,
    name: "Mulu Home Accessary Shop",
    category: "Home Supply",
    phone: "416-999-9605",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/home_supply/mulu_home_supply.png",
  },

  // =============================================
  // INJERA
  // =============================================
  {
    id: 27,
    name: "Yehabesha Injera",
    category: "Injera",
    phone: "905-920-3370",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/injera/placeholder.png",
    description: [
      "Authentic Ethiopian Bread",
      "100% Teff - Gluten Free"
    ],
    whatWeOffer: [
      "100% Teff Injera",
      "Gluten Free Options",
      "Sans Gluten"
    ]
  },
  {
    id: 28,
    name: "Addisu Kulubi Injera",
    category: "Injera",
    phone: "647-887-6033",
    email: null,
    address: "1936 Danforth Ave, Toronto, ON M4C 1J4",
    website: null,
    premium: false,
    image: "/src/assets/images/injera/placeholder.png",
    description: [
      "Teff & Barley Only",
      "Healthy choice for your family"
    ],
    whatWeOffer: [
      "Teff Injera",
      "Barley Injera",
      "Healthy Options"
    ]
  },
  {
    id: 29,
    name: "Mesobs Injera (Teff & Barley)",
    category: "Injera",
    phone: "647-550-8993 / 416-516-5455",
    email: null,
    address: "685 Lansdowne Ave. Unit #1",
    website: null,
    premium: false,
    image: "/src/assets/images/injera/placeholder.png",
    description: [
      "Fresh teff and barley injera"
    ],
    whatWeOffer: [
      "Teff Injera",
      "Barley Injera"
    ]
  },
  {
    id: 30,
    name: "Tenama Injera (Teff & Barley)",
    category: "Injera",
    phone: "647-347-1764 / 416-835-8082",
    email: null,
    address: "1764 Keele St, Toronto, ON M6M 3X1",
    website: null,
    premium: false,
    image: "/src/assets/images/injera/placeholder.png",
    description: [
      "Healthy Choice",
      "Keep it in the Gridge, warm for 1 minute before use",
      "ለማንኛውም ዝግጅት በተፈለገው ቦታ እናቀርባለን።"
    ],
    whatWeOffer: [
      "Teff Injera",
      "Barley Injera"
    ]
  },
  {
    id: 31,
    name: "Mirt Injera",
    category: "Injera",
    phone: "647-417-3827",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/injera/placeholder.png",
  },
  {
    id: 32,
    name: "Manna Injera",
    category: "Injera",
    phone: "647-709-2932",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/injera/placeholder.png",
  },

  // ============.=================================
  // JEWELLERY
  // =============================================
  {
    id: 33,
    name: "Bhatti Jewellers",
    category: "Jewellery",
    phone: "416-405-8263",
    email: null,
    address: "1493 Gerrard St. E, Toronto, ON M4L 2A4",
    website: null,
    premium: false,
    image: "/src/assets/images/jewellery/placeholder.png",
    description: [
      "Fine jewellery selection"
    ],
    whatWeOffer: [
      "Custom Jewellery",
      "Fine Jewellery"
    ]
  },

  // =============================================
  // LAW OFFICE / LEGAL SERVICE
  // =============================================
  {
    id: 34,
    name: "Giratta Law Professional Corporation",
    category: "Law Office / Legal Service",
    phone: "416-644-8850 / 416-695-3252 / 416-644-8762",
    email: "abel@girattalaw.com",
    address: "40 Wynford Dr, Suite 208, Toronto, ON M3C 1J5",
    website: "https://www.girattalaw.com",
    premium: true,
    image: "/src/assets/images/law_office/placeholder.png",
    description: [
      "Your trusted real estate, wills and estates and immigration lawyers",
      "የህግ አገልግሎት የመኖሪያ ቤት እና የንግድ ቤት ስም እናስተላልፋለን",
      "ውክልና ኑዛዜና ውርስ የቤተሰብ ህግ እና ጉዳዮች እናስፈጽማለን",
      "አማርኛ, ትግርኛ, ኦሮምኛ, English, French, Persion እንናገራለን።"
    ],
    whatWeOffer: [
      "Integrity",
      "Experience",
      "Results",
    ]
  },
  {
    id: 35,
    name: "TAS Law Office",
    category: "Law Office / Legal Service",
    phone: "647-557-3570 / 437-263-5443 / 437-449-4480",
    email: "mishelle@trockeandassociates.ca",
    address: "2300 Danforth Ave, Toronto, ON M4C 1K8",
    website: "https://www.taslaw.ca",
    premium: false,
    image: "/src/assets/images/law_office/placeholder.png",
    description: [
      "The Law Office of  Teklimichael AB Sahlemariam - Lawyer",
      "Family & Criminal Defence Lawyer",
      "For Tigrinya speakers, you can call us at: 780-238-4480"
    ],
    whatWeOffer: [
      "Family Law",
      "Criminal Defence",
      "Immigration",
      "Notary"
    ]
  },

  // =============================================
  // MEAT MARKET
  // =============================================
  {
    id: 36,
    name: "Shewa Meat Market",
    category: "Meat Market",
    phone: "416-690-0079 / 647-561-9180",
    email: null,
    address: "2592 Danforth Ave, Toronto, ON",
    website: null,
    premium: false,
    image: "/src/assets/images/catering/placeholder.png",
    description: [
      "Traditional Ethiopian catering services",
      "Perfect for parties, and special events"
    ],
    whatWeOffer: [
      "Ethiopian Traditional Food",
      "Party Catering",
      "Event Catering"
    ]
  },
  {
    id: 37,
    name: "Kera Fresh Meat",
    category: "Meat Market",
    phone: "416-699-5372 / 416-887-6734",
    email: null,
    address: "2749 Danforth Ave, Toronto, ON M4C 1L8",
    website: null,
    premium: false,
    image: "/src/assets/images/meat_market/placeholder.png",
    description: [
      "ለክትፎ ለቁርጥ ለወጥ ስጋ እናቀርባለን",
      "You can get us at our location two: 621 Vahghan Road, Toronto, ON M6C 2R4",
      "You can call us at: 647-417-3827 for location two"
    ]
  },
  {
    id: 38,
    name: "Meat Academy",
    category: "Meat Market",
    phone: "416-817-0928",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/meat_market/placeholder.png",
  },
  {
    id: 39,
    name: "Mister Greek Meat Market",
    category: "Meat Market",
    phone: "416-469-1577 / 416-469-0733",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/meat_market/placeholder.png",
  },

  {
    id: 40,
    name: "Chercher Butcher Store",
    category: "Meat Market",
    phone: "416-519-9660",
    email: "konyzinu@gmail.com",
    address: "2808 Danforth Ave, Toronto, ON M4C 1M1",
    website: null,
    premium: false,
    image: "/src/assets/images/meat_market/placeholder.png",
    description: [
      "Coffee, Spices & Groceries",
      "Fresh meats and Ethiopian products"
    ],
    whatWeOffer: [
      "Butcher Services",
      "Coffee",
      "Spices",
      "Groceries"
    ]
  },
  {
    id: 41,
    name: "Habesha Fresh Meat & Grocery",
    category: "Meat Market",
    phone: "416-288-8006 / 437-221-0334",
    email: null,
    address: "2296 Eglinton Avenue East",
    website: null,
    premium: false,
    image: "/src/assets/images/meat_market/placeholder.png",
    description: [
      "የበግ ሥጋ ሙሉ ግማሽ እንዲሁም በሚፈልጉት መጠን በትዕዛዝ እናቀርባለን",
      "Fresh BBQ meat available",
      "Quality Ethiopian groceries"
    ],
    whatWeOffer: [
      "Fresh Meat",
      "BBQ Meat",
      "Groceries"
    ]
  },

  // =============================================
  // MORTGAGE AGENT
  // =============================================
  {
    id: 42,
    name: "Mortgage Wellness (Abiye Tenaw)",
    category: "Mortgage Agent",
    phone: "647-746-0726",
    email: "atenam@mortgagewellness.ca",
    address: null,
    website: "https://mortgageweb.ca/abiye",
    premium: false,
    image: "/src/assets/images/mortgage_agent/placeholder.png",
    description: [
      "Your mortgage wellness partner",
      "ቤት ለመግዛት የሞርጌጅ (የባንክ) ብድር ከፈለጉ በዚህ ስራ ልምድ ያለውን አብይ ጤናውን ደውለው ያነጋግሩ።"
    ],
    whatWeOffer: [
      "Quick Pre-Approvals",
      "Free Consultation",
      "Renewal",
      "Refinance",
      "Residential & Commercial",
      "First Time Home Buyers",
      "Debt Consolidation"
    ]
  },

  // =============================================
  // MONEY TRANSFER
  // =============================================
  {
    id: 43,
    name: "Hewad Exchange",
    category: "Money Transfer",
    phone: "416-666-4406",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/mortgage_agent/placeholder.png",
  },

  // =============================================
  // PLUMBING SERVICES
  // =============================================
  {
    id: 44,
    name: "Binyam Plumbing Services",
    category: "Plumbing Services",
    phone: "437-231-6255",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/mortgage_agent/placeholder.png",
  },
  {
    id: 45,
    name: "Samuel Certified Plumber",
    category: "Plumbing Services",
    phone: "647-568-0192",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/mortgage_agent/placeholder.png",
  },

  // =============================================
  // REAL ESTATE
  // =============================================
  {
    id: 46,
    name: "David Mamo Real Estate Broker",
    category: "Real Estate",
    phone: "647-779-7858",
    email: "teamdavidm@gmail.com",
    address: null,
    website: "https://teamdavidmamo.com",
    premium: true,
    image: "/src/assets/images/real_estate/david_real_estate.png",
    description: [
      "If you are thinking of buying, selling and investing in real estate please give me a call",
      "እቤት መግዛት ወይም መሸጥ ካሰቡ በዚህ ስራ ልምድ ያለው ዳዊት ማሞን ደውለው ያነጋግሩ።"
    ],
    whatWeOffer: [
      "Buying Properties",
      "Selling Properties",
      "Real Estate Investment"
    ]
  },
  {
    id: 47,
    name: "Yohannes Lamorie (REMAX ACE)",
    category: "Real Estate",
    phone: "416-270-1111 / 416-854-4409",
    email: "yohanneslamorie@hotmail.com",
    address: "3-1286 Kennedy R, Scarborough, ON M1P 2L5",
    website: null,
    premium: false,
    image: "/src/assets/images/real_estate/placeholder.png",
    description: [
      "Sales Representative at RE/MAX ACE",
      "Experienced real estate professional"
    ],
    whatWeOffer: [
      "Buying Properties",
      "Selling Properties",
      "Real Estate Consultation",
      "እቤት መግዛት ወይም መሸጥ ካሰቡ ይደውሉልኝ"
    ]
  },
  {
    id: 48,
    name: "Royal LePage - Hany Mehari Sales Representative",
    category: "Real Estate",
    phone: "416-443-0300 / 647-801-4269",
    email: "hanymehari@royallepage.ca",
    address: "8 Sampson Mews, Suite 201, Toronto, ON M3C 0H5",
    website: null,
    premium: false,
    image: "/src/assets/images/real_estate/placeholder.png",
    description: [
      "ንፅፋፍ አገልግሎትገዛ ንመንበሪ ይኹን ንትካል ክትገዝኡ / ንክሸጡ ደውሉለይ",
      "በጠራ አሰራር ቤት ለመሸጥና ለመግዛት ሲያስፈልግዎ ደውለው ያነጋግሩን።"
    ],
    whatWeOffer: [
      "Buying Properties",
      "Selling Properties",
    ]
  },
  {
    id: 49,
    name: "Exp Realty Brokerage (Michael Kirubel Firew)",
    category: "Real Estate",
    phone: "647-701-1378",
    email: "michael@jj.team",
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/real_estate/placeholder.png",
    description: [
      "#4 out of 70,000 Trreb Agents",
      "Buying, Selling or Investing in Real Estate",
      "ቤት መግዛት፣ መሸጥ ወይም ኢንቨስት ማድረግ ይፈልጋሉ?"
    ],
  },
  {
    id: 50,
    name: "Mesfin Bekele (Century 21)",
    category: "Real Estate",
    phone: "416-877-7421",
    email: "mbekele@rocketmail.com",
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/real_estate/placeholder.png",
    description: [
      "Sales Representative at Century 21",
      "Thinking of Buying, Selling, Investment in Real Estate"
    ],
    whatWeOffer: [
      "Buying Properties",
      "Selling Properties",
      "Investment Consultation"
    ]
  },
  {
    id: 51,
    name: "Daniel Tsegaye (Homelife)",
    category: "Real Estate",
    phone: "905-741-3363 / 905-574-6400",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/real_estate/placeholder.png",
  },

  // =============================================
  // RENOVATION
  // =============================================
  {
    id: 52,
    name: "AMG Home Renovation",
    category: "Renovation",
    phone: "437-998-9366",
    email: null,
    address: null,
    website: null,
    premium: true,
    image: "/src/assets/images/restaurant_cafe/placeholder.png",
  },
  {
    id: 53,
    name: "Semere Construction",
    category: "Renovation",
    phone: "647-838-8239",
    email: null,
    address: null,
    website: null,
    premium: true,
    image: "/src/assets/images/restaurant_cafe/placeholder.png",
  },

  // =============================================
  // RESTAURANT / CAFÉ
  // =============================================
  {
    id: 54,
    name: "Kera Restaurant",
    category: "Restaurant / Café",
    phone: "416-693-9292",
    email: null,
    address: "2741 Danforth Ave, Toronto, ON M4C 1L8",
    website: null,
    premium: true,
    image: "/src/assets/images/restaurant_cafe/placeholder.png",
    description: [
      "Traditional Ethiopian cuisine",
      "ቄራ ሬስቶራንት የባህል ምግቦችን ከኛ ጋር ያጣጥሙ"
    ],
    whatWeOffer: [
      "Ethiopian Traditional Food",
      "Dine-in Service",
      "Takeout",
      "Catering"
    ]
  },
  {
    id: 55,
    name: "The Spicy Ethiopian",
    category: "Restaurant / Café",
    phone: "647-830-5994",
    email: "Spicyethiopian@gmail.com",
    address: "175 Queen St E Toronto, ON",
    website: "https://Spicyethiopian.com",
    premium: false,
    image: "/src/assets/images/restaurant_cafe/placeholder.png",
    description: [
      "Authentic Ethiopian cuisine with a spicy twist",
      "Fresh ingredients and traditional recipes"
    ],
    whatWeOffer: [
      "Ethiopian Cuisine",
      "Vegetarian Options",
      "Dine-in & Takeout",
      "Catering Services"
    ]
  },
  {
    id: 56,
    name: "Lalibela Cuisine",
    category: "Restaurant / Café",
    phone: "416-645-0486",
    email: "slalibela1@gmail.com",
    address: "1214 Dufferin Avenue, Toronto, ON M4J 1M6",
    website: "https://lalibelacuisine.com",
    premium: false,
    image: "/src/assets/images/restaurant_cafe/placeholder.png",
    description: [
      "Ethiopian Restaurant",
      "Traditional dining experience"
    ],
    whatWeOffer: [
      "Ethiopian Food",
      "Traditional Dishes",
      "Catering"
    ]
  },
  {
    id: 57,
    name: "Wazema Restaurant",
    category: "Restaurant / Café",
    phone: "416-465-5713",
    email: "ethiopianrestaurant@wazema.ca",
    address: "1360 Danforth Ave",
    website: "https://www.wazema.ca",
    premium: false,
    image: "/src/assets/images/restaurant_cafe/placeholder.png",
    description: [
      "Ethiopian Restaurant",
      "Authentic Ethiopian dining"
    ],
    whatWeOffer: [
      "Ethiopian Cuisine",
      "Traditional Dishes",
      "Dine-in & Takeout"
    ]
  },
  {
    id: 58,
    name: "Mesobs Restaurant",
    category: "Restaurant / Café",
    phone: "647-550-8993",
    email: null,
    address: "685 Lansdowne Ave, Toronto, ON MBH 3Y9",
    website: null,
    premium: false,
    image: "/src/assets/images/restaurant_cafe/placeholder.png",
    description: [
      "መዝናናት ሲፈልጉ መጥተው ከረምቡላ መጫውት የችላሉ",
      "Traditional Ethiopian dining",
      "Authentic flavors and atmosphere"
    ],
    whatWeOffer: [
      "Ethiopian Food",
      "Traditional Dishes",
      "Catering"
    ]
  },
  {
    id: 59,
    name: "Rendezvous Restaurant",
    category: "Restaurant / Café",
    phone: "416-469-2513",
    email: null,
    address: "1408 Danforth Ave, Toronto, ON M4J 1N2",
    website: null,
    premium: false,
    image: "/src/assets/images/restaurant_cafe/placeholder.png",
    description: [
      "Ethiopian dining experience",
      "Good food and good friends since 1984"
    ],
    whatWeOffer: [
      "Ethiopian Cuisine",
      "Friendly Atmosphere",
      "Authentic Dining"
    ]
  },
  {
    id: 60,
    name: "Meda Bar",
    category: "Restaurant / Café",
    phone: "416-465-6332",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/restaurant_cafe/placeholder.png",
  },
  {
    id: 61,
    name: "Jolly Bar & Restaurant",
    category: "Restaurant / Café",
    phone: "416-350-5288",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/restaurant_cafe/placeholder.png",
  },
  {
    id: 62,
    name: "LaVegan Ethiopian & Eritrean Vegan",
    category: "Restaurant / Café",
    phone: "416-546-8723",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/restaurant_cafe/placeholder.png",
  },
  {
    id: 63,
    name: "Ethiopian House Restaurant",
    category: "Restaurant / Café",
    phone: "416-923-5438",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/restaurant_cafe/placeholder.png",
  },

  // =============================================
  // SPICES
  // =============================================
  {
    id: 64,
    name: "Kezira Spices Distributor Inc.",
    category: "Spices",
    phone: "647-515-4497",
    email: null,
    address: "2741 Danforth Ave, Toronto ON M4C 1L8 / 521 Vaughan Road, Toronto ON M6C 2R4",
    website: null,
    premium: false,
    image: "/src/assets/images/spices/placeholder.png",
    description: [
      "Ethiopian Spices Distributor",
      "You can find us in all Habesha stores",
      "የተለያዩ የባልትና ውጤቶች",
      "ዝተፈላለዮ ናይ ባልትና ውጺኢት"
    ],
  },
  {
    id: 65,
    name: "East Star Import, Export & Wholesale (Almi Products)",
    category: "Spices",
    phone: "416-825-1083",
    email: "contact@eaststar.ca",
    address: null,
    website: "https://www.eaststar.ca",
    premium: false,
    image: "/src/assets/images/spices/placeholder.png",
    description: [
      "Import, Export & Wholesale",
      "Ethiopian spices and products"
    ],
    whatWeOffer: [
      "Wholesale Spices",
      "Ethiopian Products",
      "Import & Export Services"
    ]
  },


  // =============================================
  // TEFF GRAINS
  // =============================================
  {
    id: 66,
    name: "Core Trading PLC Exporter",
    category: "Teff Grains",
    phone: "+251-9032-43513 / 1-514-577-5419",
    email: null,
    address: "Addis Ababa Ethiopia to Canada & US",
    website: null,
    premium: false,
    image: "/src/assets/images/teff_grains/placeholder.png",
    description: [
      "Teff Flour, Teff Grain, Green Coffee & Spices",
      "Exporter from Addis Ababa Ethiopia to Canada & US",
      "Addis Ababa Phones: +251-90-324-3513 / +251-91-544-1958",
      "Canada WhatsApp Number: +1-514-577-5419"
    ],
    whatWeOffer: [
      "Teff Flour",
      "Teff Grain",
      "Green Coffee",
      "Spices"
    ]
  },

  // =============================================
  // TAVEL AGENCY / AIR LINES
  // =============================================
  {
    id: 68,
    name: "Ethiopian Airlines",
    category: "Tavel Agency / Air Lines",
    phone: "416-962-0005",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/tire_distributor/placeholder.png",
  },

  // =============================================
  // TIRE DISTRIBUTOR
  // =============================================
  {
    id: 69,
    name: "Red Sea Tire Corporation",
    category: "Tire Distributor",
    phone: "647-904-4099 / 416-288-6005",
    email: "admin@redseatire.com",
    address: "140 Manville Rd, Unit 4-5",
    website: "https://www.redseatire.com",
    premium: false,
    image: "/src/assets/images/tire_distributor/placeholder.png",
    description: [
      "Professional tire distribution services"
    ],
    whatWeOffer: [
      "Tire Distribution",
      "Wholesale Tires",
      "Tire Services"
    ]
  },

  // =============================================
  // VARIETY STORE / GROCERY STORE
  // =============================================
  {
    id: 70,
    name: "T&K Convenience Store",
    category: "Variety Store / Grocery Store",
    phone: "416-241-6054",
    email: null,
    address: "1024 Bloor St W, Toronto, ON M6H 1M2",
    website: null,
    premium: false,
    image: "/src/assets/images/variety_store/placeholder.png",
    description: [
      "Ethiopian groceries and convenience items"
    ],
    whatWeOffer: [
      "Ethiopian Groceries",
      "Convenience Items",
      "Household Products"
    ]
  },
  {
    id: 71,
    name: "Merkato Grocery and Meat Market",
    category: "Variety Store / Grocery Store",
    phone: "647-860-1083",
    email: "getachew.melat21@gmail.com",
    address: "28 Dundas St. E Mississauga",
    website: null,
    premium: false,
    image: "/src/assets/images/meat_market/placeholder.png",
    description: [
      "የሀበሻ ቅመማ ቅመም እና ስጋ ቤት በ ሚሲሳጋ",
    ]
  },
  {
    id: 72,
    name: "Massawa Convenience Store",
    category: "Variety Store / Grocery Store",
    phone: "647-346-7788",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/meat_market/placeholder.png",
  },
  {
    id: 73,
    name: "Selam Variety",
    category: "Variety Store / Grocery Store",
    phone: "416-964-0451",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/meat_market/placeholder.png",
  },
  {
    id: 74,
    name: "Sheger Variety",
    category: "Variety Store / Grocery Store",
    phone: "647-712-2880 / 647-725-6252",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/meat_market/placeholder.png",
  },
  {
    id: 75,
    name: "Selam Convenience Store",
    category: "Variety Store / Grocery Store",
    phone: "416-800-8039",
    email: null,
    address: "2871 Keele St North York Toronto, M3M 2G7",
    website: null,
    premium: false,
    image: "/src/assets/images/variety_store/placeholder.png",
    description: [
      "Ethiopian groceries and convenience items"
    ],
    whatWeOffer: [
      "Ethiopian Groceries",
      "Convenience Items",
      "Household Products"
    ]
  },

  // =============================================
  // VIDEOGRAPHER
  // =============================================
  {
    id: 76,
    name: "With Africa Photography",
    category: "Videographer",
    phone: "647-706-0102",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/videographer/placeholder.png",
    description: [
      "Professional photography and videography services"
    ],
    whatWeOffer: [
      "Event Photography",
      "Videography",
      "Professional Editing"
    ]
  },
  {
    id: 77,
    name: "PhotoBerhan",
    category: "Videographer",
    phone: "647-895-6630",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/videographer/placeholder.png",

  },

  // =============================================
  // WINDOW / BLINDS
  // =============================================
  {
    id: 78,
    name: "Preethy Blinds & Shutters",
    category: "Window / Blinds",
    phone: "647-919-8644",
    email: null,
    address: null,
    website: null,
    premium: false,
    image: "/src/assets/images/window_blinds/placeholder.png",
    description: [
      "Free Estimates - To Save Your Money, Contact Us!",
      "Wholesale, Retail & Service"
    ],
    whatWeOffer: [
      "Zebra Blinds - Roller Shades",
      "Vertical Blinds - 2\" Blinds",
      "Vinyl Shutters - Wood Shutters",
      "Roman Shades - Silhouette Blinds",
      "Panel Tracks - Door Glass Insert"
    ]
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
    (b.phone && b.phone.includes(searchTerm)) ||
    (b.address && b.address.toLowerCase().includes(searchTerm))
  );
};

export default businesses;

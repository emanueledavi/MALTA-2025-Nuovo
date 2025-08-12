// Mock data for Malta trip app

export const maltaNews = [
  {
    id: 1,
    title: "Malta Tourism Board Announces New Cultural Heritage Trail",
    summary: "Discover Malta's rich history through a newly launched heritage trail connecting major historical sites across the islands.",
    date: "2025-01-15",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Best Time to Visit Malta: Spring Season Guide 2025",
    summary: "Spring brings perfect weather and blooming landscapes to Malta, making it ideal for outdoor activities and sightseeing.",
    date: "2025-01-12",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506862ae3?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Malta's Traditional Festivals Return This Year",
    summary: "Experience authentic Maltese culture through traditional village festivals featuring local music, food, and celebrations.",
    date: "2025-01-10",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&h=250&fit=crop"
  }
];

export const maltaPhotos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=600&fit=crop",
    caption: "Blue Lagoon, Comino",
    location: "Comino Island"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1566073771259-6a8506862ae3?w=800&h=600&fit=crop",
    caption: "Valletta Waterfront",
    location: "Valletta"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&h=600&fit=crop",
    caption: "Mdina Silent City",
    location: "Mdina"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    caption: "Golden Bay Beach",
    location: "Golden Bay"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1580837119756-563d608dd119?w=800&h=600&fit=crop",
    caption: "Gozo Countryside",
    location: "Gozo Island"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop",
    caption: "St. John's Co-Cathedral",
    location: "Valletta"
  }
];

export const sampleItinerary = [
  {
    day: 1,
    title: "Arrival & Valletta Exploration",
    description: "Land in Malta and explore the historic capital city of Valletta",
    activities: [
      "Arrive at Malta International Airport",
      "Check into accommodation",
      "Explore Upper Barrakka Gardens",
      "Visit St. John's Co-Cathedral",
      "Walk through Republic Street"
    ],
    photos: [
      "https://images.unsplash.com/photo-1566073771259-6a8506862ae3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=400&fit=crop"
    ]
  },
  {
    day: 2,
    title: "Mdina & Rabat Discovery",
    description: "Explore the ancient silent city and surrounding historical sites",
    activities: [
      "Morning trip to Mdina",
      "Walk through the Silent City",
      "Visit St. Paul's Cathedral",
      "Explore Rabat catacombs",
      "Traditional lunch at local restaurant"
    ],
    photos: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop"
    ]
  },
  {
    day: 3,
    title: "Blue Lagoon & Comino Adventure",
    description: "Day trip to the stunning Blue Lagoon for swimming and relaxation",
    activities: [
      "Ferry to Comino Island",
      "Swimming at Blue Lagoon",
      "Snorkeling and water activities",
      "Explore Comino's coastal walks",
      "Return to Malta mainland"
    ],
    photos: [
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1580837119756-563d608dd119?w=600&h=400&fit=crop"
    ]
  },
  {
    day: 4,
    title: "Gozo Island Exploration",
    description: "Discover Malta's sister island with its unique charm and attractions",
    activities: [
      "Ferry to Gozo Island",
      "Visit Victoria Citadel",
      "Explore Dwejra Bay",
      "Traditional Gozo lunch",
      "Visit local craft shops"
    ],
    photos: [
      "https://images.unsplash.com/photo-1580837119756-563d608dd119?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop"
    ]
  }
];

export const transportationTypes = [
  {
    id: 1,
    type: "Bus",
    icon: "Bus",
    description: "Malta Public Transport operates an extensive bus network covering the entire island.",
    details: "Buses run frequently and connect all major towns and tourist attractions. Day passes available."
  },
  {
    id: 2,
    type: "Taxi",
    icon: "Car",
    description: "White taxis are available island-wide with fixed rates for popular destinations.",
    details: "Licensed white taxis offer reliable service. Apps like Bolt and eCabs also operate in Malta."
  },
  {
    id: 3,
    type: "Car Rental",
    icon: "MapPin",
    description: "Rent a car for maximum flexibility exploring Malta and Gozo.",
    details: "Drive on the left side. International driving permit required. Parking can be challenging in city centers."
  },
  {
    id: 4,
    type: "Ferry",
    icon: "Ship",
    description: "Ferry services connect Malta to Gozo and Comino islands.",
    details: "Regular ferry services from Cirkewwa to Mgarr (Gozo) and seasonal services to Comino."
  },
  {
    id: 5,
    type: "Walking",
    icon: "MapPin",
    description: "Many attractions are within walking distance in compact city centers.",
    details: "Valletta, Mdina, and Victoria are easily explored on foot. Comfortable shoes recommended."
  }
];

export const packingList = [
  "Passport and travel documents",
  "Sunscreen (high SPF)",
  "Comfortable walking shoes",
  "Swimwear and beach towel",
  "Light summer clothing",
  "Hat and sunglasses",
  "Camera and charger",
  "Medications",
  "Snorkeling gear (optional)",
  "Light jacket for evenings",
  "Power adapter (UK type G)",
  "Reusable water bottle"
];

export const attractions = [
  {
    id: 1,
    name: "Valletta",
    description: "UNESCO World Heritage capital city with baroque architecture and historical significance.",
    mustSee: true
  },
  {
    id: 2,
    name: "Blue Lagoon, Comino",
    description: "Crystal clear turquoise waters perfect for swimming and snorkeling.",
    mustSee: true
  },
  {
    id: 3,
    name: "Mdina - The Silent City",
    description: "Ancient walled city with narrow medieval streets and stunning architecture.",
    mustSee: true
  },
  {
    id: 4,
    name: "St. John's Co-Cathedral",
    description: "Magnificent baroque cathedral housing Caravaggio masterpieces.",
    mustSee: true
  },
  {
    id: 5,
    name: "Gozo Island",
    description: "Peaceful sister island known for its rural charm and beautiful landscapes.",
    mustSee: false
  },
  {
    id: 6,
    name: "Dingli Cliffs",
    description: "Dramatic coastal cliffs offering spectacular sunset views.",
    mustSee: false
  }
];

export const traditionalFoods = [
  {
    name: "Pastizzi",
    description: "Flaky pastry filled with ricotta cheese or mushy peas. Malta's national snack."
  },
  {
    name: "Rabbit Stew (Fenek)",
    description: "Traditional Maltese rabbit stew, considered the national dish."
  },
  {
    name: "Ftira",
    description: "Traditional Maltese bread often served as a sandwich with local ingredients."
  },
  {
    name: "Lampuki",
    description: "Maltese fish pie traditionally made with dolphin fish and vegetables."
  },
  {
    name: "Qassatat",
    description: "Small pastries filled with ricotta, spinach, or anchovies."
  },
  {
    name: "Kannoli",
    description: "Sweet pastry tubes filled with ricotta and candied fruits."
  }
];

export const topRestaurants = [
  {
    name: "Nenu the Artisan Baker",
    location: "Valletta",
    specialty: "Traditional ftira and local baked goods",
    priceRange: "€"
  },
  {
    name: "Rubino",
    location: "Valletta",
    specialty: "Traditional Maltese cuisine in historic setting",
    priceRange: "€€"
  },
  {
    name: "La Mère",
    location: "Sliema",
    specialty: "French-Mediterranean fusion cuisine",
    priceRange: "€€€"
  },
  {
    name: "Tal-Petut",
    location: "Gozo",
    specialty: "Farm-to-table Gozitan specialties",
    priceRange: "€€"
  }
];

export const usefulInfo = [
  {
    category: "Currency",
    info: "Euro (EUR) is the official currency. Credit cards widely accepted."
  },
  {
    category: "Language",
    info: "Maltese and English are both official languages. English is widely spoken."
  },
  {
    category: "Climate",
    info: "Mediterranean climate with hot summers and mild winters. Best visited April-October."
  },
  {
    category: "Time Zone",
    info: "Central European Time (CET), UTC+1 (UTC+2 during daylight saving)."
  },
  {
    category: "Electricity",
    info: "230V, 50Hz. Type G plugs (same as UK). Adapter required for most countries."
  },
  {
    category: "Emergency",
    info: "Emergency services: 112. Police: 119. Medical emergencies: 196."
  }
];
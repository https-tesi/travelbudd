
import { Destination } from "@/types/destination";

export const centralEuropeDestinations: Destination[] = [
  {
    id: 20,
    name: "Prague, Czech Republic",
    description: "Fairy-tale city with medieval architecture, charming bridges, and rich cultural heritage.",
    imageUrl: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1458150945447-7fb764c11a92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 93,
    tags: ["Historical", "Cultural", "Scenic"],
    attractions: [
      {
        name: "Prague Castle",
        description: "Largest ancient castle complex in the world",
        type: "Historical"
      },
      {
        name: "Charles Bridge",
        description: "Historic bridge lined with statues crossing the Vltava River",
        type: "Landmark"
      },
      {
        name: "Old Town Square",
        description: "Historic square with the Astronomical Clock and Gothic churches",
        type: "Cultural"
      },
      {
        name: "St. Vitus Cathedral",
        description: "Gothic cathedral within Prague Castle complex",
        type: "Religious"
      },
      {
        name: "Jewish Quarter (Josefov)",
        description: "Historic Jewish quarter with several synagogues and cemetery",
        type: "Cultural"
      }
    ]
  },
  {
    id: 22,
    name: "Vienna, Austria",
    description: "Imperial city known for its magnificent palaces, classical music legacy, and café culture.",
    imageUrl: "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1516550893885-985c836c68d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1574867155527-436c97b3bcf3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1585900801693-31482399066f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 93,
    tags: ["Historical", "Cultural", "Music"],
    attractions: [
      {
        name: "Schönbrunn Palace",
        description: "Former imperial summer residence with beautiful gardens",
        type: "Historical"
      },
      {
        name: "St. Stephen's Cathedral",
        description: "Iconic Gothic cathedral in the city center",
        type: "Religious"
      },
      {
        name: "Belvedere Palace",
        description: "Historic palace complex housing Austrian art collections",
        type: "Museum"
      },
      {
        name: "Vienna State Opera",
        description: "Renowned opera house with performances of the highest quality",
        type: "Cultural"
      },
      {
        name: "Naschmarkt",
        description: "Popular market offering local and international foods",
        type: "Market"
      }
    ]
  },
  {
    id: 26,
    name: "Berlin, Germany",
    description: "Dynamic capital with a rich history, vibrant arts scene, and iconic landmarks from various eras.",
    imageUrl: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1587330979470-3595b8e9964c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1566404791232-af9fe8edb60d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 92,
    tags: ["Historical", "Arts", "Nightlife"],
    attractions: [
      {
        name: "Brandenburg Gate",
        description: "Iconic 18th-century neoclassical monument and symbol of Berlin",
        type: "Landmark"
      },
      {
        name: "Berlin Wall Memorial",
        description: "Historic site commemorating the divided city's history",
        type: "Historical"
      },
      {
        name: "Museum Island",
        description: "UNESCO World Heritage site with five world-renowned museums",
        type: "Cultural"
      },
      {
        name: "Reichstag Building",
        description: "Historic parliament building with glass dome offering panoramic views",
        type: "Landmark"
      },
      {
        name: "East Side Gallery",
        description: "Open-air gallery on the longest remaining section of the Berlin Wall",
        type: "Arts"
      }
    ]
  },
  {
    id: 27,
    name: "Munich, Germany",
    description: "Bavarian capital combining traditional culture with modern lifestyle, famous for Oktoberfest.",
    imageUrl: "https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1641128324748-c4a3a57e6487?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 90,
    tags: ["Cultural", "Food", "Historical"],
    attractions: [
      {
        name: "Marienplatz",
        description: "Central square with the New Town Hall and its famous Glockenspiel",
        type: "Landmark"
      },
      {
        name: "English Garden",
        description: "One of the world's largest urban parks with beer gardens",
        type: "Park"
      },
      {
        name: "BMW Museum",
        description: "Showcasing the history and future of the iconic Bavarian auto brand",
        type: "Museum"
      },
      {
        name: "Nymphenburg Palace",
        description: "Baroque palace with beautiful gardens and museums",
        type: "Historical"
      },
      {
        name: "Hofbräuhaus",
        description: "Historic beer hall dating back to the 16th century",
        type: "Food"
      }
    ]
  },
  {
    id: 28,
    name: "Zurich, Switzerland",
    description: "Picturesque city on Lake Zurich with a charming old town, upscale shopping, and mountain views.",
    imageUrl: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1574867155527-436c97b3bcf3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1543328368-85961e5e9570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1599835816051-a8a81088c8ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 91,
    tags: ["Scenic", "Luxury", "Cultural"],
    attractions: [
      {
        name: "Old Town (Altstadt)",
        description: "Historic center with winding streets and medieval buildings",
        type: "Historical"
      },
      {
        name: "Lake Zurich",
        description: "Beautiful lake with promenades, swimming areas, and boat trips",
        type: "Scenic"
      },
      {
        name: "Bahnhofstrasse",
        description: "World-famous shopping avenue with luxury boutiques",
        type: "Shopping"
      },
      {
        name: "Kunsthaus Zurich",
        description: "Major art museum with works from Middle Ages to contemporary art",
        type: "Museum"
      },
      {
        name: "Uetliberg",
        description: "Mountain offering panoramic views of the city, lake, and Alps",
        type: "Scenic"
      }
    ]
  },
  {
    id: 29,
    name: "Geneva, Switzerland",
    description: "International diplomatic hub on Lake Geneva, known for luxury watches, chocolate, and natural beauty.",
    imageUrl: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1578950114438-32f65548e817?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1609180663882-a88da065b2ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1559682468-a6a5c1a1affd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 89,
    tags: ["Scenic", "Luxury", "International"],
    attractions: [
      {
        name: "Jet d'Eau",
        description: "Iconic fountain shooting water 140 meters into the air",
        type: "Landmark"
      },
      {
        name: "Lake Geneva (Lac Léman)",
        description: "Beautiful alpine lake with mountain backdrop",
        type: "Scenic"
      },
      {
        name: "Palais des Nations",
        description: "European headquarters of the United Nations",
        type: "Cultural"
      },
      {
        name: "Old Town",
        description: "Historic center with St. Pierre Cathedral and narrow streets",
        type: "Historical"
      },
      {
        name: "Patek Philippe Museum",
        description: "Museum dedicated to the art of watchmaking",
        type: "Museum"
      }
    ]
  }
];

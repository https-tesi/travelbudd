import { Destination } from "@/types/destination";

export const europeDestinations: Destination[] = [
  {
    id: 2,
    name: "Santorini, Greece",
    description: "Breathtaking views of the Aegean Sea from white-washed buildings along volcanic cliffs.",
    imageUrl: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1601581875039-e899893d520c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1515861461225-2860bdc6e37d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1557630256-4ce69b5c0e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    ],
    score: 96,
    tags: ["Romantic", "Beach", "Scenic"],
    averageTemp: 23,
    attractions: [
      {
        name: "Oia Village",
        description: "Famous for its stunning sunsets and blue-domed churches",
        type: "Village"
      },
      {
        name: "Red Beach",
        description: "Distinctive beach with red volcanic sand and cliffs",
        type: "Beach"
      },
      {
        name: "Ancient Thera",
        description: "Archaeological site with ruins from Hellenistic, Roman and Byzantine eras",
        type: "Historical"
      },
      {
        name: "Akrotiri Archaeological Site",
        description: "Well-preserved Bronze Age settlement buried by volcanic ash",
        type: "Historical"
      },
      {
        name: "Santo Wines Winery",
        description: "Winery offering tastings with panoramic caldera views",
        type: "Culinary"
      }
    ]
  },
  {
    id: 4,
    name: "Rome, Italy",
    description: "Explore ancient ruins, Renaissance art, and delicious cuisine in the Eternal City.",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1555992828-65a01bf2fb4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 95,
    tags: ["Historical", "Cultural", "Food"],
    attractions: [
      {
        name: "Colosseum",
        description: "Iconic amphitheater of ancient Rome",
        type: "Historical"
      },
      {
        name: "Vatican Museums & Sistine Chapel",
        description: "World-famous art collection including Michelangelo's masterpiece",
        type: "Cultural"
      },
      {
        name: "Roman Forum",
        description: "Sprawling ruins of ancient government buildings",
        type: "Historical"
      },
      {
        name: "Trevi Fountain",
        description: "Baroque masterpiece and one of the city's most famous landmarks",
        type: "Landmark"
      },
      {
        name: "Pantheon",
        description: "Well-preserved ancient Roman temple with magnificent dome",
        type: "Historical"
      }
    ]
  },
  {
    id: 5,
    name: "Venice, Italy",
    description: "The unique city built on water with romantic gondola rides and stunning architecture.",
    imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1529154036614-a60975f5c760?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 94,
    tags: ["Romantic", "Cultural", "Scenic"],
    attractions: [
      {
        name: "St. Mark's Basilica",
        description: "Stunning cathedral with Byzantine architecture and gold mosaics",
        type: "Religious"
      },
      {
        name: "Grand Canal",
        description: "Main waterway lined with Renaissance and Gothic palaces",
        type: "Scenic"
      },
      {
        name: "Doge's Palace",
        description: "Gothic masterpiece that was the center of Venetian power",
        type: "Historical"
      },
      {
        name: "Rialto Bridge",
        description: "Iconic stone bridge spanning the Grand Canal",
        type: "Landmark"
      },
      {
        name: "Murano Island",
        description: "Famous for its centuries-old glass-blowing tradition",
        type: "Cultural"
      }
    ]
  },
  {
    id: 6,
    name: "Florence, Italy",
    description: "Birthplace of the Renaissance with incredible art, architecture, and Tuscan cuisine.",
    imageUrl: "https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1534359265607-b2e5c7c244c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1560361586-8242b1917847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 93,
    tags: ["Historical", "Art", "Food"],
    attractions: [
      {
        name: "Uffizi Gallery",
        description: "World-class museum housing Renaissance masterpieces",
        type: "Museum"
      },
      {
        name: "Florence Cathedral (Duomo)",
        description: "Iconic cathedral with Brunelleschi's terracotta-tiled dome",
        type: "Religious"
      },
      {
        name: "Ponte Vecchio",
        description: "Medieval stone bridge lined with jewelers and art dealers",
        type: "Landmark"
      },
      {
        name: "Accademia Gallery",
        description: "Home to Michelangelo's David and other sculptures",
        type: "Museum"
      },
      {
        name: "Pitti Palace",
        description: "Renaissance palace housing several important museums",
        type: "Historical"
      }
    ]
  },
  {
    id: 8,
    name: "Paris, France",
    description: "The City of Light with iconic landmarks, world-class museums, and gourmet cuisine.",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1473&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1541778480-81d5d2aa7a4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 97,
    tags: ["Romantic", "Cultural", "Food"],
    attractions: [
      {
        name: "Eiffel Tower",
        description: "Iconic iron lattice tower and symbol of Paris",
        type: "Landmark"
      },
      {
        name: "Louvre Museum",
        description: "World's largest art museum, home to the Mona Lisa",
        type: "Museum"
      },
      {
        name: "Notre-Dame Cathedral",
        description: "Medieval Catholic cathedral with Gothic architecture",
        type: "Religious"
      },
      {
        name: "Montmartre & Sacré-Cœur",
        description: "Artistic neighborhood with basilica offering panoramic views",
        type: "Cultural"
      },
      {
        name: "Champs-Élysées & Arc de Triomphe",
        description: "Famous avenue leading to the historic triumphal arch",
        type: "Landmark"
      }
    ]
  },
  {
    id: 9,
    name: "Barcelona, Spain",
    description: "Vibrant coastal city with stunning architecture, beautiful beaches, and incredible food.",
    imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1464790719320-516ecd75af6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 94,
    tags: ["Beach", "Cultural", "Food"],
    attractions: [
      {
        name: "Sagrada Família",
        description: "Gaudí's unfinished masterpiece and iconic basilica",
        type: "Religious"
      },
      {
        name: "Park Güell",
        description: "Whimsical park with Gaudí's colorful mosaics and structures",
        type: "Park"
      },
      {
        name: "La Rambla",
        description: "Famous tree-lined pedestrian street in the center",
        type: "Cultural"
      },
      {
        name: "Casa Batlló",
        description: "Stunning modernist building by Antoni Gaudí",
        type: "Architecture"
      },
      {
        name: "Gothic Quarter",
        description: "Historic neighborhood with medieval streets and buildings",
        type: "Historical"
      }
    ]
  },
  {
    id: 12,
    name: "London, UK",
    description: "Historic city with royal heritage, world-famous museums, and diverse cultural scenes.",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 94,
    tags: ["Historical", "Cultural", "Urban"],
    attractions: [
      {
        name: "British Museum",
        description: "World-class museum of human history and culture",
        type: "Museum"
      },
      {
        name: "Tower of London",
        description: "Historic castle and home of the Crown Jewels",
        type: "Historical"
      },
      {
        name: "Buckingham Palace",
        description: "Official residence of the British monarch",
        type: "Landmark"
      },
      {
        name: "Westminster Abbey",
        description: "Gothic church and traditional place for royal coronations",
        type: "Religious"
      },
      {
        name: "The Shard",
        description: "Tallest building in the UK with viewing gallery",
        type: "Landmark"
      }
    ]
  },
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
    id: 21,
    name: "Amsterdam, Netherlands",
    description: "Picturesque canal city with rich art history, vibrant culture, and unique architecture.",
    imageUrl: "https://images.unsplash.com/photo-1584003564911-a5dfe077b645?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1576924542622-772281b13aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    ],
    score: 92,
    tags: ["Cultural", "Urban", "Scenic"],
    attractions: [
      {
        name: "Rijksmuseum",
        description: "Dutch national museum dedicated to arts and history",
        type: "Museum"
      },
      {
        name: "Anne Frank House",
        description: "Biographical museum dedicated to Jewish wartime diarist Anne Frank",
        type: "Historical"
      },
      {
        name: "Van Gogh Museum",
        description: "Museum housing the largest collection of Van Gogh's paintings and drawings",
        type: "Museum"
      },
      {
        name: "Jordaan",
        description: "Charming neighborhood with narrow streets, boutiques, and cafés",
        type: "Cultural"
      },
      {
        name: "Canal Cruise",
        description: "Scenic boat tour through Amsterdam's historic canals",
        type: "Scenic"
      }
    ]
  },
  {
    id: 22,
    name: "Vienna, Austria",
    description: "Imperial city known for its magnificent palaces, classical music legacy, and café culture.",
    imageUrl: "https://images.unsplash.com/photo-1516550893885-985c836c68d6?q=80&w=1472&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
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
    id: 23,
    name: "Dubrovnik, Croatia",
    description: "Stunning coastal city with medieval walls, marble streets, and breathtaking Adriatic views.",
    imageUrl: "https://images.unsplash.com/photo-1555990538-32d1500b7b77?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1591977584734-384d7e3764ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1542342212-1076c6686382?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1559742089-0a81edca171b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 91,
    tags: ["Beach", "Historical", "Scenic"],
    attractions: [
      {
        name: "City Walls",
        description: "Medieval defensive walls offering panoramic views of the city and sea",
        type: "Historical"
      },
      {
        name: "Old Town",
        description: "UNESCO World Heritage site with historic streets and buildings",
        type: "Cultural"
      },
      {
        name: "Lokrum Island",
        description: "Nearby forested island with botanical gardens and swimming spots",
        type: "Nature"
      },
      {
        name: "Mount Srđ",
        description: "Mountain overlooking Dubrovnik with cable car and panoramic views",
        type: "Scenic"
      },
      {
        name: "Rector's Palace",
        description: "Gothic-Renaissance palace that once served as the seat of government",
        type: "Historical"
      }
    ]
  },
  {
    id: 24,
    name: "Istanbul, Turkey",
    description: "Captivating city straddling Europe and Asia, with rich Byzantine and Ottoman heritage.",
    imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1471&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1520444451380-ebe0f7b3e630?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 94,
    tags: ["Historical", "Cultural", "Food"],
    attractions: [
      {
        name: "Hagia Sophia",
        description: "Ancient cathedral turned mosque with stunning Byzantine architecture",
        type: "Religious"
      },
      {
        name: "Blue Mosque",
        description: "Iconic mosque known for its blue Iznik tiles and six minarets",
        type: "Religious"
      },
      {
        name: "Topkapi Palace",
        description: "Former residence of Ottoman sultans with extensive collections",
        type: "Historical"
      },
      {
        name: "Grand Bazaar",
        description: "One of the world's oldest and largest covered markets",
        type: "Market"
      },
      {
        name: "Bosphorus Cruise",
        description: "Scenic boat trip along the strait separating Europe and Asia",
        type: "Scenic"
      }
    ]
  },
  {
    id: 25,
    name: "Madrid, Spain",
    description: "Vibrant capital with elegant boulevards, expansive parks, and world-class art museums.",
    imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1558370781-d6196949e317?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1574555893412-01817b496a4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 90,
    tags: ["Cultural", "Art", "Food"],
    attractions: [
      {
        name: "Prado Museum",
        description: "Spain's main national art museum with works by Goya, Velázquez, and more",
        type: "Museum"
      },
      {
        name: "Retiro Park",
        description: "Large, peaceful park with a lake, gardens, and monuments",
        type: "Park"
      },
      {
        name: "Royal Palace",
        description: "Official residence of the Spanish Royal Family used for state ceremonies",
        type: "Historical"
      },
      {
        name: "Plaza Mayor",
        description: "Historic central square surrounded by traditional architecture",
        type: "Landmark"
      },
      {
        name: "Mercado San Miguel",
        description: "Historic food market offering Spanish delicacies and tapas",
        type: "Food"
      }
    ]
  }
];


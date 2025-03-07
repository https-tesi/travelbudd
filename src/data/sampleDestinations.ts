// Sample destinations data (would come from API in real app)
export const sampleDestinations = [
  {
    id: 1,
    name: "Kyoto, Japan",
    description: "Experience traditional Japanese culture with stunning temples and beautiful gardens.",
    imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1493997181344-712f2f19d87a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 98,
    tags: ["Historical", "Cultural", "Scenic"],
    attractions: [
      {
        name: "Fushimi Inari Shrine",
        description: "Famous for its thousands of vermilion torii gates",
        type: "Shrine"
      },
      {
        name: "Kinkaku-ji (Golden Pavilion)",
        description: "Buddhist temple covered in gold leaf overlooking a pond",
        type: "Temple"
      },
      {
        name: "Arashiyama Bamboo Grove",
        description: "Scenic path through towering bamboo forests",
        type: "Nature"
      },
      {
        name: "Gion District",
        description: "Traditional area famous for geisha and machiya houses",
        type: "Cultural"
      },
      {
        name: "Kiyomizu-dera Temple",
        description: "Historic temple offering panoramic views of Kyoto",
        type: "Temple"
      }
    ]
  },
  {
    id: 2,
    name: "Santorini, Greece",
    description: "Breathtaking views of the Aegean Sea from white-washed buildings along volcanic cliffs.",
    imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d3c6071d?q=80&w=1374&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1601581875039-e899893d520c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
    ],
    score: 96,
    tags: ["Romantic", "Beach", "Scenic"],
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
    id: 3,
    name: "Machu Picchu, Peru",
    description: "Ancient Incan citadel set high in the Andes Mountains, offering spectacular views.",
    imageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1587595156078-32c68e3e410c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 97,
    tags: ["Historical", "Adventure", "Scenic"],
    attractions: [
      {
        name: "Sun Gate (Inti Punku)",
        description: "Traditional entrance to Machu Picchu along the Inca Trail",
        type: "Historical"
      },
      {
        name: "Huayna Picchu",
        description: "Steep mountain offering incredible views of the citadel",
        type: "Hiking"
      },
      {
        name: "Temple of the Sun",
        description: "Sacred semicircular temple with astronomical alignment",
        type: "Historical"
      },
      {
        name: "Intihuatana Stone",
        description: "Ancient astronomical clock or calendar",
        type: "Historical"
      },
      {
        name: "Sacred District",
        description: "Area containing the most important temples of Machu Picchu",
        type: "Historical"
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
    id: 7,
    name: "Bali, Indonesia",
    description: "Tropical paradise with stunning beaches, lush rice terraces, and spiritual temples.",
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1519625149185-7626ff3a86bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 95,
    tags: ["Beach", "Spiritual", "Nature"],
    attractions: [
      {
        name: "Ubud Monkey Forest",
        description: "Sacred nature reserve with hundreds of monkeys",
        type: "Nature"
      },
      {
        name: "Tegallalang Rice Terraces",
        description: "Stunning stepped rice fields showcasing traditional Balinese irrigation",
        type: "Scenic"
      },
      {
        name: "Uluwatu Temple",
        description: "Ancient sea temple perched on a cliff with sunset views",
        type: "Religious"
      },
      {
        name: "Sacred Monkey Forest Sanctuary",
        description: "Natural habitat of Balinese long-tailed macaques",
        type: "Nature"
      },
      {
        name: "Tanah Lot Temple",
        description: "Iconic sea temple built on a rock formation",
        type: "Religious"
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
      "https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
      "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1558102250-c570b06df272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
    id: 10,
    name: "Tokyo, Japan",
    description: "Ultra-modern metropolis with traditional charm, cutting-edge technology, and amazing food.",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1374&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1436&q=80"
    ],
    score: 96,
    tags: ["Urban", "Food", "Shopping"],
    attractions: [
      {
        name: "Senso-ji Temple",
        description: "Tokyo's oldest and most significant Buddhist temple",
        type: "Religious"
      },
      {
        name: "Shibuya Crossing",
        description: "Famous scramble intersection and bustling shopping district",
        type: "Urban"
      },
      {
        name: "Tokyo Skytree",
        description: "Tallest tower in Japan with observation decks",
        type: "Landmark"
      },
      {
        name: "Meiji Shrine",
        description: "Shinto shrine set in a peaceful forested area",
        type: "Religious"
      },
      {
        name: "Tsukiji Outer Market",
        description: "Famous market with fresh seafood and food stalls",
        type: "Food"
      }
    ]
  },
  {
    id: 11,
    name: "New York City, USA",
    description: "The Big Apple offers world-class entertainment, diverse cuisine, and iconic landmarks.",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 95,
    tags: ["Urban", "Entertainment", "Shopping"],
    attractions: [
      {
        name: "Central Park",
        description: "Massive urban park offering recreation and natural beauty",
        type: "Park"
      },
      {
        name: "Empire State Building",
        description: "Iconic art deco skyscraper with observation deck",
        type: "Landmark"
      },
      {
        name: "Metropolitan Museum of Art",
        description: "One of the world's largest and finest art museums",
        type: "Museum"
      },
      {
        name: "Statue of Liberty",
        description: "Famous neoclassical sculpture on Liberty Island",
        type: "Landmark"
      },
      {
        name: "Times Square",
        description: "Bustling intersection known for its billboards and theaters",
        type: "Entertainment"
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
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
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
    id: 13,
    name: "Sydney, Australia",
    description: "Stunning harbor city with iconic opera house, beautiful beaches, and laid-back lifestyle.",
    imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1578508048553-71ef7a4a2a27?ixlib=rb-4.0.3&

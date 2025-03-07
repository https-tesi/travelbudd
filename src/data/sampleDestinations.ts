// Sample destinations data (would come from API in real app)
export const sampleDestinations = [
  {
    id: 1,
    name: "Kyoto, Japan",
    description: "Experience traditional Japanese culture with stunning temples and beautiful gardens.",
    imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1470&auto=format&fit=crop",
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
    score: 93,
    tags: ["Beach", "Urban", "Scenic"],
    attractions: [
      {
        name: "Sydney Opera House",
        description: "Iconic performing arts center with distinctive sail design",
        type: "Landmark"
      },
      {
        name: "Sydney Harbour Bridge",
        description: "Famous steel arch bridge nicknamed 'The Coathanger'",
        type: "Landmark"
      },
      {
        name: "Bondi Beach",
        description: "Popular beach known for its surf and coastal walks",
        type: "Beach"
      },
      {
        name: "Royal Botanic Garden",
        description: "Expansive garden with native and exotic plants",
        type: "Nature"
      },
      {
        name: "Taronga Zoo",
        description: "Zoo with harbor views featuring Australian wildlife",
        type: "Wildlife"
      }
    ]
  },
  {
    id: 14,
    name: "Maldives",
    description: "Paradise of overwater bungalows, crystal clear waters, and pristine white sand beaches.",
    imageUrl: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1374&auto=format&fit=crop",
    score: 99,
    tags: ["Beach", "Luxury", "Romantic"],
    attractions: [
      {
        name: "Male Fish Market",
        description: "Bustling market showcasing the local fishing industry",
        type: "Cultural"
      },
      {
        name: "Maldive Victory Wreck",
        description: "Popular diving site with a sunken cargo ship",
        type: "Adventure"
      },
      {
        name: "HP Reef",
        description: "Marine protected area known for vibrant coral formations",
        type: "Nature"
      },
      {
        name: "Hulhumale Beach",
        description: "Artificial beach on a reclaimed island",
        type: "Beach"
      },
      {
        name: "National Museum",
        description: "Collection showcasing Maldivian history and culture",
        type: "Cultural"
      }
    ]
  },
  {
    id: 15,
    name: "Amsterdam, Netherlands",
    description: "Charming canal city with historic architecture, world-class museums, and cycling culture.",
    imageUrl: "https://images.unsplash.com/photo-1584003564911-a5dfe077b645?q=80&w=1470&auto=format&fit=crop",
    score: 92,
    tags: ["Cultural", "Urban", "Historical"],
    attractions: [
      {
        name: "Rijksmuseum",
        description: "Dutch national museum dedicated to arts and history",
        type: "Museum"
      },
      {
        name: "Anne Frank House",
        description: "Biographical museum of the Jewish wartime diarist",
        type: "Historical"
      },
      {
        name: "Van Gogh Museum",
        description: "Museum housing the largest collection of Van Gogh's works",
        type: "Museum"
      },
      {
        name: "Vondelpark",
        description: "Urban park with open-air theatre and playgrounds",
        type: "Park"
      },
      {
        name: "Jordaan District",
        description: "Former working-class area now known for art galleries and markets",
        type: "Cultural"
      }
    ]
  },
  {
    id: 16,
    name: "Prague, Czech Republic",
    description: "Fairytale city with stunning architecture, medieval charm, and rich cultural heritage.",
    imageUrl: "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1470&auto=format&fit=crop",
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
        description: "Historic stone bridge lined with statues",
        type: "Landmark"
      },
      {
        name: "Old Town Square",
        description: "Historic square with astronomical clock",
        type: "Historical"
      },
      {
        name: "St. Vitus Cathedral",
        description: "Gothic cathedral inside Prague Castle complex",
        type: "Religious"
      },
      {
        name: "Jewish Quarter (Josefov)",
        description: "Historic Jewish quarter with synagogues and cemetery",
        type: "Cultural"
      }
    ]
  },
  {
    id: 17,
    name: "Dubrovnik, Croatia",
    description: "Medieval walled city on the Adriatic with stunning beaches and Game of Thrones fame.",
    imageUrl: "https://images.unsplash.com/photo-1565101845408-c2dbaf45a3c5?q=80&w=1470&auto=format&fit=crop",
    score: 92,
    tags: ["Historical", "Beach", "Scenic"],
    attractions: [
      {
        name: "City Walls",
        description: "Massive stone walls encircling the old town",
        type: "Historical"
      },
      {
        name: "Stradun",
        description: "Main pedestrian street through the Old Town",
        type: "Cultural"
      },
      {
        name: "Rector's Palace",
        description: "Gothic-Renaissance palace housing a cultural history museum",
        type: "Historical"
      },
      {
        name: "Lokrum Island",
        description: "Forested island nature reserve with botanical garden",
        type: "Nature"
      },
      {
        name: "Banje Beach",
        description: "Popular pebble beach with views of the Old Town",
        type: "Beach"
      }
    ]
  },
  {
    id: 18,
    name: "Marrakech, Morocco",
    description: "Exotic city with vibrant markets, stunning palaces, and rich cultural traditions.",
    imageUrl: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1470&auto=format&fit=crop",
    score: 91,
    tags: ["Cultural", "Historical", "Shopping"],
    attractions: [
      {
        name: "Jemaa el-Fnaa",
        description: "Famous square and marketplace in the medina",
        type: "Cultural"
      },
      {
        name: "Bahia Palace",
        description: "19th-century palace with gardens and painted rooms",
        type: "Historical"
      },
      {
        name: "Majorelle Garden",
        description: "Botanical garden and artist's landscape garden",
        type: "Nature"
      },
      {
        name: "Koutoubia Mosque",
        description: "Largest mosque in Marrakech with 77-meter minaret",
        type: "Religious"
      },
      {
        name: "Medina of Marrakech",
        description: "Ancient walled city with narrow maze-like streets",
        type: "Historical"
      }
    ]
  },
  {
    id: 19,
    name: "Cape Town, South Africa",
    description: "Spectacular coastal city with Table Mountain, stunning beaches, and amazing wildlife.",
    imageUrl: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1470&auto=format&fit=crop",
    score: 94,
    tags: ["Scenic", "Nature", "Beach"],
    attractions: [
      {
        name: "Table Mountain",
        description: "Iconic flat-topped mountain with cable car access",
        type: "Nature"
      },
      {
        name: "Robben Island",
        description: "Former prison where Nelson Mandela was incarcerated",
        type: "Historical"
      },
      {
        name: "V&A Waterfront",
        description: "Shopping and entertainment district at the harbor",
        type: "Urban"
      },
      {
        name: "Boulders Beach",
        description: "Home to a colony of African penguins",
        type: "Wildlife"
      },
      {
        name: "Kirstenbosch National Botanical Garden",
        description: "Spectacular garden showcasing South African flora",
        type: "Nature"
      }
    ]
  },
  {
    id: 20,
    name: "Rio de Janeiro, Brazil",
    description: "Vibrant coastal city with stunning beaches, iconic Christ the Redeemer, and samba culture.",
    imageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1470&auto=format&fit=crop",
    score: 93,
    tags: ["Beach", "Cultural", "Scenic"],
    attractions: [
      {
        name: "Christ the Redeemer",
        description: "Iconic statue atop Corcovado Mountain",
        type: "Landmark"
      },
      {
        name: "Copacabana Beach",
        description: "Famous beach with a distinctive wave pattern boardwalk",
        type: "Beach"
      },
      {
        name: "Sugarloaf Mountain",
        description: "Peak with cable car offering panoramic city views",
        type: "Scenic"
      },
      {
        name: "Tijuca National Park",
        description: "Urban forest with hiking trails and waterfalls",
        type: "Nature"
      },
      {
        name: "Maracanã Stadium",
        description: "Legendary football stadium with guided tours",
        type: "Sports"
      }
    ]
  },
  {
    id: 21,
    name: "Bangkok, Thailand",
    description: "Bustling metropolis with ornate temples, floating markets, and incredible street food.",
    imageUrl: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1470&auto=format&fit=crop",
    score: 92,
    tags: ["Cultural", "Food", "Urban"],
    attractions: [
      {
        name: "Grand Palace",
        description: "Former royal residence with Wat Phra Kaew temple",
        type: "Historical"
      },
      {
        name: "Wat Arun",
        description: "Riverside temple with distinctive spires",
        type: "Religious"
      },
      {
        name: "Chatuchak Weekend Market",
        description: "Massive weekend market with thousands of stalls",
        type: "Shopping"
      },
      {
        name: "Damnoen Saduak Floating Market",
        description: "Traditional market where goods are sold from boats",
        type: "Cultural"
      },
      {
        name: "Jim Thompson House",
        description: "Museum in the former home of American businessman",
        type: "Cultural"
      }
    ]
  },
  {
    id: 22,
    name: "Istanbul, Turkey",
    description: "Transcontinental city straddling Europe and Asia with rich history and stunning architecture.",
    imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1471&auto=format&fit=crop",
    score: 94,
    tags: ["Historical", "Cultural", "Food"],
    attractions: [
      {
        name: "Hagia Sophia",
        description: "Former Byzantine church and Ottoman mosque, now a museum",
        type: "Historical"
      },
      {
        name: "Blue Mosque",
        description: "Ottoman-era mosque known for blue interior tiles",
        type: "Religious"
      },
      {
        name: "Topkapi Palace",
        description: "Former residence of Ottoman sultans",
        type: "Historical"
      },
      {
        name: "Grand Bazaar",
        description: "One of the world's oldest and largest covered markets",
        type: "Shopping"
      },
      {
        name: "Bosphorus Strait",
        description: "Waterway separating Europe and Asia with cruise options",
        type: "Scenic"
      }
    ]
  },
  {
    id: 23,
    name: "Vienna, Austria",
    description: "Imperial city known for classical music, stunning palaces, and cafe culture.",
    imageUrl: "https://images.unsplash.com/photo-1516550893885-985c836c68d6?q=80&w=1472&auto=format&fit=crop",
    score: 92,
    tags: ["Cultural", "Historical", "Art"],
    attractions: [
      {
        name: "Schönbrunn Palace",
        description: "Former imperial summer residence with gardens",
        type: "Historical"
      },
      {
        name: "St. Stephen's Cathedral",
        description: "Gothic cathedral with colorful roof tiles",
        type: "Religious"
      },
      {
        name: "Belvedere Palace",
        description: "Historic building complex with art museum",
        type: "Art"
      },
      {
        name: "Vienna State Opera",
        description: "Historic opera house offering world-class performances",
        type: "Cultural"
      },
      {
        name: "Hofburg Palace",
        description: "Former Habsburg dynasty imperial palace",
        type: "Historical"
      }
    ]
  },
  {
    id: 24,
    name: "Dubai, UAE",
    description: "Futuristic city with towering skyscrapers, luxury shopping, and desert adventures.",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1470&auto=format&fit=crop",
    score: 93,
    tags: ["Luxury", "Shopping", "Urban"],
    attractions: [
      {
        name: "Burj Khalifa",
        description: "World's tallest building with observation decks",
        type: "Landmark"
      },
      {
        name: "Palm Jumeirah",
        description: "Artificial archipelago with luxury resorts",
        type: "Landmark"
      },
      {
        name: "Dubai Mall",
        description: "Massive shopping center with aquarium and ice rink",
        type: "Shopping"
      },
      {
        name: "Dubai Creek",
        description: "Saltwater creek dividing the city with boat tours",
        type: "Scenic"
      },
      {
        name: "Desert Safari",
        description: "Adventure tours in the surrounding desert landscape",
        type: "Adventure"
      }
    ]
  }
];

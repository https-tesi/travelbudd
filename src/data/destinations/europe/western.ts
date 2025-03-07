
import { Destination } from "@/types/destination";

export const westernEuropeDestinations: Destination[] = [
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
    id: 30,
    name: "Brussels, Belgium",
    description: "European capital with grand squares, Art Nouveau architecture, chocolate, and beer culture.",
    imageUrl: "https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1608025053138-bc9c5a43bc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1565791154677-4a78a26df94d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1612348507507-a21c36493c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 88,
    tags: ["Cultural", "Food", "Architecture"],
    attractions: [
      {
        name: "Grand Place",
        description: "UNESCO World Heritage site with opulent guildhalls and town hall",
        type: "Landmark"
      },
      {
        name: "Manneken Pis",
        description: "Iconic small bronze fountain sculpture of a urinating boy",
        type: "Landmark"
      },
      {
        name: "Atomium",
        description: "Unique monument representing an iron crystal magnified 165 billion times",
        type: "Landmark"
      },
      {
        name: "Royal Museums of Fine Arts",
        description: "Complex of art museums with ancient and modern works",
        type: "Museum"
      },
      {
        name: "Mini-Europe",
        description: "Park with miniature reproductions of European monuments",
        type: "Attraction"
      }
    ]
  },
  {
    id: 31,
    name: "Bruges, Belgium",
    description: "Medieval fairy-tale city with cobbled streets, canals, and Gothic architecture.",
    imageUrl: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1569431431167-9c1ee6f2af2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1546763481-7b1f926286e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1598108588429-933a215a7853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 90,
    tags: ["Historical", "Romantic", "Scenic"],
    attractions: [
      {
        name: "Market Square (Markt)",
        description: "Central plaza with colorful guild houses and belfry tower",
        type: "Landmark"
      },
      {
        name: "Belfry Tower",
        description: "Medieval bell tower with panoramic city views",
        type: "Landmark"
      },
      {
        name: "Groeningemuseum",
        description: "Museum with fine collection of Flemish and Belgian paintings",
        type: "Museum"
      },
      {
        name: "Canal Tour",
        description: "Boat trip through the picturesque canals of Bruges",
        type: "Scenic"
      },
      {
        name: "Basilica of the Holy Blood",
        description: "Church housing a relic of the Holy Blood of Jesus Christ",
        type: "Religious"
      }
    ]
  },
  {
    id: 32,
    name: "Rotterdam, Netherlands",
    description: "Modern city with bold architecture, maritime heritage, and innovative urban design.",
    imageUrl: "https://images.unsplash.com/photo-1453713786606-af73ee25aca7?q=80&w=1534&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1541089801-5b7a0e4a2b68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1584029327107-3d9206e8f6f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1575322353738-a12f72fc05c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 87,
    tags: ["Modern", "Architecture", "Urban"],
    attractions: [
      {
        name: "Cube Houses",
        description: "Iconic tilted cubic houses designed by Piet Blom",
        type: "Architecture"
      },
      {
        name: "Erasmus Bridge",
        description: "Striking cable-stayed bridge connecting north and south Rotterdam",
        type: "Landmark"
      },
      {
        name: "Markthal",
        description: "Spectacular covered market hall with apartments and food stalls",
        type: "Food"
      },
      {
        name: "Rotterdam Harbor Tour",
        description: "Boat tour of one of the world's largest ports",
        type: "Scenic"
      },
      {
        name: "Museum Boijmans Van Beuningen",
        description: "Art museum with works spanning from the Middle Ages to modern times",
        type: "Museum"
      }
    ]
  }
];

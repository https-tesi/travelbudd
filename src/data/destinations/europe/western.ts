
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
  }
];

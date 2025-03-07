import { Destination } from "@/types/destination";

export const americasDestinations: Destination[] = [
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
    id: 11,
    name: "New York City, USA",
    description: "The Big Apple offers world-class entertainment, diverse cuisine, and iconic landmarks.",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
    id: 18,
    name: "Rio de Janeiro, Brazil",
    description: "Vibrant coastal city known for its beaches, mountains, and lively carnival celebrations.",
    imageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1591468069248-2dd5e9368494?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1564659907532-6b5f98c8e70f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1554168848-228452c09d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 93,
    tags: ["Beach", "Cultural", "Scenic"],
    attractions: [
      {
        name: "Christ the Redeemer",
        description: "Iconic Art Deco statue atop Corcovado Mountain",
        type: "Landmark"
      },
      {
        name: "Copacabana Beach",
        description: "Famous beach with a distinctive wave-pattern promenade",
        type: "Beach"
      },
      {
        name: "Sugarloaf Mountain",
        description: "Peak reached by cable car with panoramic city views",
        type: "Natural"
      },
      {
        name: "Tijuca National Park",
        description: "Urban rainforest with hiking trails and waterfalls",
        type: "Nature"
      },
      {
        name: "Maracanã Stadium",
        description: "Legendary football stadium that has hosted World Cup finals",
        type: "Sports"
      }
    ]
  },
  {
    id: 19,
    name: "Mexico City, Mexico",
    description: "Sprawling capital with ancient Aztec ruins, colonial architecture, and vibrant contemporary culture.",
    imageUrl: "https://images.unsplash.com/photo-1518659526054-190340b15735?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1629227071576-e58d921c62b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1594152862028-7bb73d5a9af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 92,
    tags: ["Historical", "Cultural", "Food"],
    attractions: [
      {
        name: "National Museum of Anthropology",
        description: "Premier museum of pre-Columbian Mesoamerican artifacts",
        type: "Museum"
      },
      {
        name: "Zócalo (Plaza de la Constitución)",
        description: "Main square in the historic center of the city",
        type: "Cultural"
      },
      {
        name: "Frida Kahlo Museum",
        description: "Historic house where the famous artist lived",
        type: "Museum"
      },
      {
        name: "Chapultepec Castle",
        description: "Historic castle on a hill with panoramic city views",
        type: "Historical"
      },
      {
        name: "Templo Mayor",
        description: "Archaeological site of Aztec temple in downtown",
        type: "Historical"
      }
    ]
  }
];

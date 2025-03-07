
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
  }
];


import { Destination } from "@/types/destination";

export const easternEuropeDestinations: Destination[] = [
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
    id: 33,
    name: "Moscow, Russia",
    description: "Magnificent capital city with iconic architecture, rich history, and vibrant cultural scene.",
    imageUrl: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1578312014018-c12b8e502df3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 92,
    tags: ["Historical", "Cultural", "Architecture"],
    attractions: [
      {
        name: "Red Square",
        description: "Iconic city square surrounded by landmarks including the Kremlin",
        type: "Landmark"
      },
      {
        name: "Kremlin",
        description: "Historic fortified complex with palaces, cathedrals, and government buildings",
        type: "Historical"
      },
      {
        name: "St. Basil's Cathedral",
        description: "Colorful onion-domed cathedral that is a symbol of Russia",
        type: "Religious"
      },
      {
        name: "Bolshoi Theatre",
        description: "Historic theatre famous for ballet and opera performances",
        type: "Cultural"
      },
      {
        name: "Tretyakov Gallery",
        description: "Museum housing the world's largest collection of Russian art",
        type: "Museum"
      }
    ]
  },
  {
    id: 34,
    name: "St. Petersburg, Russia",
    description: "The cultural capital of Russia with splendid palaces, museums, and elegant canals.",
    imageUrl: "https://images.unsplash.com/photo-1556610961-2fecc5927173?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1548834925-e48f8a27ae36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1580046670344-ab3ab3d32e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1564155421944-354a6202ab8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 93,
    tags: ["Cultural", "Architectural", "Museum"],
    attractions: [
      {
        name: "Hermitage Museum",
        description: "One of the world's oldest and largest museums with vast art collections",
        type: "Museum"
      },
      {
        name: "Church of the Savior on Spilled Blood",
        description: "Colorful church with intricate mosaics built on the site of Alexander II's assassination",
        type: "Religious"
      },
      {
        name: "Peter and Paul Fortress",
        description: "Original citadel of St. Petersburg with cathedral housing Romanov tombs",
        type: "Historical"
      },
      {
        name: "Peterhof Palace",
        description: "Magnificent summer palace with spectacular fountains and gardens",
        type: "Historical"
      },
      {
        name: "Nevsky Prospekt",
        description: "Main avenue with shops, restaurants, and architectural landmarks",
        type: "Cultural"
      }
    ]
  }
];

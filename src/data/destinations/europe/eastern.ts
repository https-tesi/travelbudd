
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
  }
];


import { Destination } from "@/types/destination";

export const africaDestinations: Destination[] = [
  {
    id: 14,
    name: "Cape Town, South Africa",
    description: "Stunning coastal city with Table Mountain backdrop, vineyards, and diverse cultural experiences.",
    imageUrl: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1595274459742-4a779cb9a1b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1585061528750-3bae0f7049c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1517822256207-7954b0377574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    ],
    score: 94,
    tags: ["Scenic", "Cultural", "Beach"],
    attractions: [
      {
        name: "Table Mountain",
        description: "Iconic flat-topped mountain with panoramic views of the city",
        type: "Natural"
      },
      {
        name: "Robben Island",
        description: "Historic prison island where Nelson Mandela was incarcerated",
        type: "Historical"
      },
      {
        name: "V&A Waterfront",
        description: "Bustling harbor with shopping, dining, and entertainment",
        type: "Entertainment"
      },
      {
        name: "Kirstenbosch Botanical Gardens",
        description: "Beautiful gardens showcasing South Africa's unique flora",
        type: "Nature"
      },
      {
        name: "Cape of Good Hope",
        description: "Scenic headland at the southwestern tip of Africa",
        type: "Natural"
      }
    ]
  },
  {
    id: 15,
    name: "Marrakech, Morocco",
    description: "Historic imperial city with vibrant souks, ancient palaces, and exotic gardens.",
    imageUrl: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1551471824-87889a4e214c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1548774211-1a75f9e7f7c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1539020140153-e8c0e9f3bf35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 92,
    tags: ["Historical", "Cultural", "Shopping"],
    attractions: [
      {
        name: "Jemaa el-Fnaa",
        description: "Bustling main square filled with performers and street food",
        type: "Cultural"
      },
      {
        name: "Bahia Palace",
        description: "19th-century palace with intricate Islamic architecture",
        type: "Historical"
      },
      {
        name: "Majorelle Garden",
        description: "Botanical garden and artist's landscape garden",
        type: "Nature"
      },
      {
        name: "Medina of Marrakech",
        description: "UNESCO-listed historic old town with maze-like streets",
        type: "Cultural"
      },
      {
        name: "Koutoubia Mosque",
        description: "Largest mosque in Marrakech with distinctive minaret",
        type: "Religious"
      }
    ]
  }
];

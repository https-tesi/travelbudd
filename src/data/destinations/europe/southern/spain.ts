
import { Destination } from "@/types/destination";

export const spainDestinations: Destination[] = [
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

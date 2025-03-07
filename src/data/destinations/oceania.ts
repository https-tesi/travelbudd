
import { Destination } from "@/types/destination";

export const oceaniaDestinations: Destination[] = [
  {
    id: 13,
    name: "Sydney, Australia",
    description: "Stunning harbor city with iconic opera house, beautiful beaches, and laid-back lifestyle.",
    imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1578508048553-71ef7a4a2a27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1344&q=80"
    ],
    score: 95,
    tags: ["Beach", "Urban", "Scenic"],
    averageTemp: 22,
    costEstimate: "$1800-$3200",
    attractions: [
      {
        name: "Sydney Opera House",
        description: "Iconic performing arts venue with distinctive sail-shaped design",
        type: "Landmark"
      },
      {
        name: "Sydney Harbour Bridge",
        description: "Massive steel arch bridge spanning the harbor",
        type: "Landmark"
      },
      {
        name: "Bondi Beach",
        description: "Famous beach known for its golden sand and surfing",
        type: "Beach"
      },
      {
        name: "Royal Botanic Garden",
        description: "Historic botanical garden with stunning harbor views",
        type: "Nature"
      },
      {
        name: "Taronga Zoo",
        description: "Zoo with Australian wildlife and spectacular harbor views",
        type: "Nature"
      }
    ],
    restaurants: [
      {
        name: "Quay",
        description: "Award-winning fine dining restaurant with harbor views",
        type: "Fine Dining",
        cuisine: "Contemporary Australian"
      },
      {
        name: "Tetsuya's",
        description: "Elegant restaurant serving Japanese-French fusion cuisine",
        type: "Fine Dining",
        cuisine: "Japanese-French"
      },
      {
        name: "The Boathouse",
        description: "Casual waterfront dining with fresh seafood",
        type: "Casual",
        cuisine: "Seafood"
      }
    ],
    accommodations: [
      {
        name: "Park Hyatt Sydney",
        description: "Luxury hotel with stunning Opera House views",
        type: "Luxury Hotel"
      },
      {
        name: "The Rocks YHA",
        description: "Budget-friendly hostel in the historic Rocks district",
        type: "Hostel"
      },
      {
        name: "Bondi Beach House",
        description: "Boutique guesthouse just steps from Bondi Beach",
        type: "Guesthouse"
      }
    ]
  }
];

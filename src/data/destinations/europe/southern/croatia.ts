
import { Destination } from "@/types/destination";

export const croatiaDestinations: Destination[] = [
  {
    id: 23,
    name: "Dubrovnik, Croatia",
    description: "Stunning coastal city with medieval walls, marble streets, and breathtaking Adriatic views.",
    imageUrl: "https://images.unsplash.com/photo-1555990538-32d1500b7b77?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1591977584734-384d7e3764ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1542342212-1076c6686382?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1559742089-0a81edca171b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 91,
    tags: ["Beach", "Historical", "Scenic"],
    attractions: [
      {
        name: "City Walls",
        description: "Medieval defensive walls offering panoramic views of the city and sea",
        type: "Historical"
      },
      {
        name: "Old Town",
        description: "UNESCO World Heritage site with historic streets and buildings",
        type: "Cultural"
      },
      {
        name: "Lokrum Island",
        description: "Nearby forested island with botanical gardens and swimming spots",
        type: "Nature"
      },
      {
        name: "Mount Srđ",
        description: "Mountain overlooking Dubrovnik with cable car and panoramic views",
        type: "Scenic"
      },
      {
        name: "Rector's Palace",
        description: "Gothic-Renaissance palace that once served as the seat of government",
        type: "Historical"
      }
    ]
  }
];

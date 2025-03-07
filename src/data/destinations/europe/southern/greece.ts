
import { Destination } from "@/types/destination";

export const greeceDestinations: Destination[] = [
  {
    id: 2,
    name: "Santorini, Greece",
    description: "Breathtaking views of the Aegean Sea from white-washed buildings along volcanic cliffs.",
    imageUrl: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1601581875039-e899893d520c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1515861461225-2860bdc6e37d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1557630256-4ce69b5c0e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    ],
    score: 96,
    tags: ["Romantic", "Beach", "Scenic"],
    averageTemp: 23,
    attractions: [
      {
        name: "Oia Village",
        description: "Famous for its stunning sunsets and blue-domed churches",
        type: "Village"
      },
      {
        name: "Red Beach",
        description: "Distinctive beach with red volcanic sand and cliffs",
        type: "Beach"
      },
      {
        name: "Ancient Thera",
        description: "Archaeological site with ruins from Hellenistic, Roman and Byzantine eras",
        type: "Historical"
      },
      {
        name: "Akrotiri Archaeological Site",
        description: "Well-preserved Bronze Age settlement buried by volcanic ash",
        type: "Historical"
      },
      {
        name: "Santo Wines Winery",
        description: "Winery offering tastings with panoramic caldera views",
        type: "Culinary"
      }
    ]
  }
];

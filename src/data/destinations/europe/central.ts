
import { Destination } from "@/types/destination";

export const centralEuropeDestinations: Destination[] = [
  {
    id: 20,
    name: "Prague, Czech Republic",
    description: "Fairy-tale city with medieval architecture, charming bridges, and rich cultural heritage.",
    imageUrl: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1458150945447-7fb764c11a92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 93,
    tags: ["Historical", "Cultural", "Scenic"],
    attractions: [
      {
        name: "Prague Castle",
        description: "Largest ancient castle complex in the world",
        type: "Historical"
      },
      {
        name: "Charles Bridge",
        description: "Historic bridge lined with statues crossing the Vltava River",
        type: "Landmark"
      },
      {
        name: "Old Town Square",
        description: "Historic square with the Astronomical Clock and Gothic churches",
        type: "Cultural"
      },
      {
        name: "St. Vitus Cathedral",
        description: "Gothic cathedral within Prague Castle complex",
        type: "Religious"
      },
      {
        name: "Jewish Quarter (Josefov)",
        description: "Historic Jewish quarter with several synagogues and cemetery",
        type: "Cultural"
      }
    ]
  },
  {
    id: 22,
    name: "Vienna, Austria",
    description: "Imperial city known for its magnificent palaces, classical music legacy, and café culture.",
    imageUrl: "https://images.unsplash.com/photo-1516550893885-985c836c68d6?q=80&w=1472&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1585900801693-31482399066f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 93,
    tags: ["Historical", "Cultural", "Music"],
    attractions: [
      {
        name: "Schönbrunn Palace",
        description: "Former imperial summer residence with beautiful gardens",
        type: "Historical"
      },
      {
        name: "St. Stephen's Cathedral",
        description: "Iconic Gothic cathedral in the city center",
        type: "Religious"
      },
      {
        name: "Belvedere Palace",
        description: "Historic palace complex housing Austrian art collections",
        type: "Museum"
      },
      {
        name: "Vienna State Opera",
        description: "Renowned opera house with performances of the highest quality",
        type: "Cultural"
      },
      {
        name: "Naschmarkt",
        description: "Popular market offering local and international foods",
        type: "Market"
      }
    ]
  }
];

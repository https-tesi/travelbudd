
import { Destination } from "@/types/destination";

export const asiaDestinations: Destination[] = [
  {
    id: 1,
    name: "Kyoto, Japan",
    description: "Experience traditional Japanese culture with stunning temples and beautiful gardens.",
    imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1493997181344-712f2f19d87a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 98,
    tags: ["Historical", "Cultural", "Scenic"],
    attractions: [
      {
        name: "Fushimi Inari Shrine",
        description: "Famous for its thousands of vermilion torii gates",
        type: "Shrine"
      },
      {
        name: "Kinkaku-ji (Golden Pavilion)",
        description: "Buddhist temple covered in gold leaf overlooking a pond",
        type: "Temple"
      },
      {
        name: "Arashiyama Bamboo Grove",
        description: "Scenic path through towering bamboo forests",
        type: "Nature"
      },
      {
        name: "Gion District",
        description: "Traditional area famous for geisha and machiya houses",
        type: "Cultural"
      },
      {
        name: "Kiyomizu-dera Temple",
        description: "Historic temple offering panoramic views of Kyoto",
        type: "Temple"
      }
    ]
  },
  {
    id: 7,
    name: "Bali, Indonesia",
    description: "Tropical paradise with stunning beaches, lush rice terraces, and spiritual temples.",
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1519625149185-7626ff3a86bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1604841942043-25c665ab115f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 95,
    tags: ["Beach", "Spiritual", "Nature"],
    attractions: [
      {
        name: "Ubud Monkey Forest",
        description: "Sacred nature reserve with hundreds of monkeys",
        type: "Nature"
      },
      {
        name: "Tegallalang Rice Terraces",
        description: "Stunning stepped rice fields showcasing traditional Balinese irrigation",
        type: "Scenic"
      },
      {
        name: "Uluwatu Temple",
        description: "Ancient sea temple perched on a cliff with sunset views",
        type: "Religious"
      },
      {
        name: "Sacred Monkey Forest Sanctuary",
        description: "Natural habitat of Balinese long-tailed macaques",
        type: "Nature"
      },
      {
        name: "Tanah Lot Temple",
        description: "Iconic sea temple built on a rock formation",
        type: "Religious"
      }
    ]
  },
  {
    id: 10,
    name: "Tokyo, Japan",
    description: "Ultra-modern metropolis with traditional charm, cutting-edge technology, and amazing food.",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1374&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1436&q=80"
    ],
    score: 96,
    tags: ["Urban", "Food", "Shopping"],
    attractions: [
      {
        name: "Senso-ji Temple",
        description: "Tokyo's oldest and most significant Buddhist temple",
        type: "Religious"
      },
      {
        name: "Shibuya Crossing",
        description: "Famous scramble intersection and bustling shopping district",
        type: "Urban"
      },
      {
        name: "Tokyo Skytree",
        description: "Tallest tower in Japan with observation decks",
        type: "Landmark"
      },
      {
        name: "Meiji Shrine",
        description: "Shinto shrine set in a peaceful forested area",
        type: "Religious"
      },
      {
        name: "Tsukiji Outer Market",
        description: "Famous market with fresh seafood and food stalls",
        type: "Food"
      }
    ]
  }
];

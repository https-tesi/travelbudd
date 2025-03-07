
import { Destination } from "@/types/destination";

export const italyDestinations: Destination[] = [
  {
    id: 4,
    name: "Rome, Italy",
    description: "Explore ancient ruins, Renaissance art, and delicious cuisine in the Eternal City.",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1555992828-65a01bf2fb4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 95,
    tags: ["Historical", "Cultural", "Food"],
    attractions: [
      {
        name: "Colosseum",
        description: "Iconic amphitheater of ancient Rome",
        type: "Historical"
      },
      {
        name: "Vatican Museums & Sistine Chapel",
        description: "World-famous art collection including Michelangelo's masterpiece",
        type: "Cultural"
      },
      {
        name: "Roman Forum",
        description: "Sprawling ruins of ancient government buildings",
        type: "Historical"
      },
      {
        name: "Trevi Fountain",
        description: "Baroque masterpiece and one of the city's most famous landmarks",
        type: "Landmark"
      },
      {
        name: "Pantheon",
        description: "Well-preserved ancient Roman temple with magnificent dome",
        type: "Historical"
      }
    ]
  },
  {
    id: 5,
    name: "Venice, Italy",
    description: "The unique city built on water with romantic gondola rides and stunning architecture.",
    imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1529154036614-a60975f5c760?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 94,
    tags: ["Romantic", "Cultural", "Scenic"],
    attractions: [
      {
        name: "St. Mark's Basilica",
        description: "Stunning cathedral with Byzantine architecture and gold mosaics",
        type: "Religious"
      },
      {
        name: "Grand Canal",
        description: "Main waterway lined with Renaissance and Gothic palaces",
        type: "Scenic"
      },
      {
        name: "Doge's Palace",
        description: "Gothic masterpiece that was the center of Venetian power",
        type: "Historical"
      },
      {
        name: "Rialto Bridge",
        description: "Iconic stone bridge spanning the Grand Canal",
        type: "Landmark"
      },
      {
        name: "Murano Island",
        description: "Famous for its centuries-old glass-blowing tradition",
        type: "Cultural"
      }
    ]
  },
  {
    id: 6,
    name: "Florence, Italy",
    description: "Birthplace of the Renaissance with incredible art, architecture, and Tuscan cuisine.",
    imageUrl: "https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1534359265607-b2e5c7c244c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1560361586-8242b1917847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 93,
    tags: ["Historical", "Art", "Food"],
    attractions: [
      {
        name: "Uffizi Gallery",
        description: "World-class museum housing Renaissance masterpieces",
        type: "Museum"
      },
      {
        name: "Florence Cathedral (Duomo)",
        description: "Iconic cathedral with Brunelleschi's terracotta-tiled dome",
        type: "Religious"
      },
      {
        name: "Ponte Vecchio",
        description: "Medieval stone bridge lined with jewelers and art dealers",
        type: "Landmark"
      },
      {
        name: "Accademia Gallery",
        description: "Home to Michelangelo's David and other sculptures",
        type: "Museum"
      },
      {
        name: "Pitti Palace",
        description: "Renaissance palace housing several important museums",
        type: "Historical"
      }
    ]
  },
  {
    id: 35,
    name: "Milan, Italy",
    description: "Fashion and design capital with stunning architecture, high-end shopping, and rich cultural heritage.",
    imageUrl: "https://images.unsplash.com/photo-1520440229-6469a149ac59?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1603122630570-cecebca18090?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1533661537256-53111e86554a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 90,
    tags: ["Fashion", "Architecture", "Cultural"],
    attractions: [
      {
        name: "Milan Cathedral (Duomo)",
        description: "Magnificent Gothic cathedral with rooftop offering city views",
        type: "Religious"
      },
      {
        name: "Galleria Vittorio Emanuele II",
        description: "Historic shopping arcade with luxury boutiques and cafés",
        type: "Shopping"
      },
      {
        name: "Leonardo da Vinci's Last Supper",
        description: "Famous mural painting housed in the Convent of Santa Maria delle Grazie",
        type: "Art"
      },
      {
        name: "Sforza Castle",
        description: "15th-century fortress housing several museums and art collections",
        type: "Historical"
      },
      {
        name: "Brera District",
        description: "Artistic neighborhood with the Pinacoteca di Brera art gallery",
        type: "Cultural"
      }
    ]
  },
  {
    id: 36,
    name: "Naples, Italy",
    description: "Vibrant southern Italian city with rich history, incredible food, and breathtaking bay views.",
    imageUrl: "https://images.unsplash.com/photo-1517006487751-b9d5fd48fad4?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1513177137281-106a00c1ef48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1605546122428-9a85de0d2cab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1528804431125-842f17de657f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 88,
    tags: ["Historical", "Food", "Coastal"],
    attractions: [
      {
        name: "Naples National Archaeological Museum",
        description: "Museum housing Greek and Roman artifacts from Pompeii and Herculaneum",
        type: "Museum"
      },
      {
        name: "Pompeii",
        description: "Ancient Roman city preserved by the eruption of Mount Vesuvius",
        type: "Historical"
      },
      {
        name: "Mount Vesuvius",
        description: "Active volcano that famously destroyed Pompeii in 79 AD",
        type: "Nature"
      },
      {
        name: "Castel dell'Ovo",
        description: "Seaside castle with panoramic views of the Bay of Naples",
        type: "Historical"
      },
      {
        name: "Spaccanapoli",
        description: "Historic street running through the heart of Naples' old town",
        type: "Cultural"
      }
    ]
  },
  {
    id: 37,
    name: "Palermo, Italy",
    description: "Sicily's vibrant capital with Arab-Norman architecture, colorful markets, and delicious street food.",
    imageUrl: "https://images.unsplash.com/photo-1523365280197-f1183defb1fd?q=80&w=1470&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1602176542419-f6d9a0192c54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1556797611-f0a988ee276a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    score: 87,
    tags: ["Historical", "Food", "Cultural"],
    attractions: [
      {
        name: "Palermo Cathedral",
        description: "Spectacular cathedral showcasing different architectural styles",
        type: "Religious"
      },
      {
        name: "Palazzo dei Normanni",
        description: "Royal Palace with stunning Byzantine mosaics in the Palatine Chapel",
        type: "Historical"
      },
      {
        name: "Ballarò Market",
        description: "Bustling street market with local produce and street food",
        type: "Market"
      },
      {
        name: "Quattro Canti",
        description: "Baroque square at the intersection of the city's main streets",
        type: "Landmark"
      },
      {
        name: "Catacombs of the Capuchins",
        description: "Unusual burial site with preserved mummies",
        type: "Historical"
      }
    ]
  }
];

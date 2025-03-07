
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, DollarSign, Clock, Thermometer, Globe, Utensils, Camera, Hotel, Bookmark, Share } from "lucide-react";

// Mock data for a destination (would come from API in real app)
const destinationData = {
  id: 1,
  name: "Kyoto, Japan",
  description: "Experience the cultural heart of Japan with ancient temples, traditional gardens, and authentic cuisine. Kyoto served as Japan's capital and the emperor's residence from 794 until 1868. It is one of the country's ten largest cities with a population of 1.5 million people and a modern face. Over the centuries, Kyoto was destroyed by many wars and fires, but due to its exceptional historic value, the city was spared from air raids during World War II. Countless temples, shrines and other historically priceless structures survive in the city today.",
  imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1470&auto=format&fit=crop",
  gallery: [
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493997181344-712f2f19d87a?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1436&auto=format&fit=crop",
  ],
  score: 98,
  tags: ["Historical", "Cultural", "Scenic"],
  weather: {
    current: "Sunny, 22°C",
    bestTime: "March-May and October-November",
    seasons: "Four distinct seasons with beautiful cherry blossoms in spring and colorful foliage in autumn"
  },
  budget: {
    flightCost: "$800-1200",
    accommodation: "$80-200 per night",
    dailyExpenses: "$50-100 per day",
    averageTotal: "$2000-3000 for 7 days"
  },
  attractions: [
    { name: "Fushimi Inari Shrine", description: "Famous shrine with thousands of vermilion torii gates", type: "Temple" },
    { name: "Arashiyama Bamboo Grove", description: "Stunning pathway through towering bamboo", type: "Nature" },
    { name: "Kinkaku-ji (Golden Pavilion)", description: "Zen temple covered in gold leaf", type: "Temple" },
    { name: "Gion District", description: "Traditional geisha district with preserved machiya houses", type: "Cultural" },
    { name: "Nishiki Market", description: "Five-block shopping street with food vendors and shops", type: "Food" }
  ],
  restaurants: [
    { name: "Nishiki Warai", description: "Traditional Kyoto cuisine in a historic setting", type: "Traditional" },
    { name: "Kyoto Ramen Street", description: "Collection of top ramen shops in Kyoto Station", type: "Casual" },
    { name: "Pontocho Alley", description: "Atmospheric alley with restaurants overlooking the Kamogawa River", type: "Various" }
  ],
  accommodations: [
    { name: "Traditional Ryokan", description: "Experience staying on tatami mats with traditional Japanese amenities", type: "Traditional" },
    { name: "Modern Hotels", description: "Contemporary accommodations with western-style beds and amenities", type: "Modern" },
    { name: "Machiya Stay", description: "Restored traditional wooden townhouses offering a local experience", type: "Unique" }
  ],
  culturalTips: [
    "Remove shoes when entering temples, homes, and some restaurants",
    "Learn basic Japanese phrases as English isn't widely spoken",
    "Bow slightly when greeting people as a sign of respect",
    "Avoid tipping as it's not customary in Japan",
    "Be mindful of quiet behavior in temples and shrines"
  ]
};

const DestinationDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(destinationData.imageUrl);
  
  // In a real app, you would fetch the data based on the ID
  // const { data: destination, isLoading, error } = useQuery(['destination', id], () => fetchDestination(id));

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pb-16">
        {/* Hero section */}
        <div className="h-[40vh] md:h-[60vh] relative overflow-hidden">
          <img 
            src={activeImage} 
            alt={destinationData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">
            <div className="container mx-auto">
              <div className="flex items-center gap-2 text-sm mb-2 opacity-90">
                <MapPin className="h-4 w-4" />
                <span>Japan, Asia</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{destinationData.name}</h1>
              <div className="flex flex-wrap items-center gap-3 md:gap-6">
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  <Thermometer className="h-4 w-4" />
                  <span>{destinationData.weather.current}</span>
                </div>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Best: {destinationData.weather.bestTime}</span>
                </div>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  <DollarSign className="h-4 w-4" />
                  <span>~{destinationData.budget.averageTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 -mt-6 md:-mt-10 relative z-10">
          {/* Gallery thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-4 md:pb-6 px-2 md:px-0">
            <div 
              className={`h-16 md:h-20 aspect-video rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === destinationData.imageUrl ? 'border-primary' : 'border-transparent'}`}
              onClick={() => setActiveImage(destinationData.imageUrl)}
            >
              <img 
                src={destinationData.imageUrl}
                alt="Gallery thumbnail" 
                className="w-full h-full object-cover"
              />
            </div>
            {destinationData.gallery.map((image, index) => (
              <div 
                key={index}
                className={`h-16 md:h-20 aspect-video rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === image ? 'border-primary' : 'border-transparent'}`}
                onClick={() => setActiveImage(image)}
              >
                <img 
                  src={image}
                  alt={`Gallery thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold">About {destinationData.name}</h2>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                        <Bookmark className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                        <Share className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {destinationData.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {destinationData.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Tabs defaultValue="attractions">
                <TabsList className="w-full justify-start bg-transparent border-b rounded-none h-auto p-0 mb-6">
                  <TabsTrigger 
                    value="attractions" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-3"
                  >
                    Attractions
                  </TabsTrigger>
                  <TabsTrigger 
                    value="restaurants" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-3"
                  >
                    Restaurants
                  </TabsTrigger>
                  <TabsTrigger 
                    value="accommodations" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-3"
                  >
                    Accommodations
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="attractions" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {destinationData.attractions.map((attraction, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                              <Camera className="h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="text-lg font-medium mb-1">{attraction.name}</h3>
                              <p className="text-gray-600 text-sm mb-2">{attraction.description}</p>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {attraction.type}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="restaurants" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {destinationData.restaurants.map((restaurant, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="h-12 w-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                              <Utensils className="h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="text-lg font-medium mb-1">{restaurant.name}</h3>
                              <p className="text-gray-600 text-sm mb-2">{restaurant.description}</p>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {restaurant.type}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="accommodations" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {destinationData.accommodations.map((accommodation, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                              <Hotel className="h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="text-lg font-medium mb-1">{accommodation.name}</h3>
                              <p className="text-gray-600 text-sm mb-2">{accommodation.description}</p>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {accommodation.type}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Budget Estimation</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="h-4 w-4" />
                        <span>Flight</span>
                      </div>
                      <span className="font-medium">{destinationData.budget.flightCost}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Hotel className="h-4 w-4" />
                        <span>Accommodation</span>
                      </div>
                      <span className="font-medium">{destinationData.budget.accommodation}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Utensils className="h-4 w-4" />
                        <span>Daily Expenses</span>
                      </div>
                      <span className="font-medium">{destinationData.budget.dailyExpenses}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 font-semibold">
                      <span>Estimated Total (7 days)</span>
                      <span className="text-green-600">{destinationData.budget.averageTotal}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Weather & Best Time to Visit</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Thermometer className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="text-sm text-gray-500">Current Weather</p>
                        <p className="font-medium">{destinationData.weather.current}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm text-gray-500">Best Time to Visit</p>
                        <p className="font-medium">{destinationData.weather.bestTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-purple-500" />
                      <div>
                        <p className="text-sm text-gray-500">Seasons</p>
                        <p className="font-medium">{destinationData.weather.seasons}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Cultural Tips</h3>
                  <ul className="space-y-2">
                    {destinationData.culturalTips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Button size="lg" className="w-full">
                Generate Complete Itinerary
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DestinationDetails;

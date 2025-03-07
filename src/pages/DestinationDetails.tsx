
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, DollarSign, Clock, Thermometer, Globe, Utensils, Camera, Hotel, Bookmark, Share, AlertCircle } from "lucide-react";
import { sampleDestinations } from "@/data/sampleDestinations";
import { Destination } from "@/types/destination";

const DestinationDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState("");
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Fetch the destination data based on the ID
  useEffect(() => {
    setLoading(true);
    
    // Find the destination in the sampleDestinations array
    const foundDestination = sampleDestinations.find(
      dest => dest.id === Number(id)
    );
    
    if (foundDestination) {
      setDestination(foundDestination);
      setActiveImage(foundDestination.imageUrl);
    }
    
    setLoading(false);
  }, [id]);

  // If destination not found, show error state
  if (!loading && !destination) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Destination Not Found</h1>
          <p className="text-gray-600 mb-8">We couldn't find the destination you're looking for.</p>
          <Button onClick={() => navigate('/')}>
            Return to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Show loading state
  if (loading || !destination) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">Loading destination details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pb-16">
        {/* Hero section */}
        <div className="h-[40vh] md:h-[60vh] relative overflow-hidden">
          <img 
            src={activeImage} 
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">
            <div className="container mx-auto">
              <div className="flex items-center gap-2 text-sm mb-2 opacity-90">
                <MapPin className="h-4 w-4" />
                <span>{destination.name.includes(',') ? destination.name.split(',')[1]?.trim() : 'Destination'}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{destination.name}</h1>
              <div className="flex flex-wrap items-center gap-3 md:gap-6">
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  <Thermometer className="h-4 w-4" />
                  <span>Weather: {Math.floor(Math.random() * 20) + 10}°C</span>
                </div>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Best: {['Spring', 'Summer', 'Fall', 'Winter'][Math.floor(Math.random() * 4)]}</span>
                </div>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  <DollarSign className="h-4 w-4" />
                  <span>~${Math.floor(Math.random() * 1500) + 1000}-${Math.floor(Math.random() * 2000) + 2000}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 -mt-6 md:-mt-10 relative z-10">
          {/* Gallery thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-4 md:pb-6 px-2 md:px-0">
            <div 
              className={`h-16 md:h-20 aspect-video rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === destination.imageUrl ? 'border-primary' : 'border-transparent'}`}
              onClick={() => setActiveImage(destination.imageUrl)}
            >
              <img 
                src={destination.imageUrl}
                alt="Gallery thumbnail" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Generate mock gallery images based on destination ID for variety */}
            {Array.from({ length: 4 }).map((_, index) => {
              const imageId = (Number(id) * 10 + index) % 20 + 1;
              const imageUrl = `https://source.unsplash.com/collection/4321${imageId}/800x600`;
              return (
                <div 
                  key={index}
                  className={`h-16 md:h-20 aspect-video rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === imageUrl ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => setActiveImage(imageUrl)}
                >
                  <img 
                    src={imageUrl}
                    alt={`Gallery thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
          
          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold">About {destination.name}</h2>
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
                    {destination.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {destination.tags.map((tag, index) => (
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
                        {/* Generate mock attractions based on the destination */}
                        {Array.from({ length: 5 }).map((_, index) => {
                          const attractions = [
                            {name: `${destination.name.split(',')[0]} Cathedral`, description: "Historic cathedral with stunning architecture", type: "Historical"},
                            {name: `${destination.name.split(',')[0]} Museum`, description: "World-class museum with extensive collections", type: "Cultural"},
                            {name: `${destination.name.split(',')[0]} Park`, description: "Beautiful urban park perfect for relaxation", type: "Nature"},
                            {name: `${destination.name.split(',')[0]} Market`, description: "Vibrant market selling local specialties", type: "Shopping"},
                            {name: `${destination.name.split(',')[0]} Tower`, description: "Iconic tower with panoramic city views", type: "Landmark"}
                          ];
                          return (
                            <div key={index} className="flex gap-4">
                              <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                <Camera className="h-6 w-6" />
                              </div>
                              <div>
                                <h3 className="text-lg font-medium mb-1">{attractions[index].name}</h3>
                                <p className="text-gray-600 text-sm mb-2">{attractions[index].description}</p>
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                  {attractions[index].type}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="restaurants" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {/* Generate mock restaurants based on the destination */}
                        {Array.from({ length: 3 }).map((_, index) => {
                          const locationName = destination.name.split(',')[0];
                          const restaurants = [
                            {name: `Authentic ${locationName} Kitchen`, description: "Traditional cuisine in a warm atmosphere", type: "Local"},
                            {name: `${locationName} Bistro`, description: "Modern takes on classic dishes", type: "Fusion"},
                            {name: `The ${locationName} Terrace`, description: "Outdoor dining with stunning views", type: "Fine Dining"}
                          ];
                          return (
                            <div key={index} className="flex gap-4">
                              <div className="h-12 w-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                                <Utensils className="h-6 w-6" />
                              </div>
                              <div>
                                <h3 className="text-lg font-medium mb-1">{restaurants[index].name}</h3>
                                <p className="text-gray-600 text-sm mb-2">{restaurants[index].description}</p>
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                  {restaurants[index].type}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="accommodations" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {/* Generate mock accommodations based on the destination */}
                        {Array.from({ length: 3 }).map((_, index) => {
                          const locationName = destination.name.split(',')[0];
                          const accommodations = [
                            {name: `${locationName} Grand Hotel`, description: "Luxury hotel in the heart of the city", type: "Luxury"},
                            {name: `${locationName} Boutique Inn`, description: "Charming boutique accommodation with character", type: "Boutique"},
                            {name: `${locationName} Apartments`, description: "Self-catering apartments for an authentic local experience", type: "Apartment"}
                          ];
                          return (
                            <div key={index} className="flex gap-4">
                              <div className="h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                                <Hotel className="h-6 w-6" />
                              </div>
                              <div>
                                <h3 className="text-lg font-medium mb-1">{accommodations[index].name}</h3>
                                <p className="text-gray-600 text-sm mb-2">{accommodations[index].description}</p>
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                  {accommodations[index].type}
                                </span>
                              </div>
                            </div>
                          );
                        })}
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
                      <span className="font-medium">${Math.floor(Math.random() * 800) + 400}-${Math.floor(Math.random() * 600) + 1000}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Hotel className="h-4 w-4" />
                        <span>Accommodation</span>
                      </div>
                      <span className="font-medium">${Math.floor(Math.random() * 120) + 80}-${Math.floor(Math.random() * 150) + 150} per night</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Utensils className="h-4 w-4" />
                        <span>Daily Expenses</span>
                      </div>
                      <span className="font-medium">${Math.floor(Math.random() * 50) + 50}-${Math.floor(Math.random() * 50) + 100} per day</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 font-semibold">
                      <span>Estimated Total (7 days)</span>
                      <span className="text-green-600">${Math.floor(Math.random() * 1000) + 1500}-${Math.floor(Math.random() * 1500) + 2500}</span>
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
                        <p className="font-medium">
                          {['Sunny', 'Partly Cloudy', 'Clear', 'Rainy', 'Overcast'][Math.floor(Math.random() * 5)]}, 
                          {Math.floor(Math.random() * 25) + 5}°C
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm text-gray-500">Best Time to Visit</p>
                        <p className="font-medium">
                          {(['January-March', 'April-June', 'June-August', 'September-November', 'All year round'][Math.floor(Math.random() * 5)])}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-purple-500" />
                      <div>
                        <p className="text-sm text-gray-500">Seasons</p>
                        <p className="font-medium">
                          {destination.tags.includes('Beach') 
                            ? 'Hot summers and mild winters, perfect for beach activities'
                            : destination.tags.includes('Urban')
                              ? 'Four distinct seasons with vibrant city life year-round'
                              : 'Varied weather throughout the year with scenic natural beauty'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Cultural Tips</h3>
                  <ul className="space-y-2">
                    {/* Generate cultural tips based on tags and region */}
                    {[
                      `Learn basic phrases in ${destination.name.includes('Japan') ? 'Japanese' : destination.name.includes('France') ? 'French' : destination.name.includes('Italy') ? 'Italian' : 'the local language'}`,
                      `${destination.tags.includes('Beach') ? 'Respect beach etiquette and environmental rules' : 'Respect local customs and traditions'}`,
                      `${destination.tags.includes('Urban') ? 'Public transportation is the best way to get around' : 'Consider renting a car to explore the surrounding areas'}`,
                      `${destination.tags.includes('Historical') ? 'Many historical sites require modest dress' : 'Dress appropriately for the local weather and customs'}`,
                      `Always carry some local currency for small purchases and tips`
                    ].map((tip, index) => (
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


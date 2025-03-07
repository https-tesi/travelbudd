
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, DollarSign, Clock, Thermometer, Globe, Utensils, Camera, Hotel, Bookmark, Share, AlertCircle, Plane, ImageOff } from "lucide-react";
import { sampleDestinations } from "@/data/sampleDestinations";
import { Destination } from "@/types/destination";
import { toast } from "sonner";

const DestinationDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState("");
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFlightSearch, setShowFlightSearch] = useState(false);
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [nearestAirport, setNearestAirport] = useState<string | null>(null);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [imageError, setImageError] = useState(false);
  
  // Generate fallback image URL based on destination name
  const getFallbackImageUrl = (destinationName: string) => {
    const fallbackImages: Record<string, string> = {
      "Kyoto, Japan": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "Santorini, Greece": "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      "Machu Picchu, Peru": "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "Rome, Italy": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "Venice, Italy": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "Florence, Italy": "https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "Bali, Indonesia": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "Paris, France": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      "Barcelona, Spain": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "Tokyo, Japan": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "New York City, USA": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "London, UK": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "Sydney, Australia": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "Maldives": "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "Amsterdam, Netherlands": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "Prague, Czech Republic": "https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "Dubrovnik, Croatia": "https://images.unsplash.com/photo-1565101845408-c2dbaf45a3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "Marrakech, Morocco": "https://images.unsplash.com/photo-1597212618440-806262de4f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "Cape Town, South Africa": "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "Rio de Janeiro, Brazil": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "Bangkok, Thailand": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "Istanbul, Turkey": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "Vienna, Austria": "https://images.unsplash.com/photo-1516550893885-985c836c68d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      "Dubai, UAE": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    };
    
    return fallbackImages[destinationName] || null;
  };
  
  // Generate additional gallery images for a destination
  const generateGalleryImages = (destinationName: string, destinationId: number) => {
    // Create theme-based collections based on destination tags
    const themes = {
      beach: ["3319606", "2437291", "1285625", "3601434", "2049422"],
      city: ["4321548", "4350879", "1519088", "4348078", "1373360"],
      mountain: ["2468845", "4440985", "134469", "1891882", "2356399"],
      culture: ["3109504", "2989424", "4444436", "2995268", "3374245"]
    };
    
    // Determine theme based on destination name or id
    let themeCollection = "3314899"; // Default to travel collection
    
    if (destinationName.toLowerCase().includes("beach") || 
        destinationName.includes("Santorini") || 
        destinationName.includes("Bali") || 
        destinationName.includes("Maldives")) {
      themeCollection = themes.beach[destinationId % themes.beach.length];
    } else if (destinationName.includes("Tokyo") || 
               destinationName.includes("New York") || 
               destinationName.includes("London") ||
               destinationName.includes("Paris")) {
      themeCollection = themes.city[destinationId % themes.city.length];
    } else if (destinationName.includes("Machu Picchu") || 
               destinationName.includes("Alps") ||
               destinationName.includes("Mountain")) {
      themeCollection = themes.mountain[destinationId % themes.mountain.length];
    } else if (destinationName.includes("Kyoto") || 
               destinationName.includes("Rome") ||
               destinationName.includes("Prague")) {
      themeCollection = themes.culture[destinationId % themes.culture.length];
    }
    
    // Get main image with fallback
    const fallbackMain = getFallbackImageUrl(destinationName);
    const mainImage = fallbackMain || `https://source.unsplash.com/collection/${themeCollection}/800x600?${destinationName.split(',')[0]}`;
    
    // Generate additional images
    const additionalImages = Array.from({ length: 4 }).map((_, index) => {
      return `https://source.unsplash.com/collection/${themeCollection}/800x600?${destinationName.split(',')[0]}&sig=${destinationId * 10 + index}`;
    });
    
    return [mainImage, ...additionalImages];
  };
  
  // Handler for image loading errors
  const handleImageError = (index: number) => {
    console.log(`Image at index ${index} failed to load`);
    setImageError(true);
    
    // Replace the failed image with a new one from a different collection
    if (destination) {
      const newImages = [...galleryImages];
      const destinationName = destination.name.split(',')[0];
      newImages[index] = `https://source.unsplash.com/collection/3314899/800x600?${destinationName}&sig=${Math.random()}`;
      setGalleryImages(newImages);
    }
  };
  
  // Fetch the destination data based on the ID
  useEffect(() => {
    setLoading(true);
    setImageError(false);
    
    // Find the destination in the sampleDestinations array
    const foundDestination = sampleDestinations.find(
      dest => dest.id === Number(id)
    );
    
    if (foundDestination) {
      setDestination(foundDestination);
      
      // Generate gallery images
      const images = generateGalleryImages(foundDestination.name, foundDestination.id);
      setGalleryImages(images);
      setActiveImage(images[0]); // Set the first image as active
    }
    
    setLoading(false);
  }, [id]);

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            // Use reverse geocoding to get location name
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            );
            const data = await response.json();
            
            // Extract country or city from the response
            const country = data.address?.country;
            const city = data.address?.city || data.address?.town || data.address?.village;
            
            setUserLocation(city ? `${city}, ${country}` : country);
            
            // Find nearest airport (mock implementation)
            const mockAirports: Record<string, string> = {
              "Albania": "TIA",
              "Italy": "FCO",
              "United Kingdom": "LHR",
              "France": "CDG",
              "Germany": "FRA",
              "Spain": "MAD",
              "United States": "JFK",
              "Japan": "HND",
              "Greece": "ATH"
            };
            
            setNearestAirport(mockAirports[country as keyof typeof mockAirports] || "Unknown");
          } catch (error) {
            console.error("Error fetching location:", error);
            setUserLocation("Location not found");
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          setUserLocation("Location access denied");
        }
      );
    } else {
      setUserLocation("Geolocation not supported");
    }
  }, []);

  const handleFlightSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!departureDate) {
      toast.error("Please select a departure date");
      return;
    }
    
    // Get destination airport code based on destination name
    const destinationName = destination?.name.split(',')[0] || "";
    
    // Simple mapping of cities to airport codes (mock)
    const airportCodes: Record<string, string> = {
      "Kyoto": "KIX",
      "Paris": "CDG",
      "Rome": "FCO",
      "Barcelona": "BCN",
      "Santorini": "JTR",
      "New York": "JFK",
      "London": "LHR",
      "Tokyo": "HND",
      "Bali": "DPS",
      "Sydney": "SYD"
    };
    
    const destinationCode = airportCodes[destinationName] || destinationName.substring(0, 3).toUpperCase();
    
    // Simulate flight search API call
    toast.info(`Searching flights from ${nearestAirport || "your location"} to ${destinationCode}`);
    
    // In a real app, we would call an actual flight API like:
    // const flightResults = await searchFlights(nearestAirport, destinationCode, departureDate, returnDate);
    
    // Redirect to flight booking site as a fallback solution
    setTimeout(() => {
      const url = `https://www.wizzair.com/#/booking/select-flight/${nearestAirport || ""}/${destinationCode}/${departureDate}/${returnDate || departureDate}`;
      window.open(url, '_blank');
      
      toast.success("Redirecting to flight booking...");
    }, 1500);
  };

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
            onError={() => {
              // If main image fails, show fallback
              if (destination && galleryImages.length > 1) {
                setActiveImage(galleryImages[1]);
              }
            }}
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
            {galleryImages.map((imageUrl, index) => (
              <div 
                key={index}
                className={`h-16 md:h-20 aspect-video rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === imageUrl ? 'border-primary' : 'border-transparent'}`}
                onClick={() => setActiveImage(imageUrl)}
              >
                <img 
                  src={imageUrl}
                  alt={`Gallery image of ${destination.name}`} 
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(index)}
                />
              </div>
            ))}
            
            {imageError && galleryImages.length < 2 && (
              <div className="flex flex-col items-center justify-center h-16 md:h-20 aspect-video bg-gray-100 rounded-lg">
                <ImageOff className="h-6 w-6 text-gray-400" />
                <span className="text-xs text-gray-500 mt-1">No images</span>
              </div>
            )}
          </div>
          
          {/* Flight search card */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold flex items-center">
                  <Plane className="h-5 w-5 mr-2 text-blue-500" />
                  Find Flights to {destination.name.split(',')[0]}
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFlightSearch(!showFlightSearch)}
                >
                  {showFlightSearch ? "Hide" : "Show"}
                </Button>
              </div>

              {showFlightSearch && (
                <form onSubmit={handleFlightSearch} className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="departure" className="text-sm font-medium text-gray-700">From</label>
                      <Input 
                        id="departure"
                        value={nearestAirport || ""}
                        className="bg-gray-50"
                        placeholder="Departure airport"
                        disabled
                      />
                      {userLocation && (
                        <p className="text-xs text-gray-500 mt-1">Based on your location: {userLocation}</p>
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="departureDate" className="text-sm font-medium text-gray-700">Departure</label>
                      <Input 
                        id="departureDate"
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="returnDate" className="text-sm font-medium text-gray-700">Return (optional)</label>
                      <Input 
                        id="returnDate"
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        min={departureDate || new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="mt-4 w-full">
                    <Plane className="h-4 w-4 mr-2" /> Find Flights to {destination.name.split(',')[0]}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
          
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

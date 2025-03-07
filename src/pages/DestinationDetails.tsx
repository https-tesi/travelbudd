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

const STATIC_FALLBACK_IMAGES = {
  "Kyoto, Japan": [
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1493997181344-712f2f19d87a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  ],
  "Santorini, Greece": [
    "https://images.unsplash.com/photo-1570077188670-e3a8d3c6071d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
    "https://images.unsplash.com/photo-1601581875039-e899893d520c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
  ],
  "Machu Picchu, Peru": [
    "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1587595156078-32c68e3e410c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  ],
  "Rome, Italy": [
    "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1555992828-65a01bf2fb4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  ],
  "New York City, USA": [
    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  ],
  "Amsterdam, Netherlands": [
    "https://images.unsplash.com/photo-1584003564911-a5dfe077b645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1576924542622-772281b13aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  ],
  "Prague, Czech Republic": [
    "https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1458150945447-7fb764c11a92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  ],
  "Vienna, Austria": [
    "https://images.unsplash.com/photo-1516550893885-985c836c68d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1585900801693-31482399066f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  ]
};

const DEFAULT_FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
  "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
  "https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
  "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
  "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
];

const DESTINATION_INFO = {
  "Japan": { language: "Japanese", currency: "Japanese Yen (JPY)" },
  "Indonesia": { language: "Indonesian (Bahasa Indonesia)", currency: "Indonesian Rupiah (IDR)" },
  "Thailand": { language: "Thai", currency: "Thai Baht (THB)" },
  
  "Italy": { language: "Italian", currency: "Euro (EUR)" },
  "Greece": { language: "Greek", currency: "Euro (EUR)" },
  "France": { language: "French", currency: "Euro (EUR)" },
  "Spain": { language: "Spanish", currency: "Euro (EUR)" },
  "United Kingdom": { language: "English", currency: "Pound Sterling (GBP)" },
  "Netherlands": { language: "Dutch", currency: "Euro (EUR)" },
  "Czech Republic": { language: "Czech", currency: "Czech Koruna (CZK)" },
  "Croatia": { language: "Croatian", currency: "Euro (EUR)" },
  "Austria": { language: "German", currency: "Euro (EUR)" },
  "Turkey": { language: "Turkish", currency: "Turkish Lira (TRY)" },
  
  "USA": { language: "English", currency: "US Dollar (USD)" },
  
  "Peru": { language: "Spanish", currency: "Peruvian Sol (PEN)" },
  "Brazil": { language: "Portuguese", currency: "Brazilian Real (BRL)" },
  
  "Morocco": { language: "Arabic, Berber", currency: "Moroccan Dirham (MAD)" },
  "South Africa": { language: "11 official languages including English, Zulu, Xhosa", currency: "South African Rand (ZAR)" },
  
  "UAE": { language: "Arabic", currency: "UAE Dirham (AED)" },
  
  "Australia": { language: "English", currency: "Australian Dollar (AUD)" },
  
  "Maldives": { language: "Dhivehi", currency: "Maldivian Rufiyaa (MVR)" }
};

const getDestinationInfo = (destinationName: string) => {
  const nameParts = destinationName.split(',');
  let country = nameParts[1]?.trim();
  
  if (destinationName.includes("Kyoto") || destinationName.includes("Tokyo")) country = "Japan";
  if (destinationName.includes("Rome") || destinationName.includes("Venice") || destinationName.includes("Florence")) country = "Italy";
  if (destinationName.includes("Santorini")) country = "Greece";
  if (destinationName.includes("Paris")) country = "France";
  if (destinationName.includes("Barcelona")) country = "Spain";
  if (destinationName.includes("New York") || destinationName.includes("NYC")) country = "USA";
  if (destinationName.includes("London")) country = "United Kingdom";
  if (destinationName.includes("Amsterdam")) country = "Netherlands";
  if (destinationName.includes("Prague")) country = "Czech Republic";
  if (destinationName.includes("Dubrovnik")) country = "Croatia";
  if (destinationName.includes("Vienna")) country = "Austria";
  if (destinationName.includes("Machu Picchu")) country = "Peru";
  if (destinationName.includes("Bali")) country = "Indonesia";
  if (destinationName.includes("Bangkok")) country = "Thailand";
  if (destinationName.includes("Istanbul")) country = "Turkey";
  if (destinationName.includes("Dubai")) country = "UAE";
  if (destinationName.includes("Sydney")) country = "Australia";
  if (destinationName.includes("Rio")) country = "Brazil";
  if (destinationName.includes("Marrakech")) country = "Morocco";
  if (destinationName.includes("Cape Town")) country = "South Africa";
  if (destinationName === "Maldives") country = "Maldives";
  
  return DESTINATION_INFO[country as keyof typeof DESTINATION_INFO] || { 
    language: "Local language", 
    currency: "Local currency" 
  };
};

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
  const [failedImageIndexes, setFailedImageIndexes] = useState<Set<number>>(new Set());
  
  const getDestinationFallbackImages = (destinationName: string): string[] => {
    for (const [key, images] of Object.entries(STATIC_FALLBACK_IMAGES)) {
      if (destinationName.includes(key.split(',')[0])) {
        return images;
      }
    }
    return DEFAULT_FALLBACK_IMAGES;
  };
  
  const handleImageError = (index: number) => {
    console.log(`Image at index ${index} failed to load`);
    setFailedImageIndexes(prev => {
      if (prev.has(index)) return prev;
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
    setImageError(true);
    if (!failedImageIndexes.has(index) && destination) {
      const fallbacks = getDestinationFallbackImages(destination.name);
      const fallbackIndex = index % fallbacks.length;
      setGalleryImages(prevImages => {
        const newImages = [...prevImages];
        newImages[index] = fallbacks[fallbackIndex];
        return newImages;
      });
    }
  };
  
  const generateGalleryImages = (destination: Destination): string[] => {
    if (destination.galleryImages && destination.galleryImages.length > 0) {
      return destination.galleryImages;
    }
    
    return getDestinationFallbackImages(destination.name);
  };
  
  useEffect(() => {
    setLoading(true);
    setImageError(false);
    setFailedImageIndexes(new Set());
    
    const foundDestination = sampleDestinations.find(
      dest => dest.id === Number(id)
    );
    
    if (foundDestination) {
      setDestination(foundDestination);
      const images = generateGalleryImages(foundDestination);
      setGalleryImages(images);
      setActiveImage(foundDestination.imageUrl || images[0]);
    }
    
    setLoading(false);
  }, [id]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            );
            const data = await response.json();
            
            const country = data.address?.country;
            const city = data.address?.city || data.address?.town || data.address?.village;
            
            setUserLocation(city ? `${city}, ${country}` : country);
            
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
    
    const destinationName = destination?.name.split(',')[0] || "";
    
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
    
    toast.info(`Searching flights from ${nearestAirport || "your location"} to ${destinationCode}`);
    
    setTimeout(() => {
      const formattedDepartureDate = departureDate;
      const formattedReturnDate = returnDate || departureDate;
      
      const url = `https://www.edreams.com/travel/#/results/type=R;from=${nearestAirport || ""};to=${destinationCode};departure=${formattedDepartureDate};return=${formattedReturnDate};adults=1;children=0;infants=0`;
      window.open(url, '_blank');
      
      toast.success("Redirecting to eDreams flight booking...");
    }, 1500);
  };

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
        <div className="h-[40vh] md:h-[60vh] relative overflow-hidden">
          <img 
            src={activeImage} 
            alt={destination.name}
            className="w-full h-full object-cover"
            onError={() => {
              if (destination) {
                setActiveImage(destination.imageUrl);
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
          {galleryImages.length > 0 && (
            <div className="flex gap-2 overflow-x-auto pb-4 md:pb-6 px-2 md:px-0">
              <div 
                className={`h-16 md:h-20 aspect-video rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === destination.imageUrl ? 'border-primary' : 'border-transparent'}`}
                onClick={() => setActiveImage(destination.imageUrl)}
              >
                <img 
                  src={destination.imageUrl}
                  alt={`Main image of ${destination.name}`} 
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(0)}
                />
              </div>
              
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
              
              {imageError && galleryImages.length < 1 && (
                <div className="flex flex-col items-center justify-center h-16 md:h-20 aspect-video bg-gray-100 rounded-lg">
                  <ImageOff className="h-6 w-6 text-gray-400" />
                  <span className="text-xs text-gray-500 mt-1">No images</span>
                </div>
              )}
            </div>
          )}
          
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
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
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
                        {destination?.attractions ? (
                          destination.attractions.map((attraction, index) => (
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
                          ))
                        ) : (
                          Array.from({ length: 5 }).map((_, index) => {
                            const locationName = destination?.name.split(',')[0] || "";
                            const attractions = [
                              {name: `${locationName} Cathedral`, description: "Historic cathedral with stunning architecture", type: "Historical"},
                              {name: `${locationName} Museum`, description: "World-class museum with extensive collections", type: "Cultural"},
                              {name: `${locationName} Park`, description: "Beautiful urban park perfect for relaxation", type: "Nature"},
                              {name: `${locationName} Market`, description: "Traditional market with local products and crafts", type: "Shopping"},
                              {name: `${locationName} Tower`, description: "Iconic tower with panoramic city views", type: "Landmark"}
                            ];
                            
                            return (
                              <div key={index} className="flex gap-4">
                                <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                  <Camera className="h-6 w-6" />
                                </div>
                                <div>
                                  <h3 className="text-lg font-medium mb-1">{attractions[index % attractions.length].name}</h3>
                                  <p className="text-gray-600 text-sm mb-2">{attractions[index % attractions.length].description}</p>
                                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                    {attractions[index % attractions.length].type}
                                  </span>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="restaurants" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {destination?.restaurants ? (
                          destination.restaurants.map((restaurant, index) => (
                            <div key={index} className="flex gap-4">
                              <div className="h-12 w-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                                <Utensils className="h-6 w-6" />
                              </div>
                              <div>
                                <h3 className="text-lg font-medium mb-1">{restaurant.name}</h3>
                                <p className="text-gray-600 text-sm mb-2">{restaurant.description}</p>
                                <div className="flex flex-wrap gap-2">
                                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                    {restaurant.type}
                                  </span>
                                  {restaurant.cuisine && (
                                    <span className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full">
                                      {restaurant.cuisine}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          Array.from({ length: 4 }).map((_, index) => {
                            const locationName = destination?.name.split(',')[0] || "";
                            const restaurants = [
                              {
                                name: `Authentic ${locationName} Cuisine`,
                                description: "Traditional local dishes in a cozy atmosphere",
                                type: "Local",
                                cuisine: destination.name.includes('Japan') ? 'Japanese' : 
                                  destination.name.includes('Italy') ? 'Northern Italian' :
                                  destination.name.includes('Greece') ? 'Modern Greek' :
                                  destination.name.includes('Peru') ? 'Novo Andean' :
                                  destination.name.includes('Czech') ? 'Modern European' :
                                  'Gourmet'
                              },
                              {
                                name: `${locationName} Fine Dining`,
                                description: "Upscale restaurant with gourmet specialties",
                                type: "Fine Dining",
                                cuisine: destination.name.includes('Japan') ? 'Kaiseki' : 
                                  destination.name.includes('Italy') ? 'Northern Italian' :
                                  destination.name.includes('Greece') ? 'Modern Greek' :
                                  destination.name.includes('Peru') ? 'Novo Andean' :
                                  destination.name.includes('Czech') ? 'Modern European' :
                                  'Gourmet'
                              },
                              {
                                name: `${locationName} Street Food`,
                                description: "Casual spot with delicious street food options",
                                type: "Casual",
                                cuisine: destination.name.includes('Japan') ? 'Izakaya' : 
                                  destination.name.includes('Italy') ? 'Roman Street Food' :
                                  destination.name.includes('Greece') ? 'Meze & Souvlaki' :
                                  destination.name.includes('Peru') ? 'Cevicheria' :
                                  destination.name.includes('Czech') ? 'Pub Food' :
                                  'Street Food'
                              },
                              {
                                name: `${locationName} Café`,
                                description: "Charming café with coffee and pastries",
                                type: "Café",
                                cuisine: destination.name.includes('Japan') ? 'Japanese Patisserie' : 
                                  destination.name.includes('Italy') ? 'Italian Pastries' :
                                  destination.name.includes('Greece') ? 'Greek Bakery' :
                                  destination.name.includes('Peru') ? 'Coffee & Dulces' :
                                  destination.name.includes('Czech') ? 'Central European Pastries' :
                                  'Pastries & Coffee'
                              }
                            ];
                            
                            return (
                              <div key={index} className="flex gap-4">
                                <div className="h-12 w-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                                  <Utensils className="h-6 w-6" />
                                </div>
                                <div>
                                  <h3 className="text-lg font-medium mb-1">{restaurants[index].name}</h3>
                                  <p className="text-gray-600 text-sm mb-2">{restaurants[index].description}</p>
                                  <div className="flex flex-wrap gap-2">
                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                      {restaurants[index].type}
                                    </span>
                                    <span className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full">
                                      {restaurants[index].cuisine}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="accommodations" className="mt-0">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {destination?.accommodations ? (
                          destination.accommodations.map((accommodation, index) => (
                            <div key={index} className="flex gap-4">
                              <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
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
                          ))
                        ) : (
                          Array.from({ length: 3 }).map((_, index) => {
                            const locationName = destination?.name.split(',')[0] || "";
                            const accommodations = [
                              {name: `${locationName} Luxury Hotel`, description: "5-star hotel with exceptional amenities", type: "Luxury"},
                              {name: `${locationName} Boutique Inn`, description: "Charming boutique accommodation with unique character", type: "Boutique"},
                              {name: `${locationName} Budget Hostel`, description: "Affordable option for budget-conscious travelers", type: "Budget"}
                            ];
                            
                            return (
                              <div key={index} className="flex gap-4">
                                <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
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
                          })
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Travel Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Local Language</h4>
                        <p className="text-sm text-gray-600">
                          {destination ? getDestinationInfo(destination.name).language : "Local language"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Best Time to Visit</h4>
                        <p className="text-sm text-gray-600">
                          {destination.name.includes('Japan') ? 'Spring (March-May) and Fall (September-November)' : 
                            destination.name.includes('Greece') ? 'Late spring to early fall (May-September)' :
                            destination.name.includes('Peru') ? 'Dry season (May-October)' :
                            destination.name.includes('Italy') ? 'Spring (April-June) and Fall (September-October)' :
                            destination.name.includes('Netherlands') ? 'Spring (April-May) for tulips, Summer for festivals' :
                            destination.name.includes('Czech') ? 'Spring and early Fall (May-June, September-October)' :
                            'Spring or Fall for mild weather'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Currency</h4>
                        <p className="text-sm text-gray-600">
                          {destination ? getDestinationInfo(destination.name).currency : "Local currency"}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Travel Tips</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs">1</span>
                      </div>
                      <p>
                        {destination.name.includes('Japan') ? 'Respect local customs and remove shoes when entering homes or certain establishments.' : 
                          destination.name.includes('Greece') ? 'Wear comfortable shoes for walking on cobblestone streets and archaeological sites.' :
                          destination.name.includes('Peru') ? 'Acclimate to the altitude gradually if visiting Machu Picchu.' :
                          destination.name.includes('Italy') ? 'Many attractions require covered shoulders and knees for entry.' :
                          destination.name.includes('Netherlands') ? 'Bike rentals are the best way to explore like a local.' :
                          destination.name.includes('Czech') ? 'Exchange money at banks for better rates than street vendors.' :
                          'Research local customs before your trip.'}
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs">2</span>
                      </div>
                      <p>
                        {destination.name.includes('Japan') ? 'Purchase a rail pass if you plan to travel between cities.' : 
                          destination.name.includes('Greece') ? 'Ferry schedules between islands can change frequently - confirm before travel.' :
                          destination.name.includes('Peru') ? 'Book Machu Picchu tickets well in advance as they limit daily visitors.' :
                          destination.name.includes('Italy') ? 'Make restaurant reservations to avoid long waits during peak seasons.' :
                          destination.name.includes('Netherlands') ? 'Purchase museum passes if you plan to visit multiple attractions.' :
                          destination.name.includes('Czech') ? 'Public transportation is excellent and inexpensive - get a transit pass.' :
                          'Check if you need any special permits for attractions.'}
                      </p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs">3</span>
                      </div>
                      <p>
                        {destination.name.includes('Japan') ? 'Tipping is not customary and may even be considered rude.' : 
                          destination.name.includes('Greece') ? 'Sunscreen is essential even during shoulder seasons.' :
                          destination.name.includes('Peru') ? 'Keep valuables secure and be aware of your surroundings in crowded areas.' :
                          destination.name.includes('Italy') ? 'Water fountains throughout cities provide safe drinking water.' :
                          destination.name.includes('Netherlands') ? 'Be careful taking photos of the Red Light District.' :
                          destination.name.includes('Czech') ? 'Tipping 10% is customary for good service in restaurants.' :
                          'Learn a few basic phrases in the local language.'}
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DestinationDetails;

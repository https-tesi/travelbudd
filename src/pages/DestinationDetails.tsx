import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  MapPin, 
  DollarSign, 
  Clock, 
  Thermometer, 
  Globe, 
  Utensils, 
  Camera, 
  Hotel, 
  Bookmark, 
  Share, 
  AlertCircle, 
  Plane, 
  ImageOff,
  CalendarDays,
  Users,
  X,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { sampleDestinations } from "@/data/destinations";
import { Destination } from "@/types/destination";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
    "https://images.unsplash.com/photo-1585900801693-31482399066f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
  
  "Maldives": { language: "Dhivehi", currency: "Maldivian Rufiyaa (MVR)" },
  
  "Germany": { language: "German", currency: "Euro (EUR)" },
  "Belgium": { language: "Dutch, French, German", currency: "Euro (EUR)" },
  "Switzerland": { language: "German, French, Italian, Romansh", currency: "Swiss Franc (CHF)" },
  "Russia": { language: "Russian", currency: "Russian Ruble (RUB)" },
  "Mexico": { language: "Spanish", currency: "Mexican Peso (MXN)" }
};

const getDestinationInfo = (destinationName: string) => {
  const nameParts = destinationName.split(',');
  let country = nameParts[1]?.trim();
  
  if (destinationName.includes("Kyoto") || destinationName.includes("Tokyo")) country = "Japan";
  if (destinationName.includes("Rome") || destinationName.includes("Venice") || destinationName.includes("Florence") || 
      destinationName.includes("Milan") || destinationName.includes("Naples") || destinationName.includes("Palermo")) country = "Italy";
  if (destinationName.includes("Santorini")) country = "Greece";
  if (destinationName.includes("Paris")) country = "France";
  if (destinationName.includes("Barcelona")) country = "Spain";
  if (destinationName.includes("New York") || destinationName.includes("NYC")) country = "USA";
  if (destinationName.includes("London")) country = "United Kingdom";
  if (destinationName.includes("Amsterdam") || destinationName.includes("Rotterdam")) country = "Netherlands";
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
  
  if (destinationName.includes("Berlin") || destinationName.includes("Munich")) country = "Germany";
  if (destinationName.includes("Brussels") || destinationName.includes("Bruges")) country = "Belgium";
  if (destinationName.includes("Zurich") || destinationName.includes("Geneva")) country = "Switzerland";
  if (destinationName.includes("Moscow") || destinationName.includes("St. Petersburg")) country = "Russia";
  if (destinationName.includes("Mexico City")) country = "Mexico";
  
  return DESTINATION_INFO[country as keyof typeof DESTINATION_INFO] || { 
    language: "Local language", 
    currency: "Local currency" 
  };
};

const COST_ESTIMATES = {
  "Kyoto, Japan": "$1500-$2800",
  "Tokyo, Japan": "$1600-$3000",
  "Paris, France": "$1400-$2600",
  "Rome, Italy": "$1300-$2500", 
  "Venice, Italy": "$1400-$2700",
  "Florence, Italy": "$1200-$2400",
  "Barcelona, Spain": "$1200-$2300",
  "Santorini, Greece": "$1300-$2600",
  "New York City, USA": "$1800-$3200",
  "London, UK": "$1500-$3000",
  "Amsterdam, Netherlands": "$1400-$2700",
  "Prague, Czech Republic": "$1000-$2100",
  "Vienna, Austria": "$1200-$2500",
  "Dubrovnik, Croatia": "$1100-$2300",
  "Istanbul, Turkey": "$900-$1900",
  "Bangkok, Thailand": "$900-$1800",
  "Bali, Indonesia": "$1000-$2000",
  "Sydney, Australia": "$1800-$3200",
  "Cape Town, South Africa": "$1200-$2400",
  "Marrakech, Morocco": "$900-$1800",
  "Rio de Janeiro, Brazil": "$1300-$2500",
  "Machu Picchu, Peru": "$1400-$2700",
  "Mexico City, Mexico": "$900-$1800",
  "Dubai, UAE": "$1600-$3000",
  "Maldives": "$2500-$5000"
};

const getDestinationCost = (destinationName: string): string => {
  return COST_ESTIMATES[destinationName as keyof typeof COST_ESTIMATES] || "$1000-$2500";
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
  const [destinationTemp, setDestinationTemp] = useState<number | undefined>(undefined);
  const [costEstimate, setCostEstimate] = useState<string | undefined>(undefined);
  
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedAccommodation, setSelectedAccommodation] = useState<{
    name: string;
    description: string;
    type: string;
  } | null>(null);
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);
  const [guestCount, setGuestCount] = useState("2");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [isBookingLoading, setIsBookingLoading] = useState(false);
  
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
      setDestinationTemp(foundDestination.averageTemp || 20);
      const images = generateGalleryImages(foundDestination);
      setGalleryImages(images);
      setActiveImage(foundDestination.imageUrl || images[0]);
      setCostEstimate(foundDestination.costEstimate || getDestinationCost(foundDestination.name));
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

  const handleAccommodationBooking = (accommodation: { name: string; description: string; type: string }) => {
    const destinationQuery = destination?.name || "";
    const accommodationNameQuery = accommodation.name;
    
    const checkInDate = new Date();
    const checkOutDate = new Date();
    checkOutDate.setDate(checkOutDate.getDate() + 3);
    
    const formattedCheckIn = format(checkInDate, "yyyy-MM-dd");
    const formattedCheckOut = format(checkOutDate, "yyyy-MM-dd");
    
    const searchQuery = encodeURIComponent(`${destinationQuery} ${accommodationNameQuery}`);
    
    const bookingUrl = `https://www.booking.com/searchresults.html?ss=${searchQuery}&checkin=${formattedCheckIn}&checkout=${formattedCheckOut}&group_adults=2&no_rooms=1`;
    
    window.open(bookingUrl, '_blank');
    
    toast.success(`Opening Booking.com to find "${accommodation.name}" in ${destination?.name}`);
  };

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
      "Sydney": "SYD",
      "Moscow": "SVO",
      "St. Petersburg": "LED",
      "Zurich": "ZRH",
      "Milan": "MXP",
      "Istanbul": "IST",
      "Cape Town": "CPT",
      "Marrakech": "RAK"
    };
    
    const destinationCode = airportCodes[destinationName] || destinationName.substring(0, 3).toUpperCase();
    
    toast.info(`Searching flights from ${nearestAirport || "your location"} to ${destinationCode}`);
    
    const formattedDepartureDate = departureDate;
    const formattedReturnDate = returnDate || departureDate;
    
    const url = `https://www.edreams.com/travel/#/results/type=R;from=${nearestAirport || ""};to=${destinationCode};departure=${formattedDepartureDate};return=${formattedReturnDate};adults=1;children=0;infants=0`;
    
    console.log("Opening flight search URL:", url);
    window.open(url, '_blank');
    
    toast.success("Redirecting to eDreams flight booking...");
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
                  <span>Weather: {destinationTemp}°C</span>
                </div>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  <DollarSign className="h-4 w-4" />
                  <span>Cost: {costEstimate}</span>
                </div>
                {destination.tags && destination.tags.map((tag, index) => (
                  <div key={index} className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">About {destination.name}</h2>
                <p className="text-gray-700 mb-6">{destination.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Language</h3>
                      <p className="text-gray-600 text-sm">{getDestinationInfo(destination.name).language}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Currency</h3>
                      <p className="text-gray-600 text-sm">{getDestinationInfo(destination.name).currency}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-2">
                  {galleryImages.map((image, index) => (
                    <div 
                      key={index}
                      className={`aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                        activeImage === image ? 'border-blue-500 scale-[1.02]' : 'border-transparent hover:border-gray-300'
                      }`}
                      onClick={() => setActiveImage(image)}
                    >
                      <img 
                        src={image} 
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(index)}
                      />
                    </div>
                  ))}
                </div>
                
                {imageError && (
                  <div className="flex items-center gap-2 text-amber-600 mt-2 text-sm">
                    <ImageOff className="h-4 w-4" />
                    <span>Some images couldn't be loaded. Showing alternative images.</span>
                  </div>
                )}
              </div>
              
              <Tabs defaultValue="attractions" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="attractions">
                    <Camera className="h-4 w-4 mr-2" />
                    Attractions
                  </TabsTrigger>
                  <TabsTrigger value="restaurants">
                    <Utensils className="h-4 w-4 mr-2" />
                    Restaurants
                  </TabsTrigger>
                  <TabsTrigger value="accommodations">
                    <Hotel className="h-4 w-4 mr-2" />
                    Stay
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="attractions" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.attractions.map((attraction, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-lg">{attraction.name}</h3>
                          <div className="text-sm text-blue-600 mb-2">{attraction.type}</div>
                          <p className="text-gray-600 text-sm">{attraction.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="restaurants" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.restaurants && destination.restaurants.length > 0 ? (
                      destination.restaurants.map((restaurant, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                            <div className="text-sm text-blue-600 mb-2">
                              {restaurant.cuisine ? `${restaurant.type} • ${restaurant.cuisine}` : restaurant.type}
                            </div>
                            <p className="text-gray-600 text-sm">{restaurant.description}</p>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="col-span-2 text-center py-10">
                        <p className="text-gray-500">No restaurant information available for this destination.</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="accommodations" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.accommodations && destination.accommodations.length > 0 ? (
                      destination.accommodations.map((accommodation, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <h3 className="font-semibold text-lg">{accommodation.name}</h3>
                            <div className="text-sm text-blue-600 mb-2">{accommodation.type}</div>
                            <p className="text-gray-600 text-sm">{accommodation.description}</p>
                            <div className="flex justify-between items-center mt-4">
                              {accommodation.pricePerNight && (
                                <span className="text-sm font-medium">${accommodation.pricePerNight}/night</span>
                              )}
                              <Button 
                                size="sm" 
                                onClick={() => handleAccommodationBooking(accommodation)}
                                className="flex items-center gap-1"
                              >
                                <ExternalLink className="h-3.5 w-3.5" />
                                Book on Booking.com
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="col-span-2 text-center py-10">
                        <p className="text-gray-500">No accommodation information available for this destination.</p>
                        <Button 
                          className="mt-4 flex items-center gap-1"
                          onClick={() => {
                            const query = encodeURIComponent(destination.name);
                            window.open(`https://www.booking.com/searchresults.html?ss=${query}`, '_blank');
                            toast.success(`Opening Booking.com to find accommodations in ${destination.name}`);
                          }}
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Search on Booking.com
                        </Button>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Plan Your Trip</h2>
                  <button 
                    onClick={() => setShowFlightSearch(!showFlightSearch)}
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                  >
                    <Plane className="h-4 w-4" />
                    Find Flights
                  </button>
                </div>
                
                {showFlightSearch && (
                  <form onSubmit={handleFlightSearch} className="mb-4">
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Location</label>
                      <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-gray-50">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">{userLocation || "Loading your location..."}</span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Departure Date</label>
                      <Input 
                        type="date" 
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Return Date (Optional)</label>
                      <Input 
                        type="date" 
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        min={departureDate || new Date().toISOString().split('T')[0]}
                        className="w-full"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      <Plane className="h-4 w-4 mr-2" />
                      Search Flights
                    </Button>
                  </form>
                )}
                
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-2">About {destination.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Globe className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{getDestinationInfo(destination.name).language}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{getDestinationInfo(destination.name).currency}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Thermometer className="h-4 w-4 mr-2 text-gray-500" />
                      <span>Average Temperature: {destinationTemp}°C</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Why Visit {destination.name}?</h2>
                <ul className="space-y-2">
                  {destination.tags.map((tag, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mt-0.5">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                <h2 className="text-lg font-semibold mb-4">Find Accommodations</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Discover the best places to stay in {destination.name} with our partner Booking.com
                </p>
                <Button 
                  className="w-full flex items-center gap-1"
                  onClick={() => {
                    const query = encodeURIComponent(destination.name);
                    window.open(`https://www.booking.com/searchresults.html?ss=${query}`, '_blank');
                    toast.success(`Opening Booking.com to find accommodations in ${destination.name}`);
                  }}
                >
                  <Hotel className="h-4 w-4 mr-1" />
                  Find Hotels on Booking.com
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DestinationDetails;

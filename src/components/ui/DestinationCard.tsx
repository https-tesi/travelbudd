
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ArrowRight, ImageOff, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Destination } from "@/types/destination";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageSrc, setImageSrc] = useState(destination.imageUrl);
  
  useEffect(() => {
    // Check if destination is in favorites
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      const favList: Destination[] = JSON.parse(savedFavorites);
      setIsFavorite(favList.some(fav => fav.id === destination.id));
    }
    
    // Load city-specific images right away if the destination is one of the new cities
    const cityName = destination.name.split(',')[0].trim();
    if (citySpecificImages[cityName]) {
      // Use the primary image for the city
      setImageSrc(citySpecificImages[cityName][0]);
    }
  }, [destination.id, destination.name]);

  const handleExplore = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the parent onClick from firing
    navigate(`/destination/${destination.id}`);
  };

  // City-specific primary images organized by city
  const citySpecificImages: Record<string, string[]> = {
    // Germany
    "Berlin": [
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1587330979470-3595b8f8abb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1566404791232-af9fe8edb60d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    "Munich": [
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1570554886111-e85fcbbbab21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", 
      "https://images.unsplash.com/photo-1595867818082-083862f3d630?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    
    // Belgium
    "Brussels": [
      "https://images.unsplash.com/photo-1581112293329-d55c874527e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1587110876426-4432f5088405?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1559113202-7ea0a3c6a06a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    "Bruges": [
      "https://images.unsplash.com/photo-1579008577893-a38a9d78b043?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1546763481-7b1f926286e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    
    // Netherlands
    "Amsterdam": [
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1524047934617-cb782c24e5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1612524780291-c1eda9d40159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    "Rotterdam": [
      "https://images.unsplash.com/photo-1512569603403-8287e3fc4a5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1558697698-9300a84a0fda?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1514539079130-25950c84af65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    
    // Russia
    "Moscow": [
      "https://images.unsplash.com/photo-1596484552834-6a58f850d0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    "St. Petersburg": [
      "https://images.unsplash.com/photo-1550648242-3f31e1a57478?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1556610961-2fecc5927173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1548834925-e48f8a27ae36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    
    // Italy
    "Milan": [
      "https://images.unsplash.com/photo-1603122630570-cecebca18090?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1516285277725-71ecf61f0b6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    "Naples": [
      "https://images.unsplash.com/photo-1594377157609-5c996118ac7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1662325590553-8cb820324369?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1548156847-3b30aa9c91e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    "Palermo": [
      "https://images.unsplash.com/photo-1558947206-1ede5c5f14bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1586867715478-3feeffcdace8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    
    // Switzerland
    "Zurich": [
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1559407238-2d5ed4d5bb3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1577285921731-3ebd8ac15379?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    "Geneva": [
      "https://images.unsplash.com/photo-1663326223138-0e85ab846fd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1560438550-a93ca7703587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    
    // Croatia
    "Dubrovnik": [
      "https://images.unsplash.com/photo-1555990793-da0594cd234e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1602509044689-599a3a0ffba8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    "Vienna": [
      "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", 
      "https://images.unsplash.com/photo-1516550893885-985c836c68d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1516550893885-985c836c68d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    "Mexico City": [
      "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1569515090028-111e8301be36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1592461876279-b2b39e0cc258?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ]
  };

  // Enhanced image error handling with specific city image loading
  const handleImageError = () => {
    setImageError(true);
    console.log(`Image failed to load for ${destination.name}`);
    
    // Find the appropriate city images
    const cityName = destination.name.split(',')[0].trim();
    
    // Check if we have specific images for this city
    if (citySpecificImages[cityName]) {
      // Get second image as fallback (index 1) or third (index 2) if available
      const fallbackIndex = Math.floor(Math.random() * 2) + 1; // Random index between 1 and 2
      if (citySpecificImages[cityName][fallbackIndex]) {
        setImageSrc(citySpecificImages[cityName][fallbackIndex]);
        setImageError(false); // Reset error state to try new image
        return;
      }
    }
    
    // If city-specific images failed or aren't available, fall back to default images
    const defaultFallbackImages = [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1173&q=80"
    ];
    
    // Use a deterministic but "random-looking" index based on the destination name
    const nameHash = destination.name.split('').reduce(
      (acc, char) => acc + char.charCodeAt(0), 0
    );
    
    const fallbackImage = defaultFallbackImages[nameHash % defaultFallbackImages.length];
    setImageSrc(fallbackImage);
  };
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the parent onClick from firing
    
    // Get existing favorites
    const savedFavorites = localStorage.getItem("favorites");
    let favList: Destination[] = savedFavorites ? JSON.parse(savedFavorites) : [];
    
    if (isFavorite) {
      // Remove from favorites
      favList = favList.filter(fav => fav.id !== destination.id);
      toast.success(`${destination.name} removed from favorites`);
    } else {
      // Add to favorites
      favList.push(destination);
      toast.success(`${destination.name} added to favorites`);
    }
    
    // Save to localStorage
    localStorage.setItem("favorites", JSON.stringify(favList));
    setIsFavorite(!isFavorite);
  };
  
  return (
    <Card className="overflow-hidden group hover:shadow-md transition-all">
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <img 
            src={imageSrc} 
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={handleImageError}
            data-destination-id={destination.id}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <ImageOff className="h-10 w-10 text-gray-400 mx-auto mb-2" />
              <span className="text-sm text-gray-500">{destination.name}</span>
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white rounded-full py-1 px-2 flex items-center gap-1 shadow-sm">
          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-medium">{destination.score}%</span>
        </div>
        <button 
          onClick={toggleFavorite}
          className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-sm hover:bg-gray-50 transition-colors"
        >
          <Heart 
            className={`h-4 w-4 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} 
          />
        </button>
      </div>
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold">{destination.name}</h3>
        </div>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{destination.name.split(",")[1]?.trim() || "Destination"}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {destination.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {destination.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button className="w-full" variant="outline" onClick={handleExplore}>
          <span>Explore</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;

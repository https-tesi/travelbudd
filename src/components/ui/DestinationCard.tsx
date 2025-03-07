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
  }, [destination.id]);

  const handleExplore = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the parent onClick from firing
    navigate(`/destination/${destination.id}`);
  };

  // Enhanced image error handling with city-specific fallbacks
  const handleImageError = () => {
    setImageError(true);
    console.log(`Image failed to load for ${destination.name}`);
    
    // City-specific fallback images organized by city or region
    const cityFallbackImages: Record<string, string[]> = {
      // Germany
      "Berlin": [
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1566404791232-af9fe8edb60d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1509041322357-8a3f9757a475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      ],
      "Munich": [
        "https://images.unsplash.com/photo-1595867818082-083862f3d630?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", 
        "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      ],
      
      // Belgium - Updated images for Brussels
      "Brussels": [
        "https://images.unsplash.com/photo-1559113202-7ea0a3c6a06a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1600801814746-2b2aa7dd8bdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1612348507507-a21c36493c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      ],
      "Bruges": [
        "https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1546763481-7b1f926286e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1547494225-f80c136a26fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      ],
      
      // Netherlands - Updated images for Rotterdam
      "Amsterdam": [
        "https://images.unsplash.com/photo-1524047934617-cb782c24e5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1579585269657-14289fd4b7db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      ],
      "Rotterdam": [
        "https://images.unsplash.com/photo-1555854877-5b31b72c8edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1512569603403-8287e3fc4a5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1541742425281-9d7854541e9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      ],
      
      // Russia
      "Moscow": [
        "https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1520106383847-3046f1b54ac7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      ],
      "St. Petersburg": [
        "https://images.unsplash.com/photo-1556610961-2fecc5927173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1580046670344-ab3ab3d32e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1639322537523-babff80746a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      ],
      
      // Italy - Updated images for Milan
      "Milan": [
        "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1603122630570-cecebca18090?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1574401179458-2c0de4e6c9b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      ],
      "Naples": [
        "https://images.unsplash.com/photo-1548156847-3b30aa9c91e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1594377157609-5c996118ac7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1583060981218-511157f1e44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      ],
      "Palermo": [
        "https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1627215448603-1cb32e40d2af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1558947206-1ede5c5f14bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      ],
      
      // Switzerland - Updated images for Zurich
      "Zurich": [
        "https://images.unsplash.com/photo-1620746696340-ed8d11aae923?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1559407238-2d5ed4d5bb3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1630527592348-149abe10889f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      ],
      "Geneva": [
        "https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1578950114438-32f65548e817?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1588763295700-a9daedbbd965?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      ],
      
      // Additional fallbacks for problematic cities - Updated images for Dubrovnik
      "Dubrovnik": [
        "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1564959128472-88f2291c1c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1542642546-2f0e6e4efc91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      ],
      "Vienna": [
        "https://images.unsplash.com/photo-1516550893885-985c836c68d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", 
        "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1585900801693-31482399066f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      ],
      "Mexico City": [
        "https://images.unsplash.com/photo-1594155648697-0a63d39f8a0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1575349591490-29848de3a95c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1629777161042-7f7b6ee9042f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      ]
    };
    
    // Default fallback images if no city-specific ones are found
    const defaultFallbackImages = [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1173&q=80"
    ];
    
    // Find the appropriate fallback images based on city name
    let fallbackImages = defaultFallbackImages;
    const cityName = destination.name.split(',')[0].trim();
    
    // First check exact matches - we need to handle some cities more carefully
    if (cityFallbackImages[cityName]) {
      fallbackImages = cityFallbackImages[cityName];
    } else {
      // Then check partial matches
      for (const city of Object.keys(cityFallbackImages)) {
        if (cityName.includes(city) || city.includes(cityName)) {
          fallbackImages = cityFallbackImages[city];
          break;
        }
      }
    }
    
    // Generate a consistent index based on the destination name to get a predictable fallback
    const nameHash = destination.name.split('').reduce(
      (acc, char) => acc + char.charCodeAt(0), 0
    );
    
    // Set the fallback image directly to component state
    const fallbackImage = fallbackImages[nameHash % fallbackImages.length];
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


import { useState, useEffect, useRef } from "react";
import { ImageOff, Star, Heart } from "lucide-react";
import { toast } from "sonner";
import { Destination } from "@/types/destination";
import { citySpecificImages } from "./cityImages";

interface ImageDisplayProps {
  destination: Destination;
  isFavorite: boolean;
  setIsFavorite: (isFavorite: boolean) => void;
}

export const ImageDisplay = ({ destination, isFavorite, setIsFavorite }: ImageDisplayProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [fallbackAttempts, setFallbackAttempts] = useState(0);
  const maxAttempts = useRef(4); // Limit fallback attempts
  
  const cityName = destination.name.split(',')[0].trim();
  
  // Reset state when destination changes
  useEffect(() => {
    setImageError(false);
    setFallbackAttempts(0);
    
    // Get the appropriate image for this city
    let newImageSrc = "";
    
    if (citySpecificImages[cityName] && citySpecificImages[cityName].length > 0) {
      newImageSrc = citySpecificImages[cityName][0];
      console.log(`Using city-specific image for ${cityName}:`, newImageSrc);
    } else {
      // If no city-specific images, use the destination's image URL
      newImageSrc = destination.imageUrl;
      console.log(`No city-specific images found for ${cityName}, using default:`, newImageSrc);
    }
    
    setImageSrc(newImageSrc);
  }, [destination.id, cityName, destination.imageUrl]);

  const handleImageError = () => {
    console.log(`Image failed to load for ${destination.name} (ID: ${destination.id}): ${imageSrc}`);
    
    // Increment attempt counter
    const newAttemptCount = fallbackAttempts + 1;
    setFallbackAttempts(newAttemptCount);
    
    if (newAttemptCount >= maxAttempts.current) {
      console.log(`Maximum fallback attempts reached for ${destination.name}. Using final fallback.`);
      
      // Use guaranteed working fallback images for specific cities with known issues
      if (cityName === 'Naples') {
        setImageSrc("https://i.imgur.com/AYt1HlL.jpeg"); // Naples with Vesuvius
        return;
      } else if (cityName === 'Cape Town') {
        setImageSrc("https://i.imgur.com/e9afBQw.jpeg"); // Table Mountain
        return;
      } else if (cityName === 'Marrakech') {
        setImageSrc("https://i.imgur.com/LyZpjQD.jpeg"); // Marrakech
        return;
      } else if (cityName === 'St. Petersburg') {
        setImageSrc("https://i.imgur.com/0gJ1qJF.jpeg"); // St. Petersburg
        return;
      } else if (cityName === 'Florence') {
        setImageSrc("https://i.imgur.com/6JtVdV8.jpeg"); // Florence Duomo
        return;
      } else if (cityName === 'Palermo') {
        setImageSrc("https://i.imgur.com/iYYZl6y.jpeg"); // Palermo
        return;
      }
      
      // Default guaranteed working image for all other cities
      setImageSrc("https://i.imgur.com/pMZVCQu.jpeg"); // Generic travel image
      return;
    }
    
    // Try city-specific fallback images first
    if (citySpecificImages[cityName] && newAttemptCount < citySpecificImages[cityName].length) {
      const nextImage = citySpecificImages[cityName][newAttemptCount];
      console.log(`Trying city-specific fallback image ${newAttemptCount} for ${cityName}:`, nextImage);
      setImageSrc(nextImage);
      return;
    }
    
    // If all city-specific images fail or don't exist, use default fallbacks with guaranteed working images
    const defaultFallbackImages = [
      "https://i.imgur.com/pMZVCQu.jpeg", // Generic travel image
      "https://i.imgur.com/9RCaIVn.jpeg", // European city
      "https://i.imgur.com/4qHUzYS.jpeg"  // Travel landscape
    ];
    
    // Special case for cities with known image issues - use specific guaranteed fallbacks
    if (cityName === 'Naples') {
      const naplesFallbacks = [
        "https://i.imgur.com/AYt1HlL.jpeg", // Naples with Vesuvius
        "https://i.imgur.com/qEbCkRW.jpeg", // Naples harbor
        "https://i.imgur.com/Z3esAP6.jpeg"  // Naples street
      ];
      const fallbackIndex = Math.min(newAttemptCount - (citySpecificImages[cityName]?.length || 0), naplesFallbacks.length - 1);
      console.log(`Using Naples-specific fallback image #${fallbackIndex} for ${destination.name}`);
      setImageSrc(naplesFallbacks[fallbackIndex]);
      return;
    } else if (cityName === 'Cape Town') {
      const capeTownFallbacks = [
        "https://i.imgur.com/e9afBQw.jpeg", // Table Mountain
        "https://i.imgur.com/LWtQMv6.jpeg", // Cape Town coast
        "https://i.imgur.com/PGkPfZx.jpeg"  // Cape Town city
      ];
      const fallbackIndex = Math.min(newAttemptCount - (citySpecificImages[cityName]?.length || 0), capeTownFallbacks.length - 1);
      setImageSrc(capeTownFallbacks[fallbackIndex]);
      return;
    }
    
    // Use a deterministic approach to pick a fallback image
    const fallbackIndex = Math.min(newAttemptCount - (citySpecificImages[cityName]?.length || 0), defaultFallbackImages.length - 1);
    const fallbackImage = defaultFallbackImages[fallbackIndex];
    
    console.log(`Using default fallback image #${fallbackIndex} for ${destination.name}:`, fallbackImage);
    setImageSrc(fallbackImage);
    setImageError(true);
  };
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    const savedFavorites = localStorage.getItem("favorites");
    let favList: Destination[] = savedFavorites ? JSON.parse(savedFavorites) : [];
    
    if (isFavorite) {
      favList = favList.filter(fav => fav.id !== destination.id);
      toast.success(`${destination.name} removed from favorites`);
    } else {
      favList.push(destination);
      toast.success(`${destination.name} added to favorites`);
    }
    
    localStorage.setItem("favorites", JSON.stringify(favList));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="relative h-48 overflow-hidden">
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={handleImageError}
          data-destination-id={destination.id}
          data-city-name={cityName}
          key={`img-${destination.id}-${fallbackAttempts}`}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <ImageOff className="h-10 w-10 text-gray-400 mx-auto mb-2" />
            <span className="text-sm text-gray-500">Loading image...</span>
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
  );
};

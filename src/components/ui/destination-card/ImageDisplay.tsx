
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
      // Use a guaranteed working image as final fallback - using a different one for Naples
      if (cityName === 'Naples') {
        setImageSrc("https://images.pexels.com/photos/10902904/pexels-photo-10902904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
        return;
      }
      setImageSrc("https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80");
      return;
    }
    
    // Try city-specific fallback images first
    if (citySpecificImages[cityName] && newAttemptCount < citySpecificImages[cityName].length) {
      const nextImage = citySpecificImages[cityName][newAttemptCount];
      console.log(`Trying city-specific fallback image ${newAttemptCount} for ${cityName}:`, nextImage);
      setImageSrc(nextImage);
      return;
    }
    
    // If all city-specific images fail or don't exist, use default fallbacks
    const defaultFallbackImages = [
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1173&q=80",
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&auto=format&fit=crop&w=1031&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ];
    
    // Special case for Naples - use specific guaranteed fallbacks
    if (cityName === 'Naples') {
      const naplesFallbacks = [
        "https://images.pexels.com/photos/10902904/pexels-photo-10902904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/7031744/pexels-photo-7031744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      ];
      const fallbackIndex = Math.min(newAttemptCount - (citySpecificImages[cityName]?.length || 0), naplesFallbacks.length - 1);
      console.log(`Using Naples-specific fallback image #${fallbackIndex} for ${destination.name}`);
      setImageSrc(naplesFallbacks[fallbackIndex]);
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

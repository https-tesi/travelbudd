
import { useState, useEffect } from "react";
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
      newImageSrc = destination.imageUrl;
      console.log(`No city-specific images found for ${cityName}, using default:`, newImageSrc);
    }
    
    setImageSrc(newImageSrc);
  }, [destination.id, cityName, destination.imageUrl]);

  const handleImageError = () => {
    console.log(`Image failed to load for ${destination.name}: ${imageSrc}`);
    
    // Increment attempt counter
    const newAttemptCount = fallbackAttempts + 1;
    setFallbackAttempts(newAttemptCount);
    
    // Try city-specific fallback images first
    if (citySpecificImages[cityName]) {
      if (newAttemptCount < citySpecificImages[cityName].length) {
        const nextImage = citySpecificImages[cityName][newAttemptCount];
        console.log(`Trying city-specific fallback image ${newAttemptCount} for ${cityName}:`, nextImage);
        setImageSrc(nextImage);
        return;
      }
    }
    
    // If all city-specific images fail, use default fallbacks
    const defaultFallbackImages = [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1173&q=80"
    ];
    
    // Use a deterministic approach to pick a fallback image
    const nameHash = destination.name.split('').reduce(
      (acc, char) => acc + char.charCodeAt(0), 0
    );
    
    // Use a combination of hash and attempt count to cycle through fallbacks
    const fallbackIndex = (nameHash + newAttemptCount - citySpecificImages[cityName]?.length || 0) % defaultFallbackImages.length;
    const fallbackImage = defaultFallbackImages[fallbackIndex];
    
    console.log(`Using default fallback image for ${destination.name}:`, fallbackImage);
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
          key={`img-${destination.id}-${imageSrc}-${fallbackAttempts}`}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <ImageOff className="h-10 w-10 text-gray-400 mx-auto mb-2" />
            <span className="text-sm text-gray-500">Loading...</span>
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

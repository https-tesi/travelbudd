
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
  const [imageSrc, setImageSrc] = useState(destination.imageUrl);
  
  useEffect(() => {
    // Reset image state when destination changes
    setImageError(false);
    setImageSrc(destination.imageUrl);
    
    // Extract the city name from the destination
    const cityName = destination.name.split(',')[0].trim();
    
    // Check if we have specific images for this city
    if (citySpecificImages[cityName]) {
      // Use the primary image for the city (first in the array)
      setImageSrc(citySpecificImages[cityName][0]);
    }
  }, [destination.name, destination.imageUrl]);

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
  );
};

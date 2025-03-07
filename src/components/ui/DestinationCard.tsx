
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

  const handleImageError = () => {
    setImageError(true);
    console.log(`Image failed to load for ${destination.name}`);
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
            src={destination.imageUrl} 
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={handleImageError}
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

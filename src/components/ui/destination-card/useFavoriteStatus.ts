
import { useState, useEffect } from "react";
import { Destination } from "@/types/destination";

export const useFavoriteStatus = (destinationId: number) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    // Check if destination is in favorites
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      const favList: Destination[] = JSON.parse(savedFavorites);
      setIsFavorite(favList.some(fav => fav.id === destinationId));
    }
  }, [destinationId]);
  
  return { isFavorite, setIsFavorite };
};

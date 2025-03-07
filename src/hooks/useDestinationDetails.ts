
import { useState, useEffect } from "react";
import { Destination } from "@/types/destination";
import { sampleDestinations } from "@/data/destinations";
import { getDestinationFallbackImages, getDestinationCost } from "@/utils/destination-utils";

export const useDestinationDetails = (destinationId: number) => {
  const [activeImage, setActiveImage] = useState("");
  const [destination, setDestination] = useState<Destination | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [imageError, setImageError] = useState(false);
  const [failedImageIndexes, setFailedImageIndexes] = useState<Set<number>>(new Set());
  const [destinationTemp, setDestinationTemp] = useState<number | undefined>(undefined);
  const [costEstimate, setCostEstimate] = useState<string | undefined>(undefined);
  const [averageRating, setAverageRating] = useState(4.5);
  
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
    setIsLoading(true);
    setImageError(false);
    setFailedImageIndexes(new Set());
    
    const foundDestination = sampleDestinations.find(
      dest => dest.id === destinationId
    );
    
    if (foundDestination) {
      setDestination(foundDestination);
      setDestinationTemp(foundDestination.averageTemp || 20);
      const images = generateGalleryImages(foundDestination);
      setGalleryImages(images);
      setActiveImage(foundDestination.imageUrl || images[0]);
      setCostEstimate(foundDestination.costEstimate || getDestinationCost(foundDestination.name));
    }
    
    setIsLoading(false);
  }, [destinationId]);

  // Get accommodations and attractions from the destination
  const accommodations = destination?.accommodations || [];
  const attractions = destination?.attractions || [];

  return {
    destination,
    isLoading,
    activeImage,
    setActiveImage,
    galleryImages,
    imageError,
    handleImageError,
    destinationTemp,
    costEstimate,
    averageRating,
    accommodations,
    attractions
  };
};

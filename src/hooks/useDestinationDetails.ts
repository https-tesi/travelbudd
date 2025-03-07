
import { useState, useEffect } from "react";
import { Destination } from "@/types/destination";
import { sampleDestinations } from "@/data/destinations";
import { getDestinationFallbackImages, getDestinationCost } from "@/utils/destination-utils";

export const useDestinationDetails = (id: string | undefined) => {
  const [activeImage, setActiveImage] = useState("");
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [imageError, setImageError] = useState(false);
  const [failedImageIndexes, setFailedImageIndexes] = useState<Set<number>>(new Set());
  const [destinationTemp, setDestinationTemp] = useState<number | undefined>(undefined);
  const [costEstimate, setCostEstimate] = useState<string | undefined>(undefined);
  
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

  return {
    destination,
    loading,
    activeImage,
    setActiveImage,
    galleryImages,
    imageError,
    handleImageError,
    destinationTemp,
    costEstimate
  };
};

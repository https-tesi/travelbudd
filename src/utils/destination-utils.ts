
import { STATIC_FALLBACK_IMAGES, DEFAULT_FALLBACK_IMAGES, DESTINATION_INFO, COST_ESTIMATES } from "@/data/destination-constants";

export const getDestinationFallbackImages = (destinationName: string): string[] => {
  for (const [key, images] of Object.entries(STATIC_FALLBACK_IMAGES)) {
    if (destinationName.includes(key.split(',')[0])) {
      return images;
    }
  }
  return DEFAULT_FALLBACK_IMAGES;
};

export const getDestinationInfo = (destinationName: string) => {
  const nameParts = destinationName.split(',');
  let country = nameParts[1]?.trim();
  
  if (destinationName.includes("Kyoto") || destinationName.includes("Tokyo")) country = "Japan";
  if (destinationName.includes("Rome") || destinationName.includes("Venice") || destinationName.includes("Florence") || 
      destinationName.includes("Milan") || destinationName.includes("Naples") || destinationName.includes("Palermo")) country = "Italy";
  if (destinationName.includes("Santorini")) country = "Greece";
  if (destinationName.includes("Paris")) country = "France";
  if (destinationName.includes("Barcelona")) country = "Spain";
  if (destinationName.includes("New York") || destinationName.includes("NYC")) country = "USA";
  if (destinationName.includes("London")) country = "United Kingdom";
  if (destinationName.includes("Amsterdam") || destinationName.includes("Rotterdam")) country = "Netherlands";
  if (destinationName.includes("Prague")) country = "Czech Republic";
  if (destinationName.includes("Dubrovnik")) country = "Croatia";
  if (destinationName.includes("Vienna")) country = "Austria";
  if (destinationName.includes("Machu Picchu")) country = "Peru";
  if (destinationName.includes("Bali")) country = "Indonesia";
  if (destinationName.includes("Bangkok")) country = "Thailand";
  if (destinationName.includes("Istanbul")) country = "Turkey";
  if (destinationName.includes("Dubai")) country = "UAE";
  if (destinationName.includes("Sydney")) country = "Australia";
  if (destinationName.includes("Rio")) country = "Brazil";
  if (destinationName.includes("Marrakech")) country = "Morocco";
  if (destinationName.includes("Cape Town")) country = "South Africa";
  if (destinationName === "Maldives") country = "Maldives";
  
  if (destinationName.includes("Berlin") || destinationName.includes("Munich")) country = "Germany";
  if (destinationName.includes("Brussels") || destinationName.includes("Bruges")) country = "Belgium";
  if (destinationName.includes("Zurich") || destinationName.includes("Geneva")) country = "Switzerland";
  if (destinationName.includes("Moscow") || destinationName.includes("St. Petersburg")) country = "Russia";
  if (destinationName.includes("Mexico City")) country = "Mexico";
  
  return DESTINATION_INFO[country as keyof typeof DESTINATION_INFO] || { 
    language: "Local language", 
    currency: "Local currency" 
  };
};

export const getDestinationCost = (destinationName: string): string => {
  return COST_ESTIMATES[destinationName as keyof typeof COST_ESTIMATES] || "$1000-$2500";
};

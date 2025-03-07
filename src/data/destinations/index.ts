
import { Destination } from "@/types/destination";
import { asiaDestinations } from "./asia";
import { europeDestinations } from "./europe";
import { americasDestinations } from "./americas";
import { oceaniaDestinations } from "./oceania";
import { africaDestinations } from "./africa";

// Apply cost estimations to destinations that don't have them
const addCostEstimates = (destinations: Destination[]): Destination[] => {
  const costEstimates: Record<string, string> = {
    "Kyoto, Japan": "$1500-$2800",
    "Tokyo, Japan": "$1600-$3000",
    "Paris, France": "$1400-$2600",
    "Rome, Italy": "$1300-$2500", 
    "Venice, Italy": "$1400-$2700",
    "Florence, Italy": "$1200-$2400",
    "Barcelona, Spain": "$1200-$2300",
    "Santorini, Greece": "$1300-$2600",
    "New York City, USA": "$1800-$3200",
    "London, UK": "$1500-$3000",
    "Amsterdam, Netherlands": "$1400-$2700",
    "Prague, Czech Republic": "$1000-$2100",
    "Vienna, Austria": "$1200-$2500",
    "Dubrovnik, Croatia": "$1100-$2300",
    "Istanbul, Turkey": "$900-$1900",
    "Bangkok, Thailand": "$900-$1800",
    "Bali, Indonesia": "$1000-$2000",
    "Sydney, Australia": "$1800-$3200",
    "Cape Town, South Africa": "$1200-$2400",
    "Marrakech, Morocco": "$900-$1800",
    "Rio de Janeiro, Brazil": "$1300-$2500",
    "Machu Picchu, Peru": "$1400-$2700",
    "Mexico City, Mexico": "$900-$1800",
    "Dubai, UAE": "$1600-$3000",
    "Maldives": "$2500-$5000",
    
    // Added cost estimates for new destinations
    "Berlin, Germany": "$1200-$2400",
    "Munich, Germany": "$1300-$2500",
    "Brussels, Belgium": "$1100-$2300",
    "Bruges, Belgium": "$1000-$2100",
    "Rotterdam, Netherlands": "$1200-$2300",
    "Zurich, Switzerland": "$1500-$3000",
    "Geneva, Switzerland": "$1600-$3100",
    "Moscow, Russia": "$1100-$2400",
    "St. Petersburg, Russia": "$1000-$2200",
    "Milan, Italy": "$1300-$2600",
    "Naples, Italy": "$1000-$2000",
    "Palermo, Italy": "$900-$1900"
  };

  // Apply temperature estimates for destinations that don't have them
  const tempEstimates: Record<string, number> = {
    // Asian cities
    "Kyoto, Japan": 15,
    "Tokyo, Japan": 16,
    "Bangkok, Thailand": 28,
    "Bali, Indonesia": 27,
    
    // European cities
    "Paris, France": 12,
    "Rome, Italy": 17,
    "Barcelona, Spain": 18,
    "Venice, Italy": 14,
    "Florence, Italy": 15,
    "Santorini, Greece": 18,
    "London, UK": 11,
    "Amsterdam, Netherlands": 10,
    "Prague, Czech Republic": 9,
    "Vienna, Austria": 11,
    "Dubrovnik, Croatia": 16,
    "Istanbul, Turkey": 14,
    
    // Americas
    "New York City, USA": 12,
    "Rio de Janeiro, Brazil": 25,
    "Machu Picchu, Peru": 12,
    "Mexico City, Mexico": 17,
    
    // Middle East & Africa
    "Dubai, UAE": 29,
    "Marrakech, Morocco": 19,
    "Cape Town, South Africa": 17,
    
    // Oceania
    "Sydney, Australia": 18,
    "Maldives": 28,
    
    // New cities
    "Berlin, Germany": 10,
    "Munich, Germany": 9,
    "Brussels, Belgium": 11,
    "Bruges, Belgium": 11,
    "Rotterdam, Netherlands": 10,
    "Zurich, Switzerland": 8,
    "Geneva, Switzerland": 9,
    "Moscow, Russia": 5,
    "St. Petersburg, Russia": 4,
    "Milan, Italy": 13,
    "Naples, Italy": 16,
    "Palermo, Italy": 17
  };

  return destinations.map(dest => {
    const updatedDest = { ...dest };
    
    // Add cost estimate if missing
    if (!updatedDest.costEstimate) {
      updatedDest.costEstimate = costEstimates[dest.name] || "$1000-$2500";
    }
    
    // Add temperature if missing
    if (updatedDest.averageTemp === undefined) {
      updatedDest.averageTemp = tempEstimates[dest.name] !== undefined 
        ? tempEstimates[dest.name] 
        : 20; // Default temperature
    }
    
    return updatedDest;
  });
};

// Apply cost estimates to all destination collections
const enhancedAsiaDestinations = addCostEstimates(asiaDestinations);
const enhancedEuropeDestinations = addCostEstimates(europeDestinations);
const enhancedAmericasDestinations = addCostEstimates(americasDestinations);
const enhancedOceaniaDestinations = addCostEstimates(oceaniaDestinations);
const enhancedAfricaDestinations = addCostEstimates(africaDestinations);

// Combine all destinations for export
export const sampleDestinations: Destination[] = [
  ...enhancedAsiaDestinations,
  ...enhancedEuropeDestinations,
  ...enhancedAmericasDestinations,
  ...enhancedOceaniaDestinations,
  ...enhancedAfricaDestinations
];

// Export individual region collections
export { 
  enhancedAsiaDestinations as asiaDestinations, 
  enhancedEuropeDestinations as europeDestinations, 
  enhancedAmericasDestinations as americasDestinations, 
  enhancedOceaniaDestinations as oceaniaDestinations,
  enhancedAfricaDestinations as africaDestinations 
};

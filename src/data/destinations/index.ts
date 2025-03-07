
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
    "Maldives": "$2500-$5000"
  };

  return destinations.map(dest => {
    if (!dest.costEstimate) {
      return {
        ...dest,
        costEstimate: costEstimates[dest.name] || "$1000-$2500"
      };
    }
    return dest;
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

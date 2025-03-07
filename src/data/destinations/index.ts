
import { Destination } from "@/types/destination";
import { asiaDestinations } from "./asia";
import { europeDestinations } from "./europe";
import { americasDestinations } from "./americas";
import { oceaniaDestinations } from "./oceania";

// Combine all destinations for export
export const sampleDestinations: Destination[] = [
  ...asiaDestinations,
  ...europeDestinations,
  ...americasDestinations,
  ...oceaniaDestinations
];

// Export individual region collections
export { asiaDestinations, europeDestinations, americasDestinations, oceaniaDestinations };

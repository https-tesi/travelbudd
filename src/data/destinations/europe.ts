
import { Destination } from "@/types/destination";
import { westernEuropeDestinations } from "./europe/western";
import { southernEuropeDestinations } from "./europe/southern";
import { centralEuropeDestinations } from "./europe/central";
import { easternEuropeDestinations } from "./europe/eastern";

// Combine all European regions into the main export
export const europeDestinations: Destination[] = [
  ...westernEuropeDestinations,
  ...southernEuropeDestinations,
  ...centralEuropeDestinations,
  ...easternEuropeDestinations
];

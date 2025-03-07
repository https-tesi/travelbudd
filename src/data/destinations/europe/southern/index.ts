
import { Destination } from "@/types/destination";
import { italyDestinations } from "./italy";
import { spainDestinations } from "./spain";
import { greeceDestinations } from "./greece";
import { croatiaDestinations } from "./croatia";

// Combine all Southern European countries into one export
export const southernEuropeDestinations: Destination[] = [
  ...greeceDestinations,
  ...italyDestinations,
  ...spainDestinations,
  ...croatiaDestinations
];

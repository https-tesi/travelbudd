
import { useState } from "react";
import { toast } from "sonner";

export const useFlightSearch = (destination: string | undefined, nearestAirport: string | null) => {
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [showFlightSearch, setShowFlightSearch] = useState(false);

  const handleFlightSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!departureDate) {
      toast.error("Please select a departure date");
      return;
    }
    
    const destinationName = destination?.split(',')[0] || "";
    
    const airportCodes: Record<string, string> = {
      "Kyoto": "KIX",
      "Paris": "CDG",
      "Rome": "FCO",
      "Barcelona": "BCN",
      "Santorini": "JTR",
      "New York": "JFK",
      "London": "LHR",
      "Tokyo": "HND",
      "Bali": "DPS",
      "Sydney": "SYD",
      "Moscow": "SVO",
      "St. Petersburg": "LED",
      "Zurich": "ZRH",
      "Milan": "MXP",
      "Istanbul": "IST",
      "Cape Town": "CPT",
      "Marrakech": "RAK"
    };
    
    const destinationCode = airportCodes[destinationName] || destinationName.substring(0, 3).toUpperCase();
    
    toast.info(`Searching flights from ${nearestAirport || "your location"} to ${destinationCode}`);
    
    const formattedDepartureDate = departureDate;
    const formattedReturnDate = returnDate || departureDate;
    
    const url = `https://www.edreams.com/travel/#/results/type=R;from=${nearestAirport || ""};to=${destinationCode};departure=${formattedDepartureDate};return=${formattedReturnDate};adults=1;children=0;infants=0`;
    
    console.log("Opening flight search URL:", url);
    window.open(url, '_blank');
    
    toast.success("Redirecting to eDreams flight booking...");
  };

  return {
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    showFlightSearch,
    setShowFlightSearch,
    handleFlightSearch
  };
};

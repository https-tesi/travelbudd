
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Sparkles, Plane, ChevronDown } from "lucide-react";
import { Destination } from "@/types/destination";
import { toast } from "sonner";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  isGenerating: boolean;
  suggestions: string[];
  showSuggestions: boolean;
  setShowSuggestions: (show: boolean) => void;
  handleSuggestionClick: (suggestion: string) => void;
}

const airportList = {
  "Albania": [
    { code: "TIA", name: "Tirana International Airport" }
  ],
  "Italy": [
    { code: "FCO", name: "Rome Fiumicino" },
    { code: "MXP", name: "Milan Malpensa" },
    { code: "VCE", name: "Venice Marco Polo" }
  ],
  "United Kingdom": [
    { code: "LHR", name: "London Heathrow" },
    { code: "LGW", name: "London Gatwick" },
    { code: "MAN", name: "Manchester" }
  ],
  "France": [
    { code: "CDG", name: "Paris Charles de Gaulle" },
    { code: "ORY", name: "Paris Orly" },
    { code: "NCE", name: "Nice Côte d'Azur" }
  ],
  "Germany": [
    { code: "FRA", name: "Frankfurt" },
    { code: "MUC", name: "Munich" },
    { code: "TXL", name: "Berlin Tegel" }
  ],
  "Spain": [
    { code: "MAD", name: "Madrid Barajas" },
    { code: "BCN", name: "Barcelona El Prat" }
  ],
  "United States": [
    { code: "JFK", name: "New York JFK" },
    { code: "LAX", name: "Los Angeles" },
    { code: "ORD", name: "Chicago O'Hare" }
  ],
  "Japan": [
    { code: "HND", name: "Tokyo Haneda" },
    { code: "NRT", name: "Tokyo Narita" }
  ],
  "Greece": [
    { code: "ATH", name: "Athens International" },
    { code: "JTR", name: "Santorini" }
  ],
  "Netherlands": [
    { code: "AMS", name: "Amsterdam Schiphol" }
  ],
  "Australia": [
    { code: "SYD", name: "Sydney" },
    { code: "MEL", name: "Melbourne" }
  ]
};

const destinationAirports = {
  "Rome": "FCO",
  "Milan": "MXP",
  "Venice": "VCE", 
  "London": "LHR",
  "Paris": "CDG",
  "New York": "JFK",
  "Tokyo": "HND",
  "Kyoto": "KIX",
  "Athens": "ATH",
  "Santorini": "JTR",
  "Barcelona": "BCN",
  "Madrid": "MAD",
  "Amsterdam": "AMS",
  "Sydney": "SYD",
  "Bali": "DPS"
};

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  isGenerating,
  suggestions,
  showSuggestions,
  setShowSuggestions,
  handleSuggestionClick
}: SearchBarProps) => {
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [userCountry, setUserCountry] = useState<string | null>(null);
  const [nearestAirport, setNearestAirport] = useState<string | null>(null);
  const [showFlightSearch, setShowFlightSearch] = useState(false);
  const [destination, setDestination] = useState("");
  const [destinationCode, setDestinationCode] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [availableAirports, setAvailableAirports] = useState<Array<{code: string, name: string}>>([]);
  const [selectedAirport, setSelectedAirport] = useState<{code: string, name: string} | null>(null);

  useEffect(() => {
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            // Use reverse geocoding to get location name
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            );
            const data = await response.json();
            
            // Extract country or city from the response
            const country = data.address?.country;
            const city = data.address?.city || data.address?.town || data.address?.village;
            
            setUserLocation(city ? `${city}, ${country}` : country);
            setUserCountry(country);
            
            // Find nearest airport
            if (country && country in airportList) {
              const countryAirports = airportList[country as keyof typeof airportList];
              setAvailableAirports(countryAirports);
              setSelectedAirport(countryAirports[0]);
              setNearestAirport(countryAirports[0].code);
            } else {
              setNearestAirport("Unknown");
            }
          } catch (error) {
            console.error("Error fetching location:", error);
            setUserLocation("Location not found");
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          setUserLocation("Location access denied");
        }
      );
    } else {
      setUserLocation("Geolocation not supported");
    }
  }, []);
  
  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDestination(value);
    
    // Try to find matching airport code
    const cityName = value.split(',')[0].trim();
    if (cityName in destinationAirports) {
      setDestinationCode(destinationAirports[cityName as keyof typeof destinationAirports]);
    } else {
      // Fallback to first 3 letters
      setDestinationCode(cityName.substring(0, 3).toUpperCase());
    }
  };

  const handleAirportSelect = (airport: {code: string, name: string}) => {
    setSelectedAirport(airport);
    setNearestAirport(airport.code);
  };

  const handleFlightSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!destination || !departureDate) {
      toast.error("Please fill in destination and departure date");
      return;
    }
    
    // Simulate flight search API call
    toast.info(`Searching flights from ${nearestAirport || "your location"} to ${destinationCode}`);
    
    // In a real app, we would call an actual flight API like:
    // const flightResults = await searchFlights(nearestAirport, destination, departureDate, returnDate);
    
    // Redirect to flight booking site as a fallback solution
    setTimeout(() => {
      const url = `https://www.wizzair.com/#/booking/select-flight/${nearestAirport || ""}/${destinationCode}/${departureDate}/${returnDate || departureDate}`;
      window.open(url, '_blank');
      
      toast.success("Redirecting to flight booking...");
    }, 1500);
  };

  return (
    <div>
      {/* Destination search form */}
      <form onSubmit={handleSearch} className="relative mb-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input 
              className="pl-10 bg-white"
              placeholder={userLocation ? `Try 'historical sites near ${userLocation}'` : "Try 'historical sites in Europe' or 'tropical beaches'"}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery && suggestions.length > 0 && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            />
            
            {/* Suggestions dropdown */}
            {showSuggestions && (
              <div className="absolute z-[100] bg-white border border-gray-200 shadow-lg rounded-md w-full mt-1 max-h-60 overflow-auto">
                {suggestions.map((suggestion, index) => (
                  <div 
                    key={index}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-left"
                    onMouseDown={() => handleSuggestionClick(suggestion)}
                  >
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      {suggestion}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Button 
            type="submit" 
            className="flex gap-2"
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                Searching...
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                Find Destinations
              </>
            )}
          </Button>
        </div>
      </form>

      {/* Toggle for flight search */}
      <div className="flex justify-end mb-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFlightSearch(!showFlightSearch)}
          className="flex items-center gap-2"
        >
          <Plane className="h-4 w-4" />
          {showFlightSearch ? "Hide Flight Search" : "Search Flights"}
        </Button>
      </div>

      {/* Flight search form */}
      {showFlightSearch && (
        <form onSubmit={handleFlightSearch} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-1">
              <label htmlFor="departure" className="text-sm font-medium text-gray-700">From</label>
              <div className="relative">
                {availableAirports.length > 1 ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full justify-between bg-gray-50"
                      >
                        {selectedAirport ? `${selectedAirport.code} - ${selectedAirport.name}` : "Select airport"}
                        <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[240px]">
                      {availableAirports.map((airport) => (
                        <DropdownMenuItem 
                          key={airport.code}
                          onClick={() => handleAirportSelect(airport)}
                        >
                          <span className="font-medium">{airport.code}</span> - {airport.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Input 
                    id="departure"
                    value={selectedAirport ? `${selectedAirport.code} - ${selectedAirport.name}` : nearestAirport || ""}
                    className="bg-gray-50"
                    placeholder="Departure airport"
                    disabled
                  />
                )}
              </div>
              {userLocation && (
                <p className="text-xs text-gray-500 mt-1">Based on your location: {userLocation}</p>
              )}
            </div>
            
            <div className="space-y-1">
              <label htmlFor="destination" className="text-sm font-medium text-gray-700">To</label>
              <div className="relative">
                <Input 
                  id="destination"
                  value={destination}
                  onChange={handleDestinationChange}
                  placeholder="Destination city"
                  required
                />
                {destinationCode && (
                  <div className="absolute right-3 top-3 bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs">
                    {destinationCode}
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-1">
              <label htmlFor="departureDate" className="text-sm font-medium text-gray-700">Departure</label>
              <Input 
                id="departureDate"
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="returnDate" className="text-sm font-medium text-gray-700">Return (optional)</label>
              <Input 
                id="returnDate"
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                min={departureDate || new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
          
          <Button type="submit" className="mt-4 w-full">
            <Plane className="h-4 w-4 mr-2" /> Search Flights
          </Button>
        </form>
      )}
    </div>
  );
};

export default SearchBar;

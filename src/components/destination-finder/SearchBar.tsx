
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Sparkles, Plane } from "lucide-react";
import { Destination } from "@/types/destination";
import { toast } from "sonner";

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
  const [nearestAirport, setNearestAirport] = useState<string | null>(null);
  const [showFlightSearch, setShowFlightSearch] = useState(false);
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

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
            
            // Find nearest airport (mock implementation)
            const mockAirports: Record<string, string> = {
              "Albania": "TIA",
              "Italy": "FCO",
              "United Kingdom": "LHR",
              "France": "CDG",
              "Germany": "FRA",
              "Spain": "MAD",
              "United States": "JFK",
              "Japan": "HND",
              "Greece": "ATH"
            };
            
            setNearestAirport(mockAirports[country as keyof typeof mockAirports] || "Unknown");
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

  const handleFlightSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!destination || !departureDate) {
      toast.error("Please fill in destination and departure date");
      return;
    }
    
    // Simulate flight search API call
    toast.info(`Searching flights from ${nearestAirport || "your location"} to ${destination}`);
    
    // In a real app, we would call an actual flight API like:
    // const flightResults = await searchFlights(nearestAirport, destination, departureDate, returnDate);
    
    // Redirect to flight booking site as a fallback solution
    setTimeout(() => {
      const url = `https://www.wizzair.com/#/booking/select-flight/${nearestAirport || ""}/${destination}/${departureDate}/${returnDate || departureDate}`;
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
              <Input 
                id="departure"
                value={nearestAirport || ""}
                className="bg-gray-50"
                placeholder="Departure airport"
                disabled
              />
              {userLocation && (
                <p className="text-xs text-gray-500 mt-1">Based on your location: {userLocation}</p>
              )}
            </div>
            
            <div className="space-y-1">
              <label htmlFor="destination" className="text-sm font-medium text-gray-700">To</label>
              <Input 
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Destination airport (e.g., FCO for Rome)"
                required
              />
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

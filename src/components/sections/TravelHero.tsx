
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Calendar, DollarSign, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { sampleDestinations } from "@/data/sampleDestinations";

const TravelHero = () => {
  const [destination, setDestination] = useState("");
  const [when, setWhen] = useState("");
  const [budget, setBudget] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { toast } = useToast();
  const destinationFinderRef = useRef<HTMLDivElement>(null);

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDestination(value);
    
    if (value.length > 2) {
      const filtered = sampleDestinations
        .filter(dest => 
          dest.name.toLowerCase().includes(value.toLowerCase()) ||
          dest.description.toLowerCase().includes(value.toLowerCase())
        )
        .map(dest => dest.name)
        .slice(0, 5);
      
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setDestination(suggestion);
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    if (!destination) {
      toast({
        title: "Please enter a destination",
        description: "Let us know where you'd like to go",
        variant: "destructive",
      });
      return;
    }

    const searchParams = new URLSearchParams();
    if (destination) searchParams.set("destination", destination);
    if (when) searchParams.set("when", when);
    if (budget) searchParams.set("budget", budget);
    
    const currentUrl = new URL(window.location.href);
    currentUrl.search = searchParams.toString();
    window.history.pushState({}, '', currentUrl);

    toast({
      title: "Planning your trip to " + destination,
      description: `When: ${when || "Anytime"}, Budget: ${budget || "Flexible"}`,
      variant: "default",
    });

    if (destinationFinderRef.current) {
      destinationFinderRef.current.scrollIntoView({ behavior: "smooth" });
    }

    const searchEvent = new CustomEvent('travelSearch', { 
      detail: { destination, when, budget } 
    });
    document.dispatchEvent(searchEvent);
  };

  const scrollToDestinations = () => {
    if (destinationFinderRef.current) {
      destinationFinderRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAgLTEyYzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTIgMTJjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTJjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bS0xMiAxMmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtMC0xMmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTQiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Dream Trip, <span className="text-blue-200">Designed by AI</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Discover personalized travel recommendations, stunning visuals, and smart itineraries powered by artificial intelligence.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
            <Button 
              className="w-full py-6 text-lg font-semibold bg-blue-500 hover:bg-blue-600 mb-4" 
              onClick={handleSearch}
            >
              <Search className="h-5 w-5 mr-2" /> Search for Travel Deals
            </Button>
              
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="flex items-center border border-white/30 bg-white/5 rounded-lg p-3 focus-within:border-white">
                  <Search className="h-5 w-5 text-white mr-2" />
                  <Input 
                    type="text" 
                    placeholder="Where do you want to go?" 
                    className="w-full outline-none text-white border-0 p-0 focus-visible:ring-0 bg-transparent placeholder:text-white/70"
                    value={destination}
                    onChange={handleDestinationChange}
                    onFocus={() => destination && suggestions.length > 0 && setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  />
                </div>
                
                {/* Suggestions dropdown - Fixed z-index and improved visibility */}
                {showSuggestions && (
                  <div className="absolute z-[100] bg-white border border-gray-200 shadow-lg rounded-md w-full mt-1 max-h-60 overflow-auto">
                    {suggestions.map((suggestion, index) => (
                      <div 
                        key={index}
                        className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-left text-gray-700"
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
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-white/30 bg-white/5 rounded-lg p-3 focus-within:border-white">
                  <Calendar className="h-5 w-5 text-white mr-2" />
                  <Input 
                    type="text" 
                    placeholder="When?" 
                    className="w-full outline-none text-white border-0 p-0 focus-visible:ring-0 bg-transparent placeholder:text-white/70"
                    value={when}
                    onChange={(e) => setWhen(e.target.value)}
                  />
                </div>
                <div className="flex items-center border border-white/30 bg-white/5 rounded-lg p-3 focus-within:border-white">
                  <DollarSign className="h-5 w-5 text-white mr-2" />
                  <Input 
                    type="text" 
                    placeholder="Budget" 
                    className="w-full outline-none text-white border-0 p-0 focus-visible:ring-0 bg-transparent placeholder:text-white/70"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" onClick={handleSearch}>
              Plan Your Trip <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 bg-purple-600 hover:bg-purple-700"
              onClick={scrollToDestinations}
            >
              Explore Destinations
            </Button>
          </div>
        </div>
      </div>
      
      <div ref={destinationFinderRef} />
    </div>
  );
};

export default TravelHero;

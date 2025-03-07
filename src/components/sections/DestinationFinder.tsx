
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Sparkles } from "lucide-react";
import DestinationCard from "@/components/ui/DestinationCard";
import { useNavigate } from "react-router-dom";

// Sample destinations data (would come from API in real app)
const sampleDestinations = [
  {
    id: 1,
    name: "Kyoto, Japan",
    description: "Experience traditional Japanese culture with stunning temples and beautiful gardens.",
    imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1470&auto=format&fit=crop",
    score: 98,
    tags: ["Historical", "Cultural", "Scenic"]
  },
  {
    id: 2,
    name: "Santorini, Greece",
    description: "Breathtaking views of the Aegean Sea from white-washed buildings along volcanic cliffs.",
    imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d3c6071d?q=80&w=1374&auto=format&fit=crop",
    score: 96,
    tags: ["Romantic", "Beach", "Scenic"]
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    description: "Ancient Incan citadel set high in the Andes Mountains, offering spectacular views.",
    imageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1470&auto=format&fit=crop",
    score: 97,
    tags: ["Historical", "Adventure", "Scenic"]
  },
  {
    id: 4,
    name: "Rome, Italy",
    description: "Explore ancient ruins, Renaissance art, and delicious cuisine in the Eternal City.",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1470&auto=format&fit=crop",
    score: 95,
    tags: ["Historical", "Cultural", "Food"]
  },
  {
    id: 5,
    name: "Venice, Italy",
    description: "The unique city built on water with romantic gondola rides and stunning architecture.",
    imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1470&auto=format&fit=crop",
    score: 94,
    tags: ["Romantic", "Cultural", "Scenic"]
  },
  {
    id: 6,
    name: "Florence, Italy",
    description: "Birthplace of the Renaissance with incredible art, architecture, and Tuscan cuisine.",
    imageUrl: "https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?q=80&w=1470&auto=format&fit=crop",
    score: 93,
    tags: ["Historical", "Art", "Food"]
  },
  {
    id: 7,
    name: "Bali, Indonesia",
    description: "Tropical paradise with stunning beaches, lush rice terraces, and spiritual temples.",
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1470&auto=format&fit=crop",
    score: 95,
    tags: ["Beach", "Spiritual", "Nature"]
  },
  {
    id: 8,
    name: "Paris, France",
    description: "The City of Light with iconic landmarks, world-class museums, and gourmet cuisine.",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1473&auto=format&fit=crop",
    score: 97,
    tags: ["Romantic", "Cultural", "Food"]
  }
];

const DestinationFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState(sampleDestinations.slice(0, 3));
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();
  
  // Filter destinations based on search query
  useEffect(() => {
    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase();
      const filtered = sampleDestinations.filter(destination => 
        destination.name.toLowerCase().includes(lowercaseQuery) ||
        destination.description.toLowerCase().includes(lowercaseQuery) ||
        destination.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      );
      setFilteredDestinations(filtered);
      
      // Generate suggestions based on destinations
      const suggestionsList = sampleDestinations
        .filter(d => d.name.toLowerCase().includes(lowercaseQuery))
        .map(d => d.name)
        .slice(0, 5);
        
      setSuggestions(suggestionsList);
      setShowSuggestions(suggestionsList.length > 0);
    } else {
      setFilteredDestinations(sampleDestinations.slice(0, 3));
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    // In a real app, this would trigger an API call
    console.log("Searching for:", searchQuery);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleCategoryClick = (category: string) => {
    setSearchQuery(category);
    // Automatically search when clicking a category
    const filtered = sampleDestinations.filter(destination =>
      destination.tags.some(tag => tag.toLowerCase() === category.toLowerCase())
    );
    setFilteredDestinations(filtered.length > 0 ? filtered : sampleDestinations.slice(0, 3));
  };

  return (
    <div className="py-24 bg-white" id="destination-finder">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Smart Destination Finder</h2>
          <p className="text-gray-600 mb-8">
            Discover perfect destinations based on your interests, budget, and travel style. Our AI analyzes thousands of locations to find your ideal match.
          </p>
          
          <Card className="bg-blue-50 border-blue-100">
            <CardContent className="p-6">
              <form onSubmit={handleSearch} className="relative">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      className="pl-10 bg-white"
                      placeholder="Try 'historical sites in Europe' or 'tropical beaches'"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => searchQuery && setSuggestions.length > 0 && setShowSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    />
                    
                    {/* Suggestions dropdown */}
                    {showSuggestions && (
                      <div className="absolute z-10 bg-white border border-gray-200 shadow-lg rounded-md w-full mt-1 max-h-60 overflow-auto">
                        {suggestions.map((suggestion, index) => (
                          <div 
                            key={index}
                            className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-left"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <Button type="submit" className="flex gap-2">
                    <Sparkles className="h-5 w-5" />
                    Find Destinations
                  </Button>
                </div>
              </form>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full bg-white"
                  onClick={() => handleCategoryClick("Beach")}
                >
                  Beach Getaway
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full bg-white"
                  onClick={() => handleCategoryClick("Historical")}
                >
                  Historical Sites
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full bg-white"
                  onClick={() => handleCategoryClick("Food")}
                >
                  Food & Culture
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full bg-white"
                  onClick={() => handleCategoryClick("Adventure")}
                >
                  Adventure
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full bg-white"
                  onClick={() => handleCategoryClick("Nature")}
                >
                  Nature & Wildlife
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))
          ) : (
            <div className="col-span-3 text-center py-10">
              <p className="text-lg text-gray-500">No destinations found matching your search. Try a different query or browse our popular categories.</p>
            </div>
          )}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="rounded-full"
            onClick={() => setFilteredDestinations(sampleDestinations)}
          >
            Show More Destinations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationFinder;

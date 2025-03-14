
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { sampleDestinations } from "@/data/sampleDestinations";
import { Destination } from "@/types/destination";
import SearchBar from "@/components/destination-finder/SearchBar";
import CategoryFilters from "@/components/destination-finder/CategoryFilters";
import DestinationResults from "@/components/destination-finder/DestinationResults";
import ShowAllButton from "@/components/destination-finder/ShowAllButton";

const DestinationFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(sampleDestinations.slice(0, 3));
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [searchParams, setSearchParams] = useState({
    destination: "",
    when: "",
    budget: ""
  });
  const { toast } = useToast();
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

      // Add Italy-specific suggestions if "ital" is in the query
      if (lowercaseQuery.includes("ital") && !suggestionsList.some(s => s.includes("Rome"))) {
        suggestionsList.push("Rome, Italy");
        suggestionsList.push("Venice, Italy");
        suggestionsList.push("Florence, Italy");
      }
        
      setSuggestions(suggestionsList);
      setShowSuggestions(suggestionsList.length > 0);
    } else {
      setFilteredDestinations(sampleDestinations.slice(0, 3));
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  // Process search parameters from URL or TravelHero search events
  useEffect(() => {
    const handleTravelSearch = (event: any) => {
      const { destination, when, budget } = event.detail;
      
      // Set search params
      setSearchParams({ destination, when, budget });
      
      // If destination is provided, use it as search query
      if (destination) {
        setSearchQuery(destination);
        processAdvancedSearch(destination, when, budget);
      }
    };
    
    document.addEventListener('travelSearch', handleTravelSearch);
    
    // Read URL parameters on initial load
    const urlParams = new URLSearchParams(window.location.search);
    const destination = urlParams.get('destination') || "";
    const when = urlParams.get('when') || "";
    const budget = urlParams.get('budget') || "";
    
    if (destination || when || budget) {
      setSearchParams({ destination, when, budget });
      
      if (destination) {
        setSearchQuery(destination);
        processAdvancedSearch(destination, when, budget);
      }
    }
    
    return () => {
      document.removeEventListener('travelSearch', handleTravelSearch);
    };
  }, []);

  const processAdvancedSearch = (destination: string, when: string, budget: string) => {
    setIsGenerating(true);
    
    setTimeout(() => {
      let filtered = sampleDestinations;
      
      // Filter by destination if provided
      if (destination) {
        const lowercaseDestination = destination.toLowerCase();
        filtered = filtered.filter(d => 
          d.name.toLowerCase().includes(lowercaseDestination) ||
          d.description.toLowerCase().includes(lowercaseDestination)
        );
      }
      
      // Advanced filtering based on month
      if (when) {
        const lowercaseWhen = when.toLowerCase();
        // Simulate season-based filtering
        if (lowercaseWhen.includes('summer') || 
            lowercaseWhen.includes('june') || 
            lowercaseWhen.includes('july') || 
            lowercaseWhen.includes('august')) {
          filtered = filtered.filter(d => 
            d.tags.some(tag => ['Beach', 'Nature'].includes(tag)) ||
            d.name.toLowerCase().includes('greece') ||
            d.name.toLowerCase().includes('italy') ||
            d.name.toLowerCase().includes('bali')
          );
        } else if (lowercaseWhen.includes('winter') || 
                  lowercaseWhen.includes('december') || 
                  lowercaseWhen.includes('january') || 
                  lowercaseWhen.includes('february')) {
          filtered = filtered.filter(d => 
            d.tags.some(tag => ['Urban'].includes(tag)) ||
            d.name.toLowerCase().includes('new york') ||
            d.name.toLowerCase().includes('tokyo')
          );
        }
      }
      
      // Budget-based filtering
      if (budget) {
        const budgetNum = parseInt(budget);
        if (!isNaN(budgetNum)) {
          if (budgetNum < 500) {
            filtered = filtered.filter(d => 
              d.tags.some(tag => ['Urban', 'Cultural'].includes(tag))
            );
          } else if (budgetNum > 2000) {
            filtered = filtered.filter(d => 
              d.tags.some(tag => ['Luxury', 'Romantic'].includes(tag))
            );
          }
        }
      }
      
      setFilteredDestinations(filtered.length > 0 ? filtered : []);
      setIsGenerating(false);
      
      toast({
        title: `Found ${filtered.length} destinations for you`,
        description: when || budget ? 
          `Destinations for ${destination || 'your search'} in ${when || 'any time'} with budget ${budget || 'flexible'}` :
          "Browse the results or refine your search for more options",
        variant: "default",
      });
    }, 1500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    
    if (!searchQuery.trim()) {
      toast({
        title: "Please enter a destination or interest",
        description: "Try entering a location or activity you're interested in",
        variant: "default",
      });
      return;
    }
    
    // Process the search with current searchQuery and any existing searchParams
    processAdvancedSearch(
      searchQuery, 
      searchParams.when, 
      searchParams.budget
    );
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleCategoryClick = (category: string) => {
    setSearchQuery(category);
    setIsGenerating(true);
    
    // Simulate AI-powered category search
    setTimeout(() => {
      // Automatically search when clicking a category
      const filtered = sampleDestinations.filter(destination =>
        destination.tags.some(tag => tag.toLowerCase() === category.toLowerCase())
      );
      setFilteredDestinations(filtered.length > 0 ? filtered : sampleDestinations.slice(0, 3));
      setIsGenerating(false);
      
      toast({
        title: `Exploring ${category} destinations`,
        description: `Found ${filtered.length} places for your ${category.toLowerCase()} adventure`,
        variant: "default",
      });
    }, 1000);
  };

  const handleCardClick = (destinationId: number) => {
    navigate(`/destination/${destinationId}`);
  };

  const handleShowAll = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setFilteredDestinations(sampleDestinations);
      setIsGenerating(false);
      toast({
        title: "Showing all destinations",
        description: "Browse our complete catalog of amazing places",
        variant: "default",
      });
    }, 800);
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
              <SearchBar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
                isGenerating={isGenerating}
                suggestions={suggestions}
                showSuggestions={showSuggestions}
                setShowSuggestions={setShowSuggestions}
                handleSuggestionClick={handleSuggestionClick}
              />
              
              <CategoryFilters handleCategoryClick={handleCategoryClick} />
            </CardContent>
          </Card>
        </div>
        
        <DestinationResults 
          isGenerating={isGenerating}
          filteredDestinations={filteredDestinations}
          handleCardClick={handleCardClick}
          searchParams={searchParams}
        />
        
        <ShowAllButton onShowAll={handleShowAll} />
      </div>
    </div>
  );
};

export default DestinationFinder;

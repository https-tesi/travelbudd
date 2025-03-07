
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Sparkles } from "lucide-react";
import { Destination } from "@/types/destination";

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
  return (
    <form onSubmit={handleSearch} className="relative">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input 
            className="pl-10 bg-white"
            placeholder="Try 'historical sites in Europe' or 'tropical beaches'"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery && suggestions.length > 0 && setShowSuggestions(true)}
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
  );
};

export default SearchBar;

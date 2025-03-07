
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Sparkles } from "lucide-react";
import DestinationCard from "@/components/ui/DestinationCard";

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
  }
];

const DestinationFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [destinations, setDestinations] = useState(sampleDestinations);

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
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    className="pl-10 bg-white"
                    placeholder="Try 'historical sites in Europe' or 'tropical beaches'"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button className="flex gap-2">
                  <Sparkles className="h-5 w-5" />
                  Find Destinations
                </Button>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="rounded-full bg-white">
                  Beach Getaway
                </Button>
                <Button variant="outline" size="sm" className="rounded-full bg-white">
                  Historical Sites
                </Button>
                <Button variant="outline" size="sm" className="rounded-full bg-white">
                  Food & Culture
                </Button>
                <Button variant="outline" size="sm" className="rounded-full bg-white">
                  Adventure
                </Button>
                <Button variant="outline" size="sm" className="rounded-full bg-white">
                  Nature & Wildlife
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full">
            Show More Destinations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationFinder;

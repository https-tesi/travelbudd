
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Destination } from "@/types/destination";
import DestinationCard from "@/components/ui/DestinationCard";
import { Heart } from "lucide-react";

const Favorites = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<Destination[]>([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const handleCardClick = (destinationId: number) => {
    navigate(`/destination/${destinationId}`);
  };

  const getFilteredFavorites = () => {
    if (activeTab === "all") return favorites;
    return favorites.filter(destination => 
      destination.tags.some(tag => tag.toLowerCase() === activeTab)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Your Favorite Destinations</h1>
          <p className="text-lg text-gray-600 text-center">
            Places you've saved for your future adventures
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16 bg-blue-50 rounded-lg">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No favorites yet</h2>
            <p className="text-gray-600 mb-6">
              Start adding destinations to your favorites to see them here.
            </p>
            <button 
              onClick={() => navigate('/')} 
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Explore Destinations
            </button>
          </div>
        ) : (
          <>
            <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="beach">Beaches</TabsTrigger>
                  <TabsTrigger value="city">Cities</TabsTrigger>
                  <TabsTrigger value="nature">Nature</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all"></TabsContent>
              <TabsContent value="beach"></TabsContent>
              <TabsContent value="city"></TabsContent>
              <TabsContent value="nature"></TabsContent>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredFavorites().map(destination => (
                <div 
                  key={destination.id} 
                  onClick={() => handleCardClick(destination.id)}
                  className="cursor-pointer"
                >
                  <DestinationCard destination={destination} />
                </div>
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Favorites;

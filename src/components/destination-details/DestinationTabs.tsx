
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Utensils, Hotel, ExternalLink } from "lucide-react";
import { Destination } from "@/types/destination";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface DestinationTabsProps {
  destination: Destination;
  handleAccommodationBooking: (accommodation: { name: string; description: string; type: string }) => void;
}

const DestinationTabs = ({ destination, handleAccommodationBooking }: DestinationTabsProps) => {
  return (
    <Tabs defaultValue="attractions" className="mb-8">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="attractions">
          <Camera className="h-4 w-4 mr-2" />
          Attractions
        </TabsTrigger>
        <TabsTrigger value="restaurants">
          <Utensils className="h-4 w-4 mr-2" />
          Restaurants
        </TabsTrigger>
        <TabsTrigger value="accommodations">
          <Hotel className="h-4 w-4 mr-2" />
          Stay
        </TabsTrigger>
      </TabsList>
      <TabsContent value="attractions" className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {destination.attractions.map((attraction, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{attraction.name}</h3>
                <div className="text-sm text-blue-600 mb-2">{attraction.type}</div>
                <p className="text-gray-600 text-sm">{attraction.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="restaurants" className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {destination.restaurants && destination.restaurants.length > 0 ? (
            destination.restaurants.map((restaurant, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                  <div className="text-sm text-blue-600 mb-2">
                    {restaurant.cuisine ? `${restaurant.type} • ${restaurant.cuisine}` : restaurant.type}
                  </div>
                  <p className="text-gray-600 text-sm">{restaurant.description}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-2 text-center py-10">
              <p className="text-gray-500">No restaurant information available for this destination.</p>
            </div>
          )}
        </div>
      </TabsContent>
      <TabsContent value="accommodations" className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {destination.accommodations && destination.accommodations.length > 0 ? (
            destination.accommodations.map((accommodation, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{accommodation.name}</h3>
                  <div className="text-sm text-blue-600 mb-2">{accommodation.type}</div>
                  <p className="text-gray-600 text-sm">{accommodation.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    {accommodation.pricePerNight && (
                      <span className="text-sm font-medium">${accommodation.pricePerNight}/night</span>
                    )}
                    <Button 
                      size="sm" 
                      onClick={() => handleAccommodationBooking(accommodation)}
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Book on Booking.com
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-2 text-center py-10">
              <p className="text-gray-500">No accommodation information available for this destination.</p>
              <Button 
                className="mt-4 flex items-center gap-1"
                onClick={() => {
                  const query = encodeURIComponent(destination.name);
                  window.open(`https://www.booking.com/searchresults.html?ss=${query}`, '_blank');
                  toast.success(`Opening Booking.com to find accommodations in ${destination.name}`);
                }}
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Search on Booking.com
              </Button>
            </div>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default DestinationTabs;

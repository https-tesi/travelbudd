
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Destination } from "@/types/destination";
import { MapPin, Plane, Globe, DollarSign, Thermometer, Hotel, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { getDestinationInfo } from "@/utils/destination-utils";

interface DestinationSidebarProps {
  destination: Destination;
  userLocation: string | null;
  nearestAirport: string | null;
  destinationTemp: number;
  handleFlightSearch: (e: React.FormEvent) => void;
  setDepartureDate: (date: string) => void;
  setReturnDate: (date: string) => void;
  departureDate: string;
  returnDate: string;
  showFlightSearch: boolean;
  setShowFlightSearch: (show: boolean) => void;
}

const DestinationSidebar = ({
  destination,
  userLocation,
  nearestAirport,
  destinationTemp,
  handleFlightSearch,
  setDepartureDate,
  setReturnDate,
  departureDate,
  returnDate,
  showFlightSearch,
  setShowFlightSearch
}: DestinationSidebarProps) => {
  return (
    <div className="lg:w-1/4">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Plan Your Trip</h2>
          <button 
            onClick={() => setShowFlightSearch(!showFlightSearch)}
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
          >
            <Plane className="h-4 w-4" />
            Find Flights
          </button>
        </div>
        
        {showFlightSearch && (
          <form onSubmit={handleFlightSearch} className="mb-4">
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Location</label>
              <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-gray-50">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-sm">{userLocation || "Loading your location..."}</span>
              </div>
            </div>
            
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Departure Date</label>
              <Input 
                type="date" 
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Return Date (Optional)</label>
              <Input 
                type="date" 
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                min={departureDate || new Date().toISOString().split('T')[0]}
                className="w-full"
              />
            </div>
            
            <Button type="submit" className="w-full">
              <Plane className="h-4 w-4 mr-2" />
              Search Flights
            </Button>
          </form>
        )}
        
        <div className="border-t pt-4">
          <h3 className="font-medium mb-2">About {destination.name}</h3>
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <Globe className="h-4 w-4 mr-2 text-gray-500" />
              <span>{getDestinationInfo(destination.name).language}</span>
            </div>
            <div className="flex items-center text-sm">
              <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
              <span>{getDestinationInfo(destination.name).currency}</span>
            </div>
            <div className="flex items-center text-sm">
              <Thermometer className="h-4 w-4 mr-2 text-gray-500" />
              <span>Average Temperature: {destinationTemp}°C</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Why Visit {destination.name}?</h2>
        <ul className="space-y-2">
          {destination.tags.map((tag, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mt-0.5">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">Find Accommodations</h2>
        <p className="text-sm text-gray-600 mb-4">
          Discover the best places to stay in {destination.name} with our partner Booking.com
        </p>
        <Button 
          className="w-full flex items-center gap-1"
          onClick={() => {
            const query = encodeURIComponent(destination.name);
            window.open(`https://www.booking.com/searchresults.html?ss=${query}`, '_blank');
            toast.success(`Opening Booking.com to find accommodations in ${destination.name}`);
          }}
        >
          <Hotel className="h-4 w-4 mr-1" />
          Find Hotels on Booking.com
        </Button>
      </div>
    </div>
  );
};

export default DestinationSidebar;

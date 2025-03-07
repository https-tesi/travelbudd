
import { useState, useEffect } from "react";
import { Info } from "lucide-react";
import { Destination } from "@/types/destination";
import DestinationCard from "@/components/ui/DestinationCard";

interface SearchParamsType {
  destination: string;
  when: string;
  budget: string;
  departureAirport?: string;
}

interface DestinationResultsProps {
  isGenerating: boolean;
  filteredDestinations: Destination[];
  handleCardClick: (destinationId: number) => void;
  searchParams?: SearchParamsType;
}

const DestinationResults = ({
  isGenerating,
  filteredDestinations,
  handleCardClick,
  searchParams = { destination: "", when: "", budget: "" }
}: DestinationResultsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {/* Show search parameters if they exist */}
      {(searchParams.destination || searchParams.when || searchParams.budget || searchParams.departureAirport) && (
        <div className="col-span-full bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-1">Your search:</h3>
          <div className="flex flex-wrap gap-2">
            {searchParams.destination && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Destination: {searchParams.destination}
              </span>
            )}
            {searchParams.when && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                When: {searchParams.when}
              </span>
            )}
            {searchParams.budget && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Budget: {searchParams.budget}
              </span>
            )}
            {searchParams.departureAirport && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                From: {searchParams.departureAirport}
              </span>
            )}
          </div>
        </div>
      )}
      
      {isGenerating && (
        <div className="col-span-3 flex flex-col items-center justify-center py-12">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
          <p className="text-lg text-gray-600">Our AI is finding perfect destinations for you...</p>
        </div>
      )}
      
      {!isGenerating && filteredDestinations.length > 0 ? (
        filteredDestinations.map((destination) => (
          <div key={destination.id} onClick={() => handleCardClick(destination.id)} className="cursor-pointer">
            <DestinationCard destination={destination} />
          </div>
        ))
      ) : (
        !isGenerating && (
          <div className="col-span-3 text-center py-10">
            <Info className="mx-auto h-12 w-12 text-blue-400 mb-4" />
            <p className="text-lg text-gray-500">No destinations found matching your search. Try a different query or browse our popular categories.</p>
          </div>
        )
      )}
    </div>
  );
};

export default DestinationResults;

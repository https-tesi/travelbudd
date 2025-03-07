
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Destination } from "@/types/destination";

interface DestinationInfoProps {
  destination: Destination;
  onExplore: (e: React.MouseEvent) => void;
}

export const DestinationInfo = ({ destination, onExplore }: DestinationInfoProps) => {
  return (
    <CardContent className="p-5">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-semibold">{destination.name}</h3>
      </div>
      <div className="flex items-center text-gray-500 text-sm mb-3">
        <MapPin className="h-3 w-3 mr-1" />
        <span>{destination.name.split(",")[1]?.trim() || "Destination"}</span>
      </div>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {destination.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {destination.tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <Button className="w-full" variant="outline" onClick={onExplore}>
        <span>Explore</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </CardContent>
  );
};

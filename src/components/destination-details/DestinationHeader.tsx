
import { Thermometer, DollarSign, MapPin } from "lucide-react";
import { Destination } from "@/types/destination";

interface DestinationHeaderProps {
  destination: Destination;
  activeImage: string;
  destinationTemp: number;
  costEstimate: string;
  setActiveImage: (url: string) => void;
}

const DestinationHeader = ({ 
  destination, 
  activeImage, 
  destinationTemp, 
  costEstimate,
  setActiveImage
}: DestinationHeaderProps) => {
  return (
    <div className="h-[40vh] md:h-[60vh] relative overflow-hidden">
      <img 
        src={activeImage} 
        alt={destination.name}
        className="w-full h-full object-cover"
        onError={() => {
          setActiveImage(destination.imageUrl);
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-sm mb-2 opacity-90">
            <MapPin className="h-4 w-4" />
            <span>{destination.name.includes(',') ? destination.name.split(',')[1]?.trim() : 'Destination'}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{destination.name}</h1>
          <div className="flex flex-wrap items-center gap-3 md:gap-6">
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              <Thermometer className="h-4 w-4" />
              <span>Weather: {destinationTemp}°C</span>
            </div>
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              <DollarSign className="h-4 w-4" />
              <span>Cost: {costEstimate}</span>
            </div>
            {destination.tags && destination.tags.map((tag, index) => (
              <div key={index} className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationHeader;

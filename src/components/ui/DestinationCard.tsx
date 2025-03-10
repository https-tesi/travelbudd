
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Destination } from "@/types/destination";
import { useFavoriteStatus } from "./destination-card/useFavoriteStatus";
import { ImageDisplay } from "./destination-card/ImageDisplay";
import { DestinationInfo } from "./destination-card/DestinationInfo";

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  const navigate = useNavigate();
  const { isFavorite, setIsFavorite } = useFavoriteStatus(destination.id);

  const handleExplore = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the parent onClick from firing
    console.log(`Navigating to destination/${destination.id}`);
    navigate(`/destination/${destination.id}`);
  };
  
  const handleCardClick = () => {
    console.log(`Card clicked for destination ${destination.id}`);
    navigate(`/destination/${destination.id}`);
  };
  
  return (
    <Card 
      className="overflow-hidden group hover:shadow-md transition-all cursor-pointer h-full flex flex-col"
      onClick={handleCardClick}
    >
      <div className="flex-shrink-0">
        <ImageDisplay 
          destination={destination} 
          isFavorite={isFavorite} 
          setIsFavorite={setIsFavorite} 
        />
      </div>
      <div className="flex-grow flex flex-col">
        <DestinationInfo 
          destination={destination} 
          onExplore={handleExplore} 
        />
      </div>
    </Card>
  );
};

export default DestinationCard;


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
  
  return (
    <Card 
      className="overflow-hidden group hover:shadow-md transition-all"
      onClick={() => navigate(`/destination/${destination.id}`)}
    >
      <ImageDisplay 
        destination={destination} 
        isFavorite={isFavorite} 
        setIsFavorite={setIsFavorite} 
      />
      <DestinationInfo 
        destination={destination} 
        onExplore={handleExplore} 
      />
    </Card>
  );
};

export default DestinationCard;

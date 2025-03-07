
import { Button } from "@/components/ui/button";

interface ShowAllButtonProps {
  onShowAll: () => void;
}

const ShowAllButton = ({ onShowAll }: ShowAllButtonProps) => {
  return (
    <div className="text-center mt-12">
      <Button 
        variant="outline" 
        className="rounded-full"
        onClick={onShowAll}
      >
        Show All Destinations
      </Button>
    </div>
  );
};

export default ShowAllButton;

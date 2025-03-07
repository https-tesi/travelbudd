
import { Button } from "@/components/ui/button";

interface ShowAllButtonProps {
  onShowAll: () => void;
}

const ShowAllButton = ({ onShowAll }: ShowAllButtonProps) => {
  return (
    <div className="text-center mt-12">
      <Button 
        variant="default" 
        className="rounded-full bg-blue-600 hover:bg-blue-700 text-white"
        onClick={onShowAll}
      >
        Show All Destinations
      </Button>
    </div>
  );
};

export default ShowAllButton;

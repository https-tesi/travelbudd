
import { Button } from "@/components/ui/button";

interface CategoryFiltersProps {
  handleCategoryClick: (category: string) => void;
}

const CategoryFilters = ({ handleCategoryClick }: CategoryFiltersProps) => {
  const categories = [
    "Beach Getaway",
    "Historical Sites",
    "Food & Culture",
    "Adventure",
    "Nature & Wildlife"
  ];

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {categories.map((category, index) => {
        const categoryValue = category === "Food & Culture" ? "Food" : 
                            category === "Nature & Wildlife" ? "Nature" : 
                            category === "Beach Getaway" ? "Beach" : 
                            category === "Historical Sites" ? "Historical" : "Adventure";
        
        return (
          <Button 
            key={index}
            variant="outline" 
            size="sm" 
            className="rounded-full bg-white"
            onClick={() => handleCategoryClick(categoryValue)}
          >
            {category}
          </Button>
        );
      })}
    </div>
  );
};

export default CategoryFilters;

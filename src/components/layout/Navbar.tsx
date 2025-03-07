
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X, Heart, ArrowLeft } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if we're on a detail page to show the back button
  const isDetailPage = location.pathname.includes("/destination/");
  
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isDetailPage && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleBack}
              className="mr-2"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
            <Globe className="h-6 w-6" />
            <span>TravelAI</span>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/favorites" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
            <Heart className="h-4 w-4" /> Favorites
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-b border-gray-100 shadow-sm">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/favorites" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
              <Heart className="h-4 w-4" /> Favorites
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

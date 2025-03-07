
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DestinationHeader from "@/components/destination-details/DestinationHeader";
import DestinationGallery from "@/components/destination-details/DestinationGallery";
import DestinationAbout from "@/components/destination-details/DestinationAbout";
import DestinationTabs from "@/components/destination-details/DestinationTabs";
import DestinationSidebar from "@/components/destination-details/DestinationSidebar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useDestinationDetails } from "@/hooks/useDestinationDetails";
import { useAccommodationBooking } from "@/hooks/useAccommodationBooking";
import { useFlightSearch } from "@/hooks/useFlightSearch";
import { Toaster } from "sonner";
import { AlertTriangle } from "lucide-react";

const DestinationDetails = () => {
  const { id } = useParams();
  const destinationId = parseInt(id || "1", 10);
  
  const {
    destination,
    activeImage,
    setActiveImage,
    galleryImages,
    imageError,
    handleImageError,
    isLoading,
    destinationTemp,
    costEstimate,
    averageRating,
    accommodations,
    attractions
  } = useDestinationDetails(destinationId);

  const { handleAccommodationBooking } = useAccommodationBooking(destination?.name);
  const { handleFlightSearch } = useFlightSearch(destination?.name);

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading || !destination) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            {isLoading ? (
              <>
                <div className="animate-pulse h-12 w-48 bg-gray-300 rounded-md mx-auto mb-4"></div>
                <p className="text-gray-600">Loading destination details...</p>
              </>
            ) : (
              <>
                <AlertTriangle className="h-10 w-10 text-red-500 mx-auto mb-4" />
                <p className="text-red-500">Failed to load destination details.</p>
              </>
            )}
          </div>
        </main>
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Destination Header */}
        <DestinationHeader 
          destination={destination}
          activeImage={activeImage}
          destinationTemp={destinationTemp}
          costEstimate={costEstimate}
          setActiveImage={setActiveImage}
        />
        
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content area */}
            <div className="flex-1">
              {/* Gallery */}
              <div className="mb-6">
                <h2 className="font-semibold mb-4">Gallery</h2>
                <DestinationGallery 
                  galleryImages={galleryImages}
                  activeImage={activeImage}
                  setActiveImage={setActiveImage}
                  imageError={imageError}
                  handleImageError={handleImageError}
                />
              </div>
              
              {/* About */}
              <DestinationAbout 
                destination={destination}
                averageRating={averageRating}
              />
              
              {/* Tabs for Accommodations, Attractions, etc. */}
              <DestinationTabs 
                destination={destination}
                accommodations={accommodations}
                attractions={attractions}
                handleAccommodationBooking={handleAccommodationBooking}
              />
            </div>
            
            {/* Sidebar */}
            <DestinationSidebar 
              destination={destination}
              handleFlightSearch={handleFlightSearch}
            />
          </div>
        </div>
      </main>
      
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default DestinationDetails;

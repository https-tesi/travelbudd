
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { useDestinationDetails } from "@/hooks/useDestinationDetails";
import { useLocationData } from "@/hooks/useLocationData";
import { useFlightSearch } from "@/hooks/useFlightSearch";
import { useAccommodationBooking } from "@/hooks/useAccommodationBooking";
import DestinationHeader from "@/components/destination-details/DestinationHeader";
import DestinationAbout from "@/components/destination-details/DestinationAbout";
import DestinationTabs from "@/components/destination-details/DestinationTabs";
import DestinationSidebar from "@/components/destination-details/DestinationSidebar";

const DestinationDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const {
    destination,
    loading,
    activeImage,
    setActiveImage,
    galleryImages,
    imageError,
    handleImageError,
    destinationTemp,
    costEstimate
  } = useDestinationDetails(id);
  
  const { userLocation, nearestAirport } = useLocationData();
  
  const {
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    showFlightSearch,
    setShowFlightSearch,
    handleFlightSearch
  } = useFlightSearch(destination?.name, nearestAirport);
  
  const { handleAccommodationBooking } = useAccommodationBooking(destination?.name);

  if (!loading && !destination) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Destination Not Found</h1>
          <p className="text-gray-600 mb-8">We couldn't find the destination you're looking for.</p>
          <Button onClick={() => navigate('/')}>
            Return to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (loading || !destination) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">Loading destination details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pb-16">
        <DestinationHeader 
          destination={destination}
          activeImage={activeImage}
          destinationTemp={destinationTemp || 20}
          costEstimate={costEstimate || ""}
          setActiveImage={setActiveImage}
        />
        
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <DestinationAbout 
                destination={destination}
                galleryImages={galleryImages}
                activeImage={activeImage}
                setActiveImage={setActiveImage}
                imageError={imageError}
                handleImageError={handleImageError}
              />
              
              <DestinationTabs 
                destination={destination}
                handleAccommodationBooking={handleAccommodationBooking}
              />
            </div>
            
            <DestinationSidebar 
              destination={destination}
              userLocation={userLocation}
              nearestAirport={nearestAirport}
              destinationTemp={destinationTemp || 20}
              handleFlightSearch={handleFlightSearch}
              setDepartureDate={setDepartureDate}
              setReturnDate={setReturnDate}
              departureDate={departureDate}
              returnDate={returnDate}
              showFlightSearch={showFlightSearch}
              setShowFlightSearch={setShowFlightSearch}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DestinationDetails;

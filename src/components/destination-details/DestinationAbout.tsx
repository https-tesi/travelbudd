
import { Globe, DollarSign } from "lucide-react";
import { Destination } from "@/types/destination";
import { getDestinationInfo } from "@/utils/destination-utils";
import DestinationGallery from "./DestinationGallery";

interface DestinationAboutProps {
  destination: Destination;
  galleryImages: string[];
  activeImage: string;
  setActiveImage: (url: string) => void;
  imageError: boolean;
  handleImageError: (index: number) => void;
}

const DestinationAbout = ({
  destination,
  galleryImages,
  activeImage,
  setActiveImage,
  imageError,
  handleImageError
}: DestinationAboutProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">About {destination.name}</h2>
      <p className="text-gray-700 mb-6">{destination.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-start gap-3">
          <Globe className="h-5 w-5 text-blue-500 mt-0.5" />
          <div>
            <h3 className="font-medium">Language</h3>
            <p className="text-gray-600 text-sm">{getDestinationInfo(destination.name).language}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <DollarSign className="h-5 w-5 text-blue-500 mt-0.5" />
          <div>
            <h3 className="font-medium">Currency</h3>
            <p className="text-gray-600 text-sm">{getDestinationInfo(destination.name).currency}</p>
          </div>
        </div>
      </div>
      
      <DestinationGallery 
        galleryImages={galleryImages}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        imageError={imageError}
        handleImageError={handleImageError}
      />
    </div>
  );
};

export default DestinationAbout;


import { Globe, DollarSign } from "lucide-react";
import { Destination } from "@/types/destination";
import { getDestinationInfo } from "@/utils/destination-utils";

interface DestinationAboutProps {
  destination: Destination;
  averageRating: number;
}

const DestinationAbout = ({
  destination,
  averageRating
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
      
      <div className="flex items-center mb-2">
        <div className="flex items-center mr-2">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-4 h-4 ${i < Math.floor(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-gray-600 text-sm">{averageRating.toFixed(1)} out of 5</span>
      </div>
    </div>
  );
};

export default DestinationAbout;

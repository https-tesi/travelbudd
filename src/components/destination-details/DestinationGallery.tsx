
import { ImageOff } from "lucide-react";

interface DestinationGalleryProps {
  galleryImages: string[];
  activeImage: string;
  setActiveImage: (url: string) => void;
  imageError: boolean;
  handleImageError: (index: number) => void;
}

const DestinationGallery = ({ 
  galleryImages, 
  activeImage, 
  setActiveImage, 
  imageError,
  handleImageError 
}: DestinationGalleryProps) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-2">
        {galleryImages.map((image, index) => (
          <div 
            key={index}
            className={`aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
              activeImage === image ? 'border-blue-500 scale-[1.02]' : 'border-transparent hover:border-gray-300'
            }`}
            onClick={() => setActiveImage(image)}
          >
            <img 
              src={image} 
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
              onError={() => handleImageError(index)}
            />
          </div>
        ))}
      </div>
      
      {imageError && (
        <div className="flex items-center gap-2 text-amber-600 mt-2 text-sm">
          <ImageOff className="h-4 w-4" />
          <span>Some images couldn't be loaded. Showing alternative images.</span>
        </div>
      )}
    </>
  );
};

export default DestinationGallery;

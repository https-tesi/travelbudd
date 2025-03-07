
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, DollarSign, Map, PenTool, Camera } from "lucide-react";

const HowItWorks = () => {
  const features = [
    {
      icon: <MapPin className="h-10 w-10 p-2 bg-blue-100 text-blue-600 rounded-lg" />,
      title: "Smart Destination Finder",
      description: "Enter your interests and preferences, and our AI suggests the perfect destination tailored just for you."
    },
    {
      icon: <Calendar className="h-10 w-10 p-2 bg-indigo-100 text-indigo-600 rounded-lg" />,
      title: "AI-Generated Itinerary",
      description: "Get a complete day-by-day travel plan with attractions, restaurants, and hidden gems automatically generated."
    },
    {
      icon: <Camera className="h-10 w-10 p-2 bg-purple-100 text-purple-600 rounded-lg" />,
      title: "AI Destination Previews",
      description: "See stunning AI-generated images of your destination to visualize your upcoming experiences."
    },
    {
      icon: <DollarSign className="h-10 w-10 p-2 bg-green-100 text-green-600 rounded-lg" />,
      title: "Budget Estimation",
      description: "Receive accurate cost breakdowns for flights, accommodations, activities, and meals in your destination."
    },
    {
      icon: <Map className="h-10 w-10 p-2 bg-orange-100 text-orange-600 rounded-lg" />,
      title: "Interactive Maps",
      description: "Explore your itinerary on interactive maps with points of interest, routes, and proximity information."
    },
    {
      icon: <PenTool className="h-10 w-10 p-2 bg-pink-100 text-pink-600 rounded-lg" />,
      title: "Customization Tools",
      description: "Easily modify any aspect of your trip plan with our intuitive editing and customization tools."
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How TravelAI Works</h2>
          <p className="text-gray-600 mb-0">
            Our AI-powered platform makes planning your dream trip effortless and enjoyable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 text-white">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to plan your perfect trip?</h3>
                <p className="text-blue-100 mb-6 md:pr-12">
                  Start using TravelAI today and experience the future of travel planning with personalized recommendations and AI-generated visuals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3 hidden md:block">
                <div className="relative">
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500 rounded-full opacity-20"></div>
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500 rounded-full opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

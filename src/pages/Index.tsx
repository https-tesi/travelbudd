
import { Button } from "@/components/ui/button";
import TravelHero from "@/components/sections/TravelHero";
import DestinationFinder from "@/components/sections/DestinationFinder";
import HowItWorks from "@/components/sections/HowItWorks";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <main>
        <TravelHero />
        <div id="destination-finder">
          <DestinationFinder />
        </div>
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Calendar, Utensils, Camera, Lightbulb, Home, MapPin, Bus } from "lucide-react";

interface AIGeneratedCityGuideProps {
  cityName: string;
}

const AIGeneratedCityGuide = ({ cityName }: AIGeneratedCityGuideProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cityData, setCityData] = useState<any>(null);
  
  useEffect(() => {
    setIsLoading(true);
    // Simulate API call to get AI-generated content
    setTimeout(() => {
      setCityData(getCityData(cityName));
      setIsLoading(false);
    }, 1000);
  }, [cityName]);
  
  if (isLoading) {
    return (
      <Card className="w-full mb-6">
        <CardHeader className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded-md w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="h-4 bg-gray-200 rounded-md w-full"></div>
          <div className="h-4 bg-gray-200 rounded-md w-full"></div>
          <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="w-full mb-6">
      <CardHeader>
        <CardTitle>AI-Generated City Guide: {cityName}</CardTitle>
        <CardDescription>Personalized insights and recommendations by our AI travel planner</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="w-full grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="when-to-visit">When to Visit</TabsTrigger>
            <TabsTrigger value="neighborhoods">Neighborhoods</TabsTrigger>
            <TabsTrigger value="transport">Getting Around</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="text-sm text-gray-600 leading-relaxed">
              <p className="mb-3">{cityData?.overview.description}</p>
              
              <h4 className="text-md font-medium mb-2 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-amber-500" /> 
                Quick Facts
              </h4>
              <ul className="list-disc pl-6 space-y-1">
                {cityData?.overview.facts.map((fact: string, i: number) => (
                  <li key={i}>{fact}</li>
                ))}
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="when-to-visit" className="space-y-4">
            <div className="text-sm text-gray-600 leading-relaxed">
              <div className="mb-3">
                <h4 className="text-md font-medium mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  Best Time to Visit
                </h4>
                <p>{cityData?.whenToVisit.best}</p>
              </div>
              
              <div className="space-y-3">
                {cityData?.whenToVisit.seasons.map((season: any, i: number) => (
                  <div key={i} className="border-l-2 border-blue-200 pl-3">
                    <h5 className="font-medium text-gray-800">{season.name}</h5>
                    <p className="text-sm">{season.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="neighborhoods" className="space-y-4">
            <div className="text-sm text-gray-600 leading-relaxed">
              <p className="mb-3">{cityData?.neighborhoods.description}</p>
              
              <div className="space-y-3">
                {cityData?.neighborhoods.areas.map((area: any, i: number) => (
                  <div key={i} className="p-3 border border-gray-100 rounded-md">
                    <h5 className="font-medium text-gray-800 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-red-500" />
                      {area.name}
                    </h5>
                    <p className="text-sm mt-1">{area.description}</p>
                    <p className="text-xs text-gray-500 mt-1">Best for: {area.bestFor}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="transport" className="space-y-4">
            <div className="text-sm text-gray-600 leading-relaxed">
              <p className="mb-3">{cityData?.transport.overview}</p>
              
              <div className="space-y-3">
                {cityData?.transport.options.map((option: any, i: number) => (
                  <div key={i} className="p-3 border border-gray-100 rounded-md flex gap-3">
                    <Bus className="h-5 w-5 text-purple-500 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-medium text-gray-800">{option.name}</h5>
                      <p className="text-sm">{option.description}</p>
                      {option.cost && (
                        <p className="text-xs text-gray-500 mt-1">Cost: {option.cost}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

// Mock data function (would be replaced with AI-generated content API)
const getCityData = (cityName: string) => {
  const cityData: Record<string, any> = {
    "Kyoto": {
      overview: {
        description: "Kyoto, once the capital of Japan for over a thousand years, is a living museum of Japanese culture and tradition. With more than 1,600 Buddhist temples, 400 Shinto shrines, and 17 UNESCO World Heritage sites, Kyoto offers an unparalleled glimpse into Japan's rich history while maintaining its position as a modern city.",
        facts: [
          "Kyoto was spared from air raids during WWII due to its cultural significance",
          "The city follows a grid pattern inspired by ancient Chinese cities",
          "Kyoto is home to many traditional arts including tea ceremony, ikebana, and geisha culture",
          "The Gion Matsuri, held each July, is one of Japan's most famous festivals"
        ]
      },
      whenToVisit: {
        best: "Spring (March-May) for cherry blossoms and Fall (October-November) for autumn colors offer the most spectacular scenery, though these are also the busiest seasons. Early June and late September provide good weather with fewer crowds.",
        seasons: [
          {
            name: "Spring (March-May)",
            description: "Cherry blossom season transforms Kyoto into a pink wonderland. Temperatures are mild and comfortable for sightseeing."
          },
          {
            name: "Summer (June-August)",
            description: "Hot and humid with occasional rainfall. Many festivals take place during this time, including the famous Gion Matsuri in July."
          },
          {
            name: "Fall (September-November)",
            description: "The autumn foliage turns temples and gardens into a canvas of red, orange, and gold. Comfortable temperatures and clear skies."
          },
          {
            name: "Winter (December-February)",
            description: "Cold with occasional snow, creating magical scenes at temples. Far fewer tourists and special illumination events at various sites."
          }
        ]
      },
      neighborhoods: {
        description: "Kyoto's districts each offer unique experiences, from the historic preservation of Higashiyama to the modern bustle of Downtown.",
        areas: [
          {
            name: "Higashiyama",
            description: "The eastern mountains area preserves Kyoto's historical atmosphere with narrow lanes, wooden buildings, and many important temples.",
            bestFor: "Traditional atmosphere, photography, cultural immersion"
          },
          {
            name: "Gion",
            description: "Kyoto's famous geisha district with preserved machiya townhouses, exclusive restaurants, and occasional geiko (Kyoto's geisha) sightings.",
            bestFor: "Traditional culture, high-end dining, evening strolls"
          },
          {
            name: "Downtown (Kawaramachi/Shijo)",
            description: "The commercial heart of Kyoto with department stores, restaurants, and entertainment options spanning modern to traditional.",
            bestFor: "Shopping, dining, nightlife"
          },
          {
            name: "Arashiyama",
            description: "Western district known for its bamboo grove, monkey park, and scenic Katsura River. A more rural feel despite being within the city.",
            bestFor: "Nature, scenic beauty, peaceful temples"
          }
        ]
      },
      transport: {
        overview: "Kyoto has an efficient bus network covering most tourist attractions, complemented by subway lines and trains for longer distances. The city's flat topography also makes cycling an excellent option.",
        options: [
          {
            name: "Bus Network",
            description: "Extensive coverage of tourist sites with frequent service. The bus system can be confusing at first but is excellent once understood.",
            cost: "¥230 per ride or ¥600 for a day pass (recommended for sightseeing)"
          },
          {
            name: "Subway",
            description: "Two main lines (Karasuma and Tozai) serving limited areas but useful for quick north-south and east-west travel.",
            cost: "¥210-340 depending on distance"
          },
          {
            name: "Bicycle",
            description: "Kyoto's flat landscape and numerous rental shops make cycling a popular and efficient way to explore, especially in eastern Kyoto.",
            cost: "¥1,000-1,500 per day"
          },
          {
            name: "Walking",
            description: "Many attractions are clustered in walkable districts. Walking is often the best way to discover hidden temples and gardens.",
            cost: "Free"
          }
        ]
      }
    },
    "Rome": {
      overview: {
        description: "Rome, the Eternal City, is a living museum where ancient history, Renaissance art, and modern life converge in spectacular fashion. As the capital of Italy and former center of the Roman Empire, the city boasts an unparalleled concentration of architectural and artistic treasures spanning nearly 3,000 years of Western civilization.",
        facts: [
          "Rome was founded in 753 BC according to legend",
          "The Vatican City within Rome is the world's smallest sovereign state",
          "Romans toss about €1.5 million into the Trevi Fountain annually",
          "The city has more than 900 churches"
        ]
      },
      whenToVisit: {
        best: "Spring (April-May) and Fall (September-October) offer pleasant temperatures and fewer crowds. Avoid August when many locals leave and some businesses close for vacation.",
        seasons: [
          {
            name: "Spring (April-May)",
            description: "Mild temperatures with occasional showers. Gardens bloom and outdoor cafes come alive. Easter celebrations at the Vatican are spectacular."
          },
          {
            name: "Summer (June-August)",
            description: "Hot and dry with temperatures often exceeding 30°C (86°F). Very crowded tourist sites but lively evening atmosphere with many outdoor events."
          },
          {
            name: "Fall (September-October)",
            description: "Pleasant temperatures with golden light perfect for photography. Fewer crowds than summer and still warm enough for outdoor dining."
          },
          {
            name: "Winter (November-March)",
            description: "Mild by European standards with some rain. Christmas season brings beautiful decorations and nativity scenes. January and February offer the lowest tourist numbers."
          }
        ]
      },
      neighborhoods: {
        description: "Rome's districts reflect different eras of the city's long history, from ancient ruins to medieval lanes and Renaissance grandeur.",
        areas: [
          {
            name: "Historic Center (Centro Storico)",
            description: "The heart of ancient and Renaissance Rome, packed with iconic sites like the Pantheon, Piazza Navona, and countless churches and palaces.",
            bestFor: "Sightseeing, historical immersion, piazza life"
          },
          {
            name: "Trastevere",
            description: "Charming neighborhood across the Tiber with narrow cobblestone streets, colorful buildings, and a bohemian atmosphere. Comes alive at night.",
            bestFor: "Dining, nightlife, authentic Roman atmosphere"
          },
          {
            name: "Monti",
            description: "Rome's oldest residential neighborhood has transformed into a hip area with independent boutiques, wine bars, and artisan shops.",
            bestFor: "Shopping, aperitivo culture, local vibes"
          },
          {
            name: "Testaccio",
            description: "Working-class district known for excellent food, built around a hill made of ancient Roman pottery fragments.",
            bestFor: "Authentic cuisine, food markets, non-touristy experience"
          }
        ]
      },
      transport: {
        overview: "Rome's compact historic center is best explored on foot, while the efficient public transportation system makes it easy to reach outlying areas and save energy between major sights.",
        options: [
          {
            name: "Metro",
            description: "Three lines (A, B, and C) connecting major transport hubs and some attractions. Limited coverage in the historic center due to archaeological constraints.",
            cost: "€1.50 for a single ticket valid for 100 minutes"
          },
          {
            name: "Bus and Tram",
            description: "Extensive network reaching areas the Metro doesn't cover. Buses can be affected by traffic but offer scenic routes through historic areas.",
            cost: "€1.50 for a single ticket valid for 100 minutes"
          },
          {
            name: "Walking",
            description: "The most rewarding way to experience Rome, with countless discoveries possible between major attractions.",
            cost: "Free"
          },
          {
            name: "Taxi",
            description: "Official white taxis are readily available but can be expensive. Useful for late night travel or reaching places like Appian Way.",
            cost: "Starting fare €3-5 plus distance"
          }
        ]
      }
    },
    "Paris": {
      overview: {
        description: "Paris, the City of Light, is renowned for its elegant architecture, artistic treasures, high fashion, and exquisite cuisine. Beyond its iconic landmarks like the Eiffel Tower and Notre-Dame, Paris offers a patchwork of distinct neighborhoods each with their own character, connected by grand boulevards and intimate passageways.",
        facts: [
          "Paris has 130 museums and over 450 parks and gardens",
          "The Louvre houses over 380,000 objects with only 35,000 on display",
          "Paris has the most libraries per square mile in the world",
          "The city was originally a Celtic settlement called Lutetia"
        ]
      },
      whenToVisit: {
        best: "Spring (April-June) and Fall (September-October) offer mild weather and fewer tourists. June features long daylight hours, while September offers cultural events as the city returns from summer vacation.",
        seasons: [
          {
            name: "Spring (April-June)",
            description: "Gardens burst into bloom and cafe terraces fill up. Occasional showers but generally mild temperatures perfect for strolling."
          },
          {
            name: "Summer (July-August)",
            description: "Warm weather with occasional heat waves. Many Parisians leave the city in August. Paris Plages creates temporary beaches along the Seine."
          },
          {
            name: "Fall (September-October)",
            description: "Golden light bathes the city parks as leaves change color. Cultural season begins with new exhibitions, fashion week, and theatrical premieres."
          },
          {
            name: "Winter (November-March)",
            description: "Cold but rarely extreme, with occasional snow creating magical scenes. Christmas markets and decorations brighten the shorter days."
          }
        ]
      },
      neighborhoods: {
        description: "Paris is divided into 20 arrondissements (districts) spiraling clockwise from the center, each with its own distinctive character and attractions.",
        areas: [
          {
            name: "Le Marais (3rd & 4th)",
            description: "Medieval Paris preserved with narrow streets, historic mansions, and a vibrant mix of Jewish heritage, LGBTQ+ culture, and trendy boutiques.",
            bestFor: "Shopping, gallery hopping, historic architecture"
          },
          {
            name: "Saint-Germain-des-Prés (6th)",
            description: "Intellectual heart of Paris with famous cafes once frequented by philosophers and writers. Now upscale with luxury shopping.",
            bestFor: "Cafe culture, people watching, upscale shopping"
          },
          {
            name: "Montmartre (18th)",
            description: "Hilltop village atmosphere crowned by Sacré-Cœur Basilica. Once home to artists like Picasso and Van Gogh, it retains a bohemian charm despite tourism.",
            bestFor: "Panoramic views, artistic heritage, village ambiance"
          },
          {
            name: "Canal Saint-Martin (10th)",
            description: "Trendy area centered around a picturesque canal lined with trees and iron footbridges. Popular with younger Parisians for Sunday picnics.",
            bestFor: "Hipster culture, casual dining, local atmosphere"
          }
        ]
      },
      transport: {
        overview: "Paris has one of the world's most comprehensive public transportation systems, making it easy to navigate without a car. The compact center is also extremely walkable.",
        options: [
          {
            name: "Métro",
            description: "16 lines covering most of Paris with stations rarely more than 500m apart. Efficient but can be crowded during rush hour.",
            cost: "€1.90 for a single ticket or €14.90 for a book of 10 tickets"
          },
          {
            name: "Bus",
            description: "Extensive network offering scenic routes and above-ground travel. Electric buses are gradually replacing the fleet for sustainability.",
            cost: "€1.90 for a single ticket"
          },
          {
            name: "Vélib' Bike Sharing",
            description: "Over 20,000 bicycles available at 1,400 stations throughout Paris. Dedicated bike lanes make cycling increasingly safe and popular.",
            cost: "€3 for a day pass plus usage fees"
          },
          {
            name: "Walking",
            description: "Paris is compact and designed for pedestrians, with countless passages, gardens, and bridges to discover on foot.",
            cost: "Free"
          }
        ]
      }
    }
  };

  // Return the data for the requested city or a default if not found
  if (!cityData[cityName]) {
    return {
      overview: {
        description: `${cityName} is a fascinating destination waiting to be explored. Each neighborhood offers unique experiences, from historical sites to local cuisine and cultural attractions.`,
        facts: [
          `${cityName} has a rich historical heritage waiting to be discovered`,
          "The local cuisine features regional specialties worth trying",
          "Cultural festivals throughout the year showcase local traditions",
          "The city offers a mix of historical and modern attractions"
        ]
      },
      whenToVisit: {
        best: "The best times to visit depend on your preferences. Research the local climate to determine ideal conditions for your trip.",
        seasons: [
          {
            name: "Spring",
            description: "Often a beautiful time with moderate temperatures and natural beauty as plants bloom."
          },
          {
            name: "Summer",
            description: "Peak tourist season in many destinations, with warmer temperatures and longer daylight hours."
          },
          {
            name: "Fall",
            description: "Typically offers pleasant weather and fewer crowds than summer, often with beautiful foliage."
          },
          {
            name: "Winter",
            description: "May offer unique experiences and lower prices, though weather conditions vary by location."
          }
        ]
      },
      neighborhoods: {
        description: `${cityName} features diverse neighborhoods, each with its own character and attractions.`,
        areas: [
          {
            name: "Historic Center",
            description: "The heart of the city, typically featuring important landmarks and historical architecture.",
            bestFor: "Sightseeing, history, cultural immersion"
          },
          {
            name: "Cultural District",
            description: "Area known for museums, galleries, and cultural institutions.",
            bestFor: "Arts, museums, cultural experiences"
          },
          {
            name: "Local Neighborhood",
            description: "Less touristy areas where locals live, offering authentic experiences.",
            bestFor: "Local cuisine, authentic atmosphere, markets"
          },
          {
            name: "Modern Area",
            description: "Newer part of the city with contemporary architecture and amenities.",
            bestFor: "Shopping, dining, nightlife"
          }
        ]
      },
      transport: {
        overview: `Getting around ${cityName} can be done through various transportation options depending on your preferences and budget.`,
        options: [
          {
            name: "Public Transportation",
            description: "The network of buses, trains, or metros connecting major parts of the city.",
            cost: "Varies by location and distance"
          },
          {
            name: "Taxi Services",
            description: "Available throughout the city for direct transportation.",
            cost: "Higher than public transport but more convenient"
          },
          {
            name: "Bike Rentals",
            description: "An eco-friendly way to explore the city at your own pace.",
            cost: "Daily or weekly rental rates available"
          },
          {
            name: "Walking",
            description: "The best way to discover hidden gems and immerse yourself in the local atmosphere.",
            cost: "Free"
          }
        ]
      }
    };
  }

  return cityData[cityName];
};

export default AIGeneratedCityGuide;

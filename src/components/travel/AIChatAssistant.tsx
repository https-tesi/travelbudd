
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AIChatAssistantProps {
  cityName: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIChatAssistant = ({ cityName }: AIChatAssistantProps) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hi there! I'm your ${cityName} travel assistant. Ask me anything about ${cityName} - from the best local spots to visit, restaurants to try, or cultural tips to know!`
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to bottom when messages change
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: "user" as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (replace with actual API call later)
    setTimeout(() => {
      // Generate AI response based on the city and question
      let response = "";
      const question = input.toLowerCase();

      if (question.includes("eat") || question.includes("food") || question.includes("restaurant")) {
        response = `${cityName} offers amazing culinary experiences! Here are some recommendations:
        
1. ${getCitySpecificRecommendation(cityName, "restaurant1")}
2. ${getCitySpecificRecommendation(cityName, "restaurant2")}
3. ${getCitySpecificRecommendation(cityName, "restaurant3")}

For the best experience, I recommend making reservations in advance, especially during high season.`;
      } 
      else if (question.includes("see") || question.includes("visit") || question.includes("attraction")) {
        response = `Here are some must-visit attractions in ${cityName}:

1. ${getCitySpecificRecommendation(cityName, "attraction1")}
2. ${getCitySpecificRecommendation(cityName, "attraction2")}
3. ${getCitySpecificRecommendation(cityName, "attraction3")}

I'd suggest visiting early in the morning to avoid crowds!`;
      }
      else if (question.includes("stay") || question.includes("hotel") || question.includes("accommodation")) {
        response = `Here are great accommodation options in ${cityName} for different budgets:

1. Luxury: ${getCitySpecificRecommendation(cityName, "hotel1")}
2. Mid-range: ${getCitySpecificRecommendation(cityName, "hotel2")}
3. Budget-friendly: ${getCitySpecificRecommendation(cityName, "hotel3")}

The best areas to stay are ${getCitySpecificRecommendation(cityName, "neighborhood")}.`;
      }
      else if (question.includes("transport") || question.includes("getting around") || question.includes("travel")) {
        response = `The best ways to get around ${cityName} are:

${getCitySpecificRecommendation(cityName, "transport")}

${getCitySpecificRecommendation(cityName, "transportTip")}`;
      }
      else {
        response = `${cityName} is a wonderful destination! Some general tips:

1. ${getCitySpecificRecommendation(cityName, "tip1")}
2. ${getCitySpecificRecommendation(cityName, "tip2")}
3. ${getCitySpecificRecommendation(cityName, "tip3")}

Is there something specific about ${cityName} you'd like to know about?`;
      }

      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsLoading(false);
    }, 1500);
  };

  // Function to get city-specific recommendations (this would be replaced with API calls)
  const getCitySpecificRecommendation = (city: string, type: string) => {
    const recommendations: Record<string, Record<string, string>> = {
      "Kyoto": {
        "restaurant1": "Nishiki Market - 'Kyoto's Kitchen' with over 100 food stalls",
        "restaurant2": "Gion Karyo for traditional Kyoto kaiseki cuisine",
        "restaurant3": "Ippudo for authentic ramen in a modern setting",
        "attraction1": "Fushimi Inari Shrine with thousands of iconic red torii gates",
        "attraction2": "Arashiyama Bamboo Grove, especially magical at sunrise",
        "attraction3": "Kinkaku-ji (Golden Pavilion), a Zen temple covered in gold leaf",
        "hotel1": "The Ritz-Carlton Kyoto, overlooking the Kamogawa River",
        "hotel2": "Hotel Kanra Kyoto, blending traditional aesthetics with modern comforts",
        "hotel3": "Piece Hostel Sanjo, stylish and affordable with great facilities",
        "neighborhood": "Gion for traditional atmosphere or Downtown for convenience",
        "transport": "The efficient bus network covers most tourist spots. Consider purchasing a 1-day bus pass (¥600) for unlimited travel.",
        "transportTip": "Renting a bicycle is a wonderful way to explore the eastern side of the city, especially along the Philosopher's Path.",
        "tip1": "Kyoto is best visited during spring (cherry blossoms) or fall (autumn colors)",
        "tip2": "Many temples close around 5pm, so plan early starts to your day",
        "tip3": "Learn basic Japanese phrases as English isn't widely spoken outside tourist areas"
      },
      "Rome": {
        "restaurant1": "Roscioli - Famous for carbonara and cacio e pepe pasta",
        "restaurant2": "Da Enzo al 29 in Trastevere for authentic Roman cuisine",
        "restaurant3": "Antico Forno Roscioli for amazing pizza al taglio (by the slice)",
        "attraction1": "The Colosseum and Roman Forum, best experienced with a guided tour",
        "attraction2": "Vatican Museums and Sistine Chapel (buy tickets online to skip lines)",
        "attraction3": "Trevi Fountain, especially beautiful in the early morning light",
        "hotel1": "Hotel de Russie near Piazza del Popolo with stunning gardens",
        "hotel2": "Hotel Artemide, centrally located with excellent service",
        "hotel3": "The Beehive Hostel, eco-friendly with a lovely garden",
        "neighborhood": "Monti for local vibes or Trastevere for nightlife and charm",
        "transport": "The Metro is fast but limited. Buses reach everywhere but can be crowded. Consider getting a Roma Pass for public transport and museum entries.",
        "transportTip": "Rome is best explored on foot, especially the historic center which is compact. Wear comfortable shoes!",
        "tip1": "Water fountains throughout the city (nasoni) provide free, clean drinking water",
        "tip2": "Avoid restaurants with picture menus or staff inviting you in from the street",
        "tip3": "Many museums are free on the first Sunday of the month"
      },
      "Paris": {
        "restaurant1": "Le Comptoir du Relais - Neo-bistro by chef Yves Camdeborde",
        "restaurant2": "Chez L'Ami Jean for traditional French cuisine with a modern twist",
        "restaurant3": "Du Pain et des Idées for the best croissants and bread in Paris",
        "attraction1": "The Louvre Museum (go on Wednesday or Friday evening for fewer crowds)",
        "attraction2": "Eiffel Tower, especially magical at night when it sparkles hourly",
        "attraction3": "Montmartre and Sacré-Cœur for stunning city views",
        "hotel1": "Le Meurice facing the Tuileries Garden for ultimate luxury",
        "hotel2": "Hôtel Fabric, a boutique hotel in a former textile factory",
        "hotel3": "Generator Paris, a stylish hostel with rooftop views",
        "neighborhood": "Le Marais for trendy shops or Saint-Germain for classic Parisian charm",
        "transport": "The Métro is extensive and efficient. Consider buying a carnet (book of tickets) or a Navigo pass for the week.",
        "transportTip": "Vélib' bike-sharing system is an excellent way to see the city, with many dedicated bike lanes.",
        "tip1": "Many museums are closed on Mondays or Tuesdays - check schedules in advance",
        "tip2": "Learn basic French phrases - locals appreciate the effort even if they speak English",
        "tip3": "The Paris Museum Pass offers great value if you plan to visit multiple attractions"
      }
    };

    // Default to generic recommendation if city isn't in our database
    if (!recommendations[city]) {
      const defaultRecommendations: Record<string, string> = {
        "restaurant1": "Check out the highly-rated local restaurants near the main square",
        "restaurant2": "Try restaurants where locals eat for authentic cuisine",
        "restaurant3": "Visit the local market for fresh and regional specialties",
        "attraction1": "The city's main historical landmark",
        "attraction2": "Local museums showcasing the region's heritage",
        "attraction3": "Parks and natural areas for a relaxing break",
        "hotel1": "The leading 5-star hotel in the city center",
        "hotel2": "Well-reviewed mid-range hotels near attractions",
        "hotel3": "Clean, comfortable hostels or guesthouses for budget travelers",
        "neighborhood": "central areas close to major attractions or charming historic districts",
        "transport": "Public transportation is usually available, including buses and possibly rail systems.",
        "transportTip": "Walking is often the best way to discover hidden gems in the city center.",
        "tip1": "Research the best time to visit based on weather and local festivals",
        "tip2": "Learn a few phrases in the local language",
        "tip3": "Check for city passes that include transportation and attraction entries"
      };
      return defaultRecommendations[type];
    }

    return recommendations[city][type] || "Ask locals for recommendations!";
  };

  return (
    <Card className="w-full shadow-md">
      <CardContent className="p-4">
        <div className="flex flex-col h-[400px]">
          <div className="flex items-center justify-between border-b pb-2 mb-3">
            <div className="flex items-center">
              <Bot className="h-5 w-5 text-blue-500 mr-2" />
              <h3 className="font-medium">AI Travel Assistant</h3>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setMessages([messages[0]])}
              disabled={isLoading || messages.length === 1}
            >
              <RefreshCw className="h-4 w-4 mr-1" /> Reset
            </Button>
          </div>
          
          <ScrollArea className="flex-grow pr-4 mb-3" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`
                      flex gap-2 max-w-[80%] rounded-lg px-3 py-2
                      ${message.role === 'user' 
                        ? 'bg-blue-600 text-white ml-auto' 
                        : 'bg-gray-100 text-gray-800 mr-auto'
                      }
                    `}
                  >
                    {message.role === 'assistant' && <Bot className="h-5 w-5 shrink-0 mt-1" />}
                    <div className="whitespace-pre-line text-sm">{message.content}</div>
                    {message.role === 'user' && <User className="h-5 w-5 shrink-0 mt-1" />}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-lg px-3 py-2 max-w-[80%] flex items-center">
                    <Bot className="h-5 w-5 mr-2" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-75"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <form onSubmit={handleSend} className="mt-auto">
            <div className="flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Ask about ${cityName}...`}
                className="flex-grow"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIChatAssistant;

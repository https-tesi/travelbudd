
import { Globe, Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-primary mb-4">
              <Globe className="h-6 w-6" />
              <span>TravelAI</span>
            </Link>
            <p className="text-sm text-gray-500 mb-4">
              Plan your dream trips with AI-powered recommendations and stunning visuals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/press" className="hover:text-primary transition-colors">Press</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/destinations" className="hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link to="/travel-guides" className="hover:text-primary transition-colors">Travel Guides</Link></li>
              <li><Link to="/support" className="hover:text-primary transition-colors">Support Center</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-500 mb-4">Subscribe to our newsletter for travel tips and exclusive offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 text-sm border border-gray-200 rounded-l-md w-full focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-3 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} TravelAI. All rights reserved.</p>
            <div className="flex gap-4 text-xs text-gray-500 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

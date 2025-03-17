
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold text-primary mb-4">Shivalik Hostel</h3>
          <p className="text-muted-foreground text-sm mb-4">
            A premier hostel providing comfortable accommodation with modern 
            amenities and delicious meals for students and professionals.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="mailto:info@shivalikhostel.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/mess-menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Mess Menu
              </Link>
            </li>
            <li>
              <Link to="/room-booking" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Room Booking
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-foreground mb-4">Mess Hours</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Breakfast: 7:30 AM - 9:30 AM</li>
            <li>Lunch: 12:30 PM - 2:30 PM</li>
            <li>Dinner: 7:30 PM - 9:30 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-foreground mb-4">Contact Us</h4>
          <address className="not-italic">
            <div className="flex items-start space-x-2 mb-2">
              <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">
                123 Campus Road, University Area, 
                New Delhi, India 110001
              </span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Phone size={18} className="text-primary" />
              <a href="tel:+911234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                +91 123 456 7890
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} className="text-primary" />
              <a href="mailto:info@shivalikhostel.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                info@shivalikhostel.com
              </a>
            </div>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">
          © {currentYear} Shivalik Hostel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

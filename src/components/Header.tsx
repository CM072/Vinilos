import { Phone, Mail, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-blue-600" />
              <span>618 219 481</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-blue-600" />
              <a 
                href="mailto:fernando@grupomanzanares.com"
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                fernando@grupomanzanares.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-blue-600" />
            <span>Madrid, España</span>
          </div>
        </div>
      </div>
    </header>
  );
}
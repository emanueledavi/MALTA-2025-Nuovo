import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, ClipboardList, Info, MapPin } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/', icon: Home },
    { id: 'itinerary', label: 'Itinerary', path: '/itinerary', icon: Calendar },
    { id: 'organization', label: 'Organization', path: '/organization', icon: ClipboardList },
    { id: 'info', label: 'Info', path: '/info', icon: Info }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <MapPin className="w-8 h-8 text-amber-600" />
            <span className="text-xl font-bold text-amber-800">Malta Explorer</span>
          </div>
          
          <div className="flex space-x-1">
            {navItems.map(({ id, label, path, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={id}
                  to={path}
                  onClick={() => setActiveSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-amber-100 ${
                    isActive 
                      ? 'bg-amber-500 text-white shadow-md transform scale-105' 
                      : 'text-amber-700 hover:text-amber-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
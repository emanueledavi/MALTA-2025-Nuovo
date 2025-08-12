import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { maltaNews, maltaPhotos } from '../mock/mockData';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({});
  
  // Trip dates - departure and return
  const tripDate = new Date('2025-08-09T10:00:00');
  const returnDate = new Date('2025-08-14T20:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = tripDate - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [tripDate]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section with Countdown */}
      <section className="text-center mb-16">
        <div className="relative bg-gradient-to-r from-amber-600 to-orange-500 rounded-3xl p-12 mb-8 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-4">
              Malta Adventure Awaits!
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover the enchanting Mediterranean islands of Malta, where ancient history meets crystal-clear waters,
              and every corner tells a story of knights, culture, and natural beauty.
            </p>
            
            {/* Countdown Timer */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 inline-block">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 mr-2" />
                <span className="text-lg font-semibold">Trip Countdown</span>
              </div>
              <div className="flex space-x-6">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center">
                    <div className="text-3xl font-bold">{value || '0'}</div>
                    <div className="text-sm uppercase tracking-wide opacity-90">{unit}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-center text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Departure: August 9, 2025 | Return: August 14, 2025</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Malta Quick Facts */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-amber-200 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">3 Beautiful Islands</h3>
              <p className="text-gray-600">Malta, Gozo & Comino await your exploration</p>
            </CardContent>
          </Card>
          
          <Card className="border-amber-200 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Rich History</h3>
              <p className="text-gray-600">7,000+ years of fascinating cultural heritage</p>
            </CardContent>
          </Card>
          
          <Card className="border-amber-200 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Perfect Weather</h3>
              <p className="text-gray-600">300+ days of sunshine annually</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest Malta News</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {maltaNews.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-amber-200">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-amber-600 mb-2">{article.date}</p>
                <h3 className="font-semibold text-lg mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.summary}</p>
                <Button variant="ghost" className="p-0 text-amber-600 hover:text-amber-700">
                  Read more <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Discover Malta's Beauty</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {maltaPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="group relative overflow-hidden rounded-xl aspect-square hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img 
                src={photo.url} 
                alt={photo.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">{photo.caption}</h4>
                  <p className="text-sm opacity-90">{photo.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
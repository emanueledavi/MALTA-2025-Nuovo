import React from 'react';
import { Calendar, MapPin, Camera, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { sampleItinerary } from '../mock/mockData';

const Itinerary = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Malta Itinerary</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your carefully planned 6-day adventure through Malta's most spectacular destinations
        </p>
      </div>

      <div className="space-y-8">
        {sampleItinerary.map((day, index) => (
          <Card key={day.day} className="border-amber-200 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">
                    Day {day.day}: {day.title}
                  </CardTitle>
                  <p className="text-amber-100">{day.description}</p>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-3 py-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">Day {day.day}</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Activities */}
                <div>
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-amber-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">Activities</h3>
                  </div>
                  <ul className="space-y-3">
                    {day.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Badge variant="secondary" className="mt-1 bg-amber-100 text-amber-800 border-amber-300">
                          {idx + 1}
                        </Badge>
                        <span className="text-gray-700 flex-1">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Photos */}
                <div>
                  <div className="flex items-center mb-4">
                    <Camera className="w-5 h-5 text-amber-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">Preview</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {day.photos.map((photo, idx) => (
                      <div 
                        key={idx}
                        className="aspect-video rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300"
                      >
                        <img 
                          src={photo} 
                          alt={`Day ${day.day} activity ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline connector */}
              {index < sampleItinerary.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="w-1 h-12 bg-gradient-to-b from-amber-300 to-orange-300 rounded-full"></div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="mt-12 text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready for Your Adventure?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          This itinerary covers Malta's highlights over 6 amazing days while allowing flexibility for spontaneous discoveries. 
          Each day offers a perfect blend of culture, history, and natural beauty.
        </p>
        <div className="flex items-center justify-center mt-6 space-x-6">
          <div className="flex items-center text-amber-700">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="font-medium">6 Days</span>
          </div>
          <div className="flex items-center text-amber-700">
            <Camera className="w-5 h-5 mr-2" />
            <span className="font-medium">Countless Memories</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
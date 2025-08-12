import React from 'react';
import { 
  Info as InfoIcon, Eye, Utensils, MapPin, Star, Clock, 
  Phone, Globe, Zap, CreditCard, Thermometer, AlertTriangle 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { attractions, traditionalFoods, topRestaurants, usefulInfo } from '../mock/mockData';

const Info = () => {
  const infoIcons = {
    Currency: CreditCard,
    Language: Globe,
    Climate: Thermometer,
    'Time Zone': Clock,
    Electricity: Zap,
    Emergency: AlertTriangle
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Malta Travel Info</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to know to make your Malta trip unforgettable
        </p>
      </div>

      <Tabs defaultValue="info" className="space-y-8">
        <div className="flex justify-center">
          <TabsList className="bg-amber-100 p-1 rounded-xl">
            <TabsTrigger value="info" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              <InfoIcon className="w-4 h-4 mr-2" />
              Useful Information
            </TabsTrigger>
            <TabsTrigger value="attractions" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              <Eye className="w-4 h-4 mr-2" />
              What to See
            </TabsTrigger>
            <TabsTrigger value="food" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              <Utensils className="w-4 h-4 mr-2" />
              What to Eat
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Useful Information Section */}
        <TabsContent value="info">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usefulInfo.map((item, index) => {
              const IconComponent = infoIcons[item.category] || InfoIcon;
              return (
                <Card key={index} className="border-amber-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-amber-100 p-2 rounded-lg">
                        <IconComponent className="w-6 h-6 text-amber-600" />
                      </div>
                      <CardTitle className="text-lg">{item.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{item.info}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Emergency Contact Card */}
          <Card className="mt-8 border-red-200 bg-red-50">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <CardTitle className="text-red-800">Emergency Contacts</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-red-600" />
                  <div>
                    <p className="font-medium text-red-800">General Emergency</p>
                    <p className="text-red-700">112</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-red-600" />
                  <div>
                    <p className="font-medium text-red-800">Police</p>
                    <p className="text-red-700">119</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-red-600" />
                  <div>
                    <p className="font-medium text-red-800">Medical Emergency</p>
                    <p className="text-red-700">196</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Attractions Section */}
        <TabsContent value="attractions">
          <div className="grid md:grid-cols-2 gap-6">
            {attractions.map((attraction) => (
              <Card key={attraction.id} className="border-amber-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-amber-600" />
                      <CardTitle className="text-lg">{attraction.name}</CardTitle>
                    </div>
                    {attraction.mustSee && (
                      <Badge className="bg-amber-500 hover:bg-amber-600 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Must See
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Food Section */}
        <TabsContent value="food">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional Foods */}
            <Card className="border-amber-200">
              <CardHeader className="bg-amber-50">
                <CardTitle className="flex items-center">
                  <Utensils className="w-5 h-5 text-amber-600 mr-2" />
                  Traditional Foods to Try
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {traditionalFoods.map((food, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-gray-800 mb-2">{food.name}</h4>
                      <p className="text-gray-600 text-sm">{food.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Restaurants */}
            <Card className="border-amber-200">
              <CardHeader className="bg-amber-50">
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-600 mr-2" />
                  Top Restaurants
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {topRestaurants.map((restaurant, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-800">{restaurant.name}</h4>
                        <Badge variant="outline" className="text-amber-700 border-amber-300">
                          {restaurant.priceRange}
                        </Badge>
                      </div>
                      <p className="text-sm text-amber-600 mb-1">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        {restaurant.location}
                      </p>
                      <p className="text-gray-600 text-sm">{restaurant.specialty}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Food Tips */}
          <Card className="mt-8 border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="flex items-center text-amber-800">
                <Utensils className="w-5 h-5 mr-2" />
                Local Food Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-amber-700">
                <div>
                  <h4 className="font-semibold mb-2">Dining Etiquette</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Tipping 10-15% is customary</li>
                    <li>• Lunch is typically served 12:30-2:30 PM</li>
                    <li>• Dinner starts around 7:30 PM</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Local Specialties</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Try pastizzi from local bakeries</li>
                    <li>• Sample local wines from Ta' Qali</li>
                    <li>• Don't miss fresh fish at waterfront restaurants</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Info;
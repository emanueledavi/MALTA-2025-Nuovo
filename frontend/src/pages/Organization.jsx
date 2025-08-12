import React, { useState } from 'react';
import { 
  Bus, Car, Ship, MapPin, FileText, Upload, Plus, Trash2, 
  Check, Plane, Home, ShoppingBag, Package 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useToast } from '../hooks/use-toast';
import { transportationTypes } from '../mock/mockData';
import PackingSection from '../components/PackingSection';

const Organization = () => {
  const [documents, setDocuments] = useState({
    accommodation: [],
    flight: []
  });
  const [shoppingList, setShoppingList] = useState([]);
  const [newShoppingItem, setNewShoppingItem] = useState('');
  const { toast } = useToast();

  const iconMap = {
    Bus,
    Car,
    Ship,
    MapPin
  };

  const handleAddDocument = (type, document) => {
    setDocuments(prev => ({
      ...prev,
      [type]: [...prev[type], { ...document, id: Date.now() }]
    }));
    toast({
      title: "Document added",
      description: `${document.name} has been added to ${type} documents.`
    });
  };

  const handleRemoveDocument = (type, id) => {
    setDocuments(prev => ({
      ...prev,
      [type]: prev[type].filter(doc => doc.id !== id)
    }));
    toast({
      title: "Document removed",
      description: "Document has been removed successfully."
    });
  };

  const handleAddShoppingItem = () => {
    if (newShoppingItem.trim()) {
      setShoppingList(prev => [...prev, { 
        id: Date.now(), 
        item: newShoppingItem.trim(),
        completed: false 
      }]);
      setNewShoppingItem('');
      toast({
        title: "Item added",
        description: "Shopping item has been added to your list."
      });
    }
  };

  const toggleShoppingItem = (id) => {
    setShoppingList(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const removeShoppingItem = (id) => {
    setShoppingList(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Trip Organization</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Keep all your travel essentials organized and accessible in one place
        </p>
      </div>

      <Tabs defaultValue="transportation" className="space-y-8">
        <div className="flex justify-center">
          <TabsList className="bg-amber-100 p-1 rounded-xl">
            <TabsTrigger value="transportation" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              <Bus className="w-4 h-4 mr-2" />
              Transportation
            </TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              <FileText className="w-4 h-4 mr-2" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="packing" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              <Package className="w-4 h-4 mr-2" />
              Packing
            </TabsTrigger>
            <TabsTrigger value="shopping" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shopping
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Transportation Section */}
        <TabsContent value="transportation">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transportationTypes.map((transport) => {
              const IconComponent = iconMap[transport.icon] || Car;
              return (
                <Card key={transport.id} className="border-amber-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-amber-100 p-2 rounded-lg">
                        <IconComponent className="w-6 h-6 text-amber-600" />
                      </div>
                      <CardTitle className="text-lg">{transport.type}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{transport.description}</p>
                    <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">{transport.details}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Documents Section */}
        <TabsContent value="documents">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Accommodation Documents */}
            <Card className="border-amber-200">
              <CardHeader className="bg-amber-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Home className="w-5 h-5 text-amber-600" />
                    <CardTitle>Accommodation Documents</CardTitle>
                  </div>
                  <DocumentModal 
                    type="accommodation" 
                    onAddDocument={handleAddDocument}
                    title="Add Accommodation Document"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {documents.accommodation.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No accommodation documents added yet</p>
                ) : (
                  <div className="space-y-3">
                    {documents.accommodation.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-sm text-gray-500">{doc.description}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveDocument('accommodation', doc.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Flight Documents */}
            <Card className="border-amber-200">
              <CardHeader className="bg-amber-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Plane className="w-5 h-5 text-amber-600" />
                    <CardTitle>Flight Documents</CardTitle>
                  </div>
                  <DocumentModal 
                    type="flight" 
                    onAddDocument={handleAddDocument}
                    title="Add Flight Document"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {documents.flight.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No flight documents added yet</p>
                ) : (
                  <div className="space-y-3">
                    {documents.flight.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-sm text-gray-500">{doc.description}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveDocument('flight', doc.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Packing Section */}
        <TabsContent value="packing">
          <Card className="border-amber-200">
            <CardHeader className="bg-amber-50">
              <div className="flex items-center space-x-2">
                <Package className="w-5 h-5 text-amber-600" />
                <CardTitle>What to Pack</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {packingList.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
                    <div className="bg-amber-500 rounded-full w-2 h-2"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Shopping Section */}
        <TabsContent value="shopping">
          <Card className="border-amber-200">
            <CardHeader className="bg-amber-50">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-amber-600" />
                <CardTitle>Shopping List</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex space-x-2 mb-6">
                <Input
                  value={newShoppingItem}
                  onChange={(e) => setNewShoppingItem(e.target.value)}
                  placeholder="Add item to shopping list..."
                  onKeyPress={(e) => e.key === 'Enter' && handleAddShoppingItem()}
                  className="border-amber-200 focus:border-amber-400"
                />
                <Button onClick={handleAddShoppingItem} className="bg-amber-500 hover:bg-amber-600">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              {shoppingList.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your shopping list is empty</p>
              ) : (
                <div className="space-y-2">
                  {shoppingList.map((item) => (
                    <div 
                      key={item.id} 
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        item.completed ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => toggleShoppingItem(item.id)}
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            item.completed 
                              ? 'bg-green-500 border-green-500 text-white' 
                              : 'border-gray-300 hover:border-amber-400'
                          }`}
                        >
                          {item.completed && <Check className="w-3 h-3" />}
                        </button>
                        <span className={item.completed ? 'line-through text-gray-500' : 'text-gray-700'}>
                          {item.item}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeShoppingItem(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const DocumentModal = ({ type, onAddDocument, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    file: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim()) {
      onAddDocument(type, {
        name: formData.name,
        description: formData.description,
        file: formData.file
      });
      setFormData({ name: '', description: '', file: null });
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
          <Plus className="w-4 h-4 mr-1" />
          Add Document
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Document Name</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="e.g., Hotel Booking Confirmation"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Description</label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Additional details about this document..."
              rows={3}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Upload File (Optional)</label>
            <div className="border-2 border-dashed border-amber-200 rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-400">PDF, JPG, PNG up to 10MB</p>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-amber-500 hover:bg-amber-600">
              Add Document
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Organization;
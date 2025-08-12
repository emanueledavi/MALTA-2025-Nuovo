import React, { useState } from 'react';
import { 
  Package, Plus, Trash2, Check, Download, FileText,
  Shirt, FileCheck, Heart, Smartphone, Briefcase
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';
import { packingCategories } from '../mock/mockData';

const PackingSection = () => {
  const [packingItems, setPackingItems] = useState(packingCategories);
  const [customItems, setCustomItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', quantity: 1, category: '' });
  const { toast } = useToast();

  const categoryIcons = {
    "Clothing": Shirt,
    "Essential Documents": FileCheck,
    "Health and Hygiene": Heart,
    "Electronics": Smartphone,
    "Miscellaneous and Utilities": Briefcase
  };

  const handleToggleItem = (categoryIndex, subcategoryIndex, itemIndex) => {
    const updatedItems = [...packingItems];
    updatedItems[categoryIndex].subcategories[subcategoryIndex].items[itemIndex].packed = 
      !updatedItems[categoryIndex].subcategories[subcategoryIndex].items[itemIndex].packed;
    setPackingItems(updatedItems);
  };

  const handleAddCustomItem = () => {
    if (newItem.name.trim() && newItem.category) {
      const customItem = {
        name: newItem.name,
        quantity: newItem.quantity,
        packed: false,
        isCustom: true,
        id: Date.now()
      };
      
      setCustomItems(prev => [...prev, { ...customItem, category: newItem.category }]);
      setNewItem({ name: '', quantity: 1, category: '' });
      setIsModalOpen(false);
      
      toast({
        title: "Item added",
        description: `${customItem.name} has been added to your packing list.`
      });
    }
  };

  const handleRemoveCustomItem = (itemId) => {
    setCustomItems(prev => prev.filter(item => item.id !== itemId));
    toast({
      title: "Item removed",
      description: "Custom item has been removed from your packing list."
    });
  };

  const toggleCustomItem = (itemId) => {
    setCustomItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, packed: !item.packed } : item
    ));
  };

  const generatePDF = () => {
    // Create a simple text-based content for PDF generation
    let pdfContent = "MALTA TRIP PACKING LIST\n";
    pdfContent += "========================\n\n";
    
    packingItems.forEach(category => {
      pdfContent += `${category.category.toUpperCase()}\n`;
      pdfContent += "-".repeat(category.category.length) + "\n";
      
      category.subcategories.forEach(subcategory => {
        pdfContent += `\n${subcategory.title}:\n`;
        subcategory.items.forEach(item => {
          const status = item.packed ? "✓" : "☐";
          pdfContent += `  ${status} ${item.name} (x${item.quantity})\n`;
        });
      });
      pdfContent += "\n";
    });

    // Add custom items
    if (customItems.length > 0) {
      pdfContent += "CUSTOM ITEMS\n";
      pdfContent += "------------\n";
      customItems.forEach(item => {
        const status = item.packed ? "✓" : "☐";
        pdfContent += `  ${status} ${item.name} (x${item.quantity}) - ${item.category}\n`;
      });
    }

    // Create and download the file
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Malta_Packing_List.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast({
      title: "Packing list downloaded",
      description: "Your packing list has been saved as Malta_Packing_List.txt"
    });
  };

  const getTotalItems = () => {
    let total = 0;
    let packed = 0;
    
    packingItems.forEach(category => {
      category.subcategories.forEach(subcategory => {
        subcategory.items.forEach(item => {
          total++;
          if (item.packed) packed++;
        });
      });
    });

    customItems.forEach(item => {
      total++;
      if (item.packed) packed++;
    });

    return { total, packed };
  };

  const { total, packed } = getTotalItems();
  const progress = total > 0 ? (packed / total) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* Header with Progress */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">Packing Progress</h3>
          <div className="flex items-center space-x-4">
            <div className="w-64 bg-gray-200 rounded-full h-3">
              <div 
                className="bg-amber-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">{packed}/{total} items</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <AddItemModal 
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            newItem={newItem}
            setNewItem={setNewItem}
            onAddItem={handleAddCustomItem}
            categories={packingItems.map(cat => cat.category)}
          />
          <Button onClick={generatePDF} variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Packing Categories */}
      <div className="space-y-6">
        {packingItems.map((category, categoryIndex) => {
          const IconComponent = categoryIcons[category.category] || Package;
          return (
            <Card key={categoryIndex} className="border-amber-200">
              <CardHeader className="bg-amber-50 pb-3">
                <CardTitle className="flex items-center text-lg">
                  <IconComponent className="w-5 h-5 text-amber-600 mr-2" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {category.subcategories.map((subcategory, subcategoryIndex) => (
                    <div key={subcategoryIndex}>
                      <h4 className="font-medium text-gray-800 mb-3 border-l-4 border-amber-500 pl-3">
                        {subcategory.title}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {subcategory.items.map((item, itemIndex) => (
                          <div 
                            key={itemIndex}
                            className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                              item.packed 
                                ? 'bg-green-50 border-green-200' 
                                : 'bg-gray-50 border-gray-200 hover:border-amber-300'
                            }`}
                          >
                            <div className="flex items-center space-x-3 flex-1">
                              <button
                                onClick={() => handleToggleItem(categoryIndex, subcategoryIndex, itemIndex)}
                                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                                  item.packed 
                                    ? 'bg-green-500 border-green-500 text-white' 
                                    : 'border-gray-300 hover:border-amber-400'
                                }`}
                              >
                                {item.packed && <Check className="w-3 h-3" />}
                              </button>
                              <span className={item.packed ? 'line-through text-gray-500' : 'text-gray-700'}>
                                {item.name}
                              </span>
                            </div>
                            <Badge variant="outline" className="text-amber-700 border-amber-300">
                              x{item.quantity}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* Custom Items */}
        {customItems.length > 0 && (
          <Card className="border-amber-200">
            <CardHeader className="bg-amber-50 pb-3">
              <CardTitle className="flex items-center text-lg">
                <Plus className="w-5 h-5 text-amber-600 mr-2" />
                Custom Items
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-3">
                {customItems.map((item) => (
                  <div 
                    key={item.id}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                      item.packed 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-gray-50 border-gray-200 hover:border-amber-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <button
                        onClick={() => toggleCustomItem(item.id)}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          item.packed 
                            ? 'bg-green-500 border-green-500 text-white' 
                            : 'border-gray-300 hover:border-amber-400'
                        }`}
                      >
                        {item.packed && <Check className="w-3 h-3" />}
                      </button>
                      <div className="flex-1">
                        <span className={item.packed ? 'line-through text-gray-500' : 'text-gray-700'}>
                          {item.name}
                        </span>
                        <p className="text-xs text-gray-500">{item.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-amber-700 border-amber-300">
                        x{item.quantity}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveCustomItem(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

const AddItemModal = ({ isOpen, setIsOpen, newItem, setNewItem, onAddItem, categories }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-amber-500 hover:bg-amber-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Custom Item
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Custom Packing Item</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Item Name</label>
            <Input
              value={newItem.name}
              onChange={(e) => setNewItem(prev => ({ ...prev, name: e.target.value }))}
              placeholder="e.g., Extra phone charger"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Quantity</label>
              <Input
                type="number"
                min="1"
                value={newItem.quantity}
                onChange={(e) => setNewItem(prev => ({ ...prev, quantity: parseInt(e.target.value) || 1 }))}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Category</label>
              <Select value={newItem.category} onValueChange={(value) => setNewItem(prev => ({ ...prev, category: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={onAddItem} className="bg-amber-500 hover:bg-amber-600">
              Add Item
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PackingSection;
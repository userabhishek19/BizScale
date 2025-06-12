import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Star, Shield, Phone, Mail, MapPin, CheckCircle, Filter } from 'lucide-react';

interface Vendor {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  gstVerified: boolean;
  location: string;
  phone: string;
  email: string;
  services: string[];
  image: string;
  priceRange: string;
  responseTime: string;
}

const VendorSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVendors, setSelectedVendors] = useState<string[]>([]);

  const categories = ['All', 'Equipment', 'Furniture', 'Technology', 'Marketing', 'Legal', 'Accounting'];

  const vendors: Vendor[] = [
    {
      id: '1',
      name: 'RestaurantPro Equipment',
      category: 'Equipment',
      rating: 4.8,
      reviews: 324,
      gstVerified: true,
      location: 'New York, NY',
      phone: '+1 (555) 123-4567',
      email: 'contact@restaurantpro.com',
      services: ['Commercial Kitchen Equipment', 'Installation', 'Maintenance'],
      image: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=400',
      priceRange: '$$$',
      responseTime: '< 2 hours'
    },
    {
      id: '2',
      name: 'Modern Office Solutions',
      category: 'Furniture',
      rating: 4.7,
      reviews: 256,
      gstVerified: true,
      location: 'New York, NY',
      phone: '+1 (555) 234-5678',
      email: 'sales@modernoffice.com',
      services: ['Office Furniture', 'Space Planning', 'Delivery & Setup'],
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      priceRange: '$$',
      responseTime: '< 4 hours'
    },
    {
      id: '3',
      name: 'TechStart Solutions',
      category: 'Technology',
      rating: 4.9,
      reviews: 189,
      gstVerified: true,
      location: 'New York, NY',
      phone: '+1 (555) 345-6789',
      email: 'hello@techstart.com',
      services: ['POS Systems', 'Wi-Fi Setup', 'Tech Support'],
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      priceRange: '$$',
      responseTime: '< 1 hour'
    },
    {
      id: '4',
      name: 'BrandCraft Marketing',
      category: 'Marketing',
      rating: 4.6,
      reviews: 412,
      gstVerified: true,
      location: 'New York, NY',
      phone: '+1 (555) 456-7890',
      email: 'team@brandcraft.com',
      services: ['Logo Design', 'Social Media', 'Website Development'],
      image: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=400',
      priceRange: '$$$',
      responseTime: '< 3 hours'
    },
    {
      id: '5',
      name: 'Legal Partners LLC',
      category: 'Legal',
      rating: 4.9,
      reviews: 98,
      gstVerified: true,
      location: 'New York, NY',
      phone: '+1 (555) 567-8901',
      email: 'contact@legalpartners.com',
      services: ['Business Registration', 'Contracts', 'Compliance'],
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=400',
      priceRange: '$$$$',
      responseTime: '< 6 hours'
    },
    {
      id: '6',
      name: 'Numbers & Co Accounting',
      category: 'Accounting',
      rating: 4.8,
      reviews: 167,
      gstVerified: true,
      location: 'New York, NY',
      phone: '+1 (555) 678-9012',
      email: 'info@numbersco.com',
      services: ['Bookkeeping', 'Tax Planning', 'Financial Analysis'],
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400',
      priceRange: '$$',
      responseTime: '< 4 hours'
    }
  ];

  const filteredVendors = selectedCategory === 'All' 
    ? vendors 
    : vendors.filter(vendor => vendor.category === selectedCategory);

  const handleVendorSelect = (vendorId: string) => {
    setSelectedVendors(prev => 
      prev.includes(vendorId) 
        ? prev.filter(id => id !== vendorId)
        : [...prev, vendorId]
    );
  };

  const handleContactSelected = () => {
    if (selectedVendors.length > 0) {
      alert(`Contacting ${selectedVendors.length} selected vendor(s)...`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Verified Vendors & Suppliers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with GST-verified, trusted vendors to set up your restaurant business
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/60 backdrop-blur-sm border border-white/40 text-gray-700 hover:bg-white/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Selected Vendors Counter */}
        {selectedVendors.length > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-2xl">
              <div className="flex items-center space-x-3">
                <span className="font-semibold">{selectedVendors.length} Selected</span>
                <button
                  onClick={handleContactSelected}
                  className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact All
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVendors.map((vendor, index) => (
            <motion.div
              key={vendor.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white/60 backdrop-blur-sm border rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                selectedVendors.includes(vendor.id)
                  ? 'border-purple-500 ring-2 ring-purple-500/20'
                  : 'border-white/40'
              }`}
            >
              {/* Vendor Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  {vendor.gstVerified && (
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Shield className="w-4 h-4 mr-1" />
                      GST Verified
                    </div>
                  )}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {vendor.category}
                  </span>
                </div>
              </div>

              {/* Vendor Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{vendor.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="font-semibold">{vendor.rating}</span>
                        <span className="ml-1">({vendor.reviews})</span>
                      </div>
                      <span className="font-semibold text-purple-600">{vendor.priceRange}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleVendorSelect(vendor.id)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      selectedVendors.includes(vendor.id)
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-purple-100'
                    }`}
                  >
                    <CheckCircle className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{vendor.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{vendor.responseTime} response</span>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {vendor.services.map((service) => (
                      <span
                        key={service}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-white/80 border border-white/60 text-gray-700 py-3 rounded-xl font-semibold hover:bg-white transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate('/business-flow')}
            className="bg-white/60 backdrop-blur-sm border border-white/40 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/80 transition-all duration-300"
          >
            Back to Analysis
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VendorSelection;
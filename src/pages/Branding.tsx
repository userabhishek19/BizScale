import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { Palette, Type, Eye, Heart, Zap, Shield, Crown, Star } from 'lucide-react';

const Branding: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState('modern');
  const [selectedColors, setSelectedColors] = useState(['#6366F1', '#8B5CF6']);

  const brandingStyles = [
    {
      id: 'modern',
      name: 'Modern & Minimalist',
      description: 'Clean lines, plenty of white space, contemporary feel',
      icon: Eye,
      preview: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'elegant',
      name: 'Elegant & Luxury',
      description: 'Sophisticated, premium, high-end aesthetic',
      icon: Crown,
      preview: 'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'playful',
      name: 'Playful & Creative',
      description: 'Fun, vibrant, approachable and friendly',
      icon: Heart,
      preview: 'https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'professional',
      name: 'Professional & Corporate',
      description: 'Trust-building, reliable, business-focused',
      icon: Shield,
      preview: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const colorPalettes = [
    {
      name: 'Digital Blue',
      colors: ['#6366F1', '#8B5CF6', '#06B6D4'],
      description: 'Trust, technology, innovation'
    },
    {
      name: 'Nature Green',
      colors: ['#10B981', '#059669', '#34D399'],
      description: 'Growth, sustainability, health'
    },
    {
      name: 'Sunset Orange',
      colors: ['#F59E0B', '#EF4444', '#F97316'],
      description: 'Energy, creativity, warmth'
    },
    {
      name: 'Royal Purple',
      colors: ['#8B5CF6', '#A855F7', '#C084FC'],
      description: 'Luxury, creativity, sophistication'
    },
    {
      name: 'Ocean Teal',
      colors: ['#0891B2', '#06B6D4', '#67E8F9'],
      description: 'Calm, professional, fresh'
    },
    {
      name: 'Elegant Gray',
      colors: ['#374151', '#6B7280', '#9CA3AF'],
      description: 'Sophistication, neutrality, balance'
    }
  ];

  const brandElements = [
    {
      title: 'Logo Design',
      description: 'Custom logo that represents your brand identity',
      features: ['Vector format', 'Multiple variations', 'Color & monochrome versions'],
      icon: Star
    },
    {
      title: 'Typography',
      description: 'Carefully selected fonts that match your brand personality',
      features: ['Primary & secondary fonts', 'Web-safe options', 'Hierarchy guidelines'],
      icon: Type
    },
    {
      title: 'Color Palette',
      description: 'Strategic color selection for maximum brand impact',
      features: ['Primary & accent colors', 'Hex color codes', 'Usage guidelines'],
      icon: Palette
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete style guide for consistent brand application',
      features: ['Logo usage rules', 'Color specifications', 'Typography guidelines'],
      icon: Eye
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            AI Brand Creation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create a powerful brand identity that resonates with your target audience
          </p>
        </motion.div>

        {/* Brand Style Selection */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Choose Your Brand Style</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandingStyles.map((style) => (
              <motion.div
                key={style.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedStyle(style.id)}
                className={`cursor-pointer rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${
                  selectedStyle === style.id
                    ? 'ring-4 ring-purple-500 ring-opacity-50'
                    : 'hover:shadow-2xl'
                }`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={style.preview}
                    alt={style.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-white/80 backdrop-blur-sm">
                  <div className="flex items-center mb-3">
                    <style.icon className="w-6 h-6 text-purple-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-800">{style.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{style.description}</p>
                  {selectedStyle === style.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="mt-3 text-purple-600 font-semibold flex items-center"
                    >
                      <Zap className="w-4 h-4 mr-1" />
                      Selected
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Color Palette Selection */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Select Your Color Palette</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colorPalettes.map((palette) => (
              <motion.div
                key={palette.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedColors(palette.colors)}
                className={`p-6 bg-white/60 backdrop-blur-sm border rounded-2xl shadow-xl cursor-pointer transition-all duration-300 ${
                  JSON.stringify(selectedColors) === JSON.stringify(palette.colors)
                    ? 'border-purple-500 ring-2 ring-purple-500/20'
                    : 'border-white/40 hover:shadow-2xl'
                }`}
              >
                <div className="flex space-x-2 mb-4">
                  {palette.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-xl shadow-lg"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{palette.name}</h3>
                <p className="text-gray-600 text-sm">{palette.description}</p>
                {JSON.stringify(selectedColors) === JSON.stringify(palette.colors) && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-3 text-purple-600 font-semibold flex items-center"
                  >
                    <Zap className="w-4 h-4 mr-1" />
                    Selected
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brand Preview */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Your Brand Preview</h2>
          
          <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-3xl p-12 shadow-2xl">
            <div className="text-center">
              {/* Mock Logo */}
              <div 
                className="w-32 h-32 mx-auto mb-8 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl"
                style={{ 
                  background: `linear-gradient(135deg, ${selectedColors[0]}, ${selectedColors[1] || selectedColors[0]})` 
                }}
              >
                YB
              </div>
              
              <h1 
                className="text-5xl font-bold mb-4"
                style={{ color: selectedColors[0] }}
              >
                Your Brand
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                This is how your brand will look with the selected style and colors. 
                Your unique identity will help you stand out in the market.
              </p>
              
              {/* Color Swatches */}
              <div className="flex justify-center space-x-4 mb-8">
                {selectedColors.map((color, index) => (
                  <div key={index} className="text-center">
                    <div
                      className="w-16 h-16 rounded-xl shadow-lg mb-2"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-sm text-gray-600 font-mono">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Brand Elements */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What You'll Get</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandElements.map((element, index) => (
              <motion.div
                key={element.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="p-8 bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{ 
                      background: `linear-gradient(135deg, ${selectedColors[0]}, ${selectedColors[1] || selectedColors[0]})` 
                    }}
                  >
                    <element.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{element.title}</h3>
                    <p className="text-gray-600 mb-4">{element.description}</p>
                    <ul className="space-y-2">
                      {element.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: selectedColors[0] }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Generate Brand Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
            style={{ 
              background: `linear-gradient(135deg, ${selectedColors[0]}, ${selectedColors[1] || selectedColors[0]})` 
            }}
          >
            Generate My Brand Package
          </motion.button>
          <p className="text-gray-600 mt-4">Complete brand package ready in 5 minutes</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Branding;
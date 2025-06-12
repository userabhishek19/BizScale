import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ServiceButton from '../components/ServiceButton';
import { Search, TrendingUp, Palette, Globe, Shield } from 'lucide-react';

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    {
      title: 'Market Research',
      description: 'AI-powered market analysis and insights',
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
      path: '/market-research'
    },
    {
      title: 'Branding',
      description: 'Build your brand identity with AI',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      path: '/branding'
    },
    {
      title: 'Expansion',
      description: 'Smart business growth strategies',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      path: '/expansion'
    },
    {
      title: 'Detect Frauds',
      description: 'Protect your business with AI security',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      path: '/fraud-detection'
    }
  ];

  const handleGetStarted = () => {
    navigate('/business-flow');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="px-6 py-16 max-w-7xl mx-auto text-center"
      >
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6"
        >
          BizScale
        </motion.h1>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          From Idea to Execution — BizScale Helps You Build It Right
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Get Started Now
          </button>
        </motion.div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="px-6 pb-16 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <ServiceButton
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
                onClick={() => navigate(service.path)}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="px-6 py-16 bg-white/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Why Choose BizScale?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">AI-Powered Insights</h3>
              <p className="text-gray-600">Get data-driven recommendations for your business decisions with our advanced AI technology.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Smart Growth</h3>
              <p className="text-gray-600">Scale your business intelligently with our proven strategies and market analysis.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Secure & Trusted</h3>
              <p className="text-gray-600">Protect your business with our advanced fraud detection and security measures.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Homepage;
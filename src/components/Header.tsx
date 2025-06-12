import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Menu, X, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative"
    >
      <div className="bg-white/20 backdrop-blur-md border-b border-white/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="w-10 h-10 bg-[#0E3D7B] rounded-xl flex items-center justify-center shadow-md shadow-[#bfe0f0]">
                <Building2 className="w-6 h-6 text-[#bfe0f0]" />
              </div>
              <span
                className="text-2xl font-bold text-[#0E3D7B] transition-all duration-300"
                style={{ textShadow: '0 2px 4px #bfe0f0' }}
              >
                BizScale
              </span>
            </motion.div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0E3D7B] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search business tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-[#bfe0f0] text-[#0E3D7B] rounded-full focus:outline-none focus:ring-2 focus:ring-[#bfe0f0] focus:border-transparent transition-all duration-300 placeholder:text-[#0E3D7B]/60"
                />
              </div>
            </div>

            {/* Navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="text-[#0E3D7B] hover:text-[#bfe0f0] font-semibold transition-colors duration-300"
              >
                About Us
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-[#0E3D7B] text-[#bfe0f0] px-6 py-2 rounded-full font-semibold hover:shadow-md hover:shadow-[#bfe0f0] transition-all duration-300"
              >
                Sign Up
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[#0E3D7B] hover:text-[#bfe0f0] transition-colors duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Search Bar - Mobile */}
          <div className="md:hidden mt-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0E3D7B] w-5 h-5" />
              <input
                type="text"
                placeholder="Search business tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-[#bfe0f0] text-[#0E3D7B] rounded-full focus:outline-none focus:ring-2 focus:ring-[#bfe0f0] focus:border-transparent transition-all duration-300 placeholder:text-[#0E3D7B]/60"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/30 backdrop-blur-md border-t border-white/30"
          >
            <div className="px-6 py-4 space-y-4">
              <button className="block w-full text-left text-[#0E3D7B] hover:text-[#bfe0f0] font-semibold transition-colors duration-300">
                About Us
              </button>
              <button className="block w-full bg-[#0E3D7B] text-[#bfe0f0] px-6 py-2 rounded-full font-semibold hover:shadow-md hover:shadow-[#bfe0f0] transition-all duration-300">
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Blue glow bottom border */}
      <div className="h-1 bg-[#0E3D7B] shadow-md shadow-[#bfe0f0]/50"></div>
    </motion.header>
  );
};

export default Header;

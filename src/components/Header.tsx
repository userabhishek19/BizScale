import React, { useState } from 'react';
import { Search, Menu, X, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <header className="bg-[#eaf6fa] border-b border-[#bcdff1]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => navigate('/')}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <div className="w-10 h-10 bg-[#0E3D7B] rounded-xl flex items-center justify-center shadow-md shadow-[#bfe0f0]">
            <Building2 className="w-6 h-6 text-[#bfe0f0]" />
          </div>
          <span
            className="text-2xl font-bold text-[#0E3D7B]"
            style={{ textShadow: '0 2px 4px #bfe0f0' }}
          >
            BizScale
          </span>
        </div>

        {/* Search */}
        <div className="hidden md:flex max-w-md flex-1 mx-8">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0E3D7B] w-5 h-5" />
            <input
              type="text"
              placeholder="Search business tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/70 border border-[#bfe0f0] text-[#0E3D7B] rounded-full focus:outline-none focus:ring-2 focus:ring-[#0E3D7B] transition-all duration-300 placeholder:text-[#0E3D7B]/50"
            />
          </div>
        </div>

        {/* Nav Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-[#0E3D7B] hover:text-[#184d91] font-medium transition-colors">About Us</button>
          <button className="bg-[#0E3D7B] text-white px-6 py-2 rounded-full font-medium hover:bg-[#184d91] transition">Sign Up</button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-[#0E3D7B] hover:text-[#184d91]">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#eaf6fa] border-t border-[#bcdff1] px-6 py-4 space-y-4">
          <button className="block w-full text-left text-[#0E3D7B] hover:text-[#184d91] font-medium">About Us</button>
          <button className="block w-full bg-[#0E3D7B] text-white px-6 py-2 rounded-full font-medium hover:bg-[#184d91] transition">Sign Up</button>
        </div>
      )}
    </header>
  );
};

export default Header;

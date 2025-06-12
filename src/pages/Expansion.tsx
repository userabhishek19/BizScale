import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, MapPin, DollarSign, Users, Calendar, Target, Building2, Zap } from 'lucide-react';

const Expansion: React.FC = () => {
  const navigate = useNavigate();
  const [selectedBusiness, setSelectedBusiness] = useState('');
  const [selectedExpansionType, setSelectedExpansionType] = useState('');
  const [showAnalysis, setShowAnalysis] = useState(false);

  const businessTypes = [
    { type: 'Restaurant', icon: '🍽️', growth: '+23%' },
    { type: 'Retail Store', icon: '🛍️', growth: '+18%' },
    { type: 'Tech Startup', icon: '💻', growth: '+35%' },
    { type: 'Consulting', icon: '💼', growth: '+15%' },
    { type: 'Healthcare', icon: '⚕️', growth: '+28%' },
    { type: 'Education', icon: '📚', growth: '+20%' }
  ];

  const expansionTypes = [
    {
      type: 'New Location',
      description: 'Open another branch in a different area',
      icon: MapPin,
      cost: '$50K - $150K',
      timeline: '3-6 months'
    },
    {
      type: 'Online Expansion',
      description: 'Expand your business to digital platforms',
      icon: Building2,
      cost: '$10K - $40K',
      timeline: '1-3 months'
    },
    {
      type: 'New Services',
      description: 'Add complementary services to existing business',
      icon: Zap,
      cost: '$15K - $60K',
      timeline: '2-4 months'
    },
    {
      type: 'Franchise Model',
      description: 'Scale through franchising opportunities',
      icon: Target,
      cost: '$25K - $100K',
      timeline: '6-12 months'
    }
  ];

  const expansionData = [
    { month: 'Month 1', investment: 80, revenue: 20, profit: -60 },
    { month: 'Month 3', investment: 120, revenue: 45, profit: -75 },
    { month: 'Month 6', investment: 150, revenue: 85, profit: -65 },
    { month: 'Month 9', investment: 150, revenue: 125, profit: -25 },
    { month: 'Month 12', investment: 150, revenue: 180, profit: 30 },
    { month: 'Month 18', investment: 150, revenue: 220, profit: 70 }
  ];

  const expansionOpportunities = [
    {
      location: 'Brooklyn Heights',
      score: 94,
      demographics: 'Young professionals',
      competition: 'Low',
      rent: '$8,500/month',
      footTraffic: 'High'
    },
    {
      location: 'Manhattan Midtown',
      score: 91,
      demographics: 'Business executives',
      competition: 'Medium',
      rent: '$15,200/month',
      footTraffic: 'Very High'
    },
    {
      location: 'Queens Long Island',
      score: 87,
      demographics: 'Families',
      competition: 'Low',
      rent: '$6,800/month',
      footTraffic: 'Medium'
    },
    {
      location: 'Bronx Fordham',
      score: 82,
      demographics: 'Students & families',
      competition: 'Very Low',
      rent: '$4,200/month',
      footTraffic: 'Medium'
    }
  ];

  const handleAnalyze = () => {
    if (selectedBusiness && selectedExpansionType) {
      setShowAnalysis(true);
    }
  };

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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Business Expansion Intelligence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scale your existing business with AI-powered expansion strategies
          </p>
        </motion.div>

        {!showAnalysis ? (
          <>
            {/* Business Type Selection */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What type of business do you currently own?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businessTypes.map((business) => (
                  <motion.button
                    key={business.type}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedBusiness(business.type)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      selectedBusiness === business.type
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-500'
                        : 'bg-white/60 backdrop-blur-sm border-white/40 hover:bg-white/80'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{business.icon}</div>
                      <h3 className="text-lg font-bold mb-2">{business.type}</h3>
                      <div className={`text-sm font-semibold ${
                        selectedBusiness === business.type ? 'text-green-100' : 'text-green-600'
                      }`}>
                        Market Growth: {business.growth}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Expansion Type Selection */}
            {selectedBusiness && (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How would you like to expand?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {expansionTypes.map((expansion) => (
                    <motion.button
                      key={expansion.type}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedExpansionType(expansion.type)}
                      className={`p-8 rounded-2xl border-2 transition-all duration-300 text-left ${
                        selectedExpansionType === expansion.type
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-500'
                          : 'bg-white/60 backdrop-blur-sm border-white/40 hover:bg-white/80'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <expansion.icon className={`w-8 h-8 ${
                          selectedExpansionType === expansion.type ? 'text-white' : 'text-blue-600'
                        }`} />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{expansion.type}</h3>
                          <p className={`mb-4 ${
                            selectedExpansionType === expansion.type ? 'text-blue-100' : 'text-gray-600'
                          }`}>
                            {expansion.description}
                          </p>
                          <div className="flex space-x-6 text-sm">
                            <div>
                              <span className={`font-semibold ${
                                selectedExpansionType === expansion.type ? 'text-white' : 'text-gray-800'
                              }`}>Cost: </span>
                              <span className={selectedExpansionType === expansion.type ? 'text-blue-100' : 'text-gray-600'}>
                                {expansion.cost}
                              </span>
                            </div>
                            <div>
                              <span className={`font-semibold ${
                                selectedExpansionType === expansion.type ? 'text-white' : 'text-gray-800'
                              }`}>Timeline: </span>
                              <span className={selectedExpansionType === expansion.type ? 'text-blue-100' : 'text-gray-600'}>
                                {expansion.timeline}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Analyze Button */}
            {selectedBusiness && selectedExpansionType && (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAnalyze}
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  Analyze Expansion Opportunity
                </motion.button>
              </motion.div>
            )}
          </>
        ) : (
          /* Analysis Results */
          <div className="space-y-12">
            {/* Key Metrics */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl shadow-xl">
                <DollarSign className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">Initial Investment</h3>
                <p className="text-2xl font-bold">$125,000</p>
                <p className="text-green-100 text-sm">Setup & first 6 months</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl shadow-xl">
                <Calendar className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">Break-even</h3>
                <p className="text-2xl font-bold">8 Months</p>
                <p className="text-blue-100 text-sm">Expected timeline</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl">
                <TrendingUp className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">ROI Projection</h3>
                <p className="text-2xl font-bold">145%</p>
                <p className="text-purple-100 text-sm">After 18 months</p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-xl">
                <Users className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">New Staff</h3>
                <p className="text-2xl font-bold">12 People</p>
                <p className="text-orange-100 text-sm">Additional hires needed</p>
              </div>
            </motion.div>

            {/* Expansion Chart */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Financial Projection</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={expansionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="investment" stroke="#EF4444" strokeWidth={3} name="Investment" />
                  <Line type="monotone" dataKey="revenue" stroke="#06B6D4" strokeWidth={3} name="Revenue" />
                  <Line type="monotone" dataKey="profit" stroke="#10B981" strokeWidth={3} name="Profit" />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Best Locations */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-green-600" />
                Top Expansion Locations
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {expansionOpportunities.map((location, index) => (
                  <motion.div
                    key={location.location}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      index === 0
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-500'
                        : 'bg-white/80 border-white/60 hover:bg-white'
                    }`}
                  >
                    <div className="text-center">
                      <h4 className="font-bold mb-2">{location.location}</h4>
                      <div className="text-2xl font-bold mb-3">
                        {location.score}/100
                      </div>
                      <div className={`space-y-2 text-sm ${index === 0 ? 'text-green-100' : 'text-gray-600'}`}>
                        <div>{location.demographics}</div>
                        <div>Competition: {location.competition}</div>
                        <div>Traffic: {location.footTraffic}</div>
                        <div className="font-semibold">{location.rent}</div>
                      </div>
                      {index === 0 && (
                        <div className="mt-3 text-xs bg-white/20 rounded-full px-3 py-1">
                          RECOMMENDED
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Ready to expand your {selectedBusiness}?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/vendors')}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
                >
                  Find Expansion Partners
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/market-research')}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
                >
                  Detailed Market Research
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Expansion;
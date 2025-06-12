import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, DollarSign, Target, MapPin, Calendar } from 'lucide-react';

const MarketResearch: React.FC = () => {
  const marketData = [
    { month: 'Jan', demand: 65, competition: 45 },
    { month: 'Feb', demand: 70, competition: 50 },
    { month: 'Mar', demand: 78, competition: 48 },
    { month: 'Apr', demand: 82, competition: 52 },
    { month: 'May', demand: 85, competition: 55 },
    { month: 'Jun', demand: 90, competition: 58 },
  ];

  const demographicData = [
    { name: '18-25', value: 20, color: '#8B5CF6' },
    { name: '26-35', value: 35, color: '#06B6D4' },
    { name: '36-45', value: 25, color: '#10B981' },
    { name: '46-55', value: 15, color: '#F59E0B' },
    { name: '55+', value: 5, color: '#EF4444' },
  ];

  const locationData = [
    { area: 'Downtown', score: 92, rent: '$8,500' },
    { area: 'Business District', score: 88, rent: '$7,200' },
    { area: 'Shopping Mall', score: 85, rent: '$9,800' },
    { area: 'Residential Area', score: 76, rent: '$5,500' },
    { area: 'Suburbs', score: 68, rent: '$4,200' },
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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            AI Market Research
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive market analysis powered by artificial intelligence
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl shadow-xl">
            <TrendingUp className="w-8 h-8 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Market Growth</h3>
            <p className="text-3xl font-bold">+15.2%</p>
            <p className="text-blue-100">Year over year</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl">
            <Users className="w-8 h-8 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Target Market</h3>
            <p className="text-3xl font-bold">2.4M</p>
            <p className="text-purple-100">Potential customers</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl shadow-xl">
            <DollarSign className="w-8 h-8 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Revenue Potential</h3>
            <p className="text-3xl font-bold">$850K</p>
            <p className="text-green-100">Annual projection</p>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-xl">
            <Target className="w-8 h-8 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Competition</h3>
            <p className="text-3xl font-bold">Medium</p>
            <p className="text-orange-100">Market saturation</p>
          </div>
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Market Trends */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Market Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="demand" stroke="#8B5CF6" strokeWidth={3} />
                <Line type="monotone" dataKey="competition" stroke="#06B6D4" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-6 mt-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                <span className="text-gray-600">Demand</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-cyan-500 rounded mr-2"></div>
                <span className="text-gray-600">Competition</span>
              </div>
            </div>
          </motion.div>

          {/* Demographics */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Target Demographics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={demographicData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {demographicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Location Analysis */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-3xl p-8 shadow-xl mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <MapPin className="w-6 h-6 mr-2 text-purple-600" />
            Best Locations for Your Business
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {locationData.map((location, index) => (
              <motion.div
                key={location.area}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-500'
                    : 'bg-white/80 border-white/60 hover:bg-white'
                }`}
              >
                <div className="text-center">
                  <h4 className="font-bold mb-2">{location.area}</h4>
                  <div className="text-2xl font-bold mb-2">
                    {location.score}/100
                  </div>
                  <div className={`text-sm ${index === 0 ? 'text-green-100' : 'text-gray-600'}`}>
                    Score
                  </div>
                  <div className={`mt-3 text-lg font-semibold ${index === 0 ? 'text-white' : 'text-purple-600'}`}>
                    {location.rent}/month
                  </div>
                  {index === 0 && (
                    <div className="mt-2 text-xs bg-white/20 rounded-full px-3 py-1">
                      RECOMMENDED
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Insights */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl p-8 shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-6">AI-Powered Insights</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Best Time to Launch
              </h4>
              <p className="text-purple-100 mb-4">
                Based on market trends and seasonal patterns, the optimal launch window is 
                <strong className="text-white"> March-April 2024</strong>. This period shows 
                the highest demand growth with moderate competition levels.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Key Success Factors
              </h4>
              <ul className="text-purple-100 space-y-2">
                <li>• Focus on 26-35 age demographic (35% of market)</li>
                <li>• Downtown location offers best ROI potential</li>
                <li>• Digital marketing essential for customer acquisition</li>
                <li>• Quality service differentiates from competition</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MarketResearch;
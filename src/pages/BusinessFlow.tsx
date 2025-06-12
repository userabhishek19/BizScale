import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import QuestionCard from '../components/QuestionCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { Building2, MapPin, Users, DollarSign, TrendingUp } from 'lucide-react';

interface BusinessData {
  hasExistingBusiness: boolean | null;
  businessType: string;
  location: string;
  targetMarket: string;
}

const BusinessFlow: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [businessData, setBusinessData] = useState<BusinessData>({
    hasExistingBusiness: null,
    businessType: '',
    location: '',
    targetMarket: ''
  });

  const handleBusinessOwnership = (hasExisting: boolean) => {
    setBusinessData({ ...businessData, hasExistingBusiness: hasExisting });
    if (hasExisting) {
      // Redirect to expansion tools
      navigate('/expansion');
    } else {
      setCurrentStep(1);
    }
  };

  const handleBusinessType = (type: string) => {
    setBusinessData({ ...businessData, businessType: type });
    setCurrentStep(2);
  };

  const handleLocation = (location: string) => {
    setBusinessData({ ...businessData, location });
    setCurrentStep(3);
  };

  const handleMarketAnalysis = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsLoading(false);
    setCurrentStep(4);
  };

  const businessTypes = [
    { type: 'Restaurant', icon: '🍽️', description: 'Food & Beverage Business' },
    { type: 'Retail Store', icon: '🛍️', description: 'Product Sales & Commerce' },
    { type: 'Tech Startup', icon: '💻', description: 'Technology & Software' },
    { type: 'Consulting', icon: '💼', description: 'Professional Services' },
    { type: 'Healthcare', icon: '⚕️', description: 'Medical & Wellness' },
    { type: 'Education', icon: '📚', description: 'Training & Learning' }
  ];

  const popularLocations = [
    'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX',
    'Phoenix, AZ', 'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA'
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <LoadingSpinner message="Analyzing market data and generating insights..." />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            {[0, 1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  step <= currentStep
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step 0: Business Ownership */}
        {currentStep === 0 && (
          <QuestionCard
            title="Do you already own a business?"
            subtitle="Let's understand your current situation to provide the best guidance"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleBusinessOwnership(true)}
                className="p-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Building2 className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Yes, I do</h3>
                <p className="text-green-100">I want to expand my existing business</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleBusinessOwnership(false)}
                className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No, I don't</h3>
                <p className="text-blue-100">I want to start a new business</p>
              </motion.button>
            </div>
          </QuestionCard>
        )}

        {/* Step 1: Business Type */}
        {currentStep === 1 && (
          <QuestionCard
            title="What kind of business would you like to start?"
            subtitle="Choose the industry that interests you most"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {businessTypes.map((business) => (
                <motion.button
                  key={business.type}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleBusinessType(business.type)}
                  className="p-6 bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/80"
                >
                  <div className="text-4xl mb-3">{business.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{business.type}</h3>
                  <p className="text-gray-600 text-sm">{business.description}</p>
                </motion.button>
              ))}
            </div>
          </QuestionCard>
        )}

        {/* Step 2: Location */}
        {currentStep === 2 && (
          <QuestionCard
            title="Which location do you prefer?"
            subtitle="Select your preferred location or enter a custom one"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {popularLocations.map((location) => (
                  <motion.button
                    key={location}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleLocation(location)}
                    className="p-4 bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80"
                  >
                    <MapPin className="w-5 h-5 inline-block mr-2 text-purple-600" />
                    <span className="font-semibold text-gray-800">{location}</span>
                  </motion.button>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-4">Or enter a custom location:</p>
                <div className="flex max-w-md mx-auto">
                  <input
                    type="text"
                    placeholder="Enter city, state"
                    className="flex-1 px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const target = e.target as HTMLInputElement;
                        if (target.value.trim()) {
                          handleLocation(target.value.trim());
                        }
                      }
                    }}
                  />
                  <button
                    onClick={(e) => {
                      const input = (e.currentTarget.previousElementSibling as HTMLInputElement);
                      if (input.value.trim()) {
                        handleLocation(input.value.trim());
                      }
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-r-xl hover:shadow-lg transition-all duration-300"
                  >
                    Go
                  </button>
                </div>
              </div>
            </div>
          </QuestionCard>
        )}

        {/* Step 3: Market Analysis */}
        {currentStep === 3 && (
          <QuestionCard
            title="Ready for Market Analysis?"
            subtitle={`We'll analyze the ${businessData.businessType} market in ${businessData.location}`}
          >
            <div className="text-center space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl">
                  <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">Cost Analysis</h3>
                  <p className="text-gray-600 text-sm">Initial investment and operating costs</p>
                </div>
                <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl">
                  <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">Staff Requirements</h3>
                  <p className="text-gray-600 text-sm">Recommended team size and roles</p>
                </div>
                <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl">
                  <TrendingUp className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">ROI Projection</h3>
                  <p className="text-gray-600 text-sm">Expected returns and timeline</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleMarketAnalysis}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
              >
                Start Analysis
              </motion.button>
            </div>
          </QuestionCard>
        )}

        {/* Step 4: Results */}
        {currentStep === 4 && (
          <QuestionCard
            title="Your Business Analysis Results"
            subtitle="Based on our AI analysis of your market"
          >
            <div className="space-y-8">
              {/* Market Insights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl">
                  <h3 className="text-xl font-bold mb-4">Initial Investment</h3>
                  <p className="text-3xl font-bold mb-2">$75,000 - $125,000</p>
                  <p className="text-green-100">Recommended budget range</p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl">
                  <h3 className="text-xl font-bold mb-4">Staff Needed</h3>
                  <p className="text-3xl font-bold mb-2">5-8 People</p>
                  <p className="text-blue-100">Including management</p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl">
                  <h3 className="text-xl font-bold mb-4">ROI Timeline</h3>
                  <p className="text-3xl font-bold mb-2">12-18 Months</p>
                  <p className="text-purple-100">Expected break-even</p>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl">
                  <h3 className="text-xl font-bold mb-4">Market Demand</h3>
                  <p className="text-3xl font-bold mb-2">High</p>
                  <p className="text-orange-100">Growing market opportunity</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Would you like to open this business now?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/vendors')}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
                  >
                    Yes, Show Me Vendors
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/')}
                    className="bg-white/60 backdrop-blur-sm border border-white/40 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Maybe Later
                  </motion.button>
                </div>
              </div>
            </div>
          </QuestionCard>
        )}
      </div>
    </motion.div>
  );
};

export default BusinessFlow;
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Users, DollarSign } from 'lucide-react';

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = "Loading..." 
}) => {
  const icons = [Brain, BarChart3, Users, DollarSign];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <div className="relative mb-8">
        {/* Main spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-4 border-purple-200 border-t-purple-600 rounded-full"
        />
        
        {/* Floating icons */}
        <div className="absolute inset-0">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut"
              }}
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${index * 90}deg) translateY(-40px)`,
              }}
            >
              <Icon className="w-6 h-6 text-purple-600" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          AI Analysis in Progress
        </h3>
        <p className="text-lg text-gray-600 mb-6 max-w-md">
          {message}
        </p>
        
        {/* Progress indicators */}
        <div className="space-y-3">
          {[
            "Processing market data...",
            "Analyzing competition...",
            "Calculating projections...",
            "Generating recommendations..."
          ].map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.8, duration: 0.5 }}
              className="flex items-center justify-center space-x-3"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: index * 0.3
                }}
                className="w-2 h-2 bg-purple-600 rounded-full"
              />
              <span className="text-sm text-gray-600">{step}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
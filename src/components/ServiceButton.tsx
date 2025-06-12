import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceButtonProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  onClick: () => void;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({
  title,
  description,
  icon: Icon,
  color,
  onClick
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        y: -5,
        rotateY: 5
      }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer group h-full"
      onClick={onClick}
    >
      <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-white/60">
        <motion.div 
          className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
          {description}
        </p>

        <motion.div 
          className="mt-6 flex items-center text-purple-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span>Get Started</span>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            whileHover={{ x: 5 }}
            className="ml-2"
          >
            →
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceButton;
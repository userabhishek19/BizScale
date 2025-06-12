import React from 'react';
import { motion } from 'framer-motion';

interface QuestionCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ title, subtitle, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-2xl"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </motion.div>
  );
};

export default QuestionCard;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from './pages/Homepage';
import BusinessFlow from './pages/BusinessFlow';
import MarketResearch from './pages/MarketResearch';
import Branding from './pages/Branding';
import Expansion from './pages/Expansion';
import FraudDetection from './pages/FraudDetection';
import VendorSelection from './pages/VendorSelection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/business-flow" element={<BusinessFlow />} />
            <Route path="/market-research" element={<MarketResearch />} />
            <Route path="/branding" element={<Branding />} />
            <Route path="/expansion" element={<Expansion />} />
            <Route path="/fraud-detection" element={<FraudDetection />} />
            <Route path="/vendors" element={<VendorSelection />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
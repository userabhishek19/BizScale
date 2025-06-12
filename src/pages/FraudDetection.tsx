import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { Shield, AlertTriangle, CheckCircle, XCircle, Eye, Lock, Bell, TrendingDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const FraudDetection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [threats, setThreats] = useState(0);
  const [suspicious, setSuspicious] = useState(0);

  useEffect(() => {
    // Simulate real-time threat detection
    const interval = setInterval(() => {
      setThreats(prev => prev + Math.floor(Math.random() * 3));
      setSuspicious(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const threatData = [
    { day: 'Mon', blocked: 12, flagged: 8 },
    { day: 'Tue', blocked: 15, flagged: 12 },
    { day: 'Wed', blocked: 8, flagged: 6 },
    { day: 'Thu', blocked: 22, flagged: 15 },
    { day: 'Fri', blocked: 18, flagged: 11 },
    { day: 'Sat', blocked: 9, flagged: 7 },
    { day: 'Sun', blocked: 6, flagged: 4 }
  ];

  const fraudTypes = [
    { name: 'Payment Fraud', value: 35, color: '#EF4444' },
    { name: 'Identity Theft', value: 25, color: '#F97316' },
    { name: 'Fake Reviews', value: 20, color: '#F59E0B' },
    { name: 'Account Takeover', value: 15, color: '#8B5CF6' },
    { name: 'Other', value: 5, color: '#6B7280' }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: 'High Risk',
      message: 'Multiple failed login attempts from unknown IP',
      time: '2 minutes ago',
      severity: 'high',
      status: 'investigating'
    },
    {
      id: 2,
      type: 'Suspicious Activity',
      message: 'Unusual transaction pattern detected',
      time: '15 minutes ago',
      severity: 'medium',
      status: 'resolved'
    },
    {
      id: 3,
      type: 'Data Breach Attempt',
      message: 'Unauthorized access attempt to customer database',
      time: '1 hour ago',
      severity: 'critical',
      status: 'blocked'
    },
    {
      id: 4,
      type: 'Fake Review',
      message: 'Suspicious review patterns detected',
      time: '3 hours ago',
      severity: 'low',
      status: 'monitoring'
    }
  ];

  const protectionFeatures = [
    {
      title: 'Real-time Monitoring',
      description: 'AI-powered 24/7 surveillance of all business activities',
      icon: Eye,
      enabled: true
    },
    {
      title: 'Payment Protection',
      description: 'Advanced fraud detection for all payment transactions',
      icon: Shield,
      enabled: true
    },
    {
      title: 'Identity Verification',
      description: 'Multi-factor authentication and identity checks',
      icon: Lock,
      enabled: true
    },
    {
      title: 'Alert System',
      description: 'Instant notifications for suspicious activities',
      icon: Bell,
      enabled: false
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'text-green-600';
      case 'blocked': return 'text-red-600';
      case 'investigating': return 'text-orange-600';
      case 'monitoring': return 'text-blue-600';
      default: return 'text-gray-600';
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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
            AI Fraud Detection & Security
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your business with advanced AI-powered fraud detection and real-time monitoring
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center space-x-2 mb-12"
        >
          {[
            { id: 'dashboard', label: 'Security Dashboard', icon: Shield },
            { id: 'alerts', label: 'Active Alerts', icon: AlertTriangle },
            { id: 'protection', label: 'Protection Settings', icon: Lock }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg'
                  : 'bg-white/60 backdrop-blur-sm border border-white/40 text-gray-700 hover:bg-white/80'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Security Metrics */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl shadow-xl">
                <CheckCircle className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">Protected</h3>
                <p className="text-3xl font-bold">99.9%</p>
                <p className="text-green-100 text-sm">Security uptime</p>
              </div>
              
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl">
                <XCircle className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">Threats Blocked</h3>
                <motion.p 
                  key={threats}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className="text-3xl font-bold"
                >
                  {147 + threats}
                </motion.p>
                <p className="text-red-100 text-sm">This month</p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-6 rounded-2xl shadow-xl">
                <AlertTriangle className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">Suspicious Activity</h3>
                <motion.p 
                  key={suspicious}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className="text-3xl font-bold"
                >
                  {23 + suspicious}
                </motion.p>
                <p className="text-orange-100 text-sm">Under investigation</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-2xl shadow-xl">
                <TrendingDown className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">Risk Level</h3>
                <p className="text-3xl font-bold">Low</p>
                <p className="text-blue-100 text-sm">Current status</p>
              </div>
            </motion.div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Threat Activity */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-3xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Weekly Threat Activity</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={threatData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="blocked" fill="#EF4444" name="Blocked" />
                    <Bar dataKey="flagged" fill="#F97316" name="Flagged" />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Fraud Types */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-3xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Fraud Types Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={fraudTypes}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {fraudTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </div>
        )}

        {/* Alerts Tab */}
        {activeTab === 'alerts' && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Recent Security Alerts</h2>
            
            {recentAlerts.map((alert, index) => (
              <motion.div
                key={alert.id}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(alert.severity)}`}>
                        {alert.type}
                      </span>
                      <span className="text-gray-500 text-sm">{alert.time}</span>
                    </div>
                    <p className="text-gray-800 font-medium mb-2">{alert.message}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Status:</span>
                      <span className={`text-sm font-semibold capitalize ${getStatusColor(alert.status)}`}>
                        {alert.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                      <XCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Protection Settings Tab */}
        {activeTab === 'protection' && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Security Protection Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {protectionFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-8 shadow-xl"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        feature.enabled ? 'bg-green-500' : 'bg-gray-400'
                      }`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          feature.enabled ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                            feature.enabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                  
                  <div className={`flex items-center space-x-2 ${
                    feature.enabled ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {feature.enabled ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">Active & Protected</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5" />
                        <span className="font-semibold">Disabled</span>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* AI Recommendations */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-3xl font-bold mb-6">AI Security Recommendations</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Immediate Actions</h4>
                  <ul className="space-y-3 text-red-100">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Enable two-factor authentication for all admin accounts
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Update payment gateway security certificates
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Review and revoke unused API access tokens
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4">Long-term Security</h4>
                  <ul className="space-y-3 text-red-100">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Implement advanced behavioral analytics
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Set up automated security audits
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Create incident response playbooks
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default FraudDetection;
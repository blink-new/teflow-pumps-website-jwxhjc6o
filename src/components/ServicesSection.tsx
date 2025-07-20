import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Settings, 
  Shield, 
  Clock, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  Phone,
  Calendar
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: 'Manufacturing Excellence',
      description: 'Custom Teflon pump manufacturing with precision engineering and quality assurance.',
      features: ['Custom Design', 'Quality Testing', 'ISO Certification', 'Fast Delivery'],
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1,
    },
    {
      icon: Wrench,
      title: 'Pump Consultancy',
      description: 'Expert consultation for chemical pump selection, installation, and optimization.',
      features: ['Technical Analysis', 'System Design', 'Performance Optimization', 'Cost Reduction'],
      color: 'from-purple-500 to-pink-500',
      delay: 0.2,
    },
    {
      icon: Shield,
      title: 'Maintenance & Repair',
      description: 'Comprehensive maintenance and repair services to ensure optimal pump performance.',
      features: ['Preventive Maintenance', 'Emergency Repair', 'Parts Replacement', 'Performance Monitoring'],
      color: 'from-green-500 to-emerald-500',
      delay: 0.3,
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and emergency services for critical operations.',
      features: ['Emergency Response', 'Remote Diagnostics', 'Technical Hotline', 'On-site Support'],
      color: 'from-orange-500 to-red-500',
      delay: 0.4,
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '50+', label: 'Expert Engineers', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From manufacturing to maintenance, we provide comprehensive pump solutions
            that keep your operations running smoothly.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={28} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-primary rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Our commitment to excellence has earned us the trust of companies across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-colors">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our experts today for a free consultation and discover how we can optimize your pump systems.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all flex items-center space-x-2"
              >
                <Calendar size={20} />
                <span>Schedule Consultation</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
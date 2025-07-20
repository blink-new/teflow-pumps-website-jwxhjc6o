import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'News & Updates', href: '#news' },
    ],
    products: [
      { name: 'Chemical Pumps', href: '#chemical-pumps' },
      { name: 'Teflon Pumps', href: '#teflon-pumps' },
      { name: 'Industrial Pumps', href: '#industrial-pumps' },
      { name: 'Custom Solutions', href: '#custom' },
    ],
    services: [
      { name: 'Manufacturing', href: '#manufacturing' },
      { name: 'Consultancy', href: '#consultancy' },
      { name: 'Maintenance', href: '#maintenance' },
      { name: '24/7 Support', href: '#support' },
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Case Studies', href: '#cases' },
      { name: 'Blog', href: '#blog' },
      { name: 'Downloads', href: '#downloads' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Teflow
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest updates on pump technology, industry insights, and exclusive offers.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-l-xl sm:rounded-r-none rounded-r-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-4 rounded-r-xl sm:rounded-l-none rounded-l-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <span className="text-white font-bold text-xl">Teflow Pumps</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading manufacturer of chemical pumps and industrial solutions. 
                Serving industries across India with excellence and innovation for over 15 years.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="text-indigo-400" size={18} />
                  <span className="text-gray-300">+91 79 2657 8901</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-indigo-400" size={18} />
                  <span className="text-gray-300">info@teflowpumps.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-indigo-400" size={18} />
                  <span className="text-gray-300">Ahmedabad, Gujarat, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-white font-semibold text-lg mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1 group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Teflow Pumps. All rights reserved. | 
              <a href="#privacy" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
              <a href="#terms" className="hover:text-white transition-colors ml-1">Terms of Service</a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${social.color} transition-colors`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sticky Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
        <motion.a
          href="https://wa.me/917926578901"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all animate-pulse-glow"
        >
          <Phone size={24} />
        </motion.a>
        
        <motion.a
          href="tel:+917926578901"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
        >
          <Phone size={24} />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
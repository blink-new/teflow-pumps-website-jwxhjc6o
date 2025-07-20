import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award, Zap } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-primary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Cards */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 right-20 hidden lg:block"
      >
        <div className="glass rounded-2xl p-4 w-64">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
              <Award className="text-white" size={20} />
            </div>
            <div>
              <p className="text-white font-semibold">ISO Certified</p>
              <p className="text-white/70 text-sm">Quality Assurance</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
        className="absolute bottom-32 left-20 hidden lg:block"
      >
        <div className="glass rounded-2xl p-4 w-56">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-blue rounded-lg flex items-center justify-center">
              <Users className="text-white" size={20} />
            </div>
            <div>
              <p className="text-white font-semibold">500+ Clients</p>
              <p className="text-white/70 text-sm">Trusted Worldwide</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8"
          >
            <Star className="text-yellow-400" size={16} />
            <span className="text-white/90 text-sm font-medium">India's Leading Pump Manufacturer</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            the 1% pump
            <br />
            <span className="text-gradient bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              solution library
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Discover the best chemical pump solutions with our library of over 3000+ pump specifications and
            tools. Manufacturing excellence forever.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group"
            >
              <span>Explore Products</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 group"
            >
              <Play className="group-hover:scale-110 transition-transform" size={20} />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '500+', label: 'Happy Clients', icon: Users },
              { number: '15+', label: 'Years Experience', icon: Award },
              { number: '3000+', label: 'Pump Solutions', icon: Zap },
              { number: '24/7', label: 'Support', icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-6 text-center group cursor-pointer"
              >
                <stat.icon className="text-white/80 mx-auto mb-3 group-hover:text-white transition-colors" size={24} />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
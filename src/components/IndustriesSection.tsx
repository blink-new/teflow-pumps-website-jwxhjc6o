import React from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  Beaker, 
  Droplets, 
  Zap, 
  Pill, 
  Fuel,
  ArrowRight,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      icon: Beaker,
      title: 'Chemical Processing',
      description: 'Specialized pumps for handling corrosive chemicals and aggressive media in chemical plants.',
      applications: ['Acid handling', 'Solvent transfer', 'Chemical mixing', 'Waste treatment'],
      clients: '150+',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop',
    },
    {
      icon: Pill,
      title: 'Pharmaceutical',
      description: 'FDA-compliant pumps for pharmaceutical manufacturing and sterile applications.',
      applications: ['API production', 'Sterile transfer', 'CIP/SIP systems', 'Batch processing'],
      clients: '80+',
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    },
    {
      icon: Droplets,
      title: 'Water Treatment',
      description: 'Reliable pumps for water and wastewater treatment facilities and municipal systems.',
      applications: ['Water filtration', 'Chemical dosing', 'Sludge handling', 'Disinfection'],
      clients: '200+',
      color: 'from-blue-400 to-blue-600',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industrial pumps for various manufacturing processes and production lines.',
      applications: ['Coolant circulation', 'Process fluids', 'Cleaning systems', 'Material transfer'],
      clients: '120+',
      color: 'from-gray-500 to-gray-700',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
    },
    {
      icon: Fuel,
      title: 'Petrochemical',
      description: 'Heavy-duty pumps for oil refineries and petrochemical processing facilities.',
      applications: ['Crude oil transfer', 'Refinery processes', 'Pipeline systems', 'Storage tanks'],
      clients: '60+',
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    },
    {
      icon: Zap,
      title: 'Power Generation',
      description: 'Critical pumps for power plants and energy generation facilities.',
      applications: ['Cooling systems', 'Boiler feed', 'Condensate return', 'Chemical injection'],
      clients: '40+',
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop',
    },
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
    <section id="industries" className="py-20 bg-gray-50">
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
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our pumps power critical operations across diverse industries, 
            delivering reliable performance where it matters most.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                
                {/* Icon */}
                <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <industry.icon className="text-white" size={24} />
                </div>

                {/* Client Count */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-semibold text-gray-900">{industry.clients} clients</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {industry.description}
                </p>

                {/* Applications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.applications.map((app, appIndex) => (
                      <span
                        key={appIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors"
                >
                  <span>View Solutions</span>
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Impact
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our solutions have made a significant impact across industries, 
              helping businesses achieve operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Users className="text-white" size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">650+</div>
              <div className="text-gray-600">Active Clients</div>
              <div className="text-sm text-green-600 font-medium mt-1">
                <TrendingUp className="inline w-4 h-4 mr-1" />
                +15% this year
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Factory className="text-white" size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">2,500+</div>
              <div className="text-gray-600">Pumps Installed</div>
              <div className="text-sm text-green-600 font-medium mt-1">
                <TrendingUp className="inline w-4 h-4 mr-1" />
                +25% this year
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Award className="text-white" size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">99.8%</div>
              <div className="text-gray-600">Uptime Rate</div>
              <div className="text-sm text-green-600 font-medium mt-1">
                <Award className="inline w-4 h-4 mr-1" />
                Industry leading
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
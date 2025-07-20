import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ExternalLink, Download, Star, ArrowUpRight } from 'lucide-react';

const ProductsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Chemical Pumps', 'Teflon Pumps', 'Industrial Pumps', 'Centrifugal Pumps'];

  const products = [
    {
      id: 1,
      name: 'TF-Series Chemical Pump',
      category: 'Chemical Pumps',
      description: 'High-performance chemical pump for corrosive applications',
      specs: 'Flow Rate: 50-500 LPM • Pressure: 2-8 Bar • Temperature: -20°C to 150°C',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
      rating: 4.9,
      downloads: 1234,
      popular: true,
    },
    {
      id: 2,
      name: 'Teflon Lined Pump',
      category: 'Teflon Pumps',
      description: 'PTFE lined pump for extreme chemical resistance',
      specs: 'Flow Rate: 25-300 LPM • Pressure: 1-6 Bar • Temperature: -40°C to 200°C',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop',
      rating: 4.8,
      downloads: 987,
      popular: false,
    },
    {
      id: 3,
      name: 'Industrial Centrifugal Pump',
      category: 'Industrial Pumps',
      description: 'Heavy-duty centrifugal pump for industrial applications',
      specs: 'Flow Rate: 100-1000 LPM • Pressure: 3-12 Bar • Temperature: 0°C to 120°C',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
      rating: 4.7,
      downloads: 756,
      popular: true,
    },
    {
      id: 4,
      name: 'High-Pressure Chemical Pump',
      category: 'Chemical Pumps',
      description: 'Specialized pump for high-pressure chemical processes',
      specs: 'Flow Rate: 20-200 LPM • Pressure: 10-25 Bar • Temperature: -10°C to 180°C',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      rating: 4.9,
      downloads: 1456,
      popular: false,
    },
    {
      id: 5,
      name: 'Magnetic Drive Pump',
      category: 'Chemical Pumps',
      description: 'Leak-free magnetic drive pump for hazardous chemicals',
      specs: 'Flow Rate: 30-400 LPM • Pressure: 2-10 Bar • Temperature: -30°C to 160°C',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop',
      rating: 4.8,
      downloads: 892,
      popular: true,
    },
    {
      id: 6,
      name: 'Self-Priming Pump',
      category: 'Industrial Pumps',
      description: 'Self-priming pump for versatile industrial applications',
      specs: 'Flow Rate: 75-750 LPM • Pressure: 2-8 Bar • Temperature: 0°C to 100°C',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop',
      rating: 4.6,
      downloads: 634,
      popular: false,
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
    <section id="products" className="py-20 bg-gray-50">
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
            Our Product <span className="text-gradient">Library</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of chemical pumps and industrial solutions.
            Each product is engineered for excellence and built to last.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="text-yellow-400 fill-current" size={14} />
                  <span className="text-white text-sm font-medium">{product.rating}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {product.name}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </motion.button>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-700 font-medium">{product.specs}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Download size={14} />
                      <span>{product.downloads}</span>
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                    >
                      View Specs
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium flex items-center space-x-1"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight size={14} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
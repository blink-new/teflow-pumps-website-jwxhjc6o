import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  const products = [
    'Teflon Chemical Pumps',
    'Magnetic Drive Pumps',
    'Self-Priming Pumps',
    'Centrifugal Pumps',
    'Custom Solutions'
  ]

  const services = [
    'Pump Manufacturing',
    'Technical Consultancy',
    'Maintenance Services',
    'Emergency Repairs',
    '24/7 Support'
  ]

  return (
    <footer className="bg-teflow-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teflow-blue to-teflow-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold">Teflow Pumps</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading manufacturer of high-performance Teflon pumps for chemical industries across India. 
              Trusted by 500+ companies for reliable pumping solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-teflow-blue flex-shrink-0" />
                <span className="text-sm text-gray-300">Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teflow-blue flex-shrink-0" />
                <span className="text-sm text-gray-300">+91 79 2345 6789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teflow-blue flex-shrink-0" />
                <span className="text-sm text-gray-300">info@teflowpumps.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white smooth-transition text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 smooth-transition" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href="#products"
                    className="text-gray-300 hover:text-white smooth-transition text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 smooth-transition" />
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white smooth-transition text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 smooth-transition" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="glass-card p-6 rounded-xl bg-white/5 backdrop-blur-sm">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">Stay Updated</h3>
              <p className="text-gray-300">
                Get the latest updates on new products, industry insights, and technical resources
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teflow-blue"
                />
                <Button className="bg-teflow-blue hover:bg-teflow-blue/90 text-white px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Teflow Pumps Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white smooth-transition">Privacy Policy</a>
              <a href="#" className="hover:text-white smooth-transition">Terms of Service</a>
              <a href="#" className="hover:text-white smooth-transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
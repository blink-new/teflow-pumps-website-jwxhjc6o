import { Button } from './ui/button'
import { ArrowRight, Play, CheckCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teflow-lavender via-background to-white"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-teflow-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teflow-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-teflow-green" />
              <span className="text-sm font-medium">Trusted by 500+ Industries Across India</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Premium{' '}
                <span className="bg-gradient-to-r from-teflow-blue to-teflow-green bg-clip-text text-transparent">
                  Teflon Pumps
                </span>{' '}
                for Chemical Excellence
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Manufacturing high-performance Teflon pumps for extreme chemical environments. 
                Expert consultancy, maintenance, and 24/7 support across India.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                'High-Temperature Resistant',
                'Chemical Compatibility',
                '24/7 Expert Support'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-teflow-green flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary group">
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 smooth-transition" />
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary group">
                <Play className="w-5 h-5 mr-2" />
                Get Pumping Solution
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-teflow-blue">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teflow-blue">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teflow-blue">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="glass-card p-8 rounded-3xl">
              {/* Placeholder for pump image */}
              <div className="aspect-square bg-gradient-to-br from-teflow-blue/20 to-teflow-green/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-teflow-blue/20 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-12 h-12 bg-teflow-blue rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Teflon Chemical Pump</h3>
                    <p className="text-muted-foreground">High-performance industrial solution</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 glass-card p-4 rounded-xl animate-float">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-teflow-green" />
                <span className="text-sm font-medium">ISO Certified</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-teflow-green" />
                <span className="text-sm font-medium">Made in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
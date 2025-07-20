import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { ArrowRight, Wrench, Factory, Headphones, Shield } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Factory,
      title: 'Manufacturing of Teflon Pumps',
      description: 'Custom-engineered Teflon pumps designed for high-temperature chemical applications with superior corrosion resistance.',
      features: ['High-temperature resistance up to 200°C', 'Chemical compatibility with acids & bases', 'Custom specifications available', 'ISO 9001:2015 certified manufacturing'],
      cta: 'View Products'
    },
    {
      icon: Wrench,
      title: 'Chemical Pump Consultancy & Servicing',
      description: 'Expert consultancy, maintenance, and repair services for all types of chemical pumps with 24/7 technical support.',
      features: ['Expert pump selection guidance', 'Preventive maintenance programs', 'Emergency repair services', 'Performance optimization'],
      cta: 'Book Consultation'
    }
  ]

  const additionalServices = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensure every pump meets industry standards.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and emergency services across India.'
    }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-teflow-lavender">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Core{' '}
            <span className="bg-gradient-to-r from-teflow-blue to-teflow-green bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for all your chemical pumping needs, from manufacturing to maintenance
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-white/20 hover:shadow-xl smooth-transition animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teflow-blue to-teflow-green rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-teflow-green rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Button className="btn-primary group w-full">
                  {service.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 smooth-transition" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 gap-6">
          {additionalServices.map((service, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover:shadow-lg smooth-transition animate-slide-up" style={{ animationDelay: `${(index + 2) * 0.2}s` }}>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-teflow-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-5 h-5 text-teflow-blue" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Contact our experts for personalized pump solutions and consultancy services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
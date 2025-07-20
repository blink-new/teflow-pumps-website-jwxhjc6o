import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { ArrowRight, Thermometer, Droplets, Shield, Zap } from 'lucide-react'

export default function ProductHighlight() {
  const specifications = [
    { icon: Thermometer, label: 'Temperature Range', value: '-20°C to +200°C' },
    { icon: Droplets, label: 'Flow Rate', value: 'Up to 500 LPM' },
    { icon: Shield, label: 'Pressure Rating', value: 'Up to 16 Bar' },
    { icon: Zap, label: 'Power Rating', value: '0.5 HP to 50 HP' }
  ]

  const features = [
    'PTFE/PFA lined for superior chemical resistance',
    'Self-priming design with dry-run protection',
    'Magnetic drive coupling for zero leakage',
    'Corrosion-resistant 316L SS construction',
    'Easy maintenance with modular design',
    'Compliance with international standards'
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <Badge variant="outline" className="glass-card border-teflow-blue/20 text-teflow-blue">
            Featured Product
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Teflow{' '}
            <span className="bg-gradient-to-r from-teflow-blue to-teflow-green bg-clip-text text-transparent">
              TF-Series
            </span>{' '}
            Chemical Pump
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our flagship Teflon-lined chemical pump designed for the most demanding industrial applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative animate-slide-in-left">
            <Card className="glass-card border-white/20 overflow-hidden">
              <CardContent className="p-0">
                {/* Placeholder for product image */}
                <div className="aspect-square bg-gradient-to-br from-teflow-blue/10 via-white to-teflow-green/10 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    {/* Product Illustration */}
                    <div className="relative">
                      <div className="w-48 h-32 bg-gradient-to-r from-teflow-blue to-teflow-green rounded-2xl mx-auto opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center">
                          <div className="w-16 h-12 bg-gradient-to-r from-teflow-blue to-teflow-green rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-teflow-blue">TF-Series</h3>
                      <p className="text-muted-foreground">Chemical Transfer Pump</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl animate-float">
              <Badge className="bg-teflow-green text-white">ISO Certified</Badge>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl animate-float" style={{ animationDelay: '0.5s' }}>
              <Badge className="bg-teflow-blue text-white">Made in India</Badge>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Key Specifications */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Key Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="glass-card p-4 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-teflow-blue/10 rounded-lg flex items-center justify-center">
                        <spec.icon className="w-4 h-4 text-teflow-blue" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{spec.label}</div>
                        <div className="font-semibold">{spec.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Key Features</h3>
              <div className="grid gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teflow-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="glass-card p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Ideal Applications</h4>
              <div className="flex flex-wrap gap-2">
                {['Chemical Processing', 'Pharmaceutical', 'Water Treatment', 'Petrochemical', 'Food & Beverage'].map((app, index) => (
                  <Badge key={index} variant="secondary" className="bg-teflow-blue/10 text-teflow-blue">
                    {app}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary group">
                View Full Specifications
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 smooth-transition" />
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
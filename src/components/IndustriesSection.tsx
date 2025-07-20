import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Factory, Beaker, Droplets, Zap, Pill, Leaf } from 'lucide-react'

export default function IndustriesSection() {
  const industries = [
    {
      icon: Beaker,
      title: 'Chemical Processing',
      description: 'Handling corrosive acids, bases, and solvents with superior chemical resistance',
      applications: ['Acid transfer', 'Solvent handling', 'Chemical mixing', 'Waste treatment']
    },
    {
      icon: Pill,
      title: 'Pharmaceutical',
      description: 'Sterile and contamination-free pumping for pharmaceutical manufacturing',
      applications: ['API production', 'Clean-in-place', 'Sterile transfer', 'Buffer solutions']
    },
    {
      icon: Droplets,
      title: 'Water Treatment',
      description: 'Reliable pumping solutions for water and wastewater treatment facilities',
      applications: ['Chemical dosing', 'Sludge handling', 'Filtration systems', 'Disinfection']
    },
    {
      icon: Zap,
      title: 'Petrochemical',
      description: 'High-performance pumps for oil refining and petrochemical processes',
      applications: ['Crude oil processing', 'Catalyst transfer', 'Additive injection', 'Tank cleaning']
    },
    {
      icon: Leaf,
      title: 'Food & Beverage',
      description: 'Food-grade pumping solutions meeting strict hygiene standards',
      applications: ['Ingredient transfer', 'CIP systems', 'Flavor dosing', 'Sanitization']
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industrial pumping solutions for various manufacturing processes',
      applications: ['Coolant circulation', 'Parts washing', 'Chemical coating', 'Process fluids']
    }
  ]

  return (
    <section id="industries" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Industries{' '}
            <span className="bg-gradient-to-r from-teflow-blue to-teflow-green bg-clip-text text-transparent">
              We Serve
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Providing specialized pumping solutions across diverse industries with tailored expertise
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="glass-card border-white/20 hover:shadow-xl smooth-transition group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teflow-blue to-teflow-green rounded-xl flex items-center justify-center group-hover:scale-110 smooth-transition">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{industry.title}</CardTitle>
                  <CardDescription className="text-base">{industry.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-teflow-blue">Key Applications:</h4>
                  <ul className="space-y-2">
                    {industry.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-teflow-green rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Industry?</h3>
            <p className="text-muted-foreground mb-6">
              We provide custom pumping solutions for specialized applications across all industries. 
              Contact our experts to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-6 py-3 rounded-xl font-medium smooth-transition shadow-lg hover:shadow-xl">
                Discuss Your Requirements
              </button>
              <button className="btn-secondary px-6 py-3 rounded-xl font-medium smooth-transition">
                View All Solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import { Card, CardContent } from './ui/card'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Plant Manager',
      company: 'Gujarat Chemical Industries',
      content: 'Teflow Pumps has been our trusted partner for over 5 years. Their Teflon pumps handle our most corrosive chemicals without any issues. Excellent quality and reliable service.',
      rating: 5,
      initials: 'RK'
    },
    {
      name: 'Priya Sharma',
      position: 'Process Engineer',
      company: 'Pharma Solutions Ltd',
      content: 'The technical expertise and 24/7 support from Teflow team is outstanding. They helped us optimize our chemical transfer process and reduce downtime significantly.',
      rating: 5,
      initials: 'PS'
    },
    {
      name: 'Amit Patel',
      position: 'Maintenance Head',
      company: 'Petrotech Industries',
      content: 'Best investment we made for our chemical plant. The pumps are robust, maintenance-friendly, and the team provides excellent after-sales support.',
      rating: 5,
      initials: 'AP'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-teflow-lavender to-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            What Our{' '}
            <span className="bg-gradient-to-r from-teflow-blue to-teflow-green bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading industries across India for reliable chemical pumping solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-white/20 hover:shadow-xl smooth-transition animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-teflow-blue/30" />
                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-white/20">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-gradient-to-br from-teflow-blue to-teflow-green text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-teflow-blue mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teflow-blue mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teflow-blue mb-2">99.5%</div>
                <div className="text-sm text-muted-foreground">Uptime Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teflow-blue mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
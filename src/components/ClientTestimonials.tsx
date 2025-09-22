import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { motion } from "motion/react";
import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Alex transformed our complex trading requirements into an elegant, powerful interface. The dashboard has become our competitive advantage in the fintech space.",
    author: "Sarah Martinez",
    role: "Product Director",
    company: "TradeTech Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NTc2Mjc4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    project: "Trading Dashboard",
    results: ["45% ↑ user engagement", "30% ↑ trading efficiency"]
  },
  {
    quote: "The new mobile banking app design has transformed our customer experience. We've seen unprecedented user engagement and satisfaction scores since launch.",
    author: "Michael Chen",
    role: "Head of Digital Banking",
    company: "SecureBank",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzU3NjI3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    project: "Mobile Banking App",
    results: ["4.3⭐ app rating", "60% faster onboarding"]
  },
  {
    quote: "Alex's design system became the foundation of our product consistency. It's saved us countless hours and improved our user experience dramatically across all touchpoints.",
    author: "Lisa Park",
    role: "VP of Product",
    company: "GrowthCo",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGFzaWFufGVufDF8fHx8MTc1NzYyNzgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    project: "Design System",
    results: ["60% ↑ dev speed", "5 products unified"]
  },
  {
    quote: "Working with Alex was a game-changer for our startup. His UX insights helped us pivot our product strategy and ultimately led to our successful Series A funding.",
    author: "David Rodriguez",
    role: "CEO & Founder",
    company: "InnovateAI",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzU3NjI3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    project: "Product Strategy",
    results: ["Series A funded", "3x user growth"]
  },
  {
    quote: "The healthcare platform redesign exceeded all our expectations. Alex's attention to accessibility and user needs resulted in a 50% improvement in patient satisfaction.",
    author: "Dr. Jennifer Walsh",
    role: "Chief Medical Officer",
    company: "HealthTech Pro",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjB3b21hbnxlbnwxfHx8fDE3NTc2Mjc4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    project: "Healthcare Platform",
    results: ["50% ↑ satisfaction", "35% ↓ no-shows"]
  },
  {
    quote: "Alex's e-commerce redesign drove immediate results. Our conversion rate improved by 25% in the first month, and customer feedback has been overwhelmingly positive.",
    author: "Amanda Foster",
    role: "Marketing Director",
    company: "StyleHub",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjB3b21hbnxlbnwxfHx8fDE3NTc2Mjc4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    project: "E-commerce Redesign",
    results: ["25% ↑ conversion", "40% ↓ cart abandonment"]
  }
];

const clientLogos = [
  { name: "TradeTech", logo: "TT" },
  { name: "SecureBank", logo: "SB" },
  { name: "GrowthCo", logo: "GC" },
  { name: "InnovateAI", logo: "IA" },
  { name: "HealthTech", logo: "HT" },
  { name: "StyleHub", logo: "SH" },
  { name: "DataFlow", logo: "DF" },
  { name: "CloudSync", logo: "CS" }
];

export function ClientTestimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-4">Client Testimonials</Badge>
          <h2 className="text-4xl md:text-4xl font-bold mb-6">
            What Clients Say
            <br />
            <span className="text-muted-foreground">About Working With Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what clients and collaborators have to say 
            about the impact of our design partnerships.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-20"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">40+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9⭐</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">120+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Retention</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Project & Results */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">{testimonial.project}</Badge>
                    </div>
                    <div className="space-y-1">
                      {testimonial.results.map((result, i) => (
                        <div key={i} className="text-xs text-green-600 font-medium">
                          • {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-bold mb-6">Trusted by Leading Companies</h2>
            <p className="text-muted-foreground">
              From startups to enterprises, I've partnered with companies of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 opacity-60">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground">{client.logo}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 py-16 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-3xl"
        >
          <h2 className="text-4xl md:text-4xl font-bold mb-6">Ready to Join These Success Stories?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Let's create something amazing together that your users will love and your business will benefit from.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
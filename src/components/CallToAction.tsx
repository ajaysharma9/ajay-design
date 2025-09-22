import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const quickStats = [
  { number: "40+", label: "Happy Clients" },
  { number: "120+", label: "Projects Delivered" },
  { number: "4.9⭐", label: "Average Rating" },
  { number: "98%", label: "Client Retention" }
];

const collaborationOptions = [
  {
    title: "Full Project Partnership",
    description: "End-to-end design collaboration from research to implementation",
    duration: "6-12 weeks",
    ideal: "New products, major redesigns",
    icon: "🚀"
  },
  {
    title: "Design Sprint",
    description: "Rapid prototyping and validation for specific features",
    duration: "1-2 weeks",
    ideal: "Feature development, quick validation",
    icon: "⚡"
  },
  {
    title: "Design Consultation",
    description: "Strategic guidance and design review sessions",
    duration: "Ongoing",
    ideal: "Team mentoring, design audits",
    icon: "🎯"
  },
  {
    title: "Workshop & Training",
    description: "Team workshops on design thinking and best practices",
    duration: "1-3 days",
    ideal: "Team upskilling, process improvement",
    icon: "🎓"
  }
];

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-blue-500/5 to-purple-500/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-4 bg-background/80 backdrop-blur-sm">
            Let's Work Together
          </Badge>
          <h2 className="text-4xl md:text-4xl font-bold mb-6">
            Ready to Create
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a startup looking to make your mark or an established company ready 
            to innovate, I'm here to help transform your vision into exceptional user experiences.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Collaboration Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-bold mb-6">How We Can Work Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible collaboration models designed to fit your project needs, timeline, and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborationOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {option.icon}
                    </div>
                    <h4 className="font-medium mb-3">{option.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {option.description}
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs">{option.duration}</Badge>
                      <div className="text-xs text-muted-foreground">{option.ideal}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-background/80 backdrop-blur-sm border rounded-3xl p-12 mb-16"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-4xl font-bold mb-6">
              Let's Turn Your Ideas Into
              <br />
              <span className="text-primary">Exceptional Experiences</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm currently accepting new projects starting in January 2025. 
              Whether you have a clear vision or just a spark of an idea, let's explore how 
              we can bring it to life together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/contact">
                    Start Your Project
                    <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Schedule a Call
                  <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </Button>
              </motion.div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free initial consultation
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Flexible engagement models
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                NDA available
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-3xl mb-3">📧</div>
              <h4 className="font-medium mb-2">Email Me</h4>
              <p className="text-sm text-muted-foreground mb-3">
                alex.chen@designstudio.com
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-3xl mb-3">💼</div>
              <h4 className="font-medium mb-2">LinkedIn</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Connect professionally
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Connect
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-3xl mb-3">📅</div>
              <h4 className="font-medium mb-2">Calendar</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Book a 15-min call
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Schedule
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Available for new projects
              {/* • Starting January 2025 */}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
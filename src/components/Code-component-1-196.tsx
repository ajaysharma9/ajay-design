import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const services = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing interfaces that users love to interact with.",
    features: ["User Research", "Wireframing", "Visual Design", "Prototyping"],
    tools: ["Figma", "Sketch", "Adobe XD"],
    timeline: "2-4 weeks",
    deliverables: ["Design System", "High-fidelity Mockups", "Interactive Prototypes"]
  },
  {
    icon: "📱",
    title: "Mobile App Design",
    description: "Native iOS and Android app experiences optimized for touch interactions and mobile behaviors.",
    features: ["iOS Guidelines", "Material Design", "Responsive Design", "Touch Optimization"],
    tools: ["Figma", "Principle", "ProtoPie"],
    timeline: "3-6 weeks",
    deliverables: ["App Designs", "Icon Set", "Style Guide"]
  },
  {
    icon: "🏗️",
    title: "Design Systems",
    description: "Scalable component libraries and design foundations that grow with your product.",
    features: ["Component Library", "Design Tokens", "Documentation", "Governance"],
    tools: ["Figma", "Storybook", "Abstract"],
    timeline: "4-8 weeks",
    deliverables: ["Component Library", "Documentation", "Implementation Guide"]
  },
  {
    icon: "🔍",
    title: "User Research",
    description: "Data-driven insights to understand your users and validate design decisions.",
    features: ["User Interviews", "Usability Testing", "Journey Mapping", "Analytics Review"],
    tools: ["Maze", "Hotjar", "Lookback"],
    timeline: "1-3 weeks",
    deliverables: ["Research Report", "User Personas", "Recommendations"]
  },
  {
    icon: "⚡",
    title: "Product Strategy",
    description: "Strategic design thinking to align user needs with business goals and technical constraints.",
    features: ["Competitive Analysis", "Feature Prioritization", "Roadmap Planning", "Stakeholder Alignment"],
    tools: ["Miro", "Notion", "FigJam"],
    timeline: "1-2 weeks",
    deliverables: ["Strategy Document", "Feature Roadmap", "Success Metrics"]
  },
  {
    icon: "♿",
    title: "Accessibility Audit",
    description: "Ensuring your digital products are usable by everyone, regardless of their abilities.",
    features: ["WCAG Compliance", "Screen Reader Testing", "Color Contrast", "Keyboard Navigation"],
    tools: ["axe DevTools", "WAVE", "Color Oracle"],
    timeline: "1-2 weeks",
    deliverables: ["Audit Report", "Remediation Plan", "Guidelines"]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your goals, users, and constraints through research and stakeholder interviews."
  },
  {
    number: "02", 
    title: "Strategy",
    description: "Defining the design direction, user flows, and success metrics for the project."
  },
  {
    number: "03",
    title: "Design",
    description: "Creating wireframes, visual designs, and interactive prototypes with iterative feedback."
  },
  {
    number: "04",
    title: "Validation",
    description: "Testing designs with real users and refining based on data and feedback."
  },
  {
    number: "05",
    title: "Delivery",
    description: "Providing final assets, documentation, and ongoing support for implementation."
  }
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-4">Services</Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            How I Can Help
            <br />
            <span className="text-muted-foreground">Your Business Grow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From initial concept to final implementation, I offer comprehensive design services 
            that transform ideas into exceptional user experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <h3 className="text-xl font-medium">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-6">
                    <h4 className="text-sm font-medium">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta Info */}
                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Timeline:</span>
                      <span className="text-sm font-medium">{service.timeline}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {service.tools.slice(0, 2).map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                      {service.tools.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{service.tools.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl mb-4">My Design Process</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures every project delivers maximum value and exceptional user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h4 className="font-medium mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              
              {/* Connection line */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-muted"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-16 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-3xl"
        >
          <h3 className="text-2xl mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Let's discuss your project goals and how I can help you create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/skills">View My Skills</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
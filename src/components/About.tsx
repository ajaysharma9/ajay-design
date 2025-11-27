import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import AjProfile from "../assets/aj-profile.png";

const timeline = [
  {
    year: "2015",
    title: "UI/UX Designer",
    company: "Linkites.",
    description: "Leading design for enterprise SaaS products, managing a team of 3 designers, and establishing design systems across multiple product lines.",
    achievements: ["Increased user engagement by 45%", "Reduced support tickets by 30%", "Led design system adoption across 5 products"]
  },
  {
    year: "2024",
    title: "Senior UI/UX Designer",
    company: "Smooth Tag Technologies Pvt. Ltd",
    description: "Designed mobile and web applications for fintech and healthcare clients, focusing on accessibility and user research.",
    achievements: ["Delivered 25+ projects", "Improved conversion rates by 35%", "Implemented accessibility standards"]
  }, 
];

const values = [
  {
    icon: "🎯",
    title: "User-Centered Approach",
    description: "Every design decision is backed by user research and data, ensuring solutions that truly meet user needs."
  },
  {
    icon: "🔍",
    title: "Attention to Detail",
    description: "Perfectionist by nature, I believe great design lies in the smallest details that create seamless experiences."
  },
  {
    icon: "🚀",
    title: "Innovation Focus",
    description: "Always exploring new design trends and technologies to create forward-thinking solutions."
  },
  {
    icon: "🤝",
    title: "Collaborative Spirit",
    description: "Strong believer in cross-functional collaboration, working closely with developers, PMs, and stakeholders."
  }
];

export function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            Passionate About Creating
            <br />
            <span className="text-muted-foreground">Meaningful Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over 5 years of experience in UI/UX design, I've had the privilege of working 
            with startups and enterprises to create digital experiences that make a real impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="w-full h-80 rounded-3xl overflow-hidden">
                <img
                  src={AjProfile}
                  alt="Alex Chen - UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background border shadow-lg rounded-2xl p-6 w-64">
                <div className="text-sm text-muted-foreground mb-1">Currently based in</div>
                <div className="font-medium">India, Indore madhya pradesh</div>
                <div className="text-sm text-muted-foreground mt-2">Open to remote work</div>
              </div>
            </div>
            
            <div className="space-y-4 pt-8">
              <h3 className="text-2xl">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                My journey into design started with a computer science background, which gave me a unique 
                perspective on the intersection of technology and user experience. I discovered my passion 
                for UX design when I realized that the most beautiful code means nothing if users can't 
                understand or enjoy using the product.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, I've evolved from a curious developer to a seasoned designer who bridges 
                the gap between user needs and technical possibilities. I believe in data-driven design 
                decisions, but I also trust in the power of intuition and creativity.
              </p>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-muted last:border-l-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary">{item.year}</Badge>
                      <span className="text-sm text-muted-foreground">{item.company}</span>
                    </div>
                    <h4 className="text-lg font-medium mb-3">{item.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl mb-4">Design Philosophy</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These core values guide every project I work on and every design decision I make.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="font-medium mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl mb-4">Education & Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="mb-4">
                  <h4 className="text-lg font-medium">Master of Computer Science</h4>
                  <p className="text-muted-foreground">Stanford University • 2019-2021</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Specialized in Human-Computer Interaction with focus on user experience design 
                  and cognitive psychology.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <div className="mb-4">
                  <h4 className="text-lg font-medium">Certified UX Professional</h4>
                  <p className="text-muted-foreground">Nielsen Norman Group • 2022</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive certification covering user research, interaction design, 
                  and usability evaluation methods.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Design Tools",
    description: "Professional design software and prototyping tools",
    skills: [
      { name: "Figma", level: 95, years: "5 years", icon: "🎨" },
      { name: "Adobe Creative Suite", level: 90, years: "6 years", icon: "🎭" },
      { name: "Sketch", level: 85, years: "4 years", icon: "✏️" },
      { name: "Principle", level: 88, years: "3 years", icon: "🎬" },
      { name: "Framer", level: 82, years: "2 years", icon: "⚡" }
    ]
  },
  {
    title: "Research & Strategy",
    description: "User research methodologies and strategic thinking",
    skills: [
      { name: "User Research", level: 92, years: "5 years", icon: "🔍" },
      { name: "Usability Testing", level: 90, years: "4 years", icon: "🧪" },
      { name: "Information Architecture", level: 88, years: "4 years", icon: "🏗️" },
      { name: "Journey Mapping", level: 85, years: "3 years", icon: "🗺️" },
      { name: "Design Strategy", level: 87, years: "3 years", icon: "🎯" }
    ]
  },
  {
    title: "Development",
    description: "Frontend technologies for better design-dev collaboration",
    skills: [
      { name: "HTML/CSS", level: 85, years: "6 years", icon: "💻" },
      { name: "JavaScript", level: 78, years: "4 years", icon: "⚙️" },
      { name: "React", level: 75, years: "3 years", icon: "⚛️" },
      { name: "Tailwind CSS", level: 88, years: "2 years", icon: "🎨" },
      { name: "Design Systems", level: 92, years: "4 years", icon: "🧩" }
    ]
  },
  {
    title: "Collaboration",
    description: "Project management and team collaboration skills",
    skills: [
      { name: "Cross-functional Leadership", level: 90, years: "4 years", icon: "👥" },
      { name: "Agile/Scrum", level: 85, years: "5 years", icon: "🔄" },
      { name: "Design Systems", level: 93, years: "4 years", icon: "📐" },
      { name: "Stakeholder Management", level: 88, years: "3 years", icon: "🤝" },
      { name: "Mentoring", level: 85, years: "2 years", icon: "🌟" }
    ]
  }
];

const certifications = [
  {
    name: "Google UX Design Certificate",
    issuer: "Google",
    year: "2023",
    badge: "🏆"
  },
  {
    name: "Certified Usability Analyst",
    issuer: "Human Factors International",
    year: "2022",
    badge: "🥇"
  },
  {
    name: "Design Thinking Certificate",
    issuer: "IDEO",
    year: "2022",
    badge: "💡"
  },
  {
    name: "Accessibility Specialist",
    issuer: "IAAP",
    year: "2023",
    badge: "♿"
  }
];

const achievements = [
  {
    metric: "120+",
    label: "Projects Completed",
    description: "Across various industries and scales"
  },
  {
    metric: "40+",
    label: "Happy Clients",
    description: "Long-term partnerships built"
  },
  {
    metric: "95%",
    label: "Client Satisfaction",
    description: "Average project rating"
  },
  {
    metric: "5+",
    label: "Team Members",
    description: "Designers mentored"
  }
];

export function Skills() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-4">Skills & Expertise</Badge>
          <h2 className="text-4xl md:text-4xl font-bold mb-6">
            Tools & Technologies
            <br />
            <span className="text-muted-foreground">I Work With</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built over years of experience, constantly evolving with 
            industry trends and emerging technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-medium mb-2">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <div>
                              <div className="font-medium">{skill.name}</div>
                              <div className="text-sm text-muted-foreground">{skill.years}</div>
                            </div>
                          </div>
                          <div className="text-sm font-medium">{skill.level}%</div>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl mb-4">By the Numbers</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Some key metrics that showcase my experience and impact in the design field.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-primary mb-2">{achievement.metric}</div>
                    <div className="font-medium mb-2">{achievement.label}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl mb-4">Certifications & Awards</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development through industry-recognized programs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{cert.badge}</div>
                    <h4 className="font-medium mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <Badge variant="secondary" className="text-xs">{cert.year}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 py-16 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-3xl"
        >
          <h3 className="text-2xl mb-4">Want to Know More?</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Download my detailed resume for a comprehensive overview of my experience and skills.
          </p>
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
}
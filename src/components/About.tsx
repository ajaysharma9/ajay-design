import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import AjProfile from "../assets/aj-profile.png";

const timeline = [
  {
    year: "2015",
    title: "UI/UX Designer",
    company: "Linkites",
    description:
      "Designed intuitive and scalable SaaS interfaces by transforming complex workflows into simple, user-friendly experiences. Conducted user research, created wireframes and high-fidelity prototypes, and contributed to the development of a design system used across multiple products.",
    achievements: [
      "Improved user engagement by 45%",
      "Reduced usability-related support tickets by 30%",
      "Contributed to design system adoption across 5 product lines"
    ]
  },
  {
    year: "2024",
    title: "Senior UI/UX Designer",
    company: "Smooth Tag Technologies Pvt. Ltd",
    description:
      "Delivered end-to-end design for mobile and web applications in fintech and healthcare. Focused on usability, accessibility, and clean interface design to enhance user satisfaction and business outcomes.",
    achievements: [
      "Delivered 25+ high-impact client projects",
      "Improved conversion rates by 35% through UX optimization",
      "Implemented accessibility best practices across product suite"
    ]
  }
];

const values = [
  {
    icon: "🎯",
    title: "User-Centered Approach",
    description:
      "Every design decision is grounded in user insights, ensuring meaningful and intuitive experiences."
  },
  {
    icon: "🔍",
    title: "Attention to Detail",
    description:
      "Small details create big impact. I refine every pixel to craft clean, usable interfaces."
  },
  {
    icon: "🚀",
    title: "Innovation Focus",
    description:
      "I stay updated with design trends and emerging tools to deliver modern, forward-thinking solutions."
  },
  {
    icon: "🤝",
    title: "Collaborative Spirit",
    description:
      "I work closely with developers, PMs, and stakeholders to bring ideas to life efficiently."
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
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            Passionate About Creating
            <br />
            <span className="text-muted-foreground">Meaningful Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over 10 years of experience in UI/UX design, I've collaborated with startups and
            enterprises to craft clean, intuitive, and user-focused digital experiences that create
            real impact.
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
                  alt="Ajay Sharma - Senior UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background border shadow-lg rounded-2xl p-6 w-64">
                <div className="text-sm text-muted-foreground mb-1">
                  Currently based in
                </div>
                <div className="font-medium">Indore, Madhya Pradesh, India</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Open to remote opportunities
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <h3 className="text-2xl">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                My journey began with a computer science background, which gave me a strong
                foundation in logic, problem-solving, and understanding how technology works under
                the hood. This technical perspective naturally evolved into a love for designing
                digital experiences that are both beautiful and functional.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the last decade, I’ve grown into a senior designer who balances creativity with
                usability, ensuring every design decision is intentional. I believe in combining
                research, intuitive design, and thoughtful interactions to deliver meaningful user
                experiences.
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
                      <span className="text-sm text-muted-foreground">
                        {item.company}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium mb-3">{item.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
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
            These core values guide how I think, create, and collaborate while designing digital
            products.
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
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Education & Certifications */}
        {/* <motion.div
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
                  <h4 className="text-lg font-medium">
                    Bachelor of Computer Science
                  </h4>
                  <p className="text-muted-foreground">Indore, India</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Built strong fundamentals in programming, logic, and system design — skills that
                  help me bridge the gap between user needs and technical constraints.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="mb-4">
                  <h4 className="text-lg font-medium">
                    UX/UI Design Specialization
                  </h4>
                  <p className="text-muted-foreground">Online Certification</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Completed advanced training in user research, interaction design, wireframing,
                  prototyping, and usability evaluation methods.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

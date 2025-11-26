import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";
import ringC from "../assets/ring-c.png"
import Anya from "../assets/anya.png" 
import Volkno from "../assets/volkno.png" 
import Convlyze from "../assets/convlyze.png" 
import Kikoshop from "../assets/kikoshop.png" 
import Reliablebits from "../assets/reliablebits.png" 
import { 
  Monitor, 
  Smartphone, 
  Layout, 
  ArrowRight, 
  ExternalLink,
  Calendar,
  Clock
} from "lucide-react";

const projects = [
  {
    id: 1,
    slug: "https://ringconcierge.com/",
    title: "Ring Concierge",
    category: "E-Commerce",
    description:
      "Luxury fine-jewelry shopping experience designed for modern consumers, focusing on customization, product discovery, and high-end visual storytelling.",
    image: ringC,
    tags: ["E-Commerce", "UI/UX", "Mobile Web", "Responsive Design"],
    year: "2024",
    duration: "3 months",
    featured: true,
    results: [
      "Improved product discovery flow",
      "Enhanced mobile shopping experience",
      "Optimized conversion-focused layouts"
    ]
  },

  {
    id: 2,
    slug: "https://thisisanya.com/",
    title: "Anya",
    category: "Healthcare / Wellness",
    description:
      "A postpartum care platform offering guided recovery programs, expert-backed tools, and personalized support for new mothers.",
    image: Anya,
    tags: ["HealthTech", "Mobile", "Wellness", "Accessibility"],
    year: "2024",
    duration: "4 months",
    featured: true,
    results: [
      "Streamlined onboarding experience",
      "Improved content accessibility",
      "Strengthened user retention workflows"
    ]
  },

  {
    id: 3,
    slug: "https://volkno.ai/",
    title: "Volkno AI",
    category: "AI-Powered SaaS",
    description:
      "AI-driven content automation platform helping businesses create, analyze, and scale their marketing content efficiently.",
    image: Volkno,
    tags: ["AI", "SaaS", "Content Automation", "Dashboard UX"],
    year: "2023",
    duration: "6 months",
    featured: false,
    results: [
      "Designed scalable component architecture",
      "Improved workflow clarity across AI tools",
      "Simplified dashboard and analytics views"
    ]
  },

  {
    id: 4,
    slug: "https://convlyze.com/",
    title: "Convlyze",
    category: "SaaS / AI Insights",
    description:
      "Conversation analytics platform that transforms sales and support calls into actionable insights using AI-powered speech intelligence.",
    image: Convlyze,
    tags: ["AI", "Analytics", "SaaS", "Voice Intelligence"],
    year: "2023",
    duration: "5 months",
    featured: false,
    results: [
      "Redesigned insights layout for clarity",
      "Improved call-analysis user flow",
      "Enhanced usability for large datasets"
    ]
  },

  {
    id: 5,
    slug: "https://kikoshop.in/",
    title: "Kikoshop",
    category: "E-Commerce",
    description:
      "A full-stack online fashion and accessories store built for smooth browsing, fast checkout, and mobile-first retail experience.",
    image: Kikoshop,
    tags: ["E-Commerce", "Retail", "UI/UX", "Mobile-First"],
    year: "2023",
    duration: "4 months",
    featured: false,
    results: [
      "Improved category navigation",
      "Enhanced product card layout",
      "Optimized mobile checkout experience"
    ]
  },

  {
    id: 6,
    slug: "https://reliablebits.io/",
    title: "reliablebits",
    category: "Web Application",
    description:
      "A modular analytics dashboard for SaaS companies to track engagement, revenue, cohorts, and product performance.",
    image:Reliablebits,
    tags: ["SaaS", "Analytics", "Data Visualization", "BI Dashboards"],
    year: "2022",
    duration: "3 months",
    featured: false,
    results: [
      "Created scalable data-viz components",
      "Improved reporting UX",
      "Designed customizable widget system"
    ]
  }
];

const categories = [
  { id: "all", label: "All Projects", icon: Layout },
  { id: "web", label: "Web Apps", icon: Monitor },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "design-system", label: "Design Systems", icon: Layout }
];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterProjects = (category: string) => {
    if (category === "all") return projects;
    if (category === "web") return projects.filter(p => p.category === "Web Application");
    if (category === "mobile") return projects.filter(p => p.category === "Mobile Application");
    if (category === "design-system") return projects.filter(p => p.category === "Design System");
    return projects;
  };

  const filteredProjects = filterProjects(selectedCategory);
  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

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
          <Badge variant="outline" className="mb-4">Portfolio</Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            Featured Work &
            <br />
            <span className="text-muted-foreground">Case Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of projects that showcase my approach to solving complex design challenges 
            across different industries and platforms.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            {/* <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 h-auto p-2 bg-muted/30">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col gap-2 py-4 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="text-sm">{category.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList> */}

            {/* Tab Content */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-12">
                {/* Stats */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center mb-12"
                >
                  <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{filteredProjects.length} Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>2022-2024</span>
                    </div>
                  </div>
                </motion.div> */}

                {/* Featured Projects */}
                {featuredProjects.length > 0 && (
                  <div className="mb-20">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-2xl mb-8 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Featured Projects
                    </motion.h3>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                      {featuredProjects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                          <a
                            href={project.slug}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden">
                              <CardContent className="p-0">
                                <div className="relative overflow-hidden">
                                  <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  <div className="absolute top-6 left-6">
                                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                                      {project.category}
                                    </Badge>
                                  </div>
                                  <div className="absolute top-6 right-6">
                                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                                      {project.year}
                                    </Badge>
                                  </div>
                                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-white text-sm mb-2">Key Results:</div>
                                    <div className="space-y-1">
                                      {project.results.slice(0, 2).map((result, i) => (
                                        <div key={i} className="text-white/90 text-xs">• {result}</div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="p-8 space-y-4">
                                  <div className="space-y-3">
                                    <h3 className="text-2xl font-medium group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                                  </div>
                                  
                                  <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                      <Badge key={tag} variant="outline" className="text-xs">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                  
                                  <div className="flex items-center justify-between pt-4 border-t">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                      <Clock className="w-4 h-4" />
                                      {project.duration}
                                    </div>
                                    <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                                      <span className="text-sm font-medium">View Case Study</span>
                                      <ArrowRight className="w-4 h-4" />
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Other Projects */}
                {otherProjects.length > 0 && (
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-2xl mb-8 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                      {featuredProjects.length > 0 ? "More Projects" : "All Projects"}
                    </motion.h3>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {otherProjects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <a
    href={project.slug}
    target="_blank"
    rel="noopener noreferrer"
  >
                            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 h-full">
                              <CardContent className="p-0">
                                <div className="relative overflow-hidden rounded-t-lg">
                                  <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                  <div className="absolute top-4 left-4">
                                    <Badge variant="secondary" className="text-xs bg-background/90 backdrop-blur-sm">
                                      {project.category}
                                    </Badge>
                                  </div>
                                  <div className="absolute top-4 right-4">
                                    <Badge variant="secondary" className="text-xs bg-background/90 backdrop-blur-sm">
                                      {project.year}
                                    </Badge>
                                  </div>
                                </div>
                                
                                <div className="p-6 space-y-4">
                                  <div className="space-y-2">
                                    <h3 className="text-lg font-medium group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
                                  </div>
                                  
                                  <div className="flex flex-wrap gap-1">
                                    {project.tags.slice(0, 3).map((tag) => (
                                      <Badge key={tag} variant="outline" className="text-xs">
                                        {tag}
                                      </Badge>
                                    ))}
                                    {project.tags.length > 3 && (
                                      <Badge variant="outline" className="text-xs">
                                        +{project.tags.length - 3}
                                      </Badge>
                                    )}
                                  </div>
                                  
                                  <div className="flex items-center justify-between pt-2">
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                      <Clock className="w-3 h-3" />
                                      {project.duration}
                                    </div>
                                    <div className="flex items-center gap-1 text-primary text-xs">
                                      <span>View</span>
                                      <ExternalLink className="w-3 h-3" />
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center py-16"
                  >
                    <Layout className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl mb-2">No projects found</h3>
                    <p className="text-muted-foreground">Try selecting a different category.</p>
                  </motion.div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 py-16 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-3xl"
        >
          <h3 className="text-2xl mb-4">Have a Project in Mind?</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Let's discuss how I can help bring your vision to life with exceptional design.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const featuredProjects = [
  {
    id: 1,
    slug: "trading-dashboard",
    title: "Trading Dashboard",
    category: "Financial Technology",
    description: "A comprehensive trading platform with real-time data visualization and advanced analytics for professional traders.",
    image: "https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3NTQxODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["UI/UX", "Dashboard", "Fintech"],
    metrics: ["45% ↑ engagement", "30% ↑ efficiency", "25% ↓ errors"],
    year: "2024",
    featured: true
  },
  {
    id: 2,
    slug: "mobile-banking",
    title: "Mobile Banking App",
    category: "Mobile Application",
    description: "Intuitive banking experience with biometric security, smart insights, and seamless money management.",
    image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU3NjI3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile", "Banking", "iOS"],
    metrics: ["4.3⭐ rating", "60% ↑ onboarding", "50% ↑ adoption"],
    year: "2024",
    featured: false
  },
  {
    id: 3,
    slug: "design-system",
    title: "Enterprise Design System",
    category: "Design System",
    description: "Scalable component library and design tokens that unified 5 products across multiple platforms.",
    image: "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc1NzYwMzczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["System", "Components", "Scale"],
    metrics: ["60% ↑ dev speed", "100% reusability", "5 products unified"],
    year: "2023",
    featured: false
  }
];

export function FeaturedWork() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">Featured Work</Badge>
          <h2 className="text-4xl md:text-4xl font-medium mb-6">
            Recent Projects That
            <br />
            <span className="text-muted-foreground">
              Made an Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore some of my recent work where thoughtful design meets measurable business results. 
            Each project tells a story of collaboration, innovation, and user-centered thinking.
          </p>
        </motion.div>

        {/* Featured Project */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {featuredProjects[0].category}
                  </Badge>
                  <Badge variant="outline">{featuredProjects[0].year}</Badge>
                </div>
                <h3 className="text-3xl md:text-4xl">{featuredProjects[0].title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {featuredProjects[0].description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredProjects[0].tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {featuredProjects[0].metrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm font-medium text-green-600">{metric}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link to={`/project/${featuredProjects[0].slug}`}>
                    View Case Study
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio">All Projects</Link>
                </Button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <ImageWithFallback
                  src={featuredProjects[0].image}
                  alt={featuredProjects[0].title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm border shadow-lg rounded-2xl p-4 w-48"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Award Winner</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Best Fintech Design 2024</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-500 overflow-hidden h-full">
                  <Link to={`/project/${project.slug}`}>
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                            {project.category}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                            {project.year}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="p-8 space-y-4">
                        <div className="space-y-3">
                          <h3 className="text-xl font-medium group-hover:text-primary transition-colors">{project.title}</h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Mini metrics */}
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          {project.metrics.map((metric, i) => (
                            <div key={i} className="text-center text-green-600 font-medium">
                              {metric}
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-xs text-muted-foreground">Case Study</span>
                          <div className="flex items-center gap-1 text-primary text-sm">
                            <span>View Project</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" variant="outline" asChild>
            <Link to="/portfolio" className="group">
              View Complete Portfolio
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
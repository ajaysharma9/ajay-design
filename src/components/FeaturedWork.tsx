import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Link } from "react-router-dom"
import { motion } from "motion/react"
import ringC from "../assets/ring-c.png"
import Anya from "../assets/anya.png"
import YardPost from "../assets/yard-post.png"
import FirneoImg from "../assets/firneo.png"
import OnetabImg from "../assets/onetab.png"
import Onnbike from "../assets/onnbike.png"
import SubTitleIcon from "../assets/sub-title-icon.svg"

const featuredProjects = [
  {
    id: 1,
    slug: "https://ringconcierge.com/",
    title: "Ring Concierge",
    category: "E-Commerce",
    description:
      "Custom engagement rings and fine jewelry handcrafted by women, for women.",
    image: ringC,
    tags: ["Mobile App", "Web App"],
    metrics: ["45% ↑ engagement", "30% ↑ efficiency", "25% ↓ errors"],
    year: 2024,
    featured: true,
  },
  {
    id: 2,
    slug: "https://thisisanya.com/",
    title: "Anya",
    category: "Healthcare / Wellness",
    description:
      "A postpartum care plan built with experts to support every mom’s journey.",
    image: Anya,
    tags: ["Web App"],
    metrics: ["45% ↑ engagement", "30% ↑ efficiency", "25% ↓ errors"],
    year: 2024,
    featured: true,
  },
  {
    id: 3,
    slug: "https://yardpost.com/",
    title: "YardPost",
    category: "Real Estate / Marketplace",
    description:
      "A streamlined landing-page & website builder platform tailored for real estate professionals — CRM, listings and IDX-ready templates included. ",  
    image: YardPost,
    tags: ["Web App"],
    metrics: ["—"],  // You may update with actual impact metrics if available
    year: 2024,
    featured: true,
  },
  {
    id: 4,
    slug: "https://www.firneo.com/",
    title: "Firneo",
    category: "Professional Development / SaaS",
    description:
      "A community & training platform that helps BD & partnerships professionals upskill with courses, templates and mentoring.",  
    image: FirneoImg,
    tags: ["Web App"],
    metrics: ["—"],
    year: 2024,
    featured: true,
  },
  {
    id: 5,
    slug: "https://www.onetab.ai/",
    title: "onetab.ai",
    category: "IT Services / SaaS / Productivity",
    description:
      "AI-powered enterprise platform combining project management, knowledge graph, CI/CD workflows, analytics — all tools in one place.",  
    image: OnetabImg,
    tags: ["Web App", "AI-SaaS"],
    metrics: ["—"],
    year: 2024,
    featured: true,
  },
  {
    id: 6,
    slug: "https://www.onnbikes.com/",
    title: "ONN Bikes",
    category: "Mobility / E-commerce",
    description:
      "A modern mobility-as-a-service (MaaS) platform offering bike & electric-bike rentals (hourly/flexible) — solves urban commute and reduces ownership overhead.",  
    image: Onnbike,
    tags: ["Web App"],
    metrics: ["—"],
    year: 2024,
    featured: true,
  },
]


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
          <Badge variant="outline" className="mb-4">
            <img src={SubTitleIcon} alt=""/>Featured Work
          </Badge>
          <h2 className="text-4xl md:text-4xl font-bold mb-6">
            Recent Projects That
            <br />
            <span className="text-muted-foreground">Made an Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore some of my recent work where thoughtful design meets measurable
            business results. Each project tells a story of collaboration,
            innovation, and user-centered thinking.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => {
              const isExternal = project.slug.startsWith("http")
              const Wrapper: React.ElementType = isExternal ? "a" : Link
              const wrapperProps = isExternal
                ? { href: project.slug, target: "_blank", rel: "noopener noreferrer" }
                : { to: project.slug }

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-500 overflow-hidden h-full">
                    <Wrapper {...wrapperProps}>
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute top-4 left-4">
                            <Badge
                              variant="secondary"
                              className="bg-background/90 backdrop-blur-sm"
                            >
                              {project.category}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge
                              variant="secondary"
                              className="bg-background/90 backdrop-blur-sm"
                            >
                              {project.year}
                            </Badge>
                          </div>
                        </div>

                        <div className="p-8 space-y-4">
                          <div className="space-y-3">
                            <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                              {project.description}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <span className="text-xs text-muted-foreground">
                              {isExternal ? "External Link" : "Case Study"}
                            </span>
                            <div className="flex items-center gap-1 text-primary text-sm">
                              <span>{isExternal ? "Visit Site" : "View Project"}</span>
                              <svg
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Wrapper>
                  </Card>
                </motion.div>
              )
            })}
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
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

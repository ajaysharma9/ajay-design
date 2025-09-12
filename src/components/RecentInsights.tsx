import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Mic, 
  BookOpen, 
  Trophy, 
  Mail,
  Calendar
} from "lucide-react";

const insights = [
  {
    id: 1,
    title: "The Future of Fintech UX: Designing for Trust and Transparency",
    excerpt: "Exploring how modern fintech applications are rebuilding user trust through transparent design patterns and clear communication.",
    category: "Fintech Design",
    readTime: "5 min read",
    date: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwdWl8ZW58MXx8fHwxNzU3NjI3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true
  },
  {
    id: 2,
    title: "Design Systems That Scale: Lessons from 5 Years of Building",
    excerpt: "Key insights and practical tips for creating design systems that grow with your organization and stand the test of time.",
    category: "Design Systems",
    readTime: "8 min read",
    date: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW18ZW58MXx8fHwxNzU3NjI3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  },
  {
    id: 3,
    title: "Mobile-First Banking: Redefining Financial Experiences",
    excerpt: "How mobile banking apps are setting new standards for user experience and what traditional banks can learn.",
    category: "Mobile UX",
    readTime: "6 min read",
    date: "Dec 5, 2024",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nfGVufDF8fHx8MTc1NzYyNzgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  }
];

const topics = [
  { name: "Design Systems", count: 12 },
  { name: "Fintech UX", count: 8 },
  { name: "Mobile Design", count: 15 },
  { name: "User Research", count: 10 },
  { name: "Accessibility", count: 6 },
  { name: "Design Process", count: 9 }
];

const recentUpdates = [
  {
    type: "Speaking",
    title: "UX Week 2024",
    description: "Presenting 'The Art of Design Systems' at UX Week San Francisco",
    date: "Jan 15, 2025",
    icon: Mic
  },
  {
    type: "Publication",
    title: "UX Magazine",
    description: "Featured article on fintech design patterns published",
    date: "Dec 20, 2024",
    icon: BookOpen
  },
  {
    type: "Award",
    title: "Design Awards 2024",
    description: "Trading Dashboard wins 'Best Fintech Design' category",
    date: "Dec 10, 2024",
    icon: Trophy
  }
];

export function RecentInsights() {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-4">Insights & Updates</Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            Latest Thoughts &
            <br />
            <span className="text-muted-foreground">Industry Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sharing knowledge, experiences, and perspectives on design, technology, and the future 
            of digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Featured Article */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={insights[0].image}
                        alt={insights[0].title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary">{insights[0].category}</Badge>
                          <span className="text-sm text-muted-foreground">{insights[0].date}</span>
                        </div>
                        
                        <h3 className="text-2xl font-medium leading-tight">{insights[0].title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{insights[0].excerpt}</p>
                        
                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="text-sm text-muted-foreground">{insights[0].readTime}</span>
                          <Button variant="ghost" size="sm" className="group">
                            Read Article
                            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Other Articles */}
            <div className="grid gap-8">
              {insights.slice(1).map((insight, index) => (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-3 gap-0">
                        <div className="relative overflow-hidden">
                          <ImageWithFallback
                            src={insight.image}
                            alt={insight.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        
                        <div className="md:col-span-2 p-6">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <Badge variant="outline">{insight.category}</Badge>
                              <span className="text-sm text-muted-foreground">{insight.date}</span>
                            </div>
                            
                            <h3 className="text-lg font-medium">{insight.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{insight.excerpt}</p>
                            
                            <div className="flex items-center justify-between pt-2">
                              <span className="text-xs text-muted-foreground">{insight.readTime}</span>
                              <Button variant="ghost" size="sm" className="text-xs group">
                                Read More
                                <svg className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Updates */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium mb-6">Recent Updates</h3>
                  <div className="space-y-6">
                    {recentUpdates.map((update, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <update.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs">{update.type}</Badge>
                            <span className="text-xs text-muted-foreground">{update.date}</span>
                          </div>
                          <h4 className="font-medium text-sm">{update.title}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">{update.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Popular Topics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium mb-6">Popular Topics</h3>
                  <div className="space-y-3">
                    {topics.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm hover:text-primary cursor-pointer transition-colors">
                          {topic.name}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {topic.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-primary/5 to-blue-500/5">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 p-3 bg-primary/10 rounded-xl">
                    <Mail className="w-full h-full text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get notified when I publish new insights and case studies.
                  </p>
                  <Button size="sm" className="w-full">
                    Subscribe to Newsletter
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Speaking & Events */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium mb-6">Speaking & Events</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 p-3 bg-primary/10 rounded-xl">
                        <Mic className="w-full h-full text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Available for speaking engagements, workshops, and design critiques.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Book a Session
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Button size="lg" variant="outline" className="inline-flex items-center gap-2">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
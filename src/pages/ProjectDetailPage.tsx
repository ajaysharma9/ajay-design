import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";

const projects = {
  "trading-dashboard": {
    id: 1,
    title: "Professional Trading Dashboard",
    subtitle: "Revolutionizing Financial Technology",
    description: "A comprehensive trading platform interface with real-time data visualization and intuitive controls.",
    fullDescription: "This project involved designing a complete trading dashboard for TradeTech Solutions, a growing fintech startup. The challenge was to present complex financial data in an intuitive, accessible way while maintaining real-time performance and ensuring compliance with financial regulations. The solution included customizable widgets, advanced charting capabilities, multi-monitor support, and a responsive design that works seamlessly across all devices.",
    problemStatement: "Day traders were struggling with existing platforms that were either too complex for newcomers or lacked the advanced features needed by professionals. The client needed a solution that could bridge this gap while handling real-time data streams efficiently.",
    solution: "We created a modular dashboard system with progressive disclosure of complexity, allowing users to start simple and gradually unlock advanced features as their expertise grows. The interface adapts to user behavior and trading patterns.",
    image: "https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3NTQxODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU3NjI3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXNpbmVzcyUyMGRhdGF8ZW58MXx8fHwxNzU3NjI3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    tags: ["Web Design", "Dashboard", "Fintech", "Data Visualization", "Real-time"],
    year: "2024",
    client: "TradeTech Solutions",
    duration: "3 months",
    team: "4 members",
    role: "Lead UI/UX Designer",
    tools: ["Figma", "Principle", "Adobe XD", "Maze", "Hotjar"],
    process: [
      {
        phase: "Research & Discovery",
        duration: "2 weeks",
        description: "Conducted user interviews with 15 professional traders, analyzed existing platforms, and studied trading workflows.",
        deliverables: ["User personas", "Journey maps", "Competitive analysis", "Technical requirements"]
      },
      {
        phase: "Design & Prototyping", 
        duration: "6 weeks",
        description: "Created wireframes, high-fidelity designs, and interactive prototypes. Iterative design process with regular stakeholder reviews.",
        deliverables: ["Wireframes", "Visual designs", "Interactive prototypes", "Design system"]
      },
      {
        phase: "Testing & Refinement",
        duration: "3 weeks", 
        description: "Usability testing with beta users, A/B testing of key features, and performance optimization.",
        deliverables: ["Usability test results", "A/B test data", "Design refinements", "Developer handoff"]
      },
      {
        phase: "Implementation Support",
        duration: "1 week",
        description: "Collaborated with development team during implementation, ensuring design fidelity and resolving technical constraints.",
        deliverables: ["QA reviews", "Design adjustments", "Component documentation"]
      }
    ],
    features: [
      "Real-time data visualization with WebSocket connections",
      "Customizable dashboard widgets with drag-and-drop interface",
      "Advanced charting tools with 50+ technical indicators",
      "Multi-monitor support for professional trading setups",
      "Dark/light mode with trader-optimized color schemes",
      "WCAG 2.1 AA accessibility compliance",
      "Mobile-responsive design for trading on-the-go",
      "One-click order execution with risk management controls"
    ],
    challenges: [
      {
        challenge: "Real-time Data Performance",
        solution: "Implemented virtualized tables and optimized WebSocket connections to handle 1000+ data points per second without UI lag."
      },
      {
        challenge: "Information Density",
        solution: "Used progressive disclosure and contextual information architecture to present complex data without overwhelming users."
      },
      {
        challenge: "Multi-device Consistency",
        solution: "Created a responsive design system that maintains functionality across desktop, tablet, and mobile devices."
      }
    ],
    results: [
      {
        metric: "45%",
        description: "Increase in user engagement",
        detail: "Monthly active users increased significantly after launch"
      },
      {
        metric: "30%",
        description: "Faster trade execution",
        detail: "Reduced average time from analysis to trade placement"
      },
      {
        metric: "25%",
        description: "Reduction in user errors",
        detail: "Improved interface clarity led to fewer accidental trades"
      },
      {
        metric: "90%",
        description: "User satisfaction score",
        detail: "Post-launch user survey results"
      }
    ],
    testimonial: {
      text: "Alex transformed our complex trading requirements into an elegant, powerful interface. The dashboard has become our competitive advantage.",
      author: "Sarah Martinez",
      role: "Product Director, TradeTech Solutions"
    }
  },
  "mobile-banking": {
    id: 2,
    title: "SecureBank Mobile App",
    subtitle: "Banking Reimagined for Mobile-First Users",
    description: "User-friendly mobile banking application focused on accessibility and seamless user experience.",
    fullDescription: "A complete redesign of SecureBank's mobile banking application with focus on user experience, accessibility, and modern financial management. The project included extensive user research, persona development, wireframing, and prototyping. The final design increased user satisfaction by 40% and reduced support tickets by 25%.",
    problemStatement: "SecureBank's existing mobile app had a 2.1-star rating and 67% of users preferred using the website or visiting branches. Users complained about confusing navigation, slow performance, and lack of modern features.",
    solution: "We redesigned the entire user experience with a focus on task-oriented design, implementing biometric authentication, real-time notifications, and an intelligent spending insights system.",
    image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU3NjI3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nfGVufDF8fHx8MTc1NzYyNzgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYXBwfGVufDF8fHx8MTc1NzYyNzgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    tags: ["Mobile", "Banking", "iOS", "Android", "Accessibility"],
    year: "2024",
    client: "SecureBank",
    duration: "4 months", 
    team: "6 members",
    role: "Senior UX Designer",
    tools: ["Figma", "Sketch", "InVision", "Maze", "Lookback"],
    process: [
      {
        phase: "User Research",
        duration: "3 weeks",
        description: "In-depth user interviews, surveys, and usability testing of the existing app to understand pain points and user goals.",
        deliverables: ["Research findings", "User personas", "Pain point analysis", "Opportunity map"]
      },
      {
        phase: "Information Architecture",
        duration: "2 weeks",
        description: "Redesigned the app structure based on user mental models and task frequency analysis.",
        deliverables: ["Site map", "User flows", "Task analysis", "Navigation structure"]
      },
      {
        phase: "Design & Prototyping",
        duration: "8 weeks",
        description: "Created wireframes, visual designs, and interactive prototypes with multiple rounds of iteration.",
        deliverables: ["Wireframes", "Visual designs", "Interactive prototypes", "Design specifications"]
      },
      {
        phase: "Testing & Launch",
        duration: "3 weeks",
        description: "Extensive usability testing, accessibility audit, and beta testing with real customers.",
        deliverables: ["Test results", "Accessibility report", "Launch recommendations", "Success metrics"]
      }
    ],
    features: [
      "Biometric authentication (Face ID, Touch ID, fingerprint)",
      "Quick transfer system with favorite contacts",
      "AI-powered expense tracking and categorization",
      "Bill payment automation with smart reminders",
      "Investment portfolio view with real-time updates",
      "Multi-language support (English, Spanish, Chinese)",
      "Offline mode for viewing recent transactions",
      "Advanced security features with fraud detection"
    ],
    challenges: [
      {
        challenge: "Security vs. Usability",
        solution: "Implemented progressive security measures that increase based on transaction amount and risk level."
      },
      {
        challenge: "Legacy System Integration",
        solution: "Worked with backend team to create API wrappers that maintained security while improving response times."
      },
      {
        challenge: "Accessibility Compliance",
        solution: "Designed with WCAG 2.1 AA standards from the start, including high contrast modes and screen reader optimization."
      }
    ],
    results: [
      {
        metric: "40%",
        description: "Increase in user satisfaction",
        detail: "App store rating improved from 2.1 to 4.3 stars"
      },
      {
        metric: "60%",
        description: "Faster onboarding",
        detail: "New user registration time reduced from 15 to 6 minutes"
      },
      {
        metric: "50%",
        description: "More feature adoption",
        detail: "Users now engage with 3x more features per session"
      },
      {
        metric: "25%",
        description: "Reduction in support calls",
        detail: "Clearer UI reduced customer service inquiries"
      }
    ],
    testimonial: {
      text: "The new app design has transformed our customer experience. We've seen unprecedented user engagement and satisfaction scores.",
      author: "Michael Chen",
      role: "Head of Digital Banking, SecureBank"
    }
  },
  "design-system": {
    id: 3,
    title: "GrowthCo Design System",
    subtitle: "Scalable Design Foundation",
    description: "Comprehensive design system with components, patterns, and guidelines for a startup platform.",
    fullDescription: "Created a scalable design system from the ground up for GrowthCo, a growing SaaS platform. This included component libraries, design tokens, usage guidelines, and comprehensive documentation. The system reduced design-to-development time by 60% and ensured consistency across all product touchpoints.",
    problemStatement: "GrowthCo's rapid growth led to inconsistent user experiences across their product suite. Multiple design files, lack of component standards, and no clear guidelines resulted in technical debt and confused users.",
    solution: "Built a comprehensive design system with atomic design principles, automated documentation, and developer-friendly component specifications that scales with the company's growth.",
    image: "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc1NzYwMzczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW18ZW58MXx8fHwxNzU3NjI3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wb25lbnQlMjBsaWJyYXJ5fGVufDF8fHx8MTc1NzYyNzgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    tags: ["Design System", "Components", "Documentation", "Scalability"],
    year: "2023",
    client: "GrowthCo",
    duration: "6 months",
    team: "3 members",
    role: "Design Systems Lead",
    tools: ["Figma", "Storybook", "Abstract", "Notion", "GitHub"],
    process: [
      {
        phase: "Audit & Strategy",
        duration: "3 weeks",
        description: "Audited existing design patterns, components, and code implementations across all products.",
        deliverables: ["Design audit", "Component inventory", "Strategy document", "Roadmap"]
      },
      {
        phase: "Foundation Building",
        duration: "4 weeks",
        description: "Established design tokens, typography scales, color systems, and spacing guidelines.",
        deliverables: ["Design tokens", "Typography system", "Color palette", "Grid system"]
      },
      {
        phase: "Component Creation",
        duration: "12 weeks",
        description: "Built atomic components, complex patterns, and page templates with comprehensive documentation.",
        deliverables: ["Component library", "Pattern documentation", "Usage guidelines", "Code specifications"]
      },
      {
        phase: "Implementation & Training",
        duration: "5 weeks",
        description: "Trained design and development teams, created adoption guidelines, and established governance processes.",
        deliverables: ["Training materials", "Adoption guidelines", "Governance process", "Success metrics"]
      }
    ],
    features: [
      "50+ reusable components with variants and states",
      "Comprehensive design token system for consistency",
      "Automated documentation with live code examples",
      "Accessibility guidelines built into every component",
      "Multi-theme support (light, dark, high contrast)",
      "Version control with change log tracking",
      "Figma component library with auto-layout",
      "Developer handoff specifications and assets"
    ],
    challenges: [
      {
        challenge: "Legacy Component Migration",
        solution: "Created a phased migration strategy that allowed teams to adopt new components gradually without breaking existing features."
      },
      {
        challenge: "Cross-Team Adoption",
        solution: "Established design system champions in each team and created comprehensive training programs."
      },
      {
        challenge: "Maintaining Consistency",
        solution: "Implemented automated checks and governance processes to ensure design system adherence."
      }
    ],
    results: [
      {
        metric: "60%",
        description: "Faster design-to-dev time",
        detail: "Reduced handoff time from design to development"
      },
      {
        metric: "100%",
        description: "Component reusability",
        detail: "All new features use design system components"
      },
      {
        metric: "5",
        description: "Products unified",
        detail: "Consistent experience across all product lines"
      },
      {
        metric: "95%",
        description: "Team adoption rate",
        detail: "Design and development teams actively using the system"
      }
    ],
    testimonial: {
      text: "Alex's design system became the foundation of our product consistency. It's saved us countless hours and improved our user experience dramatically.",
      author: "Lisa Park",
      role: "VP of Product, GrowthCo"
    }
  }
};

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projects[projectId as keyof typeof projects] : null;

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Project not found</h1>
          <Button asChild>
            <Link to="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild>
            <Link to="/portfolio" className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>
          </Button>
        </motion.div>

        {/* Project Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl mb-4">{project.title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">{project.subtitle}</p>
          <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">{project.description}</p>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-96 md:h-[600px] object-cover rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* Project Overview */}
        <div className="grid lg:grid-cols-3 gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Problem & Solution */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.problemStatement}
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl mb-4">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Detailed Description */}
            <div>
              <h3 className="text-2xl mb-4">Project Overview</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-2xl mb-8">Design Process</h3>
              <div className="space-y-6">
                {project.process.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-primary/20 pl-6 pb-6"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium">{phase.phase}</h4>
                        <span className="text-sm text-muted-foreground">{phase.duration}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((deliverable, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl mb-6">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg"
                  >
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div>
              <h3 className="text-2xl mb-6">Challenges & Solutions</h3>
              <div className="space-y-6">
                {project.challenges.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 border rounded-xl"
                  >
                    <h4 className="font-medium mb-2 text-red-600">Challenge: {item.challenge}</h4>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project Details Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="font-medium mb-6 text-lg">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Client</span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Year</span>
                    <span className="font-medium">{project.year}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Team Size</span>
                    <span className="font-medium">{project.team}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">My Role</span>
                    <span className="font-medium">{project.role}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="font-medium mb-6 text-lg">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="outline">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-medium mb-6 text-lg">Results & Impact</h3>
                <div className="space-y-6">
                  {project.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">{result.metric}</div>
                      <div className="font-medium mb-1">{result.description}</div>
                      <div className="text-sm text-muted-foreground">{result.detail}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card>
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">💬</div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    "{project.testimonial.text}"
                  </blockquote>
                  <div className="font-medium">{project.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{project.testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Images */}
        {project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-2xl mb-8">Visual Showcase</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${project.title} showcase ${index + 1}`}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-16 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-3xl"
        >
          <h3 className="text-3xl mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            Let's discuss how I can help bring your vision to life with exceptional design and user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Start a Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/portfolio">View More Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
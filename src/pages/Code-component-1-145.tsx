import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const projects = {
  "trading-dashboard": {
    id: 1,
    title: "Trading Dashboard",
    description: "A comprehensive trading platform interface with real-time data visualization and intuitive controls.",
    fullDescription: "This project involved designing a complete trading dashboard for a fintech startup. The challenge was to present complex financial data in an intuitive, accessible way while maintaining real-time performance. The solution included customizable widgets, advanced charting capabilities, and a responsive design that works across all devices.",
    image: "https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3NTQxODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Web Design", "Dashboard", "Fintech"],
    year: "2024",
    client: "TradeTech Solutions",
    duration: "3 months",
    role: "Lead UI/UX Designer",
    tools: ["Figma", "Principle", "Adobe XD"],
    features: [
      "Real-time data visualization",
      "Customizable dashboard widgets",
      "Advanced charting tools",
      "Responsive design",
      "Dark/light mode support",
      "Accessibility compliance"
    ]
  },
  "mobile-banking": {
    id: 2,
    title: "Mobile Banking App",
    description: "User-friendly mobile banking application focused on accessibility and seamless user experience.",
    fullDescription: "A complete redesign of a mobile banking application with focus on user experience and accessibility. The project included user research, persona development, wireframing, and prototyping. The final design increased user satisfaction by 40% and reduced support tickets by 25%.",
    image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU3NjI3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile", "Banking", "iOS", "Android"],
    year: "2024",
    client: "SecureBank",
    duration: "4 months", 
    role: "Senior UX Designer",
    tools: ["Figma", "Sketch", "InVision"],
    features: [
      "Biometric authentication",
      "Quick transfer system",
      "Expense tracking",
      "Bill payment automation",
      "Investment portfolio view",
      "Multi-language support"
    ]
  },
  "design-system": {
    id: 3,
    title: "Design System",
    description: "Comprehensive design system with components, patterns, and guidelines for a startup platform.",
    fullDescription: "Created a scalable design system from the ground up for a growing SaaS platform. This included component libraries, design tokens, usage guidelines, and documentation. The system reduced design-to-development time by 60% and ensured consistency across all product touchpoints.",
    image: "https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc1NzYwMzczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Design System", "Components", "Documentation"],
    year: "2023",
    client: "GrowthCo",
    duration: "6 months",
    role: "Design Systems Lead",
    tools: ["Figma", "Storybook", "Abstract"],
    features: [
      "Component library",
      "Design tokens",
      "Usage guidelines",
      "Code documentation",
      "Accessibility standards",
      "Version control"
    ]
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
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/portfolio" className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">{project.description}</p>
        </div>

        {/* Project Image */}
        <div className="mb-12">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-96 md:h-[500px] object-cover rounded-2xl"
          />
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-4">Key Features</h3>
              <ul className="grid md:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Client</span>
                    <span>{project.client}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Role</span>
                    <span>{project.role}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-4">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="outline">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 border-t">
          <h3 className="text-2xl mb-4">Interested in working together?</h3>
          <p className="text-muted-foreground mb-6">
            Let's discuss your next project and see how I can help bring your vision to life.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
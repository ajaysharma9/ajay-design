import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { useState } from "react";
import { 
  Lightbulb, 
  RotateCcw, 
  Target, 
  TrendingUp,
  CheckCircle
} from "lucide-react";

const processPhases = [
  {
    phase: "01",
    title: "Discovery & Research",
    duration: "1-2 weeks",
    description: "Understanding your business goals, user needs, and technical constraints through comprehensive research.",
    activities: [
      "Stakeholder interviews",
      "User research & personas",
      "Competitive analysis",
      "Technical requirements review",
      "Project scope definition"
    ],
    deliverables: [
      "Project brief",
      "User personas",
      "Research findings",
      "Success metrics"
    ],
    tools: ["Miro", "Notion", "Maze", "Google Analytics"],
    color: "bg-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    phase: "02",
    title: "Strategy & Planning",
    duration: "1 week",
    description: "Defining the design strategy, information architecture, and user journey mapping.",
    activities: [
      "Information architecture",
      "User journey mapping",
      "Content strategy",
      "Feature prioritization",
      "Design system planning"
    ],
    deliverables: [
      "Site map",
      "User flows",
      "Feature requirements",
      "Project timeline"
    ],
    tools: ["FigJam", "Whimsical", "Miro", "Notion"],
    color: "bg-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    phase: "03",
    title: "Design & Prototyping",
    duration: "3-5 weeks",
    description: "Creating wireframes, visual designs, and interactive prototypes with iterative feedback cycles.",
    activities: [
      "Low-fidelity wireframes",
      "Visual design exploration",
      "High-fidelity mockups",
      "Interactive prototypes",
      "Design system creation"
    ],
    deliverables: [
      "Wireframes",
      "Visual designs",
      "Interactive prototypes",
      "Design system"
    ],
    tools: ["Figma", "Principle", "ProtoPie", "Adobe Creative Suite"],
    color: "bg-green-500",
    bgColor: "bg-green-50"
  },
  {
    phase: "04",
    title: "Testing & Validation",
    duration: "1-2 weeks",
    description: "Validating designs through usability testing and gathering feedback for refinements.",
    activities: [
      "Usability testing",
      "A/B testing setup",
      "Accessibility audit",
      "Performance review",
      "Stakeholder feedback"
    ],
    deliverables: [
      "Test results",
      "Improvement recommendations",
      "Accessibility report",
      "Refined designs"
    ],
    tools: ["Maze", "Lookback", "Hotjar", "axe DevTools"],
    color: "bg-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    phase: "05",
    title: "Delivery & Support",
    duration: "1 week",
    description: "Final design handoff with comprehensive documentation and ongoing implementation support.",
    activities: [
      "Design specifications",
      "Asset preparation",
      "Developer handoff",
      "Documentation creation",
      "Implementation support"
    ],
    deliverables: [
      "Final designs",
      "Asset library",
      "Style guide",
      "Implementation guide"
    ],
    tools: ["Figma", "Abstract", "Zeplin", "Storybook"],
    color: "bg-indigo-500",
    bgColor: "bg-indigo-50"
  }
];

const methodologies = [
  {
    name: "Design Thinking",
    description: "Human-centered approach to innovation and problem-solving",
    icon: Lightbulb
  },
  {
    name: "Agile/Scrum",
    description: "Iterative development with regular feedback cycles",
    icon: RotateCcw
  },
  {
    name: "Lean UX",
    description: "Build, measure, learn approach for rapid validation",
    icon: TrendingUp
  },
  {
    name: "Jobs-to-be-Done",
    description: "Understanding user motivations and desired outcomes",
    icon: Target
  }
];

export function ProcessOverview() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-4">Design Process</Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            How I Transform
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ideas Into Reality
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A proven methodology that ensures every project delivers exceptional results through 
            strategic thinking, user research, and iterative design.
          </p>
        </motion.div>

        {/* Process Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {processPhases.map((phase, index) => (
            <button
              key={index}
              onClick={() => setActivePhase(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                activePhase === index
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background hover:bg-muted border-border'
              }`}
            >
              <span className="font-medium">{phase.phase}</span>
              <span className="text-sm">{phase.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Phase Details */}
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className={`${processPhases[activePhase].bgColor} p-8`}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 ${processPhases[activePhase].color} text-white rounded-2xl flex items-center justify-center text-xl font-bold`}>
                        {processPhases[activePhase].phase}
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium">{processPhases[activePhase].title}</h3>
                        <Badge variant="outline" className="mt-2">{processPhases[activePhase].duration}</Badge>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {processPhases[activePhase].description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Key Activities</h4>
                        <ul className="space-y-2">
                          {processPhases[activePhase].activities.map((activity, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Deliverables</h4>
                        <div className="flex flex-wrap gap-2">
                          {processPhases[activePhase].deliverables.map((deliverable, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {deliverable}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-4">Tools & Technologies</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {processPhases[activePhase].tools.map((tool, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <span className="text-xs font-medium">{tool[0]}</span>
                            </div>
                            <span className="text-sm font-medium">{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progress visualization */}
                    <div className="bg-background/70 p-6 rounded-xl border">
                      <h4 className="font-medium mb-4">Phase Progress</h4>
                      <div className="space-y-3">
                        {processPhases.map((phase, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                              index <= activePhase 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              {index < activePhase ? '✓' : phase.phase}
                            </div>
                            <span className={`text-sm ${
                              index <= activePhase ? 'text-foreground' : 'text-muted-foreground'
                            }`}>
                              {phase.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl mb-4">Design Methodologies</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I incorporate proven frameworks and methodologies to ensure every project is grounded in best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {methodologies.map((methodology, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 p-3 bg-primary/10 rounded-xl">
                    <methodology.icon className="w-full h-full text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">{methodology.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{methodology.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-16 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-3xl"
        >
          <h3 className="text-2xl mb-4">Typical Project Timeline</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Most projects range from 6-12 weeks depending on scope and complexity.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span>Research (1-2 weeks)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <span>Strategy (1 week)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>Design (3-5 weeks)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span>Testing (1-2 weeks)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
              <span>Delivery (1 week)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
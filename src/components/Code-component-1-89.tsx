import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

const skills = [
  { name: "UI/UX Design", level: 95 },
  { name: "User Research", level: 88 },
  { name: "Prototyping", level: 92 },
  { name: "Design Systems", level: 90 },
  { name: "Figma", level: 98 },
  { name: "Adobe Creative Suite", level: 85 }
];

const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that enhance user experience",
    icon: "🎨"
  },
  {
    title: "User Research",
    description: "Understanding user needs and behaviors through research and testing",
    icon: "🔍"
  },
  {
    title: "Prototyping",
    description: "Building interactive prototypes to validate design concepts",
    icon: "⚡"
  },
  {
    title: "Design Systems",
    description: "Developing scalable design systems and component libraries",
    icon: "🧩"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Skills & Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What I bring to the table in every project
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl mb-6">Technical Skills</h3>
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl mb-6">Services</h3>
            <div className="grid gap-6">
              {services.map((service) => (
                <Card key={service.title}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <span className="text-2xl">{service.icon}</span>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl mb-4">Let's work together</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to take on new challenges and collaborate on innovative projects
            </p>
            <div className="flex justify-center gap-4">
              <span className="px-3 py-1 bg-background rounded-full text-sm">Available for freelance</span>
              <span className="px-3 py-1 bg-background rounded-full text-sm">Remote work</span>
              <span className="px-3 py-1 bg-background rounded-full text-sm">Long-term projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
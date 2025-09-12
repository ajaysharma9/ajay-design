import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <Badge variant="secondary" className="w-fit">
              Available for new projects
            </Badge>
            <h1 className="text-4xl md:text-6xl leading-tight">
              UI/UX Designer
              <br />
              <span className="text-muted-foreground">& Creative</span>
            </h1>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-md">
            I create digital experiences that combine beautiful design with 
            intuitive functionality. Specialized in mobile apps, web platforms, 
            and design systems.
          </p>
          
          <div className="flex gap-4">
            <Button size="lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>
          
          <div className="flex items-center gap-6 pt-4">
            <div className="text-center">
              <div className="text-2xl">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl">3+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl">25+</div>
              <div className="text-sm text-muted-foreground">Clients</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-accent rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4">
                <div className="text-sm text-muted-foreground">Currently working on</div>
                <div className="font-medium">Trading Dashboard UI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl">About Me</h2>
              <p className="text-muted-foreground">
                Passionate about creating meaningful digital experiences
              </p>
            </div>
            
            <div className="space-y-4">
              <p>
                I'm a UI/UX designer with over 3 years of experience creating 
                digital products that users love. My approach combines user-centered 
                design principles with modern aesthetics to deliver exceptional results.
              </p>
              
              <p>
                I specialize in designing mobile applications, web platforms, and 
                comprehensive design systems. Currently focused on fintech and 
                trading interfaces, bringing complex data into intuitive, accessible designs.
              </p>
              
              <p>
                When I'm not designing, you can find me exploring the latest design 
                trends, contributing to design communities, or working on personal 
                creative projects.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="font-medium mb-2">Design</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>User Research</li>
                  <li>Wireframing</li>
                  <li>Prototyping</li>
                  <li>Design Systems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Tools</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>Sketch</li>
                  <li>Principle</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1657524433818-938be6f05fab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU3NTgzMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Design workspace"
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
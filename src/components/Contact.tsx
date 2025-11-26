import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { toast } from "sonner@2.0.3";
import { motion } from "motion/react";
import { useState } from "react";

const contactMethods = [
  {
    icon: "📧",
    title: "Email",
    value: "ajayshrm406@gmail.com",
    description: "Best for detailed project discussions",
    action: "Send Email"
  },
  {
    icon: "📱",
    title: "Phone",
    value: "+91 709-496-7329",
    description: "Available Mon-Fri, 9AM-6PM PST",
    action: "Call Now"
  },
  {
    icon: "💼",
    title: "LinkedIn",
    value: "linkedin.com/in/alexchen-ux",
    description: "Professional network and updates",
    action: "Connect"
  },
  // {
  //   icon: "🎨",
  //   title: "Dribbble",
  //   value: "dribbble.com/alexchen",
  //   description: "Latest design work and inspiration",
  //   action: "Follow"
  // }
];

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer: "Project timelines vary based on scope, but most projects range from 2-8 weeks. I provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! I work with clients globally and am comfortable with different time zones. Most communication happens asynchronously anyway."
  },
  {
    question: "What's included in your design process?",
    answer: "My process includes discovery, research, wireframing, visual design, prototyping, and handoff. I also provide design systems and documentation."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, I offer various support packages including design updates, user feedback analysis, and design system maintenance."
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! I'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <Badge variant="outline" className="mb-4">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            Let's Create Something
            <br />
            <span className="text-muted-foreground">Amazing Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? I'm here to help you create exceptional 
            digital experiences that users will love.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl mb-2">Tell Me About Your Project</h3>
                  <p className="text-muted-foreground">
                    The more details you provide, the better I can understand your needs and provide an accurate proposal.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <Input
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        placeholder="Web app, Mobile app, Design system..."
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Project Budget</Label>
                      <Input
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        placeholder="$5k - $10k, $10k - $25k, etc."
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Input
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        placeholder="2-4 weeks, ASAP, flexible..."
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project goals, target audience, key features, and any specific requirements you have in mind..."
                      className="min-h-32"
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Project Brief
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </Button>
                  
                  <p className="text-sm text-muted-foreground">
                    * Required fields. I typically respond within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Methods & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-6">Other Ways to Reach Me</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="text-2xl">{method.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium">{method.title}</div>
                        <div className="text-sm text-muted-foreground truncate">{method.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{method.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Current Availability</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">Available for new projects</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    I'm currently accepting new projects starting in January 2025. 
                    Let's discuss your timeline and see how I can help.
                  </div>
                  <div className="pt-2 border-t">
                    <div className="text-sm font-medium">Response Time</div>
                    <div className="text-sm text-muted-foreground">Usually within 24 hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            {/* <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-6">Frequently Asked</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-b pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="font-medium text-sm mb-2">{faq.question}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card> */}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-16 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-3xl"
        >
          <h3 className="text-2xl mb-4">Prefer a Quick Chat?</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Sometimes it's easier to just talk. Book a 15-minute discovery call to discuss your project.
          </p>
          <Button size="lg" variant="outline" className="mr-4">
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule Discovery Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Work" },
    { path: "/skills", label: "Skills" },
    // { path: "/contact", label: "Contact" }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95- backdrop-blur-md- border-b- border-border/50"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AJ</span>
          </div>
          {/* <span className="text-xl font-semibold group-hover:text-primary transition-colors">
           J
          </span> */}
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-4 py-2 rounded-lg transition-all duration-200 font-semibold uppercase text-sm md:text-base ${
                isActive(item.path)
                  ? "text-primary bg-gray-300 dark:bg-gray-700"
                  : "hover:text-primary hover:bg-gray-200 dark:hover:bg-gray-800"
              }`}
            >
              {item.label}

              {isActive(item.path) && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-lg border- border-gray-400 dark:border-gray-600 -z-10"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </Link>
          ))}
         <a href="/resume.docx" download="resume.docx">
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-2 py-2 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </button>
        </a>
        </div>

        
        {/* CTA Button */}
        {/* <div className="hidden md:flex items-center space-x-4">
         <Button variant="outline" size="sm" asChild>
          <a
            href="/resume.pdf"  
            download="Ajay_Sharma_Resume.pdf"  
            className="flex items-center gap-2"
          > 
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Resume
          </a>
        </Button>
          <Button size="sm" asChild>
            <Link to="/contact">Let's Talk</Link>
          </Button>
        </div> */}
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            className="w-6 h-6 flex flex-col justify-center items-center"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 }
              }}
              className="w-6 h-0.5 bg-current block transition-all duration-300 origin-center"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              className="w-6 h-0.5 bg-current block mt-1.5 transition-all duration-300"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 }
              }}
              className="w-6 h-0.5 bg-current block mt-1.5 transition-all duration-300 origin-center"
            />
          </motion.div>
        </Button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-t border-border/50"
      >
        <div className="container mx-auto px-6 py-4 space-y-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ x: -20, opacity: 0 }}
              animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
            className="pt-4 border-t space-y-2"
          >
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a 
                href="/resume.pdf" 
                download="Ajay_Sharma_Resume.pdf" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </Button>
            <Button size="sm" className="w-full" asChild>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Let's Talk
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { SkillsPage } from "./pages/SkillsPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
"use client"

import { frame, motion, useSpring } from "motion/react"
import { RefObject, useEffect, useRef } from "react"

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 }

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, spring)
  const y = useSpring(0, spring)

  useEffect(() => {
    if (!ref.current) return

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!
      frame.read(() => {
        x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
        y.set(clientY - element.offsetTop - element.offsetHeight / 2)
      })
    }

    window.addEventListener("pointermove", handlePointerMove)
    return () => window.removeEventListener("pointermove", handlePointerMove)
  }, [x, y, ref])

  return { x, y }
}

/**
 * ==============   Styles   ================
 */
const ball = {
  width: 100,
  height: 100,
  backgroundColor: "#dcfce7",
  borderRadius: "50%",
  position: "fixed",       // 🔥 make it float on viewport
  top: "50%",              // base position
  left: "50%",             // base position
  pointerEvents: "none",   // so it won’t block interactions
  opecity: .3,
}
export default function App() {
   const ref = useRef<HTMLDivElement>(null)
    const { x, y } = useFollowPointer(ref)
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/project/:projectId" element={<ProjectDetailPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        {/* Floating ball follows pointer */}
        <motion.div ref={ref} style={{ ...ball, x, y }} />
      </div>
    </Router>
  );
}
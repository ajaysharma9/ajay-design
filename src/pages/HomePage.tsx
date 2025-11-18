

import { Hero } from "../components/Hero"
import { FeaturedWork } from "../components/FeaturedWork"
import { ServicesOverview } from "../components/ServicesOverview"
import { ClientTestimonials } from "../components/ClientTestimonials"
import { CallToAction } from "../components/CallToAction"



export function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedWork />
      {/* <ServicesOverview /> */}
      {/* <ProcessOverview /> */}
      {/* <ClientTestimonials /> */}
      {/* <RecentInsights /> */}
      <CallToAction /> 
    </div>
  )
}

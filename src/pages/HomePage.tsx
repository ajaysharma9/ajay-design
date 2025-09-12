import { Hero } from "../components/Hero";
import { FeaturedWork } from "../components/FeaturedWork";
import { ServicesOverview } from "../components/ServicesOverview";
import { ClientTestimonials } from "../components/ClientTestimonials";
import { ProcessOverview } from "../components/ProcessOverview";
import { RecentInsights } from "../components/RecentInsights";
import { CallToAction } from "../components/CallToAction";

export function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedWork />
      <ServicesOverview />
      <ProcessOverview />
      <ClientTestimonials />
      <RecentInsights />
      <CallToAction />
    </div>
  );
}
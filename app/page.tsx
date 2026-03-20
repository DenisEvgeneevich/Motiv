import { Navigation } from "@/components/sections/navigation";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { AudiencesSection } from "@/components/sections/audiences";
import { RolesSection } from "@/components/sections/roles";
import { AudienceTimelinesSection } from "@/components/sections/audience-timelines";
import { EventsSection } from "@/components/sections/events";
import { ResultsSection } from "@/components/sections/results";
import { CTASection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Fixed gradient background */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, #C48EEB 0%, #6FC4D6 100%)"
        }}
      />
      
      {/* Decorative background pattern */}
      <div className="fixed inset-0 -z-10 opacity-30 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bg-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="white" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-pattern)" />
        </svg>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Content sections - new order */}
      <HeroSection />
      <AboutSection />
      <AudiencesSection />
      <RolesSection />
      <AudienceTimelinesSection />
      <EventsSection />
      <ResultsSection />
      <CTASection />
    </main>
  );
}

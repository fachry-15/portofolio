import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import Headers from './components/headers/navbar-04'
import HeroSection from './components/hero/hero-section'
import About from './components/about/about'
import Company from './components/hero/company'
import StatsSection from './components/statistics/stats'
import { ExperiencesSections } from './components/experiences/ExperiencesSections'
import { EducationTimeline } from './components/eduacations/EducationsSection'
import { Projects } from './components/ProjectSections'
import { TestimonialsSections } from './components/TestimonialsSections'
import CallToAction from './components/call-to-action'
import FooterSection from './components/footer-four'

function App() {


  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Headers />
      <div id="hero">
        <HeroSection />
        <Company />
      </div>
      <div id="about">
        <About />
        <StatsSection />
      </div>
      <div id="experience">
        <ExperiencesSections />
      </div>
      <div id="education">
        <EducationTimeline />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="testimonials">
        <TestimonialsSections />
      </div>
      <CallToAction />
      <FooterSection />
    </ThemeProvider>
    </>
  )
}

export default App

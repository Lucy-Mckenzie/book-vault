import About from "@/components/About"
import Details from "@/components/Details"
import LandingContent from "@/components/LandingContent"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <div>
      <LandingContent />
      <About />
      <Testimonials />
      <Details />
    </div>
  )
}

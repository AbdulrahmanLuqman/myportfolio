
import Profile from "./Profile"

import AboutComponent from "./ui/About/About"
import SEO from "./SEO"
import { personSchema } from "@/lib/structuredData"

const About = () => {

  return (
    <div className="flex gap-2">
      <SEO
        title="About CodeKage - Full Stack Developer & Software Engineer"
        description="Learn about CodeKage's journey as a full-stack developer, technical expertise, experience, and passion for creating innovative web solutions."
        keywords="about CodeKage, full stack developer background, software engineer experience, web developer bio, technical skills"
        canonicalUrl="https://codekage.pxxl.xyz/about"
        ogTitle="About CodeKage - Developer Journey & Expertise"
        ogDescription="Discover the story behind CodeKage's development career and technical expertise in modern web technologies."
        schema={personSchema}
      />
      <Profile />
      <AboutComponent />
    </div>
  )
}

export default About
import Profile from "./Profile"
import ProjectsComponent from "./ui/Projects/ProjectsComponent"
import SEO from "./SEO"
const Projects = () => {
  return (
    <div className="flex gap-2">
      <SEO
        title="Projects - CodeKage Portfolio | Web Development Showcase"
        description="Explore my latest web development projects featuring React, Node.js, TypeScript, and modern frameworks. See live demos and source code."
        keywords="web development projects, React projects, Node.js applications, portfolio projects, CodeKage projects, full stack applications"
        canonicalUrl="https://codekage.pxxl.xyz/projects"
        ogTitle="Web Development Projects by CodeKage"
        ogDescription="Innovative web applications and development projects showcasing modern technologies and best practices."
        ogImage="https://codekage.pxxl.xyz/images/projects.png"
        ogUrl="https://codekage.pxxl.xyz/projects"
        ogType="website"
      />
      <Profile />
      <ProjectsComponent />
    </div>
  )
}

export default Projects
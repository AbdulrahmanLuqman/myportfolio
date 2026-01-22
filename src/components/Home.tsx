import MyExpertArea from "./ui/Home/MyExpertArea"
import Profile from "./ui/Home/Profile"
import RecentProject from "./ui/Home/RecentProject"
import WorkExperience from "./ui/Home/WorkExperience"
import Services from "./ui/Home/Services"
import Contact from "./ui/Home/Contact"
import SEO from "./SEO"
import { personSchema } from "@/lib/structuredData"

// max-[840px]:flex max-[840px]:flex-col max-[840px]:max-w-[300px] max-[840px]:mx-auto

const Home = () => {
  return (
    <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col max-[768px]:max-w-[400px] max-[768px]:mx-auto gap-2 h-fit ">
      <SEO
        title="CodeKage - Full Stack Developer | Modern Web Solutions"
        description="Professional full-stack developer specializing in React, Node.js, and modern web technologies. View my portfolio of innovative projects and technical expertise."
        keywords="full stack developer, web developer, React developer, Node.js, JavaScript, TypeScript, portfolio, CodeKage, frontend, backend"
        canonicalUrl="https://codekage.pxxl.xyz"
        ogTitle="CodeKage - Full Stack Developer Portfolio"
        ogDescription="Discover innovative web solutions and cutting-edge development projects by CodeKage, a professional full-stack developer."
        ogImage="https://codekage.pxxl.xyz/images/home.png"
        ogUrl="https://codekage.pxxl.xyz"
        twitterTitle="CodeKage - Full Stack Developer Portfolio"
        twitterDescription="Professional developer portfolio showcasing modern web development projects and technical expertise."
        twitterImage="https://codekage.pxxl.xyz/assets/me.jpg"
        schema={personSchema}
      />
        <Profile />
        <WorkExperience />
        <RecentProject />
        <MyExpertArea />
        <Services />
        <Contact />
    </div>
  )
}

export default Home
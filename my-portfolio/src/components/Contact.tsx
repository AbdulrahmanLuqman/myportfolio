import Profile from "./Profile"
import ContactComponent from "./ui/Contact/ContactComponent"
import SEO from "./SEO"

const Contact = () => {
  return (
    <div className="flex gap-2">
      <SEO
        title="Contact CodeKage - Let's Build Something Amazing Together"
        description="Ready to start your next web project? Contact CodeKage for professional development services, consultations, and collaboration opportunities."
        keywords="contact CodeKage, hire developer, web development services, project consultation, collaboration, freelance developer"
        canonicalUrl="https://codekage.pxxl.xyz/contact"
        ogTitle="Contact CodeKage - Professional Development Services"
        ogDescription="Get in touch to discuss your next web development project or collaboration opportunity."
        ogImage="https://codekage.pxxl.xyz/images/contact.png"
      />
      <Profile />
      <ContactComponent />
    </div>
  )
}

export default Contact
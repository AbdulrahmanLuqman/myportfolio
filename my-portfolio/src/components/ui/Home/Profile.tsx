import { GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react"
import { cn } from "@/lib/utils"
const Profile = () => {        
    const socials = [
        {
            icon : GithubIcon,
            href : "https://github.com/AbdulrahmanLuqman/"
        },
        {
            icon : TwitterIcon,
            href : "https://x.com/luqmanola60"
        },
        {
            icon : LinkedinIcon,
            href : "https://www.linkedin.com/in/abdulrahman-luqman-80243a23a/"
        }
    ]
  return (
    <div className={cn("w-full h-[500px] bg-black p-6 rounded-lg shadow-md flex flex-col items-center gap-6 row-span-2")}>
        <div className="w-[200px] h-[200px] border-2 rounded-full overflow-hidden flex items-center justify-center">
            <img src="/assets/me.jpg" className="hover:scale-125 transition-all duration-1000" />
        </div>
        <div className="flex flex-col gap-6">
            <div className="space-y-1">
                <h1 className="text-xl text-[whitesmoke] font-bold">CodeKage👑</h1>
                <p className="text-sm">A results-driven <span className="font-semibold">Frontend Engineer</span> & <span className="font-semibold">Design-Oriented Developer</span> Specializing in building performant interfaces with a passion for UX.</p>
            </div>

            <div>
                <div className="flex space-x-4">
                    {socials.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white bg-[#0E1018] p-2 rounded transition-all duration-200">
                                <Icon className="w-6 h-6" />
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
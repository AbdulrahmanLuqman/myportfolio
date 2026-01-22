import { GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

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
    <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={cn("w-full h-[500px] bg-black p-6 rounded-lg shadow-md flex flex-col items-center gap-6 row-span-2")}
    >
        <div className="w-[200px] h-[200px] border-2 rounded-full overflow-hidden flex items-center justify-center border-gray-800">
            <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                src="/assets/me.jpg" 
                className="transition-all duration-1000" 
            />
        </div>
        <div className="flex flex-col gap-6">
            <div className="space-y-1">
                <h1 className="text-xl text-[whitesmoke] font-bold">CodeKage <span className="text-sm font-normal text-gray-400 opacity-70">/ Web Architect</span></h1>
                <p className="text-sm text-gray-300 leading-relaxed">Building high-performance, scalable web solutions for <span className="text-white font-semibold">startups and businesses</span>. Specializing in conversion-optimized interfaces and robust frontend architectures.</p>
            </div>

            <div>
                <div className="flex space-x-4">
                    {socials.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <motion.a 
                                whileHover={{ y: -3, scale: 1.1 }}
                                key={index} 
                                href={social.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-white bg-[#0E1018] p-2 rounded transition-all duration-200"
                            >
                                <Icon className="w-6 h-6" />
                            </motion.a>
                        )
                    })}
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Profile
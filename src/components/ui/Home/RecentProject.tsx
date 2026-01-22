import { ArrowRightIcon, Plus } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../button"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

const RecentProject = () => {
    const projects = [
        {
            img: "/assets/my-projects/anyday.png",
            name: "CelebrateAnyDay",
            link: "https://celebrateanyday.vercel.app"
        },
        {
            img: "/assets/my-projects/openview.png",
            name: "OpenView",
            link: "https://open-views.vercel.app"
        }
    ]
  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full bg-black h-full row-span-2 rounded-lg overflow-hidden py-2 border border-transparent hover:border-gray-800 transition-colors"
    >
        <div className="bg-black p-4 text-lg flex items-center justify-between border-b border-gray-900">
            <h3 className="font-semibold">Recent Projects</h3>
            <div className="w-fit">
                <Link to="/projects" className="text-blue-500 flex gap-1 items-center hover:text-blue-400 transition-colors">
                    <p className="text-sm">All Projects</p>
                    <ArrowRightIcon className="w-4 h-4" />
                </Link>
            </div>
        </div>
        
        <div className="p-6 space-y-6">
            { projects.map((project, index:number) => (
                <motion.div 
                    key={index} 
                    whileHover={{ y: -5 }}
                    className="w-full h-[180px] relative group overflow-hidden rounded-lg border border-gray-900"
                >
                    <img src={project.img} alt={project.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    <p className="bg-white text-black font-bold shadow-2xl py-1 px-4 rounded absolute bottom-4 left-4 z-10 text-[12px] uppercase tracking-widest">{project.name}</p>
                    <Button asChild className={cn("opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit bg-[#4770FF] hover:bg-white hover:text-[#4770FF]")}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Plus className="w-6 h-6" />
                        </a>
                    </Button>
                </motion.div>
            ))
            }
        </div>
    </motion.div>
  )
}

export default RecentProject
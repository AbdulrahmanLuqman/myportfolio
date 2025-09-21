import { ArrowRightIcon, Plus } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../button"
import { cn } from "@/lib/utils"
const RecentProject = () => {
    const projects = [
        {
            img: "/assets/my-projects/anyday.png",
            name: "CelebrateAnyDay",
            link: "https://celebrateanyday.app"
        },
        {
            img: "/assets/my-projects/openview.png",
            name: "OpenView",
            link: "https://open-views.vercel.app"
        }
    ]
  return (
    <div className="w-full bg-black h-full row-span-2 rounded-lg overflow-hidden py-2">
        <div className="bg-black p-2 text-lg flex items-center justify-between">
            <h3 className="font-semibold">Recent Projects</h3>
            <div className="w-fit">
                <Link to="/projects" className="text-blue-500 flex gap-1 items-center">
                    <p className="text-sm">All Projects</p>
                    <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <div className="w-full h-[1.5px] rounded bg-blue-500"></div>
            </div>
        </div>
        
        <div className="p-8 space-y-3">
            { projects.map((project, index:number) => (
                <div key={index} className="w-full h-[150px] relative">
                    <img src={project.img} alt="openview" className="w-full h-full rounded-t-lg" />
                    <p className="bg-gray-200 text-black font-semibold shadow-2xl py-1 px-4 rounded absolute bottom-[20px] left-[-25px] z-0 text-[12px]">{project.name}</p>
                    <Button asChild className={cn("cursor-pointer absolute top-0 bottom-0 left-0 right-0 m-auto w-fit")}>
                        <a href={project.link}>
                            <Plus />
                        </a>
                    </Button>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default RecentProject
import { Button } from "../button"
import { ArrowUpRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
const   ProjectsComponent = () => {
    const [filterBy, setFilterBy] = useState("All")
    const myProjects = [
        {
            image: "/assets/my-projects/anyday.png",
            description: "CelebrateAnyDay - Create magical moments",
            type: "SaaS",
            link: "https://celebrateanyday.vercel.app"
        },
        {
            image: "/assets/my-projects/openview.png",
            description: "OpenView - Discover Open Source Projects ",
            type: "SaaS",
            link: "https://open-views.vercel.app"
        },
        {
            image: "/assets/my-projects/ipAddress.png",
            description: "IP Address Tracker",
            type: "Practice",
            link: "https://ip-address-tracker-seven-sigma.vercel.app"
        },
        {
            image: "/assets/my-projects/ticket.png",
            description: "Ticket Generator",
            type: "Practice",
            link: "https://conference-ticket-generator-inky.vercel.app"
        },
        {
            image: "/assets/my-projects/aiedit.png",
            description: "AiEdits",
            type: "Practice",
            link: "https://banana-edit-eight.vercel.app"
        },
        {
            image: "/assets/my-projects/noter.png",
            description: "Noter - A note taking site",
            type: "Practice",
            link: "https://note-taking-orcin.vercel.app/dashboard"
        },
        
        {
            image: "/assets/my-projects/hue.png",
            description: "HueIsTheOne",
            type: "SaaS",
            link: "https://hng-12-hue-is-the-one.vercel.app/"
        },
        {
            image: "/assets/my-projects/summerAi.png",
            description: "SummarEaseAi - summarise/translate with AI",
            type: "Practice",
            link: "https://summar-ease-ai-2g4t.vercel.app/"
        }
        // {
        //     image: "/assets/my-projects/ipAddress.png",
        //     description: "Code ",
        //     type: "Practice",
        //     link: "https://code-ant-test.vercel.app/"
        // },
    ]

    const filteredBy = filterBy === "All" ?  myProjects : myProjects.filter((el)=> el.type === filterBy)

    const filterButtons = ["All", "SaaS", "Practice"]

  return (
    <div className="w-2/3 h-[500px] max-[920px]:min-h-screen max-[920px]:w-full overflow-auto bg-black p-8 rounded-lg space-y-3">
        <div className="space-y-3">
            <h2 className="text-4xl max-[629px]:text-xl font-semibold">Check Out My Latest <span className="text-[#4770FF]">Projects</span></h2>
            <p className="text-gray-400">I'm here to help if you're searching for a software developer to bring your ideas to life or a partner to help take your business to the next level.</p>
        </div>
        <div className="flex flex-wrap gap-x-4">
            {
                filterButtons.map((el)=> <Button disabled={el === filterBy} onClick={()=> setFilterBy(el)} className={cn("bg-[#202020bb] hover:bg-[#292929] text-white cursor-pointer", filterBy === el && "bg-[#4770FF] hover:bg-[#476ffff1] text-white")}>{el}</Button>)
            }
        </div>
        <div className="space-y-4"> 
            { filteredBy.map((myProject, index:number)=> (
                <div key={index} className="space-y-3">
                    <div className="bg-[#0E1018] rounded-lg p-4">
                        <img src={myProject.image} alt={myProject.description} className="rounded-t-lg" />
                    </div>

                    <div className="flex flex-wrap gap-1 justify-between items-center">
                        <div className="space-y-1">
                            <h4 className="md:text-xl text-sm text-gray-300">{myProject.description}</h4>
                            <p className="text-gray-400 text-sm">{myProject.type}</p>
                        </div>
                        <Button asChild className={cn("hover:bg-[#202020bb] border border-[#202020bb] text-gray-600 hover:text-[#4770FF] bg-black")}>
                            <a target="_blank" href={myProject.link} className="flex items-center gap-1">
                                <span>View Project</span>
                                <ArrowUpRightIcon />
                            </a>
                        </Button>
                    </div>
                </div>
            ))
            }
        </div>
        <div></div>
    </div>
  )
}

export default ProjectsComponent
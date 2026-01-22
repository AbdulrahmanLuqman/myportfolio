import { Button } from "../button"
import { cn } from "@/lib/utils"
import { ArrowUpRightIcon, DotIcon, MedalIcon } from "lucide-react"
const AboutComponent = () => {
    const feats = [
        {
            number: 3,
            what: "Year of Experience"
        },
        {
            number: 20,
            what: "Projects Completed"
        },
        // {
        //     number: 3,
        //     what: "Happy Client"
        // }
    ]
    const awards = [
        {
            title: "Google AI Hackathon",
            year: 2025,
            position: "forgot to submit🤦‍♀️",
            linkToSolution: "https://banana-edit-eight.vercel.app/"
        },
        {
            title: "Bincom Hackathon",
            year: 2025,
            position: "Runner Up",
            linkToSolution: "https://note-taking-orcin.vercel.app/dashboard"
        }       
    ]
  return (
    <div className="w-2/3  h-[500px] max-[920px]:min-h-screen max-[920px]:w-full bg-black p-8 rounded-lg space-y-8 overflow-auto">
        <div className="space-y-3">
            <div className="flex justify-between items-center flex-wrap-reverse gap-2">
                <h2 className="text-3xl max-[629px]:text-xl font-semibold">Hi, This is <span className="text-[#4770FF]">CodeKage👑</span></h2>
                <span className="flex gap-2 max-[510px]:gap-0 items-center bg-[#0E1018] rounded-lg font-semibold py-1 px-3 max-[629px]:px-2 w-fit text-[#4770FF]">
                    <DotIcon className="animate-pulse w-10 h-10" />
                    <span className="text-center max-[510px]:text-sm">Available For Hire</span>
                </span>
            </div>
            <p className="text-xl max-[629px]:text-[16px] min-[484px]:w-[350px] w-full">A results-driven <span className="font-semibold">Frontend Engineer</span> & <span className="font-semibold">Design-Oriented Developer</span> Specializing in building performant interfaces with a passion for UX.</p>
        </div>
        <div className="flex gap-3 flex-wrap">
            {   
                feats.map((feat, index:number) => (
                    <div key={index} className="space-y-1">
                        <p className="text-4xl font-semibold max-[629px]:text-2xl">{feat.number}+</p>
                        <p className="text-gray-600 text-lg max-[629px]:text-[16px]">{feat.what}</p>
                    </div>
                ))
            }
        </div>
        <div className="space-y-3">
            <h3 className="text-2xl">Awards and Recognitions</h3>
            <div className="space-y-4 max-[663px]:grid max-[663px]:grid-cols-2 max-[484px]:grid-cols-1 gap-3">
                { awards.map((award, index:number)=> (
                    <div key={index} className="w-full flex flex-row max-[663px]:flex-col max-[663px]:items-start max-[663px]:h-full max-[663px]:gap-1 items-center justify-between bg-[#0E1018] p-4 rounded-lg border border-[#0E1018] hover:bg-transparent hover:border-[#4770FF]">
                        <div>
                            <h4 className="font-semibold text-lg">{award.title}</h4>
                            <p className="text-gray-600">{award.year}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <MedalIcon className="w-5 h-5" />
                            <p className="font-semibold text-lg">{award.position}</p>
                        </div>
                        <Button className={cn("bg-black text-gray-600 hover:text-[#4770FF] hover:bg-black cursor-pointer")}>
                            <a href={award.linkToSolution} className="flex items-center gap-1">
                                <span>View Project</span>
                                <ArrowUpRightIcon />
                            </a>
                        </Button>
                    </div>
                ))
                }
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default AboutComponent
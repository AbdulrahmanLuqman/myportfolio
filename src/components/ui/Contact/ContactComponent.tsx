import { cn } from "@/lib/utils"
import { Button } from "../button"
import { ArrowUpRightIcon, PlusIcon, MinusIcon } from "lucide-react"
import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"


const ContactComponent = () => {
    
    const [openedIndex, setOpenedIndex] = useState<number | null>(null);
    const [state, handleSubmit] = useForm("xdkdrwgr");

    if (state.errors) {
      console.log(state.errors)
    }
    const FAQ = [
      {
        question: "What types of businesses do you work with",
        answer: "I specialize in working with early-stage startups and scaling businesses looking for robust, high-performance web solutions."
      },
      {
        question: "What is your typical project timeline",
        answer: "Most projects take between 2-6 weeks depending on the complexity and specific requirements of your business."
      },
      {
        question: "Do you offer post-launch support",
        answer: "Yes, I provide dedicated support and maintenance packages to ensure your platform scales seamlessly as your business grows."
      }
    ]
  return (
    <div className="w-2/3 h-[500px] max-[920px]:min-h-screen max-[920px]:w-full overflow-auto bg-black p-8 rounded-lg space-y-3">
        <div className="space-y-3">
            <h2 className="text-4xl font-semibold">Let's👋<span className="text-[#4770FF]">Work</span> Together</h2>
            <p className="text-gray-400">I'm here to help if you're searching for a software developer to bring your ideas to life or a partner to help take your business to the next level.</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-[#0E1018] p-4 rounded-lg space-y-5">
            <div className="flex gap-5 flex-wrap">
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="name" className="text-sm font-bold">Full Name</label>
                    <input required id="name" type="text" name="name" className="border border-gray-800 bg-black p-3 rounded-md outline-none focus:border-[#4770FF] transition-colors" placeholder="e.g. John Doe" />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="email" className="text-sm font-bold">Email Address</label>
                    <input required id="email" type="text" name="email" className="border border-gray-800 bg-black p-3 rounded-md outline-none focus:border-[#4770FF] transition-colors" placeholder="e.g. contact@business.com" />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                </div>
            </div>
            <div className="flex gap-5 flex-wrap">
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="subject" className="text-sm font-bold">Subject</label>
                    <input required id="subject" type="text" name="subject" className="border border-gray-800 bg-black p-3 rounded-md outline-none focus:border-[#4770FF] transition-colors" placeholder="e.g. New Website Project" />
                    <ValidationError 
                      prefix="Subject" 
                      field="subject"
                      errors={state.errors}
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="budget" className="text-sm font-bold">Budget Range</label>
                    <input required id="budget" type="text" name="budget" className="border border-gray-800 bg-black p-3 rounded-md outline-none focus:border-[#4770FF] transition-colors" placeholder="e.g. $2,000 - $5,000" />
                    <ValidationError 
                      prefix="Budget" 
                      field="budget"
                      errors={state.errors}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="comment" className="text-sm font-bold">Project Details</label>
                <textarea required name="comment" id="comment" className="border border-gray-800 bg-black p-3 rounded-md outline-none min-h-[120px] focus:border-[#4770FF] transition-colors" placeholder="Tell me about your business and what you're looking to achieve...text me on +2349167596491"></textarea>
                <ValidationError 
                  prefix="Comment" 
                  field="comment"
                  errors={state.errors}
                />
            </div>
            <Button disabled={state.submitting || state.succeeded} className={cn("bg-[#4770FF] hover:bg-black text-white w-full flex items-center cursor-pointer")}>
              {
                  state.succeeded ? <span>Sent</span> : (
                    <>
                      <span>Send mesage</span>
                      <ArrowUpRightIcon />
                    </>
                  )
              }
            </Button>
        </form>
        <div className="space-y-3">
            {FAQ.map((f, index: number) => {
              const isOpen = openedIndex === index;
            
              return (
                <div
                  key={index}
                  className={cn(
                    "bg-[#0E1018] p-4 rounded-lg transition-all duration-150",
                    isOpen && "bg-transparent border border-[#4770FF]"
                  )}
                >
                  <div className="flex justify-between items-center">
                    <p className={cn("text-lg font-semibold", isOpen && "text-[#4770FF]")}>
                      {f.question}?
                    </p>
              
                    <button
                      className="bg-black p-2 rounded cursor-pointer"
                      onClick={() => setOpenedIndex(isOpen ? null : index)}
                    >
                      {isOpen ? (
                        <MinusIcon className="w-5 h-5 text-[#4770FF]" />
                      ) : (
                        <PlusIcon className="w-5 h-5 text-[#4770FF]" />
                      )}
                    </button>
                  </div>
                  
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500",
                      isOpen ? "max-h-40 mt-3" : "max-h-0"
                    )}
                  >
                    <p className="text-sm text-[whitesmoke] font-semibold">
                      {f.answer}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <div></div>
    </div>
  )
}

export default ContactComponent
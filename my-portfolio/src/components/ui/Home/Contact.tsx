import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { ArrowUpRightFromSquareIcon } from "lucide-react"

const Contact = () => {
  return (
    <div className="w-full bg-black h-full rounded-lg p-4 flex flex-col justify-between md:justify-start md:gap-10">
        <div className="overflow-hidden w- full bg-[#0E1018] py-4 rounded">
            <motion.div
              animate={{x: ['0%', '-100%']}}
              transition={{
                x: {
                    repeatType: 'loop',
                    repeat: Infinity,
                    duration: 10,
                    ease: 'linear'
                }
              }}
              className="w-max text-[whitesmoke] font-semibold"
            >
                <span>
                    Available For Hire 🚀 Crafting Digital Experiences 🎨
                </span>
            </motion.div>
        </div>
        <p className="text-4xl font-semibold">Let's 😊 <br /> Work Together</p>
        <div className="w-fit">
            <Link to="/contact" className="text-blue-500 flex gap-1 items-center">
                <p className="text-sm">Let's talk</p>
                <ArrowUpRightFromSquareIcon className="w-4 h-4" />
            </Link>
            <div className="w-full h-[1.5px] rounded bg-blue-500"></div>
        </div>
    </div>
  )
}

export default Contact
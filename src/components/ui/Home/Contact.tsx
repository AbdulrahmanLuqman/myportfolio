import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { ArrowUpRightFromSquareIcon } from "lucide-react"

const Contact = () => {
  return (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full bg-black h-full rounded-lg p-6 flex flex-col justify-between border border-transparent hover:border-gray-800 transition-colors"
    >
        <div className="overflow-hidden w-full bg-[#0E1018] py-2 rounded-full border border-gray-900">
            <motion.div
              animate={{x: ['0%', '-50%']}}
              transition={{
                x: {
                    repeat: Infinity,
                    duration: 20,
                    ease: 'linear'
                }
              }}
              className="w-max text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] whitespace-nowrap flex gap-8"
            >
                <span>Available for new projects • Scaling Startups • Business Solutions • UI/UX Design • Full-Stack Development • Available for new projects • Scaling Startups • Business Solutions • UI/UX Design • Full-Stack Development •</span>
            </motion.div>
        </div>
        <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to <br /> <span className="text-[#4770FF]">Scale Your Business?</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-[250px]">Let's build something exceptional together that drives results.</p>
        </div>
        <div className="w-fit group">
            <Link to="/contact" className="text-[#4770FF] flex gap-2 items-center font-bold uppercase text-xs tracking-widest group-hover:text-white transition-colors">
                <span>Start a Project</span>
                <ArrowUpRightFromSquareIcon className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <div className="w-0 group-hover:w-full h-[1px] bg-[#4770FF] transition-all duration-300"></div>
        </div>
    </motion.div>
  )
}

export default Contact
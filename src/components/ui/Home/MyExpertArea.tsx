import { motion } from "motion/react"

const MyExpertArea = () => {
    const skills = [
        {
            image: "/assets/react.png",
            name: "React"
        },
        {
            image: "/assets/tailwind.png",
            name: "Tailwind"
        },
        {
            image: "/assets/next.png",
            name: "Nextjs"
        },
        {
            image: "/assets/figma.png",
            name: "Figma"
        },
        {
            image: "/assets/supabase.png",
            name: "Supabase"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring" as const, stiffness: 260, damping: 20 }
        }
    }

  return (
    <div className="w-full bg-black h-full rounded-lg overflow-hidden py-2 border border-transparent hover:border-gray-800 transition-colors flex flex-col">
        <h3 className="bg-black p-4 text-lg font-semibold border-b border-gray-900">Expertise</h3>
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-3 p-4 flex-grow"
        >
        {
            skills.map((skill, index:number) => (
                <div key={index} className="flex flex-col items-center w-full gap-1">
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ y: -5, backgroundColor: "#1e212b" }}
                        className="bg-[#0E1018] rounded-xl w-full flex justify-center py-4 border border-gray-900 transition-colors"
                    >
                        <img src={skill.image} alt={skill.name} className="w-8 h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"/>
                    </motion.div>
                    
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-tighter">{skill.name}</p>
                </div>
            ))
        }
        </motion.div>
        <p className="p-4 pt-0 text-[11px] font-medium text-gray-400 text-center italic">Crafting modern digital experiences with cutting-edge tools.</p>
    </div>
  )
}

export default MyExpertArea
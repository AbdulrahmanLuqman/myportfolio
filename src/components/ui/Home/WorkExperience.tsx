import { motion } from "motion/react"

const WorkExperience = () => {
  return (
    <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full bg-black h-full rounded-lg overflow-hidden py-2 border border-transparent hover:border-gray-800 transition-colors"
    >
        <h3 className="bg-black p-4 text-lg font-semibold border-b border-gray-900">Work Experience</h3>
        <div className="flex justify-between space-y-4 px-6 py-6">
            <div className="space-y-8">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">2023 - 2024</p>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">2025</p>
            </div>
            <div className="space-y-6 text-right">
                <div>
                    <p className="font-bold text-white">Dervac Technologies</p>
                    <p className="text-sm text-gray-400">Software Engineering Intern</p>
                </div>
                <div>
                    <p className="font-bold text-white">HNG Internship</p>
                    <p className="text-sm text-gray-400">Frontend Developer Trainee</p>
                </div>
            </div>
        </div>
        <p className="px-6 pb-4 text-xs italic text-gray-500">Collaborating with cross-functional teams to deliver high-quality web products.</p>
    </motion.div>
  )
}

export default WorkExperience
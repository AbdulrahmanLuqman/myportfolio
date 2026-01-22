import { LaptopIcon, LayoutIcon, SmartphoneIcon, RocketIcon } from "lucide-react"
import { motion } from "motion/react"

const Services = () => {
    const services = [
        {
            name: "Business Solutions",
            icon: LaptopIcon
        },
        {
            name: "Product Design",
            icon: LayoutIcon
        },
        {
            name: "Mobile Solutions",
            icon: SmartphoneIcon
        },
        {
            name: "SaaS Development",
            icon: RocketIcon
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

  return (
    <div className="w-full bg-black h-full rounded-lg lg:col-span-2 md:col-span-1 overflow-hidden flex flex-col">
        <h3 className="bg-black p-4 text-lg font-semibold border-b border-gray-900">Services I Offer</h3>
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-3 p-4 flex-grow"
        >
            {
                services.map((service, index:number) => {
                    const Icon = service.icon
                    return (
                        <motion.div 
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, backgroundColor: "#161821" }}
                            key={index} 
                            className="flex flex-col gap-3 justify-center items-center bg-[#0E1018] rounded-lg p-5 border border-gray-900 transition-colors"
                        >
                            <div className="bg-black/50 w-fit p-4 rounded-full">
                                <Icon className="text-[#4770FF] w-8 h-8" />
                            </div>
                            <p className="font-medium text-sm text-center text-gray-200">{service.name}</p>
                        </motion.div>
                    )
                })
            }
        </motion.div>
    </div>
  )
}

export default Services
import { LaptopIcon, CardSimIcon, Phone, BlocksIcon } from "lucide-react"

const Services = () => {
    const services = [
        {
            name: "Web2 Dev",
            icon: LaptopIcon
        },
        {
            name: "Design",
            icon: CardSimIcon
        },
        {
            name: "Mobile App",
            icon: Phone
        },
        {
            name: "Web3 Dev",
            icon: BlocksIcon
        }
    ]
  return (
    <div className="w-full bg-black h-full rounded-lg lg:col-span-2 md:col-span-1 overflow-hidden">
        <h3 className="bg-black p-2 text-lg font-semibold">Service I Offer</h3>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2 p-4 max-[840px]:flex max-[840px]:overflow-x-auto">
            {
                services.map((service, index:number) => {
                    const Icon = service.icon
                    return (
                        <div key={index} className="flex flex-col gap-2 justify-center items-center bg-[#0E1018] rounded-lg p-4">
                            <div className="bg-black w-fit p-6">
                                <Icon className="text-[#4770FF] w-12 h-12" />
                            </div>
                            <p className="font-semibolb">{service.name}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Services
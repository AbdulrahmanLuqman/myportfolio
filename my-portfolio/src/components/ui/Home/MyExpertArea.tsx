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
  return (
    <div className="w-full bg-black h-full rounded-lg overflow-hidden py-2">
        <h3 className="bg-black p-2 text-lg font-semibold">My Expert Area</h3>
        <div className="grid grid-cols-3 gap-2 p-3">
        {
            skills.map((skill, index:number) => (
                <div key={index} className="flex flex-col items-center w-full">
                    <div className="bg-[#0E1018] rounded w-full flex justify-center py-2">
                        <img src={skill.image} alt={skill.name} className="w-[55px] h-[50px]"/>
                    </div>
                    
                    <p className="text-sm text-gray-400">{skill.name}</p>
                </div>
            ))
        }
        </div>
        <p className="px-6 text-sm font-semibold">and any frontend library you can think of</p>
    </div>
  )
}

export default MyExpertArea
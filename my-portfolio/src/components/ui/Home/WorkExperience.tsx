const WorkExperience = () => {
  return (
    <div className="w-full bg-black h-full rounded-lg overflow-hidden py-2">
        <h3 className="bg-black p-2 text-lg font-semibold">Work Experience</h3>
        <div className="flex justify-between space-y-2 px-6 py-2">
            <div className="space-y-5">
                <p className="text-sm font-bold text-gray-200">2023-2024</p>
                <p className="text-sm font-bold text-gray-200">2025</p>
            </div>
            <div>
                <div>
                    <p className="font-semibold">Dervac</p>
                    <p className="text-sm text-gray-400">intern</p>
                </div>
                <div>
                    <p className="font-semibold">HNG</p>
                    <p className="text-sm text-gray-400">intern</p>
                </div>
            </div>
        </div>
        <p className="px-6 text-sm font-semibold">Collaborated on lots and lots of project tho</p>
    </div>
  )
}

export default WorkExperience
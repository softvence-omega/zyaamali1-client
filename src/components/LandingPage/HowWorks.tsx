import elipse from "../../assets/Ellipse 5-2.png";

export const HowWorks = () => {
    const processSteps = [
        {
            "id": "01",
            "title": "Understand Your Business",
            "description": "Share your goals and audience with Sterling. He'll tailor a marketing strategy for your business."
        },
        {
            "id": "02",
            "title": "Create Campaign Content",
            "description": "Generate stunning ads, copy, and visuals in minutes."
        },
        {
            "id": "03",
            "title": "Launch & Automate",
            "description": "Smart targeting, budget control, and publishing."
        },
        {
            "id": "04",
            "title": "Optimize & Grow",
            "description": "Get real-time feedback and improve performance."
        }
    ];
    return (
        <div className="bg-[#010610]  relative  ">
            <img src={elipse} alt="" className="absolute right-0" />
            <div className="max-w-[1400px] mx-auto my-auto">
                <div className="max-w-[1400px] mx-auto my-auto">
                    <div className="flex flex-col gap-10 p-10">

                        <div className="flex flex-col md:flex-row gap-10 justify-between items-center pb-8 ">
                            <div className="flex-1"><h1 className="text-9xl text-white  w-2/4 font-bold">How <span className="outline-text text-transparent bg-clip-text  ">ADELO</span> Works</h1> </div>
                            <div className="max-w-6xl mx-auto grid grid-cols-1    gap-6">
                                {processSteps.map((step) => (
                                    <div
                                        key={step.id}
                                        className="bg-[#1A1A2E]  rounded-xl  p-8 border border-solid border-opacity-20 border-[#A891FB] shadow-lg flex flex-col items-start text-left "
                                    >
                                        {/* Step ID (e.g., 01, 02) */}
                                        <p className="text-[#A891FB] text-2xl font-extrabold mb-2">
                                            {step.id}
                                        </p>
                                        {/* Step Title */}
                                        <h3 className="text-white text-xl font-bold mb-4">
                                            {step.title}
                                        </h3>
                                        {/* Step Description */}
                                        <p className="text-gray-300 text-base leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}



export const Banner = () => {
    return (
        <div className=" flex flex-col items-center justify-center gap-5 py-24 text-center mx-auto ">
            <h1 className="md:text-9xl text-7xl font-bold  text-[#6749d2]            
            ">Marketing That Thinks <span className="text-[#000000]">For You</span></h1>
            <p className="text-lg text-[#6C7078] md:w-2/4 w-3/4">Adelo uses advanced AI to create, optimize, and manage your marketing campaigns, helping you reach the right audience with the perfect message.

            </p>
            <div className="flex justify-between items-center gap-5 my-4">
                <button
                    className="
                rounded-4xl px-6 py-3 text-white text-lg bg-[#A891FB] font-light cursor-pointer
                hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out
              "
                >
                    Get Started
                </button>
                <button
                    className="
                rounded-4xl px-6 py-3 border text-lg text-[#A891FB] font-light cursor-pointer border-[#A891FB]
                hover:bg-[#A891FB] hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out
              "
                >
                    Watch Demo
                </button>
            </div>
        </div>
    )
}

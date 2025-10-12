const JoinTeam = () => {
    return (
        <div className="w-full px-4 md:px-8 lg:px-16 mb-20">
            <div className="max-w-xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Join the Team
                </h1>
                <p className="mb-6 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                    We're building the future of marketing. Smarter, faster, and more accessible. If you're excited by
                    innovation and love helping businesses grow, we'd love to hear from you.
                </p>

                {/* Full-width input and button stacked on small screens */}
                <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                        type="email"
                        className="w-full bg-[#020817] dark:bg-gray-800 border border-gray-600 rounded-full p-3
                        placeholder-[#a0a3aaea] dark:placeholder-gray-400 focus:placeholder-[#9CA3AF]
                        text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Enter Your Email"
                    />
                    <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] cursor-pointer text-white whitespace-nowrap hover:shadow-lg transition-all duration-300">
                        Join
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinTeam;
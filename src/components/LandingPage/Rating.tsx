import { FaPlus, FaStar } from "react-icons/fa";
import rating1 from "../../assets/rating1.png"
import rating2 from "../../assets/rating2.png"
import rating3 from "../../assets/rating3.png"

export const Rating = () => {

    const ratings = [
        { id: 1, src: rating1 },
        { id: 2, src: rating2 },
        { id: 3, src: rating3 },
        { id: 4, src: rating2 },
    ];

    return (
        <div className=" gap-3 bg-white  rounded-[58px] px-14 py-8 inline-block">
            <div className="flex gap-2 items-center justify-center">
                <div className="flex ">
                    {ratings.map((rating) => (
                        <img
                            key={rating.id}
                            className="w-13 h-13 rounded-full object-cover -ml-5 z-10 border-4 border-[#E6E6E8]"
                            src={rating.src}
                            alt={`Rating ${rating.id}`}
                        />
                    ))}

                </div>
                <div className="z-20 -mr-4">
                    <div className="flex -ml-5  justify-center items-center bg-[#3C2E6B] p-2 rounded-full w-13 h-13 text-white cursor-pointer hover:bg-[#5A4B8C] transition-colors duration-300">
                        <FaPlus></FaPlus>
                    </div>
                </div>
                <div className="flex flex-col items-center ml-4">
                    <div className="flex ">
                        <p><FaStar className="text-yellow-500"></FaStar></p>
                        <p><FaStar className="text-yellow-500"></FaStar></p>
                        <p><FaStar className="text-yellow-500"></FaStar></p>
                        <p><FaStar className="text-yellow-500"></FaStar></p>
                    </div>

                    <p>4.8/5(414)</p>

                </div>
            </div>
        </div>
    )
}

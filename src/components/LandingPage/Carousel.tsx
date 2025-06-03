import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.svg";
import c7 from "../../assets/c7.svg";
import { useEffect, useState } from "react";

const MyCarousel = () => {
    const images = [c1, c2, c3, c4, c5, c6, c7];
    const [slidePercentage, setSlidePercentage] = useState(20);


    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 480) setSlidePercentage(60);
            else if (width < 768) setSlidePercentage(40);
            else setSlidePercentage(20);
        };

        handleResize(); // set initially
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full max-w-full mx-auto px-2">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                transitionTime={700}
                interval={3000}
                emulateTouch
                swipeable
                stopOnHover
                dynamicHeight={false}
                centerMode
                centerSlidePercentage={slidePercentage}
                showArrows={false}
                swipeScrollTolerance={5}
            >
                {images.map((img, index) => (
                    <div key={index} className="px-2">
                        <div className="bg-white px-3 border-1 py-3 rounded-xl shadow-md h-full flex items-center justify-center">
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="h-20 sm:h-24 md:h-28 object-contain rounded-md"
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default MyCarousel;

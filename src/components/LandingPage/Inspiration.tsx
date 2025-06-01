import img1 from "../../assets/i1.png";
import img2 from "../../assets/i2.png";
import img3 from "../../assets/i3.png";
import img4 from "../../assets/i4.png";
import img5 from "../../assets/i5.png";
import img6 from "../../assets/i6.png";
import img7 from "../../assets/i7.png";
import img8 from "../../assets/i8.png";
import img9 from "../../assets/i9.png";

export const Inspiration = () => {
    const inspirationImages = [
        { id: 1, src: img1, alt: "Inspiration Image 1" },
        { id: 2, src: img2, alt: "Inspiration Image 2" },
        { id: 3, src: img3, alt: "Inspiration Image 3" },
        { id: 4, src: img4, alt: "Inspiration Image 4" },
        { id: 5, src: img5, alt: "Inspiration Image 5" },
        { id: 6, src: img6, alt: "Inspiration Image 6" },
        { id: 7, src: img7, alt: "Inspiration Image 7" },
        { id: 8, src: img8, alt: "Inspiration Image 8" },
        { id: 9, src: img9, alt: "Inspiration Image 9" },
    ];

    return (
        <div className="px-4 py-12">
            <div className="max-w-[1400px] mx-auto">
                {/* Heading */}
                <div className="flex justify-center items-center flex-col gap-6 text-center px-4">
                    <h1 className="bg-gradient-to-l from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] bg-clip-text text-transparent md:text-7xl text-4xl font-bold">
                        Get Inspiration
                    </h1>
                    <p className="max-w-2xl text-black/50">
                        Lorem ipsum dolor sit amet consectetur. Nulla ornare erat mauris vulputate id ullamcorper mauris ante molestie. Vestibulum amet nibh eget eu.
                    </p>
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 mt-12">
                    {inspirationImages.map((img) => (
                        <div
                            key={img.id}
                            className="cursor-pointer break-inside-avoid overflow-hidden rounded-2xl shadow-md  transition-transform duration-300"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-auto object-cover rounded-2xl"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center py-6">
                    <div className="flex justify-center items-center gap-5 rounded-3xl border border-solid border-[#654FAE]  px-6 py-3 text-[#8e6eff]font-semibold text-lg transition-colors duration-300 cursor-pointer hover:bg-[#b1a7d4]">
                        <h1>More</h1>
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_823_965)">
                                <path d="M-0.00158691 20.8613L10.1431 10.7167L13.2795 13.8532L3.13489 23.9978L-0.00158691 20.8613Z" fill="#8E6EFF" />
                                <path d="M15.1523 5.70996L11.1473 9.71543L14.2843 12.8524L18.2897 8.84741L15.1523 5.70996Z" fill="#8E6EFF" />
                                <path d="M7.04273 9.74781L8.76592 6.5971L11.9166 4.87391L8.76592 3.15072L7.04273 0L5.31954 3.15072L2.16882 4.87391L5.31954 6.5971L7.04273 9.74781Z" fill="#8E6EFF" />
                                <path d="M19.8812 8.23745L21.3374 5.57488L23.9999 4.11875L21.3374 2.66257L19.8812 0L18.425 2.66257L15.7625 4.11875L18.425 5.57488L19.8812 8.23745Z" fill="#8E6EFF" />
                                <path d="M19.8812 10.9502L18.425 13.6128L15.7625 15.0689L18.425 16.5251L19.8812 19.1876L21.3374 16.5251L23.9999 15.0689L21.3374 13.6128L19.8812 10.9502Z" fill="#8E6EFF" />
                            </g>
                            <defs>
                                <clipPath id="clip0_823_965">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

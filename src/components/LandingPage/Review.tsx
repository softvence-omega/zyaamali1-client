import bg from "../../assets/reviewbg.jpg"; // Import the background image

export const Review = () => {
    // JSON data for the reviews - moved directly into the component
    const customerReviews = [
        {
            "id": 1,
            "name": "Arda Guler",
            "handle": "@ardaguler",
            "avatar": "https://placehold.co/40x40/E0E0E0/000000?text=AG1",
            "rating": 5,
            "reviewText": "Lorem ipsum dolor sit amet consectetur. Tortor sodales morbi facilisi eu ut mattis tellus morbi at. Pulvinar amet quam nulla mauris scelerisque aliquam lorem."
        },
        {
            "id": 2,
            "name": "Arda Guler",
            "handle": "@ardaguler",
            "avatar": "https://placehold.co/40x40/E0E0E0/000000?text=AG2",
            "rating": 5,
            "reviewText": "Lorem ipsum dolor sit amet consectetur. Tortor sodales morbi facilisi eu ut mattis tellus morbi at. Pulvinar amet quam nulla mauris scelerisque aliquam lorem."
        },
        {
            "id": 3,
            "name": "Arda Guler",
            "handle": "@ardaguler",
            "avatar": "https://placehold.co/40x40/E0E0E0/000000?text=AG3",
            "rating": 5,
            "reviewText": "Lorem ipsum dolor sit amet consectetur. Tortor sodales morbi facilisi eu ut mattis tellus morbi at. Pulvinar amet quam nulla mauris scelerisque aliquam lorem."
        },
        {
            "id": 4,
            "name": "Arda Guler",
            "handle": "@ardaguler",
            "avatar": "https://placehold.co/40x40/E0E0E0/000000?text=AG4",
            "rating": 5,
            "reviewText": "Lorem ipsum dolor sit amet consectetur. Tortor sodales morbi facilisi eu ut mattis tellus morbi at. Pulvinar amet quam nulla mauris scelerisque aliquam lorem."
        },
        {
            "id": 5,
            "name": "Arda Guler",
            "handle": "@ardaguler",
            "avatar": "https://placehold.co/40x40/E0E0E0/000000?text=AG5",
            "rating": 5,
            "reviewText": "Lorem ipsum dolor sit amet consectetur. Tortor sodales morbi facilisi eu ut mattis tellus morbi at. Pulvinar amet quam nulla mauris scelerisque aliquam lorem."
        },
        {
            "id": 6,
            "name": "Arda Guler",
            "handle": "@ardaguler",
            "avatar": "https://placehold.co/40x40/E0E0E0/000000?text=AG6",
            "rating": 5,
            "reviewText": "Lorem ipsum dolor sit amet consectetur. Tortor sodales morbi facilisi eu ut mattis tellus morbi at. Pulvinar amet quam nulla mauris scelerisque aliquam lorem."
        },
        {
            "id": 7,
            "name": "Arda Guler",
            "handle": "@ardaguler",
            "avatar": "https://placehold.co/40x40/E0E0E0/000000?text=AG7",
            "rating": 5,
            "reviewText": "Lorem ipsum dolor sit amet consectetur. Tortor sodales morbi facilisi eu ut mattis tellus morbi at. Pulvinar amet quam nulla mauris scelerisque aliquam lorem."
        },
        {
            "id": 8,
            "name": "Arda Guler",
            "handle": "@ardaguler",
            "avatar": "https://placehold.co/40x40/E0E0E0/000000?text=AG8",
            "rating": 5,
            "reviewText": "Lorem ipsum dolor sit amet consectetur. Tortor sodales morbi facilisi eu ut mattis tellus morbi at. Pulvinar amet quam nulla mauris scelerisque aliquam lorem."
        },
        {
            "id": 9,
            "name": "Arda Guler",
            "handle": "@ardaguler",
            "avatar": "https://placehold.co/40x40/E0E0E0/000000?text=AG9",
            "rating": 5,
            "reviewText": "Lorem ipsum dolor sit amet consectetur. Tortor sodales morbi facilisi eu ut mattis tellus morbi at. Pulvinar amet quam nulla mauris scelerisque aliquam lorem."
        }
    ];

    // Helper component to render stars based on rating - moved directly into the component
    const StarRating = ({ rating }: any) => {
        return (
            <div className="flex items-center space-x-0.5">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <div
            className="py-16 px-4  bg-cover bg-center"

        >

            <div className="max-w-7xl mx-auto relative" >
                <img
                    src={bg}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
            </div>



            <div className="max-w-7xl mx-auto "> {/* Ensure content is above the overlay */}
                <div className="flex justify-center items-center flex-col gap-6 text-center px-4">
                    <h1 className="bg-gradient-to-l from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] bg-clip-text text-transparent md:text-7xl text-4xl font-bold">
                        <span className="text-gray-700"> Love From</span> Our Users
                    </h1>
                    <p className="max-w-2xl text-black/50 mb-10">
                        Join a growing community of marketers, creators, and business owners who trust Adelo to
                        simplify their advertising and reduce their costs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {customerReviews.map((review) => (
                        <div
                            key={review.id}
                            className={`
                                bg-white rounded-2xl p-6 shadow-md border-1 flex flex-col
                               
                            `}
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-10 h-10 rounded-full object-cover mr-3"

                                />
                                <div className="flex-1">
                                    <p className="font-bold text-gray-800 text-base">{review.name}</p>
                                    <p className="text-sm text-gray-500">{review.handle}</p>
                                </div>
                                <StarRating rating={review.rating} />
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {review.reviewText}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

import { FaCheck } from "react-icons/fa";
import serviceVideo from "../../assets/servicevideo.mp4";
export const Pricing = () => {
    interface PricingPlan {
        name: string;
        price: string;
        period: string;
        popular?: boolean;
        features: string[];
        buttonText: string;
        buttonStyle: string;
        shortDesc:string;
    }
    const pricingPlans: PricingPlan[] = [
        {
            name: "Basic",
            price: "$19",
            period: "/month",
            shortDesc:'For Small Teams Getting Started',
            features: [
                "Up to 3 members",
                "10 Marketing Campaigns per month",
                "Basic analytics and reports",
                "Email support",
            ],
            buttonText: "Downgrade",
            buttonStyle:
                "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
        },
        {
            name: "Pro",
            price: "$59",
            period: "/month",
            shortDesc:'For Growing Teams and Business',
            popular: true,
            features: [
                "Up to 10 members",
                "50 Marketing Campaigns per month",
                "Advanced analytics and reports",
                "Email & chat support",
            ],
            buttonText: "Current Plan",
            buttonStyle: "bg-gray-400 text-white cursor-not-allowed",
        },
        {
            name: "Elite",
            price: "$99",
            period: "/month",
            shortDesc:'For Large Teams and Enterprises',
            features: [
                "Unlimited team members",
                "Unlimited marketing campaigns",
                "Advanced analytics and reports",
                "Email support",
            ],
            buttonText: "Upgrade",
            buttonStyle: "rounded-3xl bg-gradient-to-r from-[#654FAE] via-[#C0AFFA] to-[#8E6EFF] cursor-pointer text-T-100 font-bold",
        },
    ];
    return (

        <div className="max-w-[1400px] mx-auto my-auto ">
            <div className="bg-white px-14">
                <h2 className="text-xl font-medium text-T-900 mb-6 ">Pricing Plans</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`flex flex-col justify-between border rounded-lg p-6 relative bg-T-300 h-full ${plan.popular ? "border-purple-500" : "border-gray-200"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-[-6px] right-[-50px] transform -translate-x-1/2">
                                    <span className="bg-blue-600 text-white px-3 py-3 rounded-xl text-xs font-medium">
                                        Current Plan
                                    </span>
                                </div>
                            )}

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {plan.name}
                                </h3>
                                <div className="mt-2">
                                    <span className="text-3xl font-bold text-blue-400">
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-600">{plan.period}</span>
                                    <p className="text-[#6C7078] text-sm mt-3">{plan.shortDesc}</p>
                                </div>
                                <hr className="mt-6 text-T-400" />

                                <ul className="mt-6 space-y-3">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-center text-sm text-gray-600"
                                        >
                                            <FaCheck className="w-3 h-3 text-[#FF8818] mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                disabled={plan.buttonText === "Current Plan"}
                                className={`w-full mt-6 px-4 py-2 text-sm font-semibold rounded-lg transition duration-300 cursor-pointer
    ${plan.buttonText === "Current Plan"
                                        ? "bg-gray-400 text-white cursor-not-allowed"
                                        : "bg-blue-500 text-white hover:bg-blue-600"
                                    }`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative w-10/12 md:w-full h-[600px] sm:h-[700px] md:h-[800px] overflow-hidden mt-10 rounded-3xl mb-24 mx-auto max-w-7xl px-4 lg:px-0">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={serviceVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-center justify-center text-center px-4 sm:px-8">
                    <h1
                        className="text-white font-bold text-center mb-12 leading-tight"
                        style={{ fontSize: "clamp(1.75rem, 4vw, 4.5rem)" }}
                    >
                        Let Adelo <span className="outline-text">Optimize</span> <br />
                        <span className="outline-text">Your Campaign</span> <br />
                        <span className="italic">Effortlessly</span>
                    </h1>

                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <button className="bg-gradient-to-r from-[#654FAE] via-[#A891FB] to-[#8E6EFF] text-white px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition duration-300">
                            Start Your Free Trial
                        </button>
                        <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-2xl font-semibold">
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

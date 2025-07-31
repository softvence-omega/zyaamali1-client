import serviceBack from "../../src/assets/serviceback.png";

const TermsOfService = () => {
    const currentDate = new Date().toLocaleDateString("en-US");

    return (
        <div className=" text-white">
            {/* Banner */}
            <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center text-center overflow-hidden">
                <img
                    src={serviceBack}
                    alt="Terms of Service Background"
                    className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-1"
                />

                <div className="relative z-20 px-4 sm:px-6">
                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-center">
                        <span className="bg-gradient-to-b from-[#8E6EFF] to-[#000000] bg-clip-text text-transparent mb-4">
                            Terms of Service
                        </span>
                        <span className="text-black block mt-2">Adelo AI Inc.</span>
                    </h1>

                    <p className="text-T-600 mt-4 sm:text-lg max-w-4xl mx-auto">
                        These Terms govern your use of the Adelo platform and services. Please read them carefully.
                    </p>
                </div>
            </div>

            {/* Terms Content */}
            <div className="max-w-4xl mx-auto px-4 py-10 text-black">
                <p className="mb-2">Effective Date: {currentDate}</p>
                <p className="mb-6">Last Updated: 7/1/2025</p>

                <p className="mb-4">
                    These Terms of Service (“Terms”) govern your use of the Adelo AI platform and services (the “Services”) operated by <strong>Adelo AI Inc.</strong>, a Delaware corporation (“Adelo”, “we”, “our”, or “us”). By accessing or using our Services, you (“you” or “User”) agree to be bound by these Terms. If you do not agree, do not access or use the Services.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">1. Eligibility</h2>
                <p className="mb-4">
                    You must be at least <strong>13 years old</strong> to use Adelo. If you are under 18, you must have consent from a parent or legal guardian. By using the Services, you represent and warrant that you meet these requirements.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">2. Account & Access</h2>
                <p className="mb-4">
                    You must create an account to access certain features. You agree to provide accurate information and keep your login credentials secure. You are responsible for all activity under your account.
                    <br /><br />
                    Adelo reserves the right to suspend or terminate accounts at our discretion, including for violations of these Terms or suspected abuse.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">3. Subscription & Payment</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>Access to Adelo requires a paid subscription unless stated otherwise.</li>
                    <li><strong>No refunds</strong> are provided under any circumstance.</li>
                    <li>If payment fails, is canceled, or is subject to chargeback, your account and access to the platform will be <strong>immediately locked</strong>.</li>
                    <li>You may cancel your subscription at any time. Cancellation revokes your license to use all AI-generated content created through the platform.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-2">4. Use of AI-Generated Content</h2>
                <p className="mb-4">
                    Adelo uses third-party APIs including OpenAI, Runway ML, and other AI engines to generate marketing content. <strong>Adelo retains all ownership and licensing rights</strong> to any content generated on the platform.
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>If your subscription lapses, you <strong>may not continue to publish, post, or commercially use</strong> AI-generated ads created using Adelo.</li>
                    <li>You are granted a limited, non-exclusive, non-transferable license to use generated content only while your account is active and in good standing.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-2">5. User Content & Uploads</h2>
                <p className="mb-4">
                    You may upload materials such as product photos, logos, or brand assets (“User Content”) to personalize your ads. You grant Adelo a worldwide, non-exclusive license to use, store, and internally process your User Content to provide and improve the Services.
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>You have all rights to upload and use such content.</li>
                    <li>Your content does not infringe on any third-party rights.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-2">6. Service Availability & Uptime</h2>
                <p className="mb-4">
                    We strive to provide reliable access but <strong>do not guarantee uninterrupted or error-free operation</strong>. Our Services may be subject to maintenance, updates, or downtime. Adelo shall not be liable for any delays or unavailability, whether caused by internal issues or third-party API failures.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">7. Third-Party Services & API Integration</h2>
                <p className="mb-4">
                    Adelo integrates with external platforms including:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>OpenAI, Runway ML</li>
                    <li>Meta (Facebook, Instagram)</li>
                    <li>Google Ads, TikTok Ads, LinkedIn Ads, YouTube</li>
                    <li>Twilio, MongoDB</li>
                </ul>
                <p className="mb-4">
                    While we facilitate these connections, we are <strong>not responsible</strong> for their data accuracy, performance, or downtime.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">8. Prohibited Use</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>Use the Services to create or promote content that is harmful, misleading, discriminatory, or unlawful.</li>
                    <li>Reverse-engineer, resell, or clone Adelo's systems.</li>
                    <li>Share your login or account access with unauthorized parties.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-2">9. Intellectual Property</h2>
                <p className="mb-4">
                    All trademarks, logos, content, features, and intellectual property of Adelo are owned by Adelo AI Inc. You may not copy, use, or reproduce any part of the platform without explicit written permission.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">10. Termination</h2>
                <p className="mb-4">
                    Adelo may suspend or terminate your account at any time for violations of these Terms or if continued access poses legal, operational, or reputational risk. You may terminate your account by canceling your subscription; cancellation results in immediate content access loss.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">11. Dispute Resolution & Arbitration</h2>
                <p className="mb-4">
                    You agree to resolve any disputes through <strong>binding arbitration</strong> under the rules of the American Arbitration Association. You waive your right to a jury trial and to participate in class actions. All claims must be brought individually. The laws of the <strong>State of Delaware</strong> shall govern these Terms and any disputes arising out of your use of the Services.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">12. Modifications to These Terms</h2>
                <p className="mb-4">
                    We may update these Terms at any time. If changes are material, we will notify you by email or within the platform. Continued use of Adelo constitutes your acceptance of the updated Terms.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">13. Contact Us</h2>
                <p className="mb-2">If you have any questions or concerns about these Terms, please contact us at:</p>
                <p>Email: <a href="mailto:team@adelo.ai" className="text-sky-400">team@adelo.ai</a></p>
                <p>Website: <a href="https://www.adelo.ai" target="_blank" className="text-sky-400">www.adelo.ai</a></p>
            </div>
        </div>
    );
};

export default TermsOfService;

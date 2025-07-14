

import serviceBack from "../../src/assets/serviceback.png";

const PrivacyPolicy = () => {
    const currentDate = new Date().toLocaleDateString("en-US");

    return (
        <div className=" text-white">
            {/* Banner */}
            <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center text-center overflow-hidden">
                <img
                    src={serviceBack}
                    alt="Privacy Background"
                    className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-1"
                />

                <div className="relative z-20 px-4 sm:px-6">
                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-center">
                        <span className="bg-gradient-to-b from-[#8E6EFF] to-[#000000] bg-clip-text text-transparent mb-4">
                            Privacy Policy
                        </span>
                        <span className="text-black block mt-2">Adelo AI Inc.</span>
                    </h1>

                    <p className="text-T-600 mt-4 sm:text-lg max-w-4xl mx-auto ">
                        Your privacy is important to us. This policy outlines how we collect,
                        use, and protect your data when using our services.
                    </p>
                </div>
            </div>

            {/* Privacy Content */}
            <div className="max-w-4xl mx-auto px-4 py-10 text-black">
                <p className="mb-2">Effective Date: {currentDate}</p>
                <p className="mb-6">Last Updated: 7/1/2025</p>

                <p className="mb-4">
                    Adelo AI Inc. respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our marketing platform, applications, and related services (collectively, the “Services”).
                </p>

                <p className="mb-4">
                    By accessing or using our Services, you agree to the collection and use of information in accordance with this policy.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>

                <h3 className="text-xl font-semibold mt-4">a. Information You Provide</h3>
                <ul className="list-disc ml-6 mb-4">
                    <li>Account Data: Name, email, phone number, password, billing address, payment details.</li>
                    <li>Business Information: Company name, social media handles, ad account credentials.</li>
                    <li>Support & Correspondence: When you contact support or communicate with us.</li>
                </ul>

                <h3 className="text-xl font-semibold">b. Information Collected Automatically</h3>
                <ul className="list-disc ml-6 mb-4">
                    <li>Device type, browser, IP address, time zone, language.</li>
                    <li>Usage data: pages visited, time spent, features used, and crash logs.</li>
                    <li>Cookies and similar technologies.</li>
                </ul>

                <h3 className="text-xl font-semibold">c. Information from Integrated Platforms</h3>
                <p className="mb-2">When you connect third-party platforms like:</p>
                <ul className="list-disc ml-6 mb-4">
                    <li>TikTok, Meta (Facebook/Instagram), Google, YouTube, LinkedIn, etc.</li>
                    <li>We collect access tokens and marketing data (e.g., campaign performance, targeting preferences) as permitted by those platforms.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>To provide, operate, and improve our Services.</li>
                    <li>To personalize ad generation and campaign recommendations.</li>
                    <li>To process transactions and manage subscriptions.</li>
                    <li>To communicate with you about updates, features, billing, and support.</li>
                    <li>To prevent fraud and ensure platform security.</li>
                    <li>To comply with legal obligations and platform API terms.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-2">3. How We Share Your Information</h2>
                <p className="mb-4">We do not sell your personal information. We may share it with:</p>
                <ul className="list-disc ml-6 mb-4">
                    <li>Service Providers: e.g., OpenAI, Runway ML, Twilio, Stripe, MongoDB.</li>
                    <li>Ad Platforms: e.g., TikTok, Meta, Google – only when authorized by you.</li>
                    <li>Business Transfers: In the event of a merger, sale, or acquisition.</li>
                    <li>Legal Compliance: When required by law, subpoena, or court order.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-2">4. Your Privacy Choices</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>Access & Correction: Update your info via your account dashboard.</li>
                    <li>Email Preferences: Opt out of promotional emails anytime.</li>
                    <li>Ad Account Disconnection: Disconnect platforms from your settings panel.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-2">5. Data Security</h2>
                <p className="mb-4">
                    We use industry-standard encryption, secure servers, and access control
                    to protect your data. While we strive to safeguard your information, no
                    system can be guaranteed 100% secure.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">6. International Data Transfers</h2>
                <p className="mb-4">
                    Your information may be stored or processed on servers in different countries.
                    By using our Services, you consent to the transfer of your data outside
                    your country of residence.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">7. Children’s Privacy</h2>
                <p className="mb-4">
                    Our Services are not intended for children under 13 (or 16 in some jurisdictions).
                    We do not knowingly collect data from children.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">8. Third-Party Links</h2>
                <p className="mb-4">
                    Our platform may contain links to third-party websites. We are not responsible
                    for their privacy practices or content.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">9. Changes to This Policy</h2>
                <p className="mb-4">
                    We may update this policy periodically. If significant changes occur, you’ll
                    be notified via email or platform updates. Continued use means you accept
                    the changes.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">10. Contact Us</h2>
                <p className="mb-2">If you have questions or concerns, contact us at:</p>
                <p>Email: <a href="mailto:Team@adelo.ai" className="text-sky-400">Team@adelo.ai</a></p>
                <p>Website: <a href="https://www.adelo.ai" target="_blank" className="text-sky-400">www.adelo.ai</a></p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

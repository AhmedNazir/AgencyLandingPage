import QuoteIcon from "../assets/icons/QuoteIcon.jsx";
import ProfileIcon from "../assets/avatar/michael-gouch.png";

export default function TestimonialSection() {
    const detailText =
        "Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.";
    const profileName = "Micheal Gough";
    const workplace = "CEO at Google";
    return (
        <>
            {/* Testimonial Section */}
            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                        <QuoteIcon />
                        <blockquote>
                            <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                                {detailText}
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img
                                className="w-6 h-6 rounded-full"
                                src={ProfileIcon}
                                alt="profile picture"
                            />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                                    {profileName}
                                </div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                                    {workplace}
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </>
    );
}

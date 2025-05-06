import AirbnbLogo from "../assets/icons/AirbnbLogo";
import GoogleLogo from "../assets/icons/GoogleLogo";
import MailchimpLogo from "../assets/icons/MailchimpLogo";
import MashableLogo from "../assets/icons/MashableLogo";
import MicrosoftLogo from "../assets/icons/MicrosoftLogo";
import SpotifyLogo from "../assets/icons/SpotifyLogo";

export default function CompaniesLogo() {
    return (
        <>
            {/* Companies Logo */}
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
                    <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                        <a
                            href="#"
                            className="flex items-center lg:justify-center"
                        >
                            <AirbnbLogo />
                        </a>
                        <a
                            href="#"
                            className="flex items-center lg:justify-center"
                        >
                            <GoogleLogo />
                        </a>
                        <a
                            href="#"
                            className="flex items-center lg:justify-center"
                        >
                            <MicrosoftLogo />
                        </a>
                        <a
                            href="#"
                            className="flex items-center lg:justify-center"
                        >
                            <SpotifyLogo />
                        </a>
                        <a
                            href="#"
                            className="flex items-center lg:justify-center"
                        >
                            <MailchimpLogo />
                        </a>
                        <a
                            href="#"
                            className="flex items-center lg:justify-center"
                        >
                            <MashableLogo />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

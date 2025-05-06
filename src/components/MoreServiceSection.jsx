import RightArrowIcon from "../assets/icons/RightArrowIcon";
import ServerIcon from "../assets/icons/ServerIcon";
import PeopleIcon from "../assets/icons/PeopleIcon";
import WorldIcon from "../assets/icons/WorldIcon";
import ShoppingCartIcon from "../assets/icons/ShoppingCartIcon";

function FeatureCard({ Icon, title, detail }) {
    return (
        <div>
            <Icon />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">{title}</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
                {detail}
            </p>
        </div>
    );
}

function FeatureSection({ features }) {
    const featureComponent = features.map((item) => {
        return (
            <FeatureCard
                key={item.title}
                Icon={item.icon}
                title={item.title}
                detail={item.detail}
            />
        );
    });

    return featureComponent;
}

function MoreLink({ title, href, Icon }) {
    return (
        <div>
            <a
                href={href}
                className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
            >
                {title}
                <Icon />
            </a>
        </div>
    );
}

export default function MoreServiceSection() {
    const featureList = [
        {
            icon: ServerIcon,
            title: "99.99% uptime",
            detail: "For Landwind, with zero maintenance downtime"
        },
        {
            icon: PeopleIcon,
            title: "600M+ Users",
            detail: "Trusted by over 600 milion users around the world"
        },
        {
            icon: WorldIcon,
            title: "100+ countries",
            detail: "Have used Landwind to create functional websites"
        },
        {
            icon: ShoppingCartIcon,
            title: "5+ Million",
            detail: "Transactions per day"
        }
    ];

    const sectionHighlightText = "Trusted Worldwide";
    const sectionTitle = "Trusted by over 600 million users and 10,000 teams";
    const sectionDetail =
        "Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly protect you and your customers.";

    const moreLink1 = {
        href: "#",
        title: "Explore Legality Guide",
        Icon: RightArrowIcon
    };

    const moreLink2 = {
        href: "#",
        title: "Visit the Trust Center",
        Icon: RightArrowIcon
    };

    return (
        <>
            {/* Service 2 */}
            <section className="bg-white dark:bg-gray-900">
                <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                    <div className="col-span-2 mb-8">
                        <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
                            {sectionHighlightText}
                        </p>
                        <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
                            {sectionTitle}
                        </h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            {sectionDetail}
                        </p>
                        <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                            <MoreLink
                                href={moreLink1.href}
                                title={moreLink1.title}
                                Icon={moreLink1.Icon}
                            />
                            <MoreLink
                                href={moreLink2.href}
                                title={moreLink2.title}
                                Icon={moreLink2.Icon}
                            />
                        </div>
                    </div>

                    <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                        <FeatureSection features={featureList} />
                    </div>
                </div>
            </section>
        </>
    );
}

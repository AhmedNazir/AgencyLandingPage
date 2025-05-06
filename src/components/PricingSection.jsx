import LightTickIcon from "../assets/icons/LightTickIcon";

function PricingButton({ title, link }) {
    return (
        <a
            href={link}
            className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
        >
            {title}
        </a>
    );
}

function PricingCard({ item }) {
    return (
        <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {item.detail}
            </p>
            <div className="flex items-baseline justify-center my-8">
                <span className="mr-2 text-5xl font-extrabold">
                    ${item.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                    /{item.recurrent}
                </span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                    <LightTickIcon />
                    <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                    <LightTickIcon />

                    <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                    <LightTickIcon />

                    <span>
                        Team size:{" "}
                        <span className="font-semibold">
                            {item.developer <= 100 ? item.developer : "100+"}{" "}
                            developer
                        </span>
                    </span>
                </li>
                <li className="flex items-center space-x-3">
                    <LightTickIcon />

                    <span>
                        Premium support:{" "}
                        <span className="font-semibold">
                            {item.month} months
                        </span>
                    </span>
                </li>
                <li className="flex items-center space-x-3">
                    <LightTickIcon />

                    <span>
                        Free updates:{" "}
                        <span className="font-semibold">
                            {item.update} months
                        </span>
                    </span>
                </li>
            </ul>
            <PricingButton title={item.buttonTitle} link={item.buttonLink} />
        </div>
    );
}

export default function PricingSection() {
    const headingText = "Designed for business teams like yours";
    const headingDetail =
        "Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.";

    const pricingItem1 = {
        title: "Starter",
        detail: "Best option for personal use & for your next project.",
        price: 29,
        recurrent: "month",
        feature: [
            "Individual configuration",
            "No setup, or hidden fees",
            "Team size",
            "Premium support",
            "Free updates"
        ],
        developer: 1,
        month: 6,
        update: 6,
        buttonTitle: "Getting Started",
        buttonLink: "#"
    };

    const pricingItem2 = {
        title: "Company",
        detail: "Relevant for multiple users, extended & premium support.",
        price: 99,
        recurrent: "month",
        developer: 10,
        month: 24,
        update: 24,
        buttonTitle: "Getting Started",
        buttonLink: "#"
    };

    const pricingItem3 = {
        title: "Enterprise",
        detail: "Best for large scale uses and extended redistribution rights.",
        price: 499,
        recurrent: "month",
        developer: 101,
        month: 36,
        update: 36,
        buttonTitle: "Getting Started",
        buttonLink: "#"
    };

    return (
        <>
            {/* Pricing */}
            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                    <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            {headingText}
                        </h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            {headingDetail}
                        </p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <PricingCard item={pricingItem1} />
                        <PricingCard item={pricingItem2} />
                        <PricingCard item={pricingItem3} />
                    </div>
                </div>
            </section>
        </>
    );
}

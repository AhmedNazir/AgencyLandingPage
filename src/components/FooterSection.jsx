import logo from "../assets/logo.svg";
import FacebookIcon from "../assets/icons/FacebookIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";
import XIcon from "../assets/icons/XIcon";
import GithubIcon from "../assets/icons/GithubIcon";
import WebsiteIcon from "../assets/icons/WebsiteIcon";

function ListCard({ data }) {
    const { title, items } = data;
    const listItem = items.map((item) => {
        return (
            <li className="mb-4" key={item.text}>
                <a href={item.link} className=" hover:underline">
                    {item.text}
                </a>
            </li>
        );
    });

    return (
        <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {title}
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">{listItem}</ul>
        </div>
    );
}

function IconCard({ icons }) {
    const iconsElement = icons.map((item) => {
        return (
            <li key={item.icon}>
                <a
                    href={item.link}
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                    <item.icon />
                </a>
            </li>
        );
    });

    return (
        <ul className="flex justify-center mt-5 space-x-5">{iconsElement}</ul>
    );
}

export default function FooterSection() {
    const companyList = {
        title: "Company",
        items: [
            {
                text: "About",
                link: "#"
            },
            {
                text: "Careers",
                link: "#"
            },
            {
                text: "Brand Center",
                link: "#"
            },
            {
                text: "Blog",
                link: "#"
            }
        ]
    };

    const helpCenterList = {
        title: "Help center",
        items: [
            {
                text: "Discord Server",
                link: "#"
            },
            {
                text: "Twitter",
                link: "#"
            },
            {
                text: "Facebook",
                link: "#"
            },
            {
                text: "Contact Us",
                link: "#"
            }
        ]
    };

    const legalList = {
        title: "Legal",
        items: [
            {
                text: "Privacy Policy",
                link: "#"
            },
            {
                text: "Licensing",
                link: "#"
            },
            {
                text: "Terms",
                link: "#"
            }
        ]
    };

    const againCompanyList = {
        title: "Company",
        items: [
            {
                text: "About",
                link: "#"
            },
            {
                text: "Careers",
                link: "#"
            },
            {
                text: "Brand Center",
                link: "#"
            },
            {
                text: "Blog",
                link: "#"
            }
        ]
    };

    const downloadList = {
        title: "Download",
        items: [
            {
                text: "iOS",
                link: "#"
            },
            {
                text: "Android",
                link: "#"
            },
            {
                text: "Windows",
                link: "#"
            },
            {
                text: "MacOS",
                link: "#"
            }
        ]
    };

    const iconList = [
        {
            icon: FacebookIcon,
            link: "#"
        },
        {
            icon: InstagramIcon,
            link: "#"
        },
        {
            icon: XIcon,
            link: "#"
        },
        {
            icon: GithubIcon,
            link: "#"
        },
        {
            icon: WebsiteIcon,
            link: "#"
        }
    ];

    const copyRightStart = 2024;
    const copyRightEnd = 2025;
    const websiteTitle = "Learn with Sumit";

    return (
        <footer className="bg-white dark:bg-gray-800">
            <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                {/* Sub Footer 1 */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                    <ListCard data={companyList} />

                    <ListCard data={helpCenterList} />

                    <ListCard data={legalList} />
                    <ListCard data={againCompanyList} />
                    <ListCard data={downloadList} />
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                {/* Sub Footer 2 */}
                <div className="text-center">
                    <a
                        href="#"
                        className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
                    >
                        <img
                            src={logo}
                            className="h-6 mr-3 sm:h-9"
                            alt="Learn with Sumit Logo"
                        />
                        Learn with Sumit{" "}
                    </a>
                    <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
                        © {copyRightStart}-{copyRightEnd} {websiteTitle}. All
                        Rights Reserved. Built with{" "}
                        <a
                            href="#"
                            target="_blank"
                            className="text-purple-600 hover:underline dark:text-purple-500"
                        >
                            Flowbite
                        </a>{" "}
                        and{" "}
                        <a
                            href="#"
                            className="text-purple-600 hover:underline dark:text-purple-500"
                        >
                            Tailwind CSS
                        </a>
                        .
                    </span>

                    <IconCard icons={iconList} />
                </div>
            </div>
        </footer>
    );
}

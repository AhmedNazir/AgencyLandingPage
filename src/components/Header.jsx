import logo from "../assets/logo.svg";
import Button from "./Button";
import NavbarList from "./NavbarList";

export default function HeaderSection() {
    // Logo
    const headerText = "Learn with Sumit";
    const logoAltText = "Landwind Logo";

    //NavbarList
    const listArray = [
        {
            key: 0,
            text: "Home",
            link: "#",
            isActive: true
        },
        {
            key: 1,
            text: "Company",
            link: "#"
        },
        {
            key: 2,
            text: "Marketplace",
            link: "#"
        },
        {
            key: 3,
            text: "Features",
            link: "#"
        },
        {
            key: 4,
            text: "Team",
            link: "#"
        },
        {
            key: 5,
            text: "Contact",
            link: "#"
        }
    ];

    //Button
    const button = {
        text: "Download",
        link: "#"
    };

    return (
        <>
            <header className="fixed w-full">
                <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                        <a href="#" className="flex items-center">
                            <img
                                src={logo}
                                className="h-6 mr-3 sm:h-9"
                                alt={logoAltText}
                            />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                {headerText}
                            </span>
                        </a>

                        <div className="flex items-center lg:order-2">
                            <Button buttonInfo={button} />
                        </div>

                        <div
                            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <NavbarList listItems={listArray} />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

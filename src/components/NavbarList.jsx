function NavbarListItem({ item }) {
    const styleClass = {
        active: "block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white",
        other: "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
    };

    return (
        <>
            <li>
                <a
                    href={item.link}
                    className={
                        item.isActive ? styleClass.active : styleClass.other
                    }
                    aria-current="page"
                >
                    {item.text}
                </a>
            </li>
        </>
    );
}

export default function NavbarList({ listItems }) {
    const elements = listItems.map((item) => {
        return <NavbarListItem item={item} key={item.text} />;
    });

    return (
        <>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {elements}
            </ul>
        </>
    );
}

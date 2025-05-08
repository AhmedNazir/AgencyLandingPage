import UpArrowScale from "../assets/icons/UpArrowIcon";

function QuestionTitle({ question, isActive = false }) {
    const buttonCss = {
        expand: "flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white",
        shrink: "flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
    };

    return (
        <>
            <button
                type="button"
                className={isActive ? buttonCss.expand : buttonCss.shrink}
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
            >
                <span>{question.questionTitle}</span>
                <UpArrowScale isRotate={isActive} />
            </button>
        </>
    );
}

function CardWithLink({ data }) {
    const { explain1, explain2, explain3, link } = data;
    return (
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">{explain1}</p>
            <p className="text-gray-500 dark:text-gray-400">
                {explain2}{" "}
                <a
                    href={link.href}
                    className="text-purple-600 dark:text-purple-500 hover:underline"
                >
                    {link.text}
                </a>{" "}
                {explain3}
            </p>
        </div>
    );
}

function ListComponent({ list }) {
    const listItem = list;
    const liElement = listItem.map((item) => {
        return (
            <li key={item.text}>
                <a
                    href={item.link}
                    className="text-purple-600 dark:text-purple-500 hover:underline"
                >
                    {item.text}
                </a>
            </li>
        );
    });
    return (
        <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
            {liElement}
        </ul>
    );
}

function CardWithList({ question }) {
    const { text1, text2, listTitle, listItem } = question;
    return (
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">{text1}</p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">{text2}</p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">{listTitle}</p>
            <ListComponent list={listItem} />
        </div>
    );
}

export default function FaqSection() {
    const sectionTitle = "Frequently asked questions";
    const question1 = {
        questionTitle: "Can I use Landwind in open-source projects?",
        explain1:
            "Landwind is an open-source library of interactive components modals, navbars, and more.",
        explain2: "Check out this guide to learn how to",
        link: {
            text: "get started",
            href: "#"
        },
        explain3:
            "and start developing websites even faster with components on top of Tailwind CSS."
    };

    const question2 = {
        questionTitle: "Is there a Figma file available?",
        explain1:
            "Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
        explain2: "Check out the",
        link: {
            text: "get started",
            href: "#"
        },
        explain3:
            "based on the utility classes from Tailwind CSS and components from Landwind."
    };

    const question3 = {
        questionTitle:
            "What are the differences between Landwind and Tailwind UI?",
        text1: "The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
        text2: "However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.",
        listTitle: "Learn more about these technologies:",
        listItem: [
            {
                text: "Landwind Pro",
                link: "#"
            },
            {
                text: "Tailwind UI",
                link: "#"
            }
        ]
    };
    const question4 = {
        questionTitle: "What about browser support?",
        text1: "  The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference  is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
        text2: "However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.",
        listTitle: "Learn more about these technologies:",
        listItem: [
            {
                text: "Landwind Pro",
                link: "#"
            },
            {
                text: "Tailwind UI",
                link: "#"
            }
        ]
    };
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
                    {sectionTitle}
                </h2>
                <div className="max-w-screen-md mx-auto">
                    <div
                        id="accordion-flush"
                        data-accordion="collapse"
                        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        data-inactive-classes="text-gray-500 dark:text-gray-400"
                    >
                        <h3 id="accordion-flush-heading-1">
                            <QuestionTitle
                                question={question1}
                                isActive={true}
                            />
                        </h3>
                        <div
                            id="accordion-flush-body-1"
                            className=""
                            aria-labelledby="accordion-flush-heading-1"
                        >
                            <CardWithLink data={question1} />
                        </div>

                        <h3 id="accordion-flush-heading-2">
                            <QuestionTitle question={question2} />
                        </h3>
                        <div
                            id="accordion-flush-body-2"
                            className="hidden"
                            aria-labelledby="accordion-flush-heading-2"
                        >
                            <CardWithLink data={question2} />
                        </div>

                        <h3 id="accordion-flush-heading-3">
                            <QuestionTitle question={question3} />
                        </h3>
                        <div
                            id="accordion-flush-body-3"
                            className="hidden"
                            aria-labelledby="accordion-flush-heading-3"
                        >
                            <CardWithList question={question3} />
                        </div>

                        <h3 id="accordion-flush-heading-4">
                            <QuestionTitle question={question4} />
                        </h3>

                        <div
                            id="accordion-flush-body-4"
                            className="hidden"
                            aria-labelledby="accordion-flush-heading-4"
                        >
                            <CardWithList question={question4} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

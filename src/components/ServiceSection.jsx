import subService1Image from "../assets/features/feature-1.png";
import subService2Image from "../assets/features/feature-2.png";
import FeatureList from "./FeatureList";

function ServiceComponent({
    serviceHeadText,
    serviceText1,
    serviceText2,
    featureArray
}) {
    return (
        <>
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    {serviceHeadText}{" "}
                </h2>
                <p className="mb-8 font-light lg:text-xl">{serviceText1}</p>
                <ul
                    role="list"
                    className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
                >
                    <FeatureList items={featureArray} />
                </ul>

                <p className="mb-8 font-light lg:text-xl">{serviceText2}</p>
            </div>
        </>
    );
}

export default function ServiceSection() {
    // Sub Service 1
    const subService1ImageAlt = "dashboard feature image";
    const feature1Array = [
        "Continuous integration and deployment",
        "Development workflow",
        "Knowledge management"
    ];

    const subService1HeadText = "Work with tools you already use";
    const subService1Text1 =
        "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.";

    const subService1Text2 =
        "Deliver great service experiences fast - without  the complexity of traditional ITSM solutions.";

    //Sub Service 2
    const subService2ImageAlt = "dashboard feature image";
    const feature2Array = [
        "Dynamic reports and dashboards",
        "Templates for everyone",
        "Development workflow",
        "Limitless business automation",
        "Knowledge management"
    ];

    const subService2HeadText = "Work with tools you already use";
    const subService2Text1 =
        "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.";

    const subService2Text2 =
        "Deliver great service experiences fast - without  the complexity of traditional ITSM solutions.";

    return (
        <>
            {/* Service 1 */}
            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    {/* Sub Service 1 */}

                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <ServiceComponent
                            serviceHeadText={subService1HeadText}
                            serviceText1={subService1Text1}
                            serviceText2={subService1Text2}
                            featureArray={feature1Array}
                        />
                        <img
                            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                            src={subService1Image}
                            alt={subService1ImageAlt}
                        />
                    </div>

                    {/* Sub Service 2 */}
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <img
                            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
                            src={subService2Image}
                            alt={subService2ImageAlt}
                        />

                        <ServiceComponent
                            serviceHeadText={subService2HeadText}
                            serviceText1={subService2Text1}
                            serviceText2={subService2Text2}
                            featureArray={feature2Array}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

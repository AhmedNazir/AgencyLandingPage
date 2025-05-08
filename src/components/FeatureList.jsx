import TickIcon from "../assets/icons/TickIcon";

export default function FeatureList({ items }) {
    const listComponent = items.map((item) => {
        return (
            <li className="flex space-x-3" key={item}>
                <TickIcon />
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    {item}
                </span>
            </li>
        );
    });

    return listComponent;
}

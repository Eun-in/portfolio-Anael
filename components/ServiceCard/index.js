import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, percentage }) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div
            className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
                mounted && theme === "dark"
                    ? "hover:bg-slate-800"
                    : "hover:bg-slate-50"
            } hover:scale-105 link`}
        >
            <h3 className="text-3xl">{name ? name : "Heading"}</h3>
            <div className="mt-5">
                <div className="bg-gray-200 h-4 rounded-lg overflow-hidden">
                    <div
                        className="bg-purple-500 h-full"
                        style={{ width: percentage }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

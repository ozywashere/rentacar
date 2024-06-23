import {useState} from "react";
import {Menu} from "@headlessui/react";
import {FaClock} from "react-icons/fa";
import {FaArrowRightLong} from "react-icons/fa6";

const hours = [
    "10:00 AM", "12:00 AM", "14:00 AM", "16:00 AM"
]
const HoursSelection = () => {
    const [hour, setHour] = useState("10:00 AM");
    return <Menu as="div" className="w-full h-full flex xl:flex-row">
        <div className="flex-1 relative">
            {/*btn*/}
            <Menu.Button
                className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
                <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                    <FaClock className="text-accent"/>
                    <div className="text-[15px] uppercase font-bold">Select Hours</div>
                </div>
                <div className="flex items-center justify-center gap-x-3">
                    <div className="font-medium text-[13px] text-secondary text-center xl:ml-6">
                        {hour}
                    </div>
                    <FaArrowRightLong className="text-accent text-[12px]"/>
                    <div className="font-medium text-[13px] text-secondary text-center">
                        {hour}
                    </div>
                </div>
            </Menu.Button>
            {/*items*/}
            <Menu.Items
                className="dropdown-menu shadow-lg absolute -top-72 xl:top-[90px] left-1/2 xl:left-0 z-10  -translate-x-1/2 xl:-translate-x-0 transform text-sm w-full bg-white max-w-[332px] py-6 rounded-[10px]">
                {hours.map((hour, index) => {
                    return (
                        <div
                            key={index}
                            className="cursor-pointer text-center py-4 hover:bg-gray-50 text-[13px] uppercase"
                            onClick={() => setHour(hour)}
                        >
                            {hour}
                        </div>
                    )
                }
                )}
            </Menu.Items>
        </div>
    </Menu>
};

export default HoursSelection;

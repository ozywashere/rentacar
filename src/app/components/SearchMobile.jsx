import React from 'react';
import DateSelection from "@/app/components/DateSelection";
import HoursSelection from "@/app/components/HoursSelection";
import LocationSelection from "@/app/components/LocationSelection";

const SearchMobile = () => {
    return <div className="xl:hidden font-medium">
        {/*  container*/}
        <div className="container mx-auto">
            <div className="flex flex-col gap-y-4">
                {/*  location selection*/}
                <LocationSelection/>
                {/*  Date Selection*/}
                <DateSelection/>
                {/*  Hours Selection*/}
                <HoursSelection/>
                {/*btn*/}
                <div className="flex items-center px-6">
                    <button className="btn btn-sm btn-accent w-[164px] mx-auto">
                        Search
                    </button>
                </div>
            </div>

        </div>
    </div>;
};

export default SearchMobile;

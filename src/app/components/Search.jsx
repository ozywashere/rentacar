'use client';
import {useContext} from 'react';
import {useSearchContext} from '../context/search';
import SearchMobile from "@/app/components/SearchMobile";
import LocationSelection from "@/app/components/LocationSelection";
import HoursSelection from "@/app/components/HoursSelection";
import DateSelection from "@/app/components/DateSelection";

const Search = () => {
    const {searchActive} = useSearchContext();

    return (
        <div
            className={`${
                searchActive ?
                    'bg-white rounded-none xl:h-[80px]' :
                    'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'
            } hidden xl:block w-full relative transition-all duration-300`}
        >
            <div className={`flex h-full ${searchActive&&"container mx-auto"}`}>
                <LocationSelection/>
                <DateSelection/>
                <HoursSelection/>
                {/*    btn*/}
                <div className=" xl:h-full flex items-center px-6 xl:px-0">
                    <button className={
                        `${searchActive?
                            "btn btn-sm btn-accent w-[164px] mx-auto":
                            "btn btn-sm btn-accent w-[184px] mx-auto"}`
                    }>
                        Search
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Search;

import { SearchIcon, MenuIcon, GlobeAltIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router"

function Header({ placeholder }) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };
    const resetInput = () => {
        setSearchInput('');
    };
    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        });
    };

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
            
            <div onClick={() => router.push("/")} className="relative flex items-center h-8 cursor-pointer my-auto text-primary space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
</svg>
                <h1 className="text-primary text-md sm:text-2xl font-semibold">Paradise</h1>
                
            </div>
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="flex-grow pl-5 bg-transparent text-sm text-gray-600 outline-none" type="text" placeholder= {placeholder || "Start your search"} />
                <SearchIcon className="hidden md:inline-flex h-8 bg-primary text-white rounded-full p-2 cursor-pointer md:mx-2"/>
            </div>
            <div className="flex items-center justify-end space-x-4 text-blue-400">
            <p className="text-primary cursor-pointer hidden md:inline font-medium">Become a host</p>
            <GlobeAltIcon className="hidden h-6 cursor-pointer text-primary"/>
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full text-primary border-primary">
                <MenuIcon className="h-5 cursor-pointer" />
                <UserCircleIcon className="h-5 cursor-pointer"/>
            </div>
            </div>
            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto mt-3 py-7">
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#152D35"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold text-primary">Number of Guests</h2>
                        <UsersIcon className="h-5 text-primary" />
                        <input value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} 
                        className="w-12 pl-2 text-lg outline-node text-primary" 
                        type="number"
                        min={1}
                        />
                    </div>
                    <div className="flex">
                        <button onClick={resetInput} className="flex-grow text-primary">Cancel
                            </button>
                            <button onClick={search} className="flex-grow text-primary">Search

                            </button>
                    </div>

                </div>

            )}
        </header>
    )
}

export default Header

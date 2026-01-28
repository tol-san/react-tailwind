import React, { useRef } from 'react';
import { Box } from 'smooth-ui';
import useTourQueryStore from '../../store/useTourQueryStore';

function SearchInput() {
  const ref = useRef(null);
  const setSearchText = useTourQueryStore(s => s.setSearchText);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) setSearchText(ref.current.value);
    }} className="w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input 
          ref={ref}
          type="search" 
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
          placeholder="Search tours..." 
        />
      </div>
    </form>
  );
}

export default SearchInput;

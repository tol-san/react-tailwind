import React from 'react';
import { Box, Typography } from 'smooth-ui';
import SearchInput from '../common/SearchInput';

function Navbar() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={3}>
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse no-underline">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
            Travel<span className="text-blue-600">Hub</span>
          </span>
      </a>
      
      <Box width={0.5} mx={4}>
        <SearchInput />
      </Box>

      <Box>
         {/* Placeholder for ColorModeSwitch or User UserMenu */}
         <div className="w-10 h-10 rounded-full bg-gray-200" />
      </Box>
    </Box>
  );
}

export default Navbar;

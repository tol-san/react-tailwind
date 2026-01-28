import React from 'react';
import { Box } from 'smooth-ui';
import Navbar from '../components/layout/Navbar';
import TourGrid from '../components/tours/TourGrid';
import useTourQueryStore from '../store/useTourQueryStore';

function Home() {
  const tourQuery = useTourQueryStore(s => s.tourQuery);

  return (
    <Box>
      <Navbar />
      
      <Box display="flex" p={3}>
        {/* Sidebar Area (Future Implementation) */}
        <Box display={{ xs: 'none', lg: 'block' }} width="250px" mr={4}>
            {/* <GenreList /> */}
            <div className="text-gray-500">Filters (Coming Soon)</div>
        </Box>

        {/* Main Content */}
        <Box flex="1">
          <Box mb={4}>
             <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {tourQuery.searchText ? `Search: ${tourQuery.searchText}` : 'All Tours'}
             </h1>
          </Box>
          
          <TourGrid />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;

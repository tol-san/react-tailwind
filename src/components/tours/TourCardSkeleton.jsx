import React from 'react';
import { Box, Skeleton } from 'smooth-ui';
// Note: If SmoothUI doesn't have a Skeleton, we'll make a custom one using Tailwind

function TourCardSkeleton() {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      borderRadius="1rem" 
      overflow="hidden" 
      boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      className="animate-pulse bg-white"
    >
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-300" />
      
      <Box p={3} flex="1" display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-between" alignItems="baseline" mb={2}>
          <div className="h-6 bg-gray-300 rounded w-3/4" />
          <div className="h-5 bg-gray-200 rounded w-8" />
        </Box>

        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />

        <Box mt="auto" display="flex" justifyContent="space-between" alignItems="center">
           <div className="h-6 bg-gray-300 rounded w-1/4" />
           <div className="h-8 bg-blue-200 rounded w-24" />
        </Box>
      </Box>
    </Box>
  );
}

export default TourCardSkeleton;

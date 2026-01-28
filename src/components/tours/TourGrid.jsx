import React from 'react';
import { Box, Typography } from 'smooth-ui';
import useTours from '../../hooks/useTours';
import TourCard from './TourCard';
import TourCardSkeleton from './TourCardSkeleton';

function TourGrid() {
  const { data, error, isLoading } = useTours();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Typography color="red.500">{error.message}</Typography>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {isLoading && skeletons.map(skeleton => (
        <TourCardSkeleton key={skeleton} />
      ))}
      
      {!isLoading && data?.map(tour => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}

export default TourGrid;

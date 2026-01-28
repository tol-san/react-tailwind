import React from 'react';
import { Box, Typography, Button } from 'smooth-ui';

function TourCard({ tour }) {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      borderRadius="1rem" 
      overflow="hidden" 
      boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      transition="transform 0.15s ease-in-out"
      style={{
        ':hover': { transform: 'scale(1.03)' }
      }}
    >
      <img 
        src={tour.image} 
        alt={tour.title} 
        className="w-full h-48 object-cover" 
      />
      
      <Box p={3} flex="1" display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-between" alignItems="baseline" mb={2}>
          <Typography variant="h5" fontWeight="bold" color="gray.800" m={0}>
            {tour.title}
          </Typography>
          <Box 
            bg="green.100" 
            color="green.800" 
            px={2} 
            py={0.5} 
            borderRadius="full" 
            fontSize="0.75rem" 
            fontWeight="bold"
          >
            {tour.rating}
          </Box>
        </Box>

        <Typography variant="body1" color="gray.600" mb={4}>
          {tour.destinationName} • {tour.duration}
        </Typography>

        <Box mt="auto" display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold" color="blue.600">
            ${tour.price}
          </Typography>
          <Button variant="primary" size="sm">
            View Details
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default TourCard;

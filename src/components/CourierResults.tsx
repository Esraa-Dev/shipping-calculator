import { Box, Typography, Skeleton, Grid } from '@mui/material';
import type { Courier } from '../types/types';
import { useQuote } from '../hooks/useQuote';
import { CourierCard } from './CourierCard';

const CourierResults = () => {
  const { results, isLoading } = useQuote();

  if (isLoading) {
    return (
      <Box sx={{ width: '100%' }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Finding couriers...
        </Typography>
        <Grid container spacing={2}>
          {[1, 2, 3].map((i) => (
            <Grid size={12} key={i}>
              <Skeleton 
                variant="rectangular" 
                height={120} 
                sx={{ borderRadius: 2 }} 
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  if (!results || results.length === 0) {
    return (
      <Box sx={{ 
        width: '100%', 
        py: 8, 
        textAlign: 'center',
        bgcolor: 'background.paper',
        borderRadius: 2,
        border: '1px dashed',
        borderColor: 'divider'
      }}>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          No couriers available
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Please fill in the shipping details above to see available options
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mb: 2 }}>
        Available Couriers ({results.length})
      </Typography>
      <Grid container spacing={2}>
        {results.map((courier: Courier) => (
          <Grid size={{ xs: 12, md: 6 }} key={courier.id}>
            <CourierCard {...courier} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CourierResults;
import { Paper, Typography, Divider, Box, Stack } from '@mui/material';
import { useQuote } from '../hooks/useQuote';

const SidebarSummary = () => {
  const { formData } = useQuote();

  return (
    <Paper sx={{ p: 3, bgcolor: 'white', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom fontWeight="600">Shipment Summary</Typography>
      <Divider sx={{ my: 2 }} />
      <Stack spacing={2}>
        <Box>
          <Typography variant="caption" color="text.secondary">ORIGIN</Typography>
          <Typography variant="body2" fontWeight="500">{formData.origin?.city || '---'}, {formData.origin?.country || '---'}</Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary">DESTINATION</Typography>
          <Typography variant="body2" fontWeight="500">{formData.destination?.city || '---'}, {formData.destination?.country || '---'}</Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary">WEIGHT</Typography>
          <Typography variant="body2" fontWeight="500">{formData.package?.weight ? `${formData.package.weight} kg` : '---'}</Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default SidebarSummary;
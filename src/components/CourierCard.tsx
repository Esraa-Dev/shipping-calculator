import { Card, CardContent, Typography, Box, Chip, Stack, Avatar } from '@mui/material';
import type { Courier } from '../types/types';

export const CourierCard = ({ name, basePrice, tax, estimatedDays, isCheapest, isFastest, logo }: Courier) => {
  return (
    <Card sx={{ mb: 2, borderRadius: 2, border: isCheapest ? '1px solid #10b981' : '1px solid #e5e7eb' }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src={logo} alt={name} variant="rounded" sx={{ width: 48, height: 48, bgcolor: '#2563eb' }} />
            <Box>
              <Typography variant="h6" fontWeight="600">{name}</Typography>
              <Typography variant="body2" color="text.secondary">Delivery: {estimatedDays} business days</Typography>
            </Box>
          </Stack>
          <Box textAlign="right">
            <Typography variant="h5" fontWeight="bold" color="primary.main">${basePrice + tax}</Typography>
            <Typography variant="caption" color="text.secondary">Base: ${basePrice} + Tax: ${tax}</Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={1} mt={2}>
          {isCheapest && <Chip label="Cheapest" color="success" size="small" />}
          {isFastest && <Chip label="Fastest" color="primary" size="small" />}
        </Stack>
      </CardContent>
    </Card>
  );
};
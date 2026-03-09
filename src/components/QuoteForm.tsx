import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Box, Button, Stepper, Step, StepLabel, 
  TextField, Stack, Typography, Paper 
} from '@mui/material';
import { quoteSchema, type QuoteFormData } from '../schemas/quoteSchema';
import { useQuote } from '../hooks/useQuote';
import { courierData } from '../data/couriers';

const steps = ['Origin', 'Destination', 'Dimensions'];

const QuoteForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { updateFormData, setIsLoading, setResults } = useQuote();

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isValid },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    mode: 'onChange',
  });

  const watchedValues = watch();

  useEffect(() => {
    updateFormData(watchedValues);
  }, [watchedValues, updateFormData]);

  const handleNext = async () => {
    let fields: any[] = [];
    if (activeStep === 0) fields = ['origin.country', 'origin.city', 'origin.zipCode'];
    if (activeStep === 1) fields = ['destination.country', 'destination.city', 'destination.zipCode'];
    
    const isStepValid = await trigger(fields);
    if (isStepValid) setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const onSubmit = async (data: QuoteFormData) => {
    setIsLoading(true);
    
    setTimeout(() => {
      const calculatedResults = courierData.map(courier => ({
        ...courier,
        basePrice: courier.basePrice + (data.package.weight * 5)
      }));
      
      setResults(calculatedResults);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Paper variant="outlined" sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}><StepLabel>{label}</StepLabel></Step>
        ))}
      </Stepper>

      <form onSubmit={handleSubmit(onSubmit)}>
        {activeStep === 0 && (
          <Stack spacing={3}>
            <Typography variant="h6" fontWeight={600}>Shipping Origin</Typography>
            <TextField label="Country" fullWidth {...register('origin.country')} error={!!errors.origin?.country} helperText={errors.origin?.country?.message} size="small" />
            <TextField label="City" fullWidth {...register('origin.city')} error={!!errors.origin?.city} helperText={errors.origin?.city?.message} size="small" />
            <TextField label="Zip Code" fullWidth {...register('origin.zipCode')} error={!!errors.origin?.zipCode} helperText={errors.origin?.zipCode?.message} size="small" />
          </Stack>
        )}

        {activeStep === 1 && (
          <Stack spacing={3}>
            <Typography variant="h6" fontWeight={600}>Shipping Destination</Typography>
            <TextField label="Country" fullWidth {...register('destination.country')} error={!!errors.destination?.country} helperText={errors.destination?.country?.message} size="small" />
            <TextField label="City" fullWidth {...register('destination.city')} error={!!errors.destination?.city} helperText={errors.destination?.city?.message} size="small" />
            <TextField label="Zip Code" fullWidth {...register('destination.zipCode')} error={!!errors.destination?.zipCode} helperText={errors.destination?.zipCode?.message} size="small" />
          </Stack>
        )}

        {activeStep === 2 && (
          <Stack spacing={3}>
            <Typography variant="h6" fontWeight={600}>Package Details</Typography>
            <TextField label="Weight (kg)" type="number" fullWidth {...register('package.weight', { valueAsNumber: true })} error={!!errors.package?.weight} helperText={errors.package?.weight?.message} size="small" />
          </Stack>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button onClick={handleBack} disabled={activeStep === 0} variant="outlined" size="small">Back</Button>
          {activeStep < steps.length - 1 ? (
            <Button variant="contained" onClick={handleNext} size="small">Next</Button>
          ) : (
            <Button variant="contained" type="submit" disabled={!isValid} size="small">Get Quote</Button>
          )}
        </Box>
      </form>
    </Paper>
  );
};

export default QuoteForm;
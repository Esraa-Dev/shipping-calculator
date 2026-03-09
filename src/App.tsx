import { Container, Grid, Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import QuoteForm from './components/QuoteForm';
import CourierResults from './components/CourierResults';
import SidebarSummary from './components/SidebarSummary';
import { QuoteProvider } from './context/QuoteContext';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QuoteProvider>
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 4 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h1"
              align="center"
              sx={{ fontWeight: 700, mb: 5, color: '#1e293b' }}
            >
              Shipping Calculator  
                        </Typography>

            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 8 }}>
                <QuoteForm />
                <Box sx={{ mt: 4 }}>
                  <CourierResults />
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <SidebarSummary />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </QuoteProvider>
    </ThemeProvider>
  );
}

export default App;
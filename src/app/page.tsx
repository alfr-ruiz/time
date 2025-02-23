'use client';

import React from 'react';
import { supabase } from '../lib/supabaseClient';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
  useTheme,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Sans, sans-serif',
  },
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#c5a47e',
    },
  },
});

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(20px)' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 500 }}>
              Alfredo's Timepieces
            </Typography>
            <Button color="inherit">Collection</Button>
            <Button color="inherit">About</Button>
            <Button color="primary" variant="contained" sx={{ ml: 2 }}>
              Contact
            </Button>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            pt: 8,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                  Discover Timeless Elegance
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 4 }}>
                  Explore our curated collection of exceptional timepieces, where craftsmanship meets sophistication.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mr: 2,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                  }}
                >
                  View Collection
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                  }}
                >
                  Learn More
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    height: 500,
                    backgroundColor: 'secondary.main',
                    borderRadius: 4,
                    opacity: 0.9,
                  }}
                >
                  {/* Add hero image here */}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
import React from 'react';
import './Maincard.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BasicCard from './BasicCard.js';
import Grid from '@mui/material/Unstable_Grid2';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <BasicCard />
            </Grid>
            <Grid item xs={6}>
              <BasicCard />
            </Grid>
            <Grid item xs={6}>
              <BasicCard />
            </Grid>
            <Grid item xs={6}>
              <BasicCard />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
import React from 'react';
import './Maincard.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ClassCard from './Classcard.js';
import Grid from '@mui/material/Unstable_Grid2';
import { classes } from './Classcard.js';

export default function SimpleContainer() {
  const handleCardClick = (redirectUrl) => {
    // Redirect logic here
    window.location.href = redirectUrl;
  };

  const cardSize = '200px'; // change this to the size for the card
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <Box sx={{
          bgcolor: '#black',   //removes container background
          height: '100vh',
          display: 'flex',         // setting centering
          flexDirection: 'column', 
          alignItems: 'center',    
          justifyContent: 'center', 
        }}>
          <Grid container spacing={2}>
            {classes.map((cls, index) => (
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4} key={index}> {/* Ensure 3 items per row for all sizes */}
                <ClassCard
                  className={cls.name}
                  imageUrl={cls.imageUrl}
                  onCardClick={() => handleCardClick(cls.redirectUrl)}
                  size={cardSize} // Pass the size down to the ClassCard
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
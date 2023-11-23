import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';


 export const classes = [
  { name: 'Warrior', imageUrl: '/assets/Pictures/warrior_warcraftflat.png', redirectUrl: '/warrior' },
  { name: 'Paladin', imageUrl: '/assets/Pictures/paladin_warcraftflat.png', redirectUrl: '/paladin' },
  { name: 'Hunter', imageUrl: '/assets/Pictures/hunter_warcraftflat.png', redirectUrl: '/hunter' },
  { name: 'Rogue', imageUrl: '/assets/Pictures/rogue_warcraftflat.png', redirectUrl: '/rogue' },
  { name: 'Priest', imageUrl: '/assets/Pictures/priest_warcraftflat.png', redirectUrl: '/priest' },
  { name: 'Warlock', imageUrl: '/path/to/warlock-image.jpg', redirectUrl: '/warlock' },
  { name: 'Shaman', imageUrl: '/path/to/shaman-image.jpg', redirectUrl: '/shaman' },
  { name: 'Mage', imageUrl: '/path/to/mage-image.jpg', redirectUrl: '/mage' },
  { name: 'Druid', imageUrl: '/path/to/druid-image.jpg', redirectUrl: '/druid' },
];


export default function ClassCard({ className, imageUrl, onCardClick }) {
  // to create a square card
  const cardSize = '200px'; 
  return (
    <Card
      sx={{
        width: cardSize, // Apply the size to width
        height: cardSize, // Apply the same size to height to create a square
        boxShadow: 3,
        '&:hover': {
          boxShadow: 6,
        },
      }}
      onClick={onCardClick}
    >
      <CardActionArea>
        <CardMedia
          component="img" // showing image
          sx={{
            width: '100%', // fill the width of the card
            height: '100%', //  fill the height of the card
            objectFit: 'cover', // This will cover the card area without stretching the image
          }}
          image={imageUrl}
          alt={className}
        />
      </CardActionArea>
    </Card>
  );
}
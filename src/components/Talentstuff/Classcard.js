import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';


 export const classes = [
  { name: 'Warrior', imageUrl: '/Pictures/warrior_warcraftflat.png', redirectUrl: '/warrior' },
  { name: 'Paladin', imageUrl: '/Pictures/paladin_warcraftflat.png', redirectUrl: '/paladin' },
  { name: 'Hunter', imageUrl: 'Pictures/hunter_warcraftflat.png', redirectUrl: '/hunter' },
  { name: 'Rogue', imageUrl: '/Pictures/rogue_warcraftflat.png', redirectUrl: '/rogue' },
  { name: 'Priest', imageUrl: '/Pictures/priest_warcraftflat.png', redirectUrl: '/priest' },
  { name: 'Warlock', imageUrl: '/Pictures/warlock_warcraftflat.png', redirectUrl: '/warlock' },
  { name: 'Shaman', imageUrl: '/Pictures/shaman_warcraftflat.png', redirectUrl: '/shaman' },
  { name: 'Mage', imageUrl: '/Pictures/mage_warcraftflat.png', redirectUrl: '/mage' },
  { name: 'Druid', imageUrl: '/Pictures/druid_warcraftflat.png', redirectUrl: '/druid' },
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
        backgroundColor: 'transparent'
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
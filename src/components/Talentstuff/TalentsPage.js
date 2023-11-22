import React, { useEffect } from 'react';
import './TalentsPage.css';
import SimpleContainer from './Maincard.js';

function TalentsPage() {
  useEffect(() => {
    // Change the body background 
    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/450055/pexels-photo-450055.jpeg')";

    // Reset the background 
    return () => {
      document.body.style.backgroundImage = "url('https://i.redd.it/dvzbxvbruckb1.png')";
    };
  }, []);

  return (
    <SimpleContainer />
  );
}

export default TalentsPage;
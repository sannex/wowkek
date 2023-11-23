import React, { useEffect } from 'react';
import './TalentsPage.css';
import SimpleContainer from './Maincard.js';


function TalentsPage() {
  useEffect(() => {
    // Change the body background 
    document.body.style.backgroundImage = "url('https://e1.pxfuel.com/desktop-wallpaper/112/250/desktop-wallpaper-wow-cataclysm-artwork-%E2%9D%A4-for-ultra-tv-wow-classic.jpg')";

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
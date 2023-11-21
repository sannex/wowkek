import React, { useEffect } from 'react';
import './TalentsPage.css';


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
    <div className="talents-page">
      <h1>Pick a class</h1>
      {/* other content */}
    </div>
  );
}

export default TalentsPage;
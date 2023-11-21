import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TalentsPage from './components/Talentstuff/TalentsPage'; // TalentsPage is a component

// Create a Material-UI theme
const theme = createTheme({
  // Your theme customization
});

function MainApp() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/talents" element={<TalentsPage/>} />
          {/* Define other routes as needed */}
        </Routes>
          <testButtons/> {/*buttons*/}
          <searchButton/> {/*search bar*/}
        </div>
      </Router> 
    </ThemeProvider>
  );
}

export default MainApp;

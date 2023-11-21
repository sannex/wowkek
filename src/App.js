import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import TalentsPage from './components/Talentstuff/TalentsPage'; // TalentsPage is a component

function MainApp() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/talents" element={<TalentsPage/>} />
          {/* Define other routes as needed */}
        </Routes>
          <testButton /> {/*buttons*/}
          <searchButton/> {/*search bar*/}
        </div>
      </Router>
  );
}


export default MainApp;

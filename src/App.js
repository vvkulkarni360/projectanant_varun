
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyDetails from './components/Details/CompanyDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="Listing">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company/:name" element={<CompanyDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyList from './components/Listing/CompanyList';
import CompanyDetails from './components/Details/CompanyDetails';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CompanyList />} />
        <Route path="/company/:name" element={<CompanyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

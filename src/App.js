
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyList from './components/Listing/CompanyList';
import CompanyDetails from './components/Details/CompanyDetails';
import Navbar from './components/Navbar/Navbar';
import FilterSection from './components/Filtersection/FilterSection';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="Listing">
        <Routes>
          <Route path="/" element={<CompanyList />} />
          <Route path='/' element={<FilterSection />} />
          <Route path="/company/:name" element={<CompanyDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import CompanyList from './CompanyList';
import CompanyDetails from './CompanyDetails';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<CompanyList />} />
        <Route path="/company/:name" element={<CompanyDetails/>} />
        </Routes>
    </Router>
  );
}

export default App;

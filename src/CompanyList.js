

import React from 'react';
import {Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import companiesData from './companies.json';


function CompanyList() {
    const [companies, setCompanies] = useState([]);
  
    useEffect(() => {
      
      setCompanies(companiesData);
    }, []);
  
  return (
    <div>
       <p>eyyy!</p>
      {companies.map(company => (
        <div key={company.Name}>
       <Link to={`/company/${company.Name}`}> 
            <button>{company.Name}</button>
        </Link> 
        </div>
      ))}
    </div>
  );
}

export default CompanyList;

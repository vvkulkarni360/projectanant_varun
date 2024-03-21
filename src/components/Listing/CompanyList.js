import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import companiesData from '../../companies.json';
import './CompanyList.css'

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {

    setCompanies(companiesData);
  }, []);

  return (
    <div className="container CompanyListing">
      {companies.map(company => (
        <div className="card">
          <div className="card-body">

            <div key={company.Name}>
              <h5 className="card-title">{company.Name}</h5>

              <input type="image" img className="card-img-top"
                src={"https://www.thesoftwarereport.com/wp-content/uploads/2022/07/microsoft.png"}
                alt={"Card image cap"} />
              <Link to={`/company/${company.Name}`} className="button-link">
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CompanyList;


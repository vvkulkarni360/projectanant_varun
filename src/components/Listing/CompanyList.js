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
              <p className={`CompanyName ${company.Name.length > 10 ? 'smallFont' : 'largeFont'}`}>{company.Name}</p>

              <input type="image" img className="card-img-top"
                // src={"https://www.thesoftwarereport.com/wp-content/uploads/2022/07/microsoft.png"}
                src={company.img_url}
                alt={`${company.Name} Image`} />
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


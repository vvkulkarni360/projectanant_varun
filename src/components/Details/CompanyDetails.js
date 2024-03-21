import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import companiesData from '../../companies.json';
import './CompanyDetails.css'

function CompanyDetails() {
  const { name } = useParams();
  //   const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const companyData = companiesData.find(company => company.Name === name);
    console.log('Company Data:', companyData);
    setCompany(companyData);
  }, [name]);
  if (!company) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>COMPANY DETAILS</h2>
      {/* <p>Company ID: {id} <br/> */}
      <p>
        <span>Company Name</span>  : {company.Name} <br />
        <span>Company Cities</span>: {company.City}   <br />
        <span>Company zones</span> : {company.Zone}       <br />
        <span>LinkedIn Followers</span>: {company['LinkedIn Followers']} <br />
        <span>Company Industry</span>: {company.Industry} <br />
        <span>Company Size</span>:  {company['Company Size']}       <br />
        <span>Headquarters</span>:  {company.Headquarters}       <br />
        <span>Company Type</span>:   {company['Company Type']}    <br />
        <span>Segment tags</span>:   {company['Segment Tags']}      <br />
        <span>People Associated</span>:   {company['People Associated']}     <br />

      </p>

    </div>
  );
}

export default CompanyDetails;

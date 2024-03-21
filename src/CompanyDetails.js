
import React , { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import companiesData from './companies.json';

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
      <h2>Company Details</h2>
      {/* <p>Company ID: {id} <br/> */}
      <p>
      Company Name : {company.Name} <br/>
      Company Cities: {company.City}   <br/>
      Company zones: {company.Zone}       <br/>
      Company LinkedIn Followers: {company['LinkedIn Followers']} <br/>
      Company Industry: {company.Industry} <br/>
      Company Size:  {company['Company Size']}       <br/>
      Headquarters:  {company.Headquarters}       <br/>
      Company Type:   {company['Company Type']}    <br/>
      Segment tags:   {company['Segment Tags']}      <br/>
      People Associated:   {company['People Associated']}     <br/>

      </p>
      
    </div>
  );
}

export default CompanyDetails;

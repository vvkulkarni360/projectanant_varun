import React from 'react'
import FilterSection from '../Filtersection/FilterSection'
import CompanyList from '../Listing/CompanyList'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="app-container">
                <div className="company-list-container">
                    <CompanyList />
                </div>
                <div className="filter-container">
                    <FilterSection />
                </div>
            </div>
        </div>
    )
}

export default Home
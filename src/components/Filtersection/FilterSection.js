import React from 'react'
import './FilterSection.css'
import FilterMap from '../FilterMap/FilterMap';
import Searchbtn from '../SearchBtn/Searchbtn';

const FilterSection = () => {

    return (
        <div>
            <div className="filter container">
                <div className="SearchbtnDiv">
                    <Searchbtn />
                </div>
                <div className="FilterMapDiv">
                    <FilterMap />
                </div>
            </div>
        </div>
    )
}

export default FilterSection
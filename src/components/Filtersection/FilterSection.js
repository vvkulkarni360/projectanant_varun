import React, { useState } from 'react'
import './FilterSection.css'

const FilterSection = () => {
    const [selectedRadio, setSelectedRadio] = useState(null);

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.value);
    };
    return (
        <div>
            <div class="filtersection flex">
                <div class="filter">
                    <div class="search-container">
                        <input class="input" type="text" />
                        <svg viewBox="0 0 24 24" class="search__icon">
                            <g>
                                <path
                                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="container">
                    <form id="selectors" >
                        <div className="dropdowndiv">
                            <label>
                                <input type="checkbox" name="radio" className="toggleRadio" data-target="dropdown1" onChange={handleRadioChange}/>
                                <span><b>Cities</b></span>
                            </label>
                            <div className={`dropdown ${selectedRadio === 'city' ? 'show' : ''}`} id="dropdown1">
                                <select id="cityDropdown">
                                    <option>Select City</option>
                                </select>
                            </div>
                        </div>
                        <div className="dropdowndiv">
                            <label>
                                <input type="checkbox" name="radio" className="toggleRadio" data-target="dropdown2" />
                                <span><b>Zones</b></span>
                            </label>
                            <div className="dropdown" id="dropdown2">

                                <select className="scrollable">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </div>
                        <label>
                            <input type="checkbox" name="radio" />
                            <span><b>Followers</b></span>
                        </label>
                        <label>
                            <input type="checkbox" name="radio" />
                            <span><b>Headquarters</b></span>
                        </label>
                        <label>
                            <input type="checkbox" name="radio" />
                            <span><b>Industry</b></span>
                        </label>
                        <label>
                            <input type="checkbox" name="radio" />
                            <span><b>Headcount</b></span>
                        </label>
                        <label>
                            <input type="checkbox" name="radio" />
                            <span><b>Listing</b></span>
                        </label>
                        <label>
                            <input type="checkbox" name="radio" />
                            <span><b>Segments</b></span>
                        </label>
                        <button>
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                    fill="currentColor"></path>
                            </svg>
                            <span>Submit</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FilterSection
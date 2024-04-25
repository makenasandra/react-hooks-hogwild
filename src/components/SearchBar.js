import React, { useState } from "react";
import piggy from "../assets/porco.png";

const SearchBar = ({filterBy}) => {
    const [formData, setFormData] = useState({ search: "", greased: false, selectedOption: "name" })
    const [selectedOption, setSelectedOption] = useState('name-option');
    
    function handleSearchChange(e) {
        const { name, checked, value, type } = e.target;

        if (name === "greased") {
            setFormData({
                ...formData,
                [name]: checked
            })
            filterBy(checked);
        //    handleSearchSubmit(e)
        } else if (type === 'radio') {
            setFormData({
                ...formData,
                selectedOption: name
            });
            // console.log(formData)
        } else {

            setFormData({
                ...formData,
                [name]: value
            });

        }
    }
    function handleSearchSubmit(e) {
        e.preventDefault();
       
    }
    return (
        <div >
            <form onSubmit={handleSearchSubmit}>
                <input type="text" placeholder="Search" name="search" value={formData.search} onChange={handleSearchChange} />  {/* Search bar */}
                <button type="submit">Search</button>
                <div>
                    <label>Sort By: </label>
                    <label>
                        <input type="radio" name="name" value="name-option" checked={formData.selectedOption === "name"}
                            onChange={handleSearchChange} />
                        Name
                    </label>
                    <label>
                        <input type="radio" name="weight" value="weight-option" checked={formData.selectedOption === "weight"}
                            onChange={handleSearchChange} />
                        Weight
                    </label>

                </div>
                <div>
                    <label>Filter By: </label>
                    <label>
                        <input type="checkbox" name="greased" value="Greased" checked={formData.greased} onChange={handleSearchChange} />
                        Greased
                    </label>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;

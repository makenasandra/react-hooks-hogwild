import React, { useState } from "react";
import piggy from "../assets/porco.png";

const HogForm = ({ addHog }) => {
    const [formData, setFormData] = useState({
        name: "", greased: false, specialty: "", weight: 0,
        "highest medal achieved": "", image: "",
    })

    function handleFormChange(e) {
        const { name, checked, value } = e.target;

        if (name === "greased") {
            setFormData({
                ...formData,
                [name]: checked
            })
        } else {

            setFormData({
                ...formData,
                [name]: value
            });

        }
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        addHog(formData)
    }

    return (
        <div className="hog-form">
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Name" name="search" value={formData.name} onChange={handleFormChange} />  {/* Search bar */}
                <input type="text" placeholder="Specialty" name="specialty" value={formData.specialty} onChange={handleFormChange} />  {/* Search bar */}
                <input type="text" placeholder="weight" name="weight" value={formData.weight} onChange={handleFormChange} />  {/* Search bar */}
                <input type="text" placeholder="Highest medal achieved" name="highest-medal-achieved" value={formData["highest medal achieved"]} onChange={handleFormChange} />  {/* Search bar */}
                <input type="text" placeholder="Image" name="image" value={formData.image} onChange={handleFormChange} />  {/* Search bar */}
                <label>
                    <input type="checkbox" name="greased" value="Greased" checked={formData.greased} onChange={handleFormChange} />
                    Greased
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default HogForm;

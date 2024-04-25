import React, { useState } from "react";
import Nav from "./Nav";
import HogTitle from "./HogTile";
import HogGrid from "./HogGrid";
import SearchBar from "./SearchBar";
import HogForm from "./HogForm";
import '../App.css'

import hogs from "../porkers_data";

function App() {
	const [hogsToDisplay, setHogsToDisplay] = useState(hogs);
	function filterBy(greased){
		let filteredHogList = greased? hogs.filter(hog=> hog.greased): hogs;

		setHogsToDisplay(filteredHogList)
	}

	function sortBy(formData){
		const {selectedOption, search, greased} = formData;
		
		let hogsToDis = greased? hogs.filter(hog=> hog.greased): hogs;
		if(selectedOption==="name"){
			
			setHogsToDisplay(hogsToDis.filter(hog=>{
				console.log(hog.name.includes(search))
				return hog.name.toLowerCase().includes(search)
			}));
			
			// console.log(hogsToDisplay)
			// console.log({selectedOption})
		} else if(selectedOption==="weight"){
			setHogsToDisplay(hogsToDis.filter(hog=> hog.weight.toString().includes(search)));
		} else{
			setHogsToDisplay(hogs);

		}
	}
	function addHog(hog){
		setHogsToDisplay([hog,...hogsToDisplay]);
	}
	return (
		<div className="App">
			<Nav />
			<HogForm addHog={addHog}/>
		<SearchBar filterBy={filterBy} sortBy={sortBy}/>
			<HogGrid hogs={hogsToDisplay}/>
		</div>
	);
}

export default App;

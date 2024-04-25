import React, { useState } from "react";
import Nav from "./Nav";
import HogTitle from "./HogTile";
import HogGrid from "./HogGrid";
import SearchBar from "./SearchBar";

import hogs from "../porkers_data";

function App() {
	const [hogsToDisplay, setHogsToDisplay] = useState(hogs);
	function filterBy(greased){
		
		if(greased===true){
			setHogsToDisplay(hogs.filter(hog=> hog.greased))
			console.log(hogsToDisplay)
			console.log("{greased}")

		} else{
			setHogsToDisplay(hogs)
			console.log(hogsToDisplay)
			console.log({greased})
		}
	}
	return (
		<div className="App">
			<Nav />
		<SearchBar filterBy={filterBy}/>
			<HogGrid hogs={hogsToDisplay}/>
		</div>
	);
}

export default App;

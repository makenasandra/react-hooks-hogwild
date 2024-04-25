import React, { useState } from "react";
import HogDetails from './HogDetails';

import hogs from "../porkers_data";

function HogTitle({hog}) {
	const { name, image } = hog;
	const [showHog, setShowHog] = useState(true);
	const [showHogDetails, setShowHogDetails] = useState(false);
	const [currentHog, setCurrentHog] = useState();

	function handleShowDetailsClick(name){
		if(name){
			setShowHogDetails(!showHogDetails)
			setCurrentHog(name);
		}
	}
	
		
	return (
		<div>
			<button className="hide-button" onClick={()=>setShowHog(!showHog)}> {showHog? "Hide Hog": "Show Hog"}</button>
			{showHog?
			
			<div key={name}  onClick={()=> handleShowDetailsClick(name)}>
				<img src={image}/>
				<ul>
					<li key={name}>Name: {name}</li>
				</ul>
				{showHogDetails?<HogDetails hog={hog}/>: <></>}
				
			</div>:
			<></>
			}
		
		</div>
	);
}

export default HogTitle;

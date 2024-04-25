import React, { useState } from "react";
import HogDetails from './HogDetails';
import HogTitle from "./HogTile";
import hogs from "../porkers_data";

function HogGrid({hogs}) {
	let hogList = hogs.map(hog =>  <HogTitle key={hog.name} hog={hog} />)
	return (
		<div>
			 
			{hogList}
		
		</div>
	);
}

export default HogGrid;

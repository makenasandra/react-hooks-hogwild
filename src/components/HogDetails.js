import React, { useState } from "react";

import hogs from "../porkers_data";

function HogDetails({hog}) {
    const {specialty, weight, greased } = hog;
    const highestMedalAchieved = hog["highest medal achieved"];
		return (
				<ul>
					<li>Specialty: {specialty}</li> 
					<li>Weight: {weight}</li>
					<li>Greased: {`${greased}`} </li>
					<li>Highest Medal Achieved: {highestMedalAchieved}</li>
				</ul>
        )
}

export default HogDetails;

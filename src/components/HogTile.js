import React, { useState } from "react";
import HogDetails from './HogDetails';

import hogs from "../porkers_data";

function HogTitle({ hog }) {
	const { name, image } = hog;
	const [showHog, setShowHog] = useState(true);
	const [showHogDetails, setShowHogDetails] = useState(false);
	const [currentHog, setCurrentHog] = useState();

	function handleShowDetailsClick(name) {
		if (name) {
			setShowHogDetails(!showHogDetails)
			setCurrentHog(name);
		}
	}


	return (

		<div class="card">

			{showHog ?

				<div key={name} onClick={() => handleShowDetailsClick(name)}>
					<div class="image">
						<img class="ui medium rounded image" src={image} />
					</div>
					<div class="content">
						<div class="header">{name}</div>

						{showHogDetails ? <HogDetails hog={hog} /> : <></>}

					</div>
					<button class="ui orange button" onClick={() => setShowHog(!showHog)}> {showHog ? "Hide Hog" : "Show Hog"}</button>


				</div> :
				<button class="ui orange button" onClick={() => setShowHog(!showHog)}> {showHog ? "Hide Hog" : "Show Hog"}</button>

			}


		</div>




	);
}

export default HogTitle;

import React, { useState } from "react";
import Skycons from "react-skycons";

export default function Weather(props) {
	const [city, setCity] = useState(null);
	const [temp, setTemp] = useState(null);
	const [desc, setDesc] = useState(null);
	const [iconid, setIcon] = useState(null);

	if (props.getData <= 2) {
		let key = "d24b66ef886fe3ba438afda594de909b";
		let proxy = "https://cors-anywhere.herokuapp.com/"  
		fetch(
			`${proxy}https://api.darksky.net/forecast/${key}/${props.lat},${props.long}`
		)
			.then(response => response.json())
			.then(x => {
				if (x.timezone) {
					setCity(x.timezone.split("/")[1]);
					setTemp(Math.floor(x.currently.temperature) + "°");
					setDesc(x.currently.summary);
					setIcon(x.currently.icon.replace(/-/g, "_").toUpperCase());
					/*					console.log("city: ", city);
					console.log("temp: ", temp);
					console.log("desc: ", desc);
					console.log("iconid: ", iconid); */
					console.log("full object: ", x);
				}
			});
	}
	//API key...

	//used to allow the API to work on localhost (for testing) due to the CORS issue...

	//count used so that useEffect() doesn't update every re-render, only updates a few times...
	//lat, long come up as undefined when useEffect() only triggers once for some reason...

	//the above is commented out just becaus currently it is re mounting (and re-calling the api every second... there's a 1000 time limit on API calls for this API after that they're no longer free so, gotta find a workaround for that)
	return (
		<div className="weatherbox">
			<div className="toprow">
				<div className="location">{city}</div>
			</div>
			<div className="middlerow">
				<div className="weather-temp">{temp},</div>
				<div className="weather-type-desc">{desc}</div>
			</div>
			<div className="bottomrow">
				<Skycons
					className="weather-type-icon"
					color="white"
					icon={iconid}
					autoplay={true}
				/>{" "}
			</div>
		</div>
	);
}

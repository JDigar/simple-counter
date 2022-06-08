//import react into the bundle
import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components


const SimpleCounter = (props) => {
	return (
		<div className="fullBox container-fluid">
			<div className="timer smallCounter">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon icon-tabler icon-tabler-clock"
					width="100"
					height="100"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="#ffffff"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<circle cx="12" cy="12" r="9" />
					<polyline points="12 7 12 12 15 15" />
				</svg>
			</div>
			<div className="six smallCounter">{props.digitSix}</div>
			<div className="five smallCounter">{props.digitFive}</div>
			<div className="four smallCounter">{props.digitFour}</div>
			<div className="three smallCounter">{props.digitThree}</div>
			<div className="two smallCounter">{props.digitTwo}</div>
			<div className="one smallCounter">{props.digitOne}</div>
		</div>
	);
};

//render your react application


	SimpleCounter.propTypes = {
		digiSix: propTypes.number,
		digiFive: propTypes.number,
		digiFour: propTypes.number,
		digiThree: propTypes.number,
		digiTwo: propTypes.number,
		digiOne: propTypes.number,
	};


let counter = 0;
setInterval(function(){
	const six = Math.floor(counter/1000000);
	const five = Math.floor(counter/100000);
	const four = Math.floor(counter/10000);
	const three = Math.floor(counter/1000);
	const two = Math.floor(counter/100);
	const one = Math.floor(counter/10);
	console.log(one, two, three, four, five, six);

	counter++;
	
}, 1000);
ReactDOM.render(<SimpleCounter digitOne={counter.indexOf()} />, document.querySelector("#app"));


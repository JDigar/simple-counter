import React from "react";

//include images into your bundle

//create your first component
const SimpleCounter = () => {
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
			<div className="six smallCounter">0</div>
			<div className="five smallCounter">0</div>
			<div className="four smallCounter">0</div>
			<div className="three smallCounter">0</div>
			<div className="two smallCounter">0</div>
			<div className="one smallCounter">0</div>
		</div>
	);
};

export default SimpleCounter;

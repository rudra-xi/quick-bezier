import React, { useState, useEffect } from "react";
import { BezierCard, Heading } from "../Components";

function Home() {
	// Generate random cubic-bezier value
	const generateRandomCubicBezier = () => {
		const randomX = () => (Math.random() * 0.2).toFixed(2);
		const randomY = () => (Math.random() * 2.2 - 1).toFixed(2);
		return `cubic-bezier(${randomX()}, ${randomY()}, ${randomX()}, ${randomY()})`;
	};

	// State for cubic-bezier values
	const [cubicBeziers, setCubicBeziers] = useState([]);

	// Generate random values on mount
	useEffect(() => {
		const randomBeziers = Array.from({ length: 33 }, () =>
			generateRandomCubicBezier()
		);
		setCubicBeziers(randomBeziers);
	}, []);

	return (
		<section className="py-25">
			{/* Page heading */}
			<div>
				<Heading
					heading={
						"Discover and Experiment with Dynamic Cubic-Bezier Animations!"
					}
					tips={
						"Tap on any animation to visualize it and grab the code instantly!"
					}
				/>

				{/* Render BezierCards */}
				<div className="flex justify-center flex-wrap gap-4">
					{cubicBeziers.map((cubicBezier, index) => (
						<BezierCard
							key={index}
							cubicBezier={cubicBezier}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Home;

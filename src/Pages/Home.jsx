import React, { useState, useEffect } from "react";
import { BezierCard, Heading } from "../Components";

/**
 * Home component displays a gallery of randomly generated cubic-bezier animations.
 * Users can discover and experiment with various dynamic animation timings.
 * @returns {JSX.Element} A section displaying a heading and a grid of BezierCards.
 */
function Home() {
	/**
	 * Generates a random cubic-bezier CSS string.
	 * The control points are randomized within specific ranges to create varied animations.
	 * @returns {string} A CSS cubic-bezier function string.
	 */
	const generateRandomCubicBezier = () => {
		const randomX = () => (Math.random() * 0.2).toFixed(2); // x-coords (0 to 0.2)
		const randomY = () => (Math.random() * 2.2 - 1).toFixed(2); // y-coords (-1 to 1.2)
		return `cubic-bezier(${randomX()}, ${randomY()}, ${randomX()}, ${randomY()})`;
	};

	// Holds the array of generated cubic-bezier strings.
	const [cubicBeziers, setCubicBeziers] = useState([]);

	// Generate 30 random cubic-bezier values on component mount.
	useEffect(() => {
		const randomBeziers = Array.from({ length: 30 }, () =>
			generateRandomCubicBezier()
		);
		setCubicBeziers(randomBeziers);
	}, []);

	return (
		<section className="py-25">
			<div>
				<Heading
					heading={
						"Discover and Experiment with Dynamic Cubic-Bezier Animations!"
					}
				/>
				<div className="flex justify-center flex-wrap gap-3">
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

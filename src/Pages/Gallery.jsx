import React from "react";
import { BezierCard, Heading } from "../Components";

// A curated collection of predefined cubic-bezier curves.
const cubicBezierCurves = {
	curve1: "cubic-bezier(0.25, 0.1, 0.25, 1)",
	curve2: "cubic-bezier(0.42, 0, 0.58, 1)",
	curve3: "cubic-bezier(0.17, 0.67, 0.83, 0.67)",
	curve4: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
	curve5: "cubic-bezier(0.34, 1.56, 0.64, -0.56)",
	curve6: "cubic-bezier(0.5, 0, 0.5, 1)",
	curve7: "cubic-bezier(0.8, -0.42, 1, 1)",
	curve8: "cubic-bezier(0.4, 0.8, 0.6, 0.2)",
	curve9: "cubic-bezier(0.9, -0.5, 0.1, 1.5)",
	curve10: "cubic-bezier(0.3, 1.2, 0.7, -0.2)",
	curve11: "cubic-bezier(0.75, 0.25, 0.25, 0.75)",
	curve12: "cubic-bezier(1, 0, 0, 1)",
	curve13: "cubic-bezier(0.2, 0.8, 0.8, 0.2)",
	curve14: "cubic-bezier(0.1, 0.9, 0.9, 0.1)",
	curve15: "cubic-bezier(0.6, 1.5, 0.4, -0.5)",
	curve16: "cubic-bezier(0.32, 0, 0.68, 1)",
	curve17: "cubic-bezier(0.6, -0.3, 0.4, 1.3)",
	curve18: "cubic-bezier(0.28, 0.84, 0.46, 0.19)",
	curve19: "cubic-bezier(0.87, -0.41, 0.13, 1.56)",
	curve20: "cubic-bezier(0.43, 0.2, 0.77, 0.81)",
	curve21: "cubic-bezier(0.7, -0.8, 1.5, -0.2)",
	curve22: "cubic-bezier(1.2, -0.3, 0.2, 1.8)",
	curve23: "cubic-bezier(0.9, 1.4, -0.4, 0.6)",
	curve24: "cubic-bezier(-0.2, 0.8, 1.2, -0.5)",
	curve25: "cubic-bezier(0.6, -1.2, 0.8, 1.4)",
	curve26: "cubic-bezier(1.1, -0.5, 0.3, 1.6)",
	curve27: "cubic-bezier(0.3, 1.9, 0.9, -0.6)",
	curve28: "cubic-bezier(-0.1, 0.5, 1.4, 1.2)",
	curve29: "cubic-bezier(0.8, -1.8, 0.2, 1.7)",
	curve30: "cubic-bezier(0.5, -0.3, 0.7, 1.5)",
};

/**
 * Gallery component displays a curated collection of predefined cubic-bezier animations.
 * Users can explore and get inspiration from various animation timings.
 * @returns {JSX.Element} A section displaying a heading and a grid of BezierCards.
 */
function Gallery() {
	return (
		<section className="py-25">
			<div>
				<Heading
					heading={
						"Explore a Collection of Stunning Cubic-Bezier Animations!"
					}
				/>
			</div>
			<div className="flex justify-center flex-wrap gap-3">
				{Object.entries(cubicBezierCurves).map(([key, value]) => (
					<BezierCard key={key} cubicBezier={value} />
				))}
			</div>
		</section>
	);
}

export default Gallery;

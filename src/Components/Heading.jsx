import React from "react";

/**
 * Heading component displays a primary heading and a tip for the user.
 *
 * @param {object} props - The component props.
 * @param {string} props.heading - The main text to display as the heading.
 * @returns {JSX.Element} A heading section for a page.
 */
function Heading({ heading }) {
	return (
		<>
			<div className="flex text-center flex-col gap-4">
				<h1 className="text-4xl font-black">{heading}</h1>
			</div>
			<div className="pt-5 pb-10">
				<p className="flex items-center justify-center text-sm">
					<span className="font-black">Tips: &nbsp;</span>
					Hover on any animation to preview it and copy the CSS
					code effortlessly!
				</p>
			</div>
		</>
	);
}

export default Heading;

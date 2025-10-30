import React from "react";
import { Link } from "react-router-dom";

/**
 * Navbar component provides the main navigation for the application.
 * It includes a logo and links to different pages.
 * @returns {JSX.Element} The navigation bar.
 */
function Navbar() {
	/**
	 * Renders the navigation links.
	 * @param {object} props - Component props.
	 * @param {Function} props.onClick - Click handler for links.
	 */
	const NavLinks = ({ onClick }) => (
		<>
			<li className="nav-links-style">
				<Link to="/" className="font-medium" onClick={onClick}>
					Home
				</Link>
			</li>
			<li className="nav-links-style">
				<Link
					to="/gallery"
					className="font-medium"
					onClick={onClick}
				>
					Gallery
				</Link>
			</li>
			<li className="nav-links-style">
				<Link to="/about" className="font-medium" onClick={onClick}>
					About
				</Link>
			</li>
		</>
	);

	return (
		<nav className="flex items-center justify-center w-full h-12 fixed top-0 left-0 z-20 drop-shadow-xl mt-3 ">
			<div className="flex items-center px-10 justify-center h-full mt-1 space-x-30 bg-accent rounded-full">
				{/* Application Logo/Title */}
				<Link
					to="/"
					className="text-secondary font-main text-3xl mt-1 text-background"
				>
					QuickBezier
				</Link>

				{/* Desktop Navigation Links */}
				<ul className="flex justify-center h-full items-center space-x-10 text-background">
					<NavLinks />
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;

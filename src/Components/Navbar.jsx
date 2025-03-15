import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menu } from "../Assets";

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const NavLinks = ({ onClick }) => (
		<>
			<li className="mx-12 hover:scale-105 hover:underline duration-300 transition-all">
				<Link to="/" className="font-medium" onClick={onClick}>
					Home
				</Link>
			</li>
			<li className="mx-12 hover:scale-105 hover:underline duration-300 transition-all">
				<Link
					to="/gallery"
					className="font-medium"
					onClick={onClick}
				>
					Gallery
				</Link>
			</li>
			<li className="mx-12 hover:scale-105 hover:underline duration-300 transition-all">
				<Link to="/about" className="font-medium" onClick={onClick}>
					About
				</Link>
			</li>
		</>
	);

	return (
		<nav className="w-full h-18 bg-primary fixed top-0 left-0 z-20 drop-shadow-xl">
			<div className="flex px-10 justify-between h-full pt-6">
				{/* Logo */}
				<Link
					to="/"
					className="text-secondary font-fin font-base text-5xl"
					onClick={closeMobileMenu}
				>
					QuickBezier
				</Link>

				{/* Desktop Menu */}
				<ul className="hidden sm:flex justify-center h-full items-center">
					<NavLinks />
				</ul>

				{/* Mobile Menu Button */}
				<div className="sm:hidden flex relative pb-4 z-30">
					<button
						onClick={toggleMobileMenu}
						className="text-offWhite focus:outline-none"
						aria-label="Toggle mobile menu"
						aria-expanded={isMobileMenuOpen}
					>
						{isMobileMenuOpen ? (
							<img
								src={menu}
								alt="Close menu"
								className="w-5 rotate-180"
							/>
						) : (
							<img
								src={menu}
								alt="Open menu"
								className="w-5"
							/>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`sm:hidden fixed top-0 left-0 w-full h-full bg-tertiary transition-transform duration-500 ease-[cubic-bezier(0.17, 0.81, 0.12, 0.49)] ${
					isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}
				style={{ zIndex: 10 }}
			>
				<ul className="flex flex-col justify-center items-center h-full text-8xl gap-12">
					<NavLinks onClick={closeMobileMenu} />
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;

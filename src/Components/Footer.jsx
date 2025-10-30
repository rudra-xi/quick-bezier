import React from "react";
import { github, instagram, linkedin } from "../Assets";

/**
 * Footer component displays copyright information and social media links.
 * @returns {JSX.Element} The application's footer section.
 */
function Footer() {
	return (
		<div className="flex flex-col items-center justify-center py-5 gap-6">
			<div className="text-center">
				<p>&copy; 2025 rudra-xi. All rights reserved.</p>
				<p className="">
					Built with ♡ and passion by rudra-xi to empower
					creators worldwide.
				</p>
			</div>

			{/* Social media icons with links */}
			<div className="flex gap-5 sm:justify-start justify-center">
				<a
					href="#"
					className="links-style"
				>
					<img src={github} alt="github" className="w-7" />
				</a>
				<a
					href="#"
					className="links-style"
				>
					<img src={linkedin} alt="linkedin" className="w-7" />
				</a>
				<a
					href="#"
					className="links-style"
				>
					<img src={instagram} alt="instagram" className="w-7" />
				</a>
			</div>
		</div>
	);
}

export default Footer;

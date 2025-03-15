import React from "react";
import { github, linkedin, instagram } from "../Assets";

function Heading({ heading, tips }) {
	return (
		<>
			<div className="flex sm:flex-row sm:text-left text-center flex-col sm:gap-56 gap-4">
				<h1 className="sm:text-4xl text-2xl font-black sm:w-[55%]">
					{heading}
				</h1>

				<div className="flex flex-col gap-2">
					<div className="flex flex-col">
						<p>&copy; 2025 Rudra-Xi. All rights reserved.</p>
						<p className="">Built with ♡ by Rudra-Xi.</p>
					</div>

					<div className="flex gap-5 sm:justify-start justify-center">
						<a
							href="https://github.com/rudra-xi"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:scale-105 hover:rotate-6 duration-300 transition-all"
						>
							<img
								src={github}
								alt="github"
								className="w-8"
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/goutam-rudraxi/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:scale-105 hover:rotate-6 duration-300 transition-all"
						>
							<img
								src={linkedin}
								alt="linkedin"
								className="w-8"
							/>
						</a>
						<a
							href="https://www.instagram.com/rudra.xii/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:scale-105 hover:rotate-6 duration-300 transition-all"
						>
							<img
								src={instagram}
								alt="instagram"
								className="w-8"
							/>
						</a>
					</div>
				</div>
			</div>
			<div className="py-5">
				<p className="flex text-sm">
					<span className="font-black">Tips: &nbsp;</span>
					{tips}
				</p>
			</div>
		</>
	);
}

export default Heading;

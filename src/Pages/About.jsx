import React from "react";
import { github, instagram, linkedin } from "../Assets";

function About() {
	return (
		<section className="flex flex-col justify-center gap-5 py-25 w-full h-screen">
			{/* Introduction */}
			<p className="text-xl font-semibold">
				QuickBezier is your ultimate companion for creating and
				experimenting with cubic-bezier animations. With its
				intuitive design, it empowers you to:
			</p>
			{/* Features list */}
			<ul className="list-disc pl-6 font-medium text-lg">
				<li>
					Preview animations in real-time, giving you instant
					feedback and control to refine your animations
					effortlessly.
				</li>
				<li>
					Effortlessly copy the generated CSS code for seamless
					integration into your projects, saving time and effort.
				</li>
				<li>
					Explore a variety of pre-designed cubic-bezier curves
					as inspiration, or modify them to suit your creative
					vision.
				</li>
			</ul>
			{/* Additional information */}
			<p className="text-xl font-semibold">
				Whether you're a developer perfecting your craft, a designer
				striving for elegant motion, or someone curious about
				animation, QuickBezier makes it simple to elevate your work
				with smooth, professional-grade cubic-bezier curves.
				Experience the art of animation like never before!
			</p>
			<p className="text-xl font-medium">
				In addition, QuickBezier fosters a learning environment by
				breaking down complex animations into digestible steps,
				making it an ideal tool for beginners and experts alike.
			</p>
			<p className="text-lg">
				Dive into the world of animation today and unlock endless
				possibilities for creativity. QuickBezier is more than just
				a tool—it's your gateway to mastering the art of motion.
			</p>

			{/* Footer */}
			<div className="flex flex-col items-center justify-center pt-10 gap-6">
				<div className="text-center">
					<p>&copy; 2025 Rudra-Xi. All rights reserved.</p>
					<p className="">
						Built with ♡ and passion by Rudra-Xi to empower
						creators worldwide.
					</p>
				</div>

				{/* Social media links */}
				<div className="flex gap-5 sm:justify-start justify-center">
					<a
						href="#"
						className="hover:scale-105 hover:rotate-6 duration-300 transition-all"
					>
						<img src={github} alt="github" className="w-7" />
					</a>
					<a
						href="#"
						className="hover:scale-105 hover:rotate-6 duration-300 transition-all"
					>
						<img
							src={linkedin}
							alt="linkedin"
							className="w-7"
						/>
					</a>
					<a
						href="#"
						className="hover:scale-105 hover:rotate-6 duration-300 transition-all"
					>
						<img
							src={instagram}
							alt="instagram"
							className="w-7"
						/>
					</a>
				</div>
			</div>
		</section>
	);
}

export default About;

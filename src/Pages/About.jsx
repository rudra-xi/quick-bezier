import React from "react";

/**
 * About component provides information about QuickBezier, its purpose,
 * key features, and target audience.
 * @returns {JSX.Element} An informational section about the application.
 */
function About() {
	return (
		<section className="py-25">
			{/* Main content container */}
			<div className="max-w-5xl mx-auto px-4 flex flex-col gap-10">
				{/* Page Heading */}
				<h2 className="text-4xl font-extrabold text-accent leading-tight">
					Master Motion with QuickBezier
				</h2>
				<p className="text-xl text-text">
					QuickBezier is your essential tool that automatically
					generates cubic-bezier animation for crafting smooth,
					professional-grade motion in your web projects.
					Designed to simplify animation, it allows you to
					effortlessly create and preview custom timing
					functions.
				</p>
				<p className="text-md font-main text-text">
					"The idea for QuickBezier came from a simple
					frustration: the difficulty of quickly creating the
					perfect custom cubic-bezier. I developed this tool to
					make high-quality, unique animation timing accessible
					to everyone."
				</p>

				{/* Key Features Section */}
				<div className="space-y-6">
					<h3 className="text-2xl font-bold text-accent/80 border-b pb-2">
						Key Features
					</h3>
					<ul className="list-disc pl-6 text-lg text-text/80 space-y-4">
						<li className="font-medium">
							Automatic Generation: QuickBezier
							intelligently creates cubic-bezier for you,
							removing guesswork and speeding up your
							workflow.
						</li>
						<li className="font-medium">
							Real-Time Preview: Instantly see your
							animation in action, providing immediate
							feedback to refine your motion with
							confidence.
						</li>
						<li className="font-medium">
							Seamless Integration: Easily copy the
							generated CSS code for direct use in any web
							development project.
						</li>
						<li className="font-medium">
							Inspiration Library: Access a curated gallery
							of pre-designed cubic-bezier s, perfect for
							starting points or customization.
						</li>
					</ul>
				</div>

				{/* Target Audience & Conclusion Section */}
				<div className="space-y-6">
					<p className="text-xl font-semibold text-text/80">
						Whether you're a seasoned developer optimizing
						performance, a designer aiming for elegant
						transitions, or a beginner exploring motion
						fundamentals, QuickBezier automates complexity and
						brings smooth animation within easy reach.
					</p>
					<p className="text-lg text-text/60 ">
						Jump into the world of effortless motion today.
						QuickBezier is more than just a tool—it’s your
						gateway to mastering CSS animation with automation
						and precision.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;

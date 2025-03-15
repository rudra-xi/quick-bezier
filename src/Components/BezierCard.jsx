import React, { useState } from "react";
import toast from "react-hot-toast";

function BezierCard({ cubicBezier }) {
	const [isHovered, setIsHovered] = useState(false);

	const handleCopy = () => {
		navigator.clipboard
			.writeText(cubicBezier)
			.then(() => {
				toast.success("Copied to clipboard!", {
					style: {
						border: "1px solid #283044",
						padding: "16px",
						color: "#283044",
					},
					iconTheme: {
						primary: "#78a1bb",
						secondary: "#283044",
					},
				});
			})
			.catch(() => {
				toast.error("Failed to copy!", {
					style: {
						border: "1px solid #283044",
						padding: "16px",
						color: "#283044",
					},
					iconTheme: {
						primary: "#78a1bb",
						secondary: "#283044",
					},
				});
			});
	};

	return (
		<>
			<div
				className="w-100 h-60 flex flex-col bg-primary font-medium rounded-2xl p-5 relative overflow-hidden drop-shadow-lg"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{/* Cubic-bezier value and copy button */}
				<div className="w-full flex justify-between text-sm items-center">
					<p>{cubicBezier}</p>
					<button
						onClick={handleCopy}
						className="p-1.5 rounded-full bg-tertiary w-28 hover:-translate-y-0.5 duration-300 transition-all cursor-pointer"
					>
						Copy Code
					</button>
				</div>

				{/* Red cube with animation */}
				<div className="flex-1 flex items-center">
					<div
						className="bg-tertiary w-10 h-10 rounded-full"
						style={{
							transform: isHovered
								? "translateX(305px)"
								: "translateX(0)",
							transition: `transform 1s ${cubicBezier}`,
						}}
					/>
					<p className="absolute tracking-wider text-sm bottom-25 left-39">
						Cubic Bezier Animation
					</p>
				</div>
				{/* Linear animation */}
				<div className="flex-1 flex items-center justify-start">
					<div
						className={`bg-tertiary w-10 h-10 rounded-lg ${
							isHovered
								? "translate-x-[305px]"
								: "translate-x-0"
						} transition-transform duration-1000 ease-linear`}
					/>
					<p className="absolute tracking-wider text-sm bottom-4 left-45">
						Linear Animation
					</p>
				</div>
			</div>
		</>
	);
}

export default BezierCard;

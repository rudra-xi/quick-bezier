import React, { useState } from "react";
import toast from "react-hot-toast";

const TOAST_ICON_THEME = {
	secondary: "#F2EAD3",
	primary: "#161E28",
};

function BezierCard({ cubicBezier }) {
	/**
	 * BezierCard component displays a single cubic-bezier animation curve
	 * and allows users to copy its CSS value. It features a visual
	 * representation of the bezier curve's effect on an animated element
	 * compared to a linear animation.
	 *
	 * @param {object} props - The component props.
	 * @param {string} props.cubicBezier - The CSS cubic-bezier string (e.g., "cubic-bezier(0.42, 0, 0.58, 1)").
	 * @returns {JSX.Element} A card displaying a bezier curve animation.
	 */
	const [isHovered, setIsHovered] = useState(false);

	const handleCopy = () => {
		navigator.clipboard
			.writeText(cubicBezier)
			.then(() => {
				toast.success("Copied to clipboard!", {
					iconTheme: TOAST_ICON_THEME,
				});
			})
			.catch(() => {
				toast.error("Failed to copy!", {
					iconTheme: TOAST_ICON_THEME,
				});
			});
	};

	return (
		<div
			className="p-4 relative overflow-hidden card-background"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="flex justify-between items-start mb-6">
				<div>
					<h3 className="text-lg font-semibold text-text font-main">
						Bezier Curve
					</h3>
					<p className="text-sm text-text/75 mt-1 font-mono bg-accent/10 px-3 py-1 rounded-lg">
						{cubicBezier}
					</p>
				</div>
				<button
					onClick={handleCopy}
					className="px-3 py-2 bg-accent/50 text-text rounded-lg active:scale-95 transition-all duration-300 font-medium text-xs shadow-lg cursor-pointer hover:bg-accent/65 "
				>
					Copy
				</button>
			</div>

			<div className="relative mb-8">
				<div className="flex justify-between text-xs text-text/40 mb-2">
					<span>Start</span>
					<span>End</span>
				</div>

				<div className="flex-1 flex items-center pb-5">
					<div
						className="bg-accent w-5 h-5 rounded-full"
						style={{
							transform: isHovered
								? "translateX(391px)"
								: "translateX(0)",
							transition: `transform 1s ${cubicBezier}`,
						}}
					/>
				</div>
				<div className="flex-1 flex items-center justify-start">
					<div
						className={`bg-text/30 w-4 h-4 rounded-full ${
							isHovered
								? "translate-x-[391px]"
								: "translate-x-0"
						} transition-transform duration-1000 ease-linear`}
					/>
				</div>
			</div>
			<div className="flex justify-between text-sm text-text/60">
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 rounded-full bg-accent" />
					<span>Bezier Animation</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 rounded-full bg-text/30" />
					<span>Linear</span>
				</div>
			</div>
			<div
				className={`absolute top-5 left-32 text-[9px] px-2 py-1 rounded-full bg-accent/20 text-text font-medium transition-opacity duration-300 ${
					isHovered ? "opacity-100" : "opacity-0"
				}`}
			>
				Hovering
			</div>
		</div>
	);
}

export default BezierCard;

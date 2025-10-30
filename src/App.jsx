import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Home, Gallery, About } from "./Pages";
import { Navbar, Footer } from "./Components";
/**
 * App component serves as the main layout and routing entry point for the application.
 * It includes a global toaster for notifications, a navigation bar,
 * defines application routes, and a footer.
 * @returns {JSX.Element} The main application layout.
 */
function App() {
	return (
		<div className="font-alt text-text bg-background min-h-screen">
			{/* Global toaster for notifications */}
			<Toaster
				position="top-right"
				toastOptions={{
					style: {
						background: "#D4AF37",
						color: "#161E28",
					},
				}}
			/>

			<Navbar />
			<div className="px-10">
				{/* Application routing */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;

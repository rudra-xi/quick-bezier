import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Home, Gallery, About } from "./Pages";
import { Navbar } from "./Components";

function App() {
	return (
		<div className="font-rob text-secondary bg-tertiary">
			{/* Notification toaster */}
			<Toaster />
			{/* Navigation bar */}
			<Navbar />
			<div className="sm:px-18 px-8">
				{/* Route definitions */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;

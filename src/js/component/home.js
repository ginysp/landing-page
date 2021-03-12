import React from "react";

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</>
	);
}

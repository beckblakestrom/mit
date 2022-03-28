import React from "react";
import { Banner } from "./context";

export default function Home() {
	return (
		<React.Fragment>
			<Banner image="/images/banner.jpg" text="Banking Redefined" />
		</React.Fragment>
	);
}

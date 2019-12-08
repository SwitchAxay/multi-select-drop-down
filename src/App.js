import React from "react";
import MultiSelectDropDown from "../src/MultiSelectDropDown/MultiSelectDropDown";

function App() {
	return (
		<div className="App">
			<div>Multi Select Drop-Down</div>
			<MultiSelectDropDown
				options={[
					{ label: "Option 1", value: "Option 1" },
					{ label: "Option 2", value: "Option 2" },
					{ label: "Option 3", value: "Option 3" },
					{ label: "Option 4", value: "Option 4" },
					{ label: "Option 5", value: "Option 5" },
					{ label: "Option 6", value: "Option 6" },
					{ label: "Option 7", value: "Option 7" },
					{ label: "Option 8", value: "Option 8" },
					{ label: "Option 9", value: "Option 9" },
					{ label: "Option 10", value: "Option 10" }
				]}
			/>
		</div>
	);
}

export default App;

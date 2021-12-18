import { AppRouter } from "./Router/Main";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "./Context/Provider";

function App() {
	return (
		<div className="App">
			<Provider>
				<AppRouter />
				{/* Reset All Styles of Browser */}
				<CssBaseline />
			</Provider>
		</div>
	);
}

export default App;

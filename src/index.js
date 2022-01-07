import * as React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme"
import App from "./App"

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<App />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	</ThemeProvider>,
	document.querySelector("#root")
)

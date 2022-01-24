import * as React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import theme from "./theme"

import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<App />}></Route>
			</Routes>
		</BrowserRouter>
	</ThemeProvider>,
	document.querySelector("#root")
)

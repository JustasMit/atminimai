import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { applyPolyfills, defineCustomElements } from "@esri/calcite-components/dist/loader"

applyPolyfills().then(() => {
	defineCustomElements(window)
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<App />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById("root")
	)
})

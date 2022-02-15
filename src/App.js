import React, { useState } from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import ObjectMap from "./components/map/ObjectMap"
import Table from "./components/table/Table"
import ObjectPopup from "./components/popup/ObjectPopup"
import PersonPopup from "./components/popup/PersonPopup"
import TableToggle from "./components/table/TableToggle"

import Grid from "@mui/material/Grid"
import Collapse from "@mui/material/Collapse"
import CircularProgress from "@mui/material/CircularProgress"
import Backdrop from "@mui/material/Backdrop"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"

import "./css/app.css"
const App = () => {
	const [selectedObject, setSelectedObject] = useState("")
	const [initialLoading, setInitialLoading] = useState(true)
	const [initialObjectsList, setInitialObjectsList] = useState([])
	const [mapQuery, setMapQuery] = useState([])
	const [visible, setVisible] = useState(false)

	const theme = createTheme({
		palette: {
			mode: "light",
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Grid container spacing={0}>
								<Backdrop
									sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
									open={initialLoading}
								>
									<CircularProgress color="inherit" />
								</Backdrop>
								<Collapse sx={{ maxWidth: 350 }} orientation="horizontal" in={visible}>
									<Table
										initialObjectsList={initialObjectsList}
										setSelectedObject={setSelectedObject}
										selectedObject={selectedObject}
									/>
								</Collapse>

								<Grid item xs>
									<TableToggle visible={visible} setVisible={setVisible} />
									<ObjectMap
										setInitialObjectsList={setInitialObjectsList}
										setInitialLoading={setInitialLoading}
										setMapQuery={setMapQuery}
									/>
									<Outlet />
								</Grid>
							</Grid>
						</>
					}
				>
					<Route
						path="objektas/:globalID"
						element={
							<ObjectPopup
								mapQuery={mapQuery}
								setSelectedObject={setSelectedObject}
								initialLoading={initialLoading}
							/>
						}
					/>

					<Route path="asmuo/:globalID" element={<PersonPopup initialLoading={initialLoading} />} />
				</Route>
			</Routes>
		</ThemeProvider>
	)
}

export default App

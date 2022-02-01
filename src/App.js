import React, { useEffect, useState } from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import ObjectMap from "./components/map/ObjectMap"
import Table from "./components/table/Table"
import { map, objects, view } from "./utils/arcgisItems"
import ObjectPopup from "./components/popup/ObjectPopup"
import PersonPopup from "./components/popup/PersonPopup"
import TableToggle from "./components/table/TableToggle"

import CircularProgress from "@mui/material/CircularProgress"
import Grid from "@mui/material/Grid"
import Collapse from "@mui/material/Collapse"

import "./css/app.css"
const App = () => {
	const [selectedObject, setSelectedObject] = useState("")
	const [objectsList, setObjectsList] = useState([])
	const [visible, setVisible] = useState(false)
	const [initialLoading, setInitialLoading] = useState(true)
	const [page, setPage] = useState(1)
	const [pageCount, setPageCount] = useState(1)

	useEffect(() => {
		map.layers.items[1]
			.queryFeatures({
				outFields: ["OBJ_PAV", "TIPAS", "ATMINT_TIP", "GlobalID"],
				where: "",
				returnGeometry: false,
			})
			.then((response) => {
				if (response.features.length) {
					setObjectsList(response.features)
					setInitialLoading(false)
				}
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	return (
		<Routes>
			<Route
				path="/"
				element={
					initialLoading ? (
						<Grid
							container
							spacing={0}
							direction="column"
							alignItems="center"
							justifyContent="center"
							sx={{ minHeight: "100vh" }}
						>
							<Grid item xs={3}>
								<CircularProgress />
							</Grid>
						</Grid>
					) : (
						<Grid container spacing={0}>
							<Collapse sx={{ maxWidth: 350 }} orientation="horizontal" in={visible}>
								<Table
									setObjectsList={setObjectsList}
									objectsList={objectsList}
									setVisible={setVisible}
									visible={visible}
									setSelectedObject={setSelectedObject}
									selectedObject={selectedObject}
								/>
							</Collapse>
							<Grid item xs>
								<TableToggle visible={visible} setVisible={setVisible} />
								<ObjectMap setPage={setPage} setPageCount={setPageCount} />
								<Outlet />
							</Grid>
						</Grid>
					)
				}
			>
				<Route
					path="objektas/:globalID"
					element={
						<ObjectPopup
							setSelectedObject={setSelectedObject}
							page={page}
							setPage={setPage}
							pageCount={pageCount}
							setPageCount={setPageCount}
						/>
					}
				/>

				<Route path="asmuo/:globalID" element={<PersonPopup />} />
			</Route>
		</Routes>
	)
}

export default App

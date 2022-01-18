import React, { useEffect, useState } from "react"
import ObjectMap from "./components/map/ObjectMap"
import Table from "./components/table/Table"
import { objects } from "./utils/arcgisItems"
import ObjectPopup from "./components/map/ObjectPopup"
import TableToggle from "./components/table/TableToggle"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import CircularProgress from "@mui/material/CircularProgress"
import Grid from "@mui/material/Grid"
import Collapse from "@mui/material/Collapse"
import Box from "@mui/material/Box"

import "./css/app.css"
//todo - memory router, forward/backward, clear highlight on route /, fuzzy search on enter/lose focus
const App = () => {
	const [selectedObjectFilter, setSelectedObjectFilter] = useState("")
	const [selectedMemoryFilter, setSelectedMemoryFilter] = useState("")
	const [selectedObject, setSelectedObject] = useState("")
	const [filter, setFilter] = useState("")
	const [objectsList, setObjectsList] = useState([])
	const [queryObjects, setQueryObjects] = useState([])
	const [objectPopupPage, setObjectPopupPage] = useState(1)
	const [visible, setVisible] = useState(false)
	const [initialLoading, setInitialLoading] = useState(true)
	const [filterLoading, setFilterLoading] = useState(false)

	useEffect(() => {
		objects
			.queryFeatures({
				outFields: ["OBJ_PAV, GlobalID"],
				where: filter,
				returnGeometry: true,
			})
			.then((response) => {
				if (response.features.length) {
					setObjectsList(response)
					setInitialLoading(false)
				}
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])
	//https://developers.arcgis.com/javascript/latest/sample-code/featurefilter-attributes/ ?
	useEffect(() => {
		setFilterLoading(true)
		objects
			.queryFeatures({
				outFields: ["OBJ_PAV, GlobalID"],
				where: filter,
				returnGeometry: true,
			})
			.then((response) => {
				if (response.features.length === 0) {
					alert("Nerasta objektų!\n")
					setSelectedObjectFilter("")
					setSelectedMemoryFilter("")
				}

				if (response.features.length) {
					setObjectsList(response)
					setFilterLoading(false)
				}
			})
			.catch((error) => {
				console.error(error)
			})
	}, [filter])

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
							<Collapse orientation="horizontal" in={visible}>
								<Grid sx={{ height: "100vh" }}>
									<Table
										setSelectedObjectFilter={setSelectedObjectFilter}
										selectedObjectFilter={selectedObjectFilter}
										setSelectedMemoryFilter={setSelectedMemoryFilter}
										selectedMemoryFilter={selectedMemoryFilter}
										setObjectsList={setObjectsList}
										objects={objectsList}
										setFilter={setFilter}
										filter={filter}
										filterLoading={filterLoading}
										setVisible={setVisible}
										visible={visible}
										setSelectedObject={setSelectedObject}
										selectedObject={selectedObject}
									/>
								</Grid>
							</Collapse>
							<Grid item xs={true} sx={{ height: "100vh" }}>
								<TableToggle visible={visible} setVisible={setVisible} />
								<ObjectMap
									setQueryObjects={setQueryObjects}
									setObjectPopupPage={setObjectPopupPage}
									objects={objectsList}
									filter={filter}
								/>
							</Grid>
						</Grid>
					)
				}
			>
				<Route
					path="/object/:globalID"
					element={
						<ObjectPopup
							queryObjects={queryObjects}
							objectPopupPage={objectPopupPage}
							setObjectPopupPage={setObjectPopupPage}
						/>
					}
				/>
			</Route>
		</Routes>
	)
}

export default App

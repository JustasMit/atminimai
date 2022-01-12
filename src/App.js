import React, { useEffect, useState } from "react"
import ObjectMap from "./components/map/ObjectMap"
import Table from "./components/table/Table"
import { objects } from "./utils/arcgisItems"
import Popup from "./components/map/Popup"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import CircularProgress from "@mui/material/CircularProgress"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

import "./css/app.css"

const App = () => {
	const [selectedObjectFilter, setSelectedObjectFilter] = useState("")
	const [selectedMemoryFilter, setSelectedMemoryFilter] = useState("")
	const [selectedObject, setSelectedObject] = useState("")
	const [filter, setFilter] = useState("")
	const [objectsList, setObjectsList] = useState([])
	const [visible, setVisible] = useState(true)
	const [initialLoading, setInitialLoading] = useState(true)
	const [filterLoading, setFilterLoading] = useState(false)

	useEffect(() => {
		objects
			.queryFeatures({
				outFields: ["*"],
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

	useEffect(() => {
		setFilterLoading(true)
		objects
			.queryFeatures({
				outFields: ["*"],
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
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<React.Fragment>
							{initialLoading ? (
								<Grid
									container
									spacing={0}
									direction="column"
									alignItems="center"
									justifyContent="center"
									style={{ minHeight: "100vh" }}
								>
									<Grid item xs={3}>
										<CircularProgress />
									</Grid>
								</Grid>
							) : (
								<Grid container spacing={2}>
									<Grid item xs={6} md={4}>
										<Box>
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
										</Box>
									</Grid>
									<Grid item xs={6} md={8}>
										<Box sx={{ height: "100vh" }}>
											<ObjectMap visible={visible} objects={objectsList} filter={filter} />
										</Box>
									</Grid>
								</Grid>

								//<>
								//	<ObjectMap visible={visible} objects={objectsList} filter={filter} />
								//	<Table
								//		setSelectedObjectFilter={setSelectedObjectFilter}
								//		selectedObjectFilter={selectedObjectFilter}
								//		setSelectedMemoryFilter={setSelectedMemoryFilter}
								//		selectedMemoryFilter={selectedMemoryFilter}
								//		setObjectsList={setObjectsList}
								//		objects={objectsList}
								//		setFilter={setFilter}
								//		filter={filter}
								//		filterLoading={filterLoading}
								//		setVisible={setVisible}
								//		visible={visible}
								//		setSelectedObject={setSelectedObject}
								//		selectedObject={selectedObject}
								//	/>
								//</>
							)}
						</React.Fragment>
					}
				>
					<Route path=":objectID" element={<Popup />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App

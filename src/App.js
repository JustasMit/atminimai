import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import ObjectMap from "./components/map/ObjectMap"
import Table from "./components/table/Table"
import { objects } from "./utils/arcgisItems"
import ObjectPopup from "./components/popup/ObjectPopup"
import PersonPopup from "./components/popup/PersonPopup"
import TableToggle from "./components/table/TableToggle"

import CircularProgress from "@mui/material/CircularProgress"
import Grid from "@mui/material/Grid"
import Collapse from "@mui/material/Collapse"

import "./css/app.css"
const App = () => {
	const [selectedObjectFilter, setSelectedObjectFilter] = useState("")
	const [selectedMemoryFilter, setSelectedMemoryFilter] = useState("")
	const [selectedObject, setSelectedObject] = useState("")
	const [filter, setFilter] = useState("")
	const [objectsList, setObjectsList] = useState([])
	const [visible, setVisible] = useState(false)
	const [initialLoading, setInitialLoading] = useState(true)
	const [filterLoading, setFilterLoading] = useState(false)
	const [searchInputValue, setSearchInputValue] = useState(null)

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
										searchInputValue={searchInputValue}
										setSearchInputValue={setSearchInputValue}
									/>
								</Grid>
							</Collapse>
							<Grid item xs={true} sx={{ height: "100vh" }}>
								<TableToggle visible={visible} setVisible={setVisible} />
								<ObjectMap
									objects={objectsList}
									filter={filter}
									setSearchInputValue={setSearchInputValue}
									setSelectedObject={setSelectedObject}
								/>
							</Grid>
						</Grid>
					)
				}
			>
				<Route
					path="objektas/:globalID"
					element={
						<ObjectPopup
							setSearchInputValue={setSearchInputValue}
							setSelectedObject={setSelectedObject}
						/>
					}
				/>

				<Route path="asmuo/:globalID" element={<PersonPopup setSearchInputValue={setSearchInputValue} />} />
			</Route>
		</Routes>
	)
}

export default App

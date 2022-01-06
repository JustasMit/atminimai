import React, { useEffect, useState } from "react"
import ObjectMap from "./components/map/ObjectMap"
import Table from "./components/table/Table"
import { objects } from "./utils/arcgisItems"
import Popup from "./components/map/Popup"
import { Routes, Route } from "react-router-dom"

import "./css/app.css"

const App = () => {
	const [selectedObject, setSelectedObject] = useState("0")
	const [selectedMemory, setSelectedMemory] = useState("0")
	const [filter, setFilter] = useState("")
	const [objectsList, setObjectsList] = useState([])
	const [visible, setVisible] = useState(false)
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
					setSelectedObject("0")
					setSelectedMemory("0")
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
					<React.Fragment>
						{initialLoading ? (
							<calcite-loader active scale="l"></calcite-loader>
						) : (
							<>
								<ObjectMap setVisible={setVisible} visible={visible} objects={objectsList} filter={filter} />
								<Table
									setSelectedObject={setSelectedObject}
									selectedObject={selectedObject}
									setSelectedMemory={setSelectedMemory}
									selectedMemory={selectedMemory}
									setObjectsList={setObjectsList}
									objects={objectsList}
									setFilter={setFilter}
									filter={filter}
									filterLoading={filterLoading}
								/>
							</>
						)}
					</React.Fragment>
				}
			>
				<Route path=":objectID" element={<Popup />} />
			</Route>
		</Routes>
	)
}

export default App

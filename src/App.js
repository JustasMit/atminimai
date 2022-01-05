import React, { useEffect, useState } from "react"
import ObjectMap from "./components/map/ObjectMap"
import Table from "./components/table/Table"
import { objects } from "./utils/arcgisItems"
import displayFeatures from "./utils/displayFeatures"
import "./css/app.css"

const App = () => {
	const [selectedObject, setSelectedObject] = useState("0")
	const [selectedMemory, setSelectedMemory] = useState("0")
	const [filter, setFilter] = useState("")
	const [objectsList, setObjectsList] = useState([])
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		objects
			.queryFeatures({
				outFields: ["*"],
				where: filter,
				returnGeometry: true,
			})
			.then((response) => {
				setObjectsList(response.features)
				displayFeatures(response)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	return (
		<React.Fragment>
			<ObjectMap
				setVisible={setVisible}
				visible={visible}
				objects={objectsList}
                filter={filter}
			/>
			<Table
				setSelectedObject={setSelectedObject}
				selectedObject={selectedObject}
				setSelectedMemory={setSelectedMemory}
				selectedMemory={selectedMemory}
				setObjectsList={setObjectsList}
				objects={objectsList}
                setFilter={setFilter}
                filter={filter}
			/>
		</React.Fragment>
	)
}

export default App

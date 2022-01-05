import React, { useEffect, useState } from "react"
import ObjectMap from "./components/map/ObjectMap"
import Table from "./components/table/Table"
import { objects } from "./components/map/ArcgisItems"
import "./css/app.css"

const App = () => {
	const [selectedObject, setSelectedObject] = useState("0")
	const [selectedMemory, setSelectedMemory] = useState("0")
	const [objectsList, setObjectsList] = useState([])
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		objects
			.queryFeatures({
				outFields: ["OBJ_PAV", "TIPAS", "ATMINT_TIP", "OBJECTID"],
				where: "",
			})
			.then((response) => {
				setObjectsList(response.features)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	useEffect(() => {
		if (selectedObject !== "0" && selectedMemory === "0") {
			objects.definitionExpression = `TIPAS = ${selectedObject}`
		} else if (selectedObject === "0" && selectedMemory !== "0") {
			objects.definitionExpression = `ATMINT_TIP = ${selectedMemory}`
		} else if (selectedObject !== "0" && selectedMemory !== "0") {
			objects.definitionExpression = `ATMINT_TIP = ${selectedMemory} AND TIPAS = ${selectedObject}`
		} else if (selectedObject === "0" && selectedMemory === "0") {
			objects.definitionExpression = ""
		}

        objects.queryFeatureCount().then((response) => {
            if (response === 0) {
                alert("Nerasta objektų!\n")
                setSelectedObject("0")
                setSelectedMemory("0")
            }
        })
	}, [selectedObject, selectedMemory])

	return (
		<React.Fragment>
			<ObjectMap setVisible={setVisible} visible={visible}/>
			<Table setSelectedObject={setSelectedObject} setSelectedMemory={setSelectedMemory} objects={objectsList} />
		</React.Fragment>
	)
}

export default App

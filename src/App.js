import React, { useRef, useEffect } from "react"
import ObjectMap from "./components/map/ObjectMap"
import Table from "./components/table/Table"
import { objects } from "./components/map/ArcgisItems"
import "./css/app.css"

function App() {
    
	//useEffect(() => {}, [])

	return (
		<React.Fragment>
			<ObjectMap />
			<Table />
		</React.Fragment>
	)
}

export default App

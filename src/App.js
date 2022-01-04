import React from "react"
import ObjectMap from "./components/map/ObjectMap"
import Table from "./components/table/Table"
import { objects } from "./components/map/ArcgisItems"
import "./css/app.css"

class App extends React.Component {
    //change to functional comp?

	state = {
		filter: "",
		objectsList: [],
	}

	setFilter = (value) => {
		this.setState({ filter: value })
	}

	componentDidMount() {
		objects
			.queryFeatures({
				outFields: ["OBJ_PAV", "TIPAS", "ATMINT_TIP", "OBJECTID"],
				where: "",
			})
			.then((response) => {
				this.setState({ objectsList: response.features })
			})
			.catch((error) => {
				console.error(error)
			})
	}

	componentDidUpdate() {
		console.log(this.state.filter, "STATE")
		//rerun filter?
	}
	render() {
		return (
			<React.Fragment>
				<ObjectMap />
				<Table setFilter={this.setFilter} objects={this.state.objectsList}/>
			</React.Fragment>
		)
	}
}

export default App

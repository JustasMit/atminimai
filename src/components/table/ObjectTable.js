import React from "react"
import Filter from "./Filter"
import TableItem from "./TableItem"
import { objects } from "../map/ArcgisItems"
import "../../css/table.css"

class ObjectTable extends React.Component {
	state = {
		objectsList: [],
	}

	componentDidMount() {
		let filter = sessionStorage.getItem("filter")
		if (!filter) {
			filter = ""
		}
		objects
			.queryFeatures({
				outFields: ["OBJ_PAV", "TIPAS", "ATMINT_TIP", "OBJECTID"],
				where: filter,
			})
			.then((response) => {
                this.setState({objectsList: response.features})
			})
			.catch((error) => {
				console.error(error)
			})
	}

	render() {
		return (
			<div className="table">
				<Filter />
                <TableItem objects={this.state.objectsList}/>
			</div>
		)
	}
}

export default ObjectTable

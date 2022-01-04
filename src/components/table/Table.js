import React from "react"
import Filter from "./Filter"
import TableItems from "./TableItems"
import { objects } from "../map/ArcgisItems"
import "../../css/table.css"

class Table extends React.Component {
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
			<div className="table">
				<Filter setFilter={this.setFilter} />
				<TableItems objects={this.state.objectsList} />
			</div>
		)
	}
}

export default Table

import React from "react"
import Filter from "./Filter"
import TableItems from "./TableItems"
import "../../css/table.css"

const Table = (props) => {
	return (
		<div className="table">
			<Filter setFilter={props.setFilter} />
			<TableItems objects={props.objects} />
		</div>
	)
}

export default Table

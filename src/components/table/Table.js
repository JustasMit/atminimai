import React from "react"
import Filter from "./Filter"
import TableItems from "./TableItems"
import "../../css/table.css"

const Table = (props) => {
	return (
		<div className="table">
			<Filter setSelectedObject={props.setSelectedObject} setSelectedMemory={props.setSelectedMemory} />
			<TableItems objects={props.objects} />
		</div>
	)
}

export default Table

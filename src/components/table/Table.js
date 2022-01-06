import React from "react"
import Filter from "./Filter"
import TableItems from "./TableItems"
import "../../css/table.css"

const Table = (props) => {
	return (
		<div className="table">
			<Filter
				setSelectedObject={props.setSelectedObject}
				selectedObject={props.selectedObject}
				setSelectedMemory={props.setSelectedMemory}
				selectedMemory={props.selectedMemory}
				setObjectsList={props.setObjectsList}
				setFilter={props.setFilter}
			/>
			<TableItems objects={props.objects.features} filterLoading={props.filterLoading} />
		</div>
	)
}

export default Table

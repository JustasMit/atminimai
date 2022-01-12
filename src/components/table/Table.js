import React from "react"
import Filter from "./Filter"
import TableItems from "./TableItems"
import TableToggle from "./TableToggle"

const Table = (props) => {
	return (
		<div>
			<Filter
				setSelectedObjectFilter={props.setSelectedObjectFilter}
				selectedObjectFilter={props.selectedObjectFilter}
				setSelectedMemoryFilter={props.setSelectedMemoryFilter}
				selectedMemoryFilter={props.selectedMemoryFilter}
				setObjectsList={props.setObjectsList}
				setFilter={props.setFilter}
			/>
			<TableItems
				objects={props.objects.features}
				filterLoading={props.filterLoading}
				setSelectedObject={props.setSelectedObject}
				selectedObject={props.selectedObject}
			/>
			<TableToggle visible={props.visible} setVisible={props.setVisible} />
		</div>
	)
}

export default Table

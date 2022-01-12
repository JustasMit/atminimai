import React from "react"
import Filter from "./Filter"
import TableItems from "./TableItems"
import TableToggle from "./TableToggle"
import Box from "@mui/material/Box"

const Table = (props) => {
	return (
		<Box sx={{ mr: 2, width: 350 }} style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
			<Box>
				<Filter
					setSelectedObjectFilter={props.setSelectedObjectFilter}
					selectedObjectFilter={props.selectedObjectFilter}
					setSelectedMemoryFilter={props.setSelectedMemoryFilter}
					selectedMemoryFilter={props.selectedMemoryFilter}
					setObjectsList={props.setObjectsList}
					setFilter={props.setFilter}
				/>
			</Box>
			<Box style={{ flexGrow: 1, minHeight: 0 }}>
				<TableItems
					objects={props.objects.features}
					filterLoading={props.filterLoading}
					setSelectedObject={props.setSelectedObject}
					selectedObject={props.selectedObject}
				/>
				<TableToggle visible={props.visible} setVisible={props.setVisible} />
			</Box>
		</Box>
	)
}

export default Table

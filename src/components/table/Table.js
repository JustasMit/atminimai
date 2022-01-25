import React from "react"
import Filter from "./Filter"
import TableItems from "./TableItems"
import Search from "./Search"

import Box from "@mui/material/Box"

const Table = (props) => {
	return (
		<Box sx={{ width: 350 }} style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
			<Box>
				<Search
					objects={props.objects.features}
					searchInputValue={props.searchInputValue}
					setSearchInputValue={props.setSearchInputValue}
					setSelectedObject={props.setSelectedObject}
				/>
			</Box>
			<Box>
				<Filter
					setSelectedObjectFilter={props.setSelectedObjectFilter}
					selectedObjectFilter={props.selectedObjectFilter}
					setSelectedMemoryFilter={props.setSelectedMemoryFilter}
					selectedMemoryFilter={props.selectedMemoryFilter}
					setObjectsList={props.setObjectsList}
					setFilter={props.setFilter}
					setSearchInputValue={props.setSearchInputValue}
					setSelectedObject={props.setSelectedObject}
				/>
			</Box>
			<Box style={{ flexGrow: 1, minHeight: 0 }}>
				<TableItems
					objects={props.objects.features}
					filterLoading={props.filterLoading}
					setSelectedObject={props.setSelectedObject}
					selectedObject={props.selectedObject}
					setSearchInputValue={props.setSearchInputValue}
				/>
			</Box>
		</Box>
	)
}

export default Table

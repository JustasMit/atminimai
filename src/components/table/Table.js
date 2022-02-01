import React, { useEffect, useState } from "react"
import Filter from "./Filter"
import TableItems from "./TableItems"
import Search from "./Search"

import Box from "@mui/material/Box"

const Table = (props) => {
	const [searchObjectsList, setSearchObjectsList] = useState([])

	return (
		<Box sx={{ width: 350, height: "100vh", display: "flex", flexDirection: "column" }}>
			<Box>
				<Search
					objectsList={props.objectsList}
					searchInputValue={props.searchInputValue}
					setSearchInputValue={props.setSearchInputValue}
					setSearchObjectsList={setSearchObjectsList}
				/>
			</Box>
			<Box>
				<Filter
					objectsList={props.objectsList}
					setSearchInputValue={props.setSearchInputValue}
					setSelectedObject={props.setSelectedObject}
					setObjectsList={props.setObjectsList}
					setSearchObjectsList={setSearchObjectsList}
				/>
			</Box>
			<Box style={{ flexGrow: 1, minHeight: 0 }}>
				<TableItems
					searchObjectsList={searchObjectsList}
					setSelectedObject={props.setSelectedObject}
					selectedObject={props.selectedObject}
					setSearchInputValue={props.setSearchInputValue}
				/>
			</Box>
		</Box>
	)
}

export default Table

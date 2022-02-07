import React, { useEffect, useState } from "react"
import Filter from "./Filter"
import TableItems from "./TableItems"
import Search from "./Search"

import Box from "@mui/material/Box"

const Table = (props) => {
	const [searchObjectsList, setSearchObjectsList] = useState([])
	const [searchInputValue, setSearchInputValue] = useState("")

	return (
		<Box sx={{ width: 350, height: "100vh", display: "flex", flexDirection: "column" }}>
			<Search
				objectsList={props.objectsList}
				searchInputValue={searchInputValue}
				setSearchInputValue={setSearchInputValue}
				setSearchObjectsList={setSearchObjectsList}
			/>
			<Filter
				objectsList={props.objectsList}
				setSearchInputValue={setSearchInputValue}
				setSelectedObject={props.setSelectedObject}
				setObjectsList={props.setObjectsList}
				setSearchObjectsList={setSearchObjectsList}
			/>
			<TableItems
				searchObjectsList={searchObjectsList}
				setSelectedObject={props.setSelectedObject}
				selectedObject={props.selectedObject}
			/>
		</Box>
	)
}

export default Table

import React, { useEffect, useState } from "react"
import Filter from "./Filter"
import TableItems from "./TableItems"
import Search from "./Search"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import CircularProgress from "@mui/material/CircularProgress"

const Table = (props) => {
	const [objectsList, setObjectsList] = useState([])
	const [searchObjectsList, setSearchObjectsList] = useState([])
	const [searchInputValue, setSearchInputValue] = useState("")

	useEffect(() => {
		setObjectsList(props.initialObjectsList)
	}, [props.initialObjectsList])

	return (
		<Box sx={{ width: 350, height: "100vh", display: "flex", flexDirection: "column" }}>
			{objectsList.length ? (
				<>
					<Search
						objectsList={objectsList}
						searchInputValue={searchInputValue}
						setSearchInputValue={setSearchInputValue}
						setSearchObjectsList={setSearchObjectsList}
					/>
					<Filter
						objectsList={objectsList}
						setSearchInputValue={setSearchInputValue}
						setSelectedObject={props.setSelectedObject}
						setObjectsList={setObjectsList}
						setSearchObjectsList={setSearchObjectsList}
					/>
					<TableItems
						searchObjectsList={searchObjectsList}
						setSelectedObject={props.setSelectedObject}
						selectedObject={props.selectedObject}
					/>
				</>
			) : (
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justifyContent="center"
					sx={{ minHeight: "100vh" }}
				>
					<Grid item xs={3}>
						<CircularProgress />
					</Grid>
				</Grid>
			)}
		</Box>
	)
}

export default Table

import React from "react"
import { useNavigate } from "react-router-dom"

import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import Box from "@mui/material/Box"

const Search = (props) => {
	let listObj = []
	Object.keys(props.objects).map((object) => {
		const temp = {}
		temp.pav = props.objects[object].attributes.OBJ_PAV
		temp.key = props.objects[object].attributes.GlobalID.replace(/[{}]/g, "")
		listObj.push(temp)
	})

	const navigate = useNavigate()

	const handleSearch = (value) => {
		if (value) {
      props.setQueryObjects([])
      props.setSelectedObject(value.key)
			props.setSearchInputValue(value)
			navigate(`objektas/${value.key}`)
		}
	}

	return (
		<Box sx={{ ml: 0.5, mr: 0.5 }}>
			<Autocomplete
				sx={{ mt: 1, width: "100%" }}
				clearOnBlur
				noOptionsText="Nerasta"
				clearText="Išvalyti"
				closeText="Suskleisti"
				openText="Išskleisti"
				id="search"
        value={props.searchInputValue}
				options={listObj}
				getOptionLabel={(option) => option.pav}
				isOptionEqualToValue={(option, value) => option.key === value.key}
				onChange={(event, value) => handleSearch(value)}
				renderOption={(props, option) => {
					return (
						<li {...props} id={option.key} key={option.key}>
							{option.pav}
						</li>
					)
				}}
				renderInput={(params) => <TextField {...params} label="Paieška" />}
			/>
		</Box>
	)
}

export default Search

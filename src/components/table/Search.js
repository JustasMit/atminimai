import React from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import Box from "@mui/material/Box"
import { useNavigate } from "react-router-dom"

const Search = (props) => {
	//reiks kazkaip pakeist.. state? istraukt iskart id? state = selectedID?
	let listObj = []
	Object.keys(props.objects).map((object) => {
		const temp = {}
		temp.pav = props.objects[object].attributes.OBJ_PAV
		temp.key = props.objects[object].attributes.GlobalID.replace(/[{}]/g, "")
		listObj.push(temp)
	})

	const navigate = useNavigate()

	const handleSearch = (event) => {
		if (event.target.id) {
			navigate(`/object/${event.target.id}`)
		}
	}

	return (
		<Box sx={{ ml: 0.5, mr: 0.5 }}>
			<Autocomplete
				sx={{ mt: 1, width: "100%" }}
				freeSolo
				id="search"
				options={listObj}
				getOptionLabel={(option) => option.pav}
				onChange={handleSearch}
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

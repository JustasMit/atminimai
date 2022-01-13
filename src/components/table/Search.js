import React from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
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
			navigate(`${event.target.id}`)
		}
	}

	return (
		<Autocomplete
			sx={{ ml: 1, mt: 1, width: 1 }}
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
	)
}

export default Search

import React, { useEffect, useState } from "react"
import { objects } from "../../utils/arcgisItems"

import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

const Filter = (props) => {
	const [objectAlias, setObjectAlias] = useState([])
	const [memoryAlias, setMemoryAlias] = useState([])

	let tempObjectAlias = []
	let tempMemoryAlias = []

	const handleObjectSelect = (event) => {
		props.setSelectedObjectFilter(event.target.value)
	}
	const handleMemorySelect = (event) => {
        props.setSelectedMemoryFilter(event.target.value)
	}
    
	useEffect(() => {
		objects
			.queryFeatures({
				outFields: ["TIPAS", "ATMINT_TIP"],
				where: "1 = 1",
				start: 0,
				num: 1,
			})
			.then((response) => {
				for (let field in response.features[0].layer.fields) {
					if (response.features[0].layer.fields[field].name === "TIPAS") {
						for (let code in response.features[0].layer.fields[field].domain.codedValues) {
							const objCodeAlias = {}
							objCodeAlias.alias = response.features[0].layer.fields[field].domain.codedValues[code].name
							objCodeAlias.code = response.features[0].layer.fields[field].domain.codedValues[code].code
							tempObjectAlias.push(objCodeAlias)
						}
						setObjectAlias(tempObjectAlias)
					} else if (response.features[0].layer.fields[field].name === "ATMINT_TIP") {
						for (let code in response.features[0].layer.fields[field].domain.codedValues) {
							const memCodeAlias = {}
							memCodeAlias.alias = response.features[0].layer.fields[field].domain.codedValues[code].name
							memCodeAlias.code = response.features[0].layer.fields[field].domain.codedValues[code].code
							tempMemoryAlias.push(memCodeAlias)
						}
						setMemoryAlias(tempMemoryAlias)
					}
				}
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	useEffect(() => {
		let query

		if (props.selectedObjectFilter !== "" && props.selectedMemoryFilter === "") {
			query = `TIPAS = ${props.selectedObjectFilter}`
		} else if (props.selectedObjectFilter === "" && props.selectedMemoryFilter !== "") {
			query = `ATMINT_TIP = ${props.selectedMemoryFilter}`
		} else if (props.selectedObjectFilter !== "" && props.selectedMemoryFilter !== "") {
			query = `ATMINT_TIP = ${props.selectedMemoryFilter} AND TIPAS = ${props.selectedObjectFilter}`
		} else if (props.selectedObjectFilter === "" && props.selectedMemoryFilter === "") {
			query = ""
		}

		props.setFilter(query)
	}, [props.selectedObjectFilter, props.selectedMemoryFilter])
	return (
		<Box sx={{ ml: 0.5, mr: 0.5 }}>
			<FormControl sx={{ mt: 1, width: "100%" }}>
				<InputLabel id="object-select-label">Objekto tipas</InputLabel>
				<Select
					labelId="object-select-label"
					name="object-select"
					id="object-select"
					value={props.selectedObjectFilter}
					label="Objekto tipas"
					onChange={handleObjectSelect}
				>
					<MenuItem value="">
						<em>Visi</em>
					</MenuItem>
					{objectAlias.map((object) => (
						<MenuItem key={object.code} value={object.code}>
							{object.alias}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<FormControl sx={{ mt: 1, width: "100%" }}>
				<InputLabel id="memory-select-label">Atminimo tipas</InputLabel>
				<Select
					labelId="memory-select-label"
					name="memory-select"
					id="memory-select"
					value={props.selectedMemoryFilter}
					label="Atminimo tipas"
					onChange={handleMemorySelect}
				>
					<MenuItem value="">
						<em>Visi</em>
					</MenuItem>
					{memoryAlias.map((object) => (
						<MenuItem key={object.code} value={object.code}>
							{object.alias}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<Button
				variant="contained"
				disableElevation
				sx={{ mt: 1, mb: 1, width: "100%" }}
				onClick={() => {
					props.setSelectedObjectFilter("")
					props.setSelectedMemoryFilter("")
				}}
			>
				Išvalyti filtrus
			</Button>
		</Box>
	)
}

export default Filter

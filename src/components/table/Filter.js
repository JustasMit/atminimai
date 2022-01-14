import React, { useEffect, useState } from "react"
import { objects } from "../../utils/arcgisItems"

import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import Button from "@mui/material/Button"

const Filter = (props) => {
	const [objectAlias, setObjectAlias] = useState([])
	const [memoryAlias, setMemoryAlias] = useState([])

	let tempObjectAlias = []
	let tempMemoryAlias = []

	const handleSelect = (event) => {
		props.setSelectedObjectFilter(event.target.value)
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
							const objCodeAlias = {}
							objCodeAlias.alias = response.features[0].layer.fields[field].domain.codedValues[code].name
							objCodeAlias.code = response.features[0].layer.fields[field].domain.codedValues[code].code
							tempMemoryAlias.push(objCodeAlias)
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
// TARPAI !!! margins
	return (
		<div>
			<FormControl sx={{ ml:1, mt: 1, width: 1 }}>
				<InputLabel id="object-select-helper-label">Objekto tipas</InputLabel>
				<Select
					labelId="object-select-helper-label"
					id="object-select-helper"
					value={props.selectedObjectFilter}
					label="Objekto tipas"
					onChange={(event) => handleSelect(event)}
				>
					<MenuItem value="">
						<em>Visi</em>
					</MenuItem>
					{objectAlias.map((object, index) => (
						<MenuItem key={index} value={object.code}>
							{object.alias}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<FormControl sx={{ ml:1, mt: 1, width: 1 }}>
				<InputLabel id="memory-select-helper-label">Atminimo tipas</InputLabel>
				<Select
					labelId="memory-select-helper-label"
					id="memory-select-helper"
					value={props.selectedObjectFilter}
					label="Atminimo tipas"
					onChange={(event) => handleSelect(event)}
				>
					<MenuItem value="">
						<em>Visi</em>
					</MenuItem>
					{memoryAlias.map((object, index) => (
						<MenuItem key={index} value={object.code}>
							{object.alias}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<Button
				variant="contained"
				disableElevation
				sx={{ m: 1, width: 1 }}
				onClick={() => {
					props.setSelectedObjectFilter("")
					props.setSelectedMemoryFilter("")
				}}
			>
				Išvalyti filtrus
			</Button>
		</div>
	)
}

export default Filter

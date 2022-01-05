import React, { useEffect, useState } from "react"
import { objects } from "../map/ArcgisItems"
import "../../css/table.css"

const Filter = (props) => {
	const objFilter = React.useRef(null)
	const memFilter = React.useRef(null)

	const [objectAlias, setObjectAlias] = useState([])
	const [memoryAlias, setMemoryAlias] = useState([])

	let tempObjectAlias = []
	let tempMemoryAlias = []

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

		objFilter.current.addEventListener("calciteSelectChange", () => {
			props.setSelectedObject(objFilter.current.selectedOption.value)
		})
		memFilter.current.addEventListener("calciteSelectChange", () => {
			props.setSelectedMemory(memFilter.current.selectedOption.value)
		})
	}, [])

	return (
		<div className="filter">
			<div className="add-margin-bottom"></div>
			<calcite-label alignment="center" layout="default" status="idle">
				<b>Objektų filtravimo parinktys</b>
			</calcite-label>
			<div className="add-margin-bottom"></div>
			<calcite-select ref={objFilter} width="full" id="object-filter-group">
				<calcite-option value="0" selected>
					Pasirinkti objekto tipą
				</calcite-option>
				{objectAlias.map((object, index) => (
					<calcite-option key={index} value={object.code}>
						{object.alias}
					</calcite-option>
				))}
			</calcite-select>
			<div className="add-margin-bottom"></div>
			<calcite-select ref={memFilter} width="full" id="memory-filter-group">
				<calcite-option value="0" selected>
					Pasirinkti atminimo tipą
				</calcite-option>
				{memoryAlias.map((object, index) => (
					<calcite-option key={index} value={object.code}>
						{object.alias}
					</calcite-option>
				))}
			</calcite-select>
			<div className="add-margin-bottom"></div>
			<calcite-button
				onClick={() => {
					props.setSelectedObject("0")
					props.setSelectedMemory("0")
				}}
				appearance="solid"
				color="blue"
				width="full"
				id="filter-show-all"
			>
				Rodyti visus
			</calcite-button>
			<div className="add-margin-bottom"></div>
			<calcite-label alignment="center" layout="default" status="idle">
				<b>Objektų sąrašas</b>
			</calcite-label>
			<div id="object-table-content"></div>
		</div>
	)
}

export default Filter

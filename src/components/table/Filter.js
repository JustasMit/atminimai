import React from "react"
import { objects } from "../map/ArcgisItems"
import "../../css/table.css"

const Filter = (props) => {
	const objFilter = React.useRef(null)
	const memFilter = React.useRef(null)
    const objectAlias = []
	const memoryAlias = []

	React.useEffect(() => {
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
						objectAlias.push(objCodeAlias)
					}
				} else if (response.features[0].layer.fields[field].name === "ATMINT_TIP") {
					for (let code in response.features[0].layer.fields[field].domain.codedValues) {
						const objCodeAlias = {}
						objCodeAlias.alias = response.features[0].layer.fields[field].domain.codedValues[code].name
						objCodeAlias.code = response.features[0].layer.fields[field].domain.codedValues[code].code
						memoryAlias.push(objCodeAlias)
					}
				}
			}

			//for (let el in objectAlias) {
			//	const filterElement = document.createElement("calcite-option")
			//	filterElement.innerHTML = `${objectAlias[el].alias}`
            //    filterElement.id = `${Number(el) + 1}`
			//}
            //
			//for (let el in orderedMemoryAlias) {
            //    const filterElement = document.createElement("calcite-option")
			//	filterElement.innerHTML = `${orderedMemoryAlias[el].alias}`
            //    filterElement.id = `${Number(el) + 1}`
			//}
		})
		.catch((error) => {
			console.error(error)
		})

        console.log(objectAlias)
        var orderedMemoryAlias = memoryAlias.sort((a, b) => {
            if (a.code !== undefined && b.code !== undefined) {
                return a.code > b.code ? 1 : -1
            } else {
                return a.code !== undefined ? 1 : -1
            }
        })
        console.log(orderedMemoryAlias)

		objFilter.current.addEventListener("calciteSelectChange", () => {
			props.setFilter(objFilter.current.selectedOption.id)
		})
		memFilter.current.addEventListener("calciteSelectChange", () => {
			props.setFilter(memFilter.current.selectedOption.id)
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
				<calcite-option value="0" selected id="0">
					Pasirinkti objekto tipą
				</calcite-option>
			</calcite-select>
			<div className="add-margin-bottom"></div>
			<calcite-select ref={memFilter} width="full" id="memory-filter-group">
				<calcite-option selected id="0">
					Pasirinkti atminimo tipą
				</calcite-option>
			</calcite-select>
			<div className="add-margin-bottom"></div>
			<calcite-button appearance="solid" color="blue" width="full" id="filter-show-all">
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

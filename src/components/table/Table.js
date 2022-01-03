import React from "react"
import "../../css/table.css"

const Table = () => {
	return (
		<div className="objectTable">
			<div className="add-margin-bottom"></div>
			<calcite-label alignment="center" layout="default" status="idle">
				<b>Objektų filtravimo parinktys</b>
			</calcite-label>
			<div className="add-margin-bottom"></div>
			<calcite-select width="full" id="object-filter-group">
				<calcite-option selected id="0">
					Pasirinkti objekto tipą
				</calcite-option>
			</calcite-select>
			<div className="add-margin-bottom"></div>
			<calcite-select width="full" id="memory-filter-group">
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

export default Table

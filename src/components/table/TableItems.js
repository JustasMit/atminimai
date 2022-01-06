import React from "react"
import "../../css/table.css"

const TableItems = (props) => {
	let kazkas = (event) => {
		console.log(event.currentTarget.value)
	}
    console.log(props.filterLoading)
	return (
		<calcite-pick-list loading={props.filterLoading ? true : false}>
			{Object.keys(props.objects).map((object) => (
				<calcite-pick-list-item
					onClick={kazkas}
					label={props.objects[object].attributes.OBJ_PAV}
					value={props.objects[object].attributes.OBJECTID}
					key={props.objects[object].attributes.OBJECTID}
				></calcite-pick-list-item>
			))}
		</calcite-pick-list>
	)
}
export default TableItems

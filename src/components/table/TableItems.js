import React from "react"
import "../../css/table.css"

const TableItems = (props) => {
	let kazkas = (target) => {
		console.log(target.currentTarget.id)
	}

	return (
		<div className="table-list">
			{Object.keys(props.objects).map((object) => (
				<calcite-button
					onClick={kazkas}
					id={props.objects[object].attributes.OBJECTID}
					key={props.objects[object].attributes.OBJECTID}
					appearance="clear"
					width="full"
				>
					{props.objects[object].attributes.OBJ_PAV}
				</calcite-button>
			))}
		</div>
	)
}
export default TableItems

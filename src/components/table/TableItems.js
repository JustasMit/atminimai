import React from "react"
import "../../css/table.css"
import { useNavigate } from "react-router-dom"

const TableItems = (props) => {
    const navigate = useNavigate()
	const kazkas = (event) => {
        navigate(`/${event.currentTarget.value}`)
	}

	return (
		<div className="table-list">
			<calcite-pick-list loading={props.filterLoading ? true : false}>
				{Object.keys(props.objects).map((object) => (
					<calcite-pick-list-item
						onClick={kazkas}
						label={props.objects[object].attributes.OBJ_PAV}
						value={props.objects[object].attributes.GlobalID.replace(/[{}]/g, "")}
						key={props.objects[object].attributes.OBJECTID}
					></calcite-pick-list-item>
				))}
			</calcite-pick-list>
		</div>
	)
}
export default TableItems

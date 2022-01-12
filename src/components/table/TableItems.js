import React from "react"
import "../../css/table.css"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Paper from "@mui/material/Paper"
import { useNavigate } from "react-router-dom"

const TableItems = (props) => {
	const navigate = useNavigate()

	return (
		<List sx={{ m: 1, width: 1 }} style={{ maxHeight: "75vh", overflowY: "auto", overflowX: "hidden" }} component="nav">
			{Object.keys(props.objects).map((object) => (
				<ListItemButton
					onClick={() => {
						props.setSelectedObject(`${props.objects[object].attributes.GlobalID.replace(/[{}]/g, "")}`)
						navigate(`${props.objects[object].attributes.GlobalID.replace(/[{}]/g, "")}`)
					}}
					selected={props.objects[object].attributes.GlobalID.replace(/[{}]/g, "") === props.selectedObject}
					key={props.objects[object].attributes.GlobalID.replace(/[{}]/g, "")}
				>
					<ListItemText primary={props.objects[object].attributes.OBJ_PAV} />
				</ListItemButton>
			))}
		</List>
	)
}
export default TableItems

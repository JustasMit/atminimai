import React from "react"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import { useNavigate } from "react-router-dom"

const TableItems = (props) => {
	const navigate = useNavigate()

	return (
		<List
			sx={{ mr: 1, ml: 1, width: 1 }}
			style={{ height: "100%", overflowY: "scroll", overflowX: "hidden" }}
			component="nav"
		>
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

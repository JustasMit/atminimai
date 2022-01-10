import React from "react"
import "../../css/table.css"
import { useNavigate } from "react-router-dom"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Box from "@mui/material/Box"

const TableItems = (props) => {
	const navigate = useNavigate()

	return (
		<Box className="table-list" sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
			<List component="nav">
				{Object.keys(props.objects).map((object) => (
					<ListItemButton
						onClick={() => navigate(`${props.objects[object].attributes.GlobalID.replace(/[{}]/g, "")}`)}
						key={props.objects[object].attributes.GlobalID.replace(/[{}]/g, "")}
					>
						<ListItemText primary={props.objects[object].attributes.OBJ_PAV} />
					</ListItemButton>
				))}
			</List>
		</Box>
	)
}
export default TableItems

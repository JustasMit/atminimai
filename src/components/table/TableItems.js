import React from "react"
import { useNavigate } from "react-router-dom"

import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import ListSubheader from "@mui/material/ListSubheader"

const TableItems = (props) => {
	const navigate = useNavigate()

	return (
		<List style={{ height: "100%", width: "100%", overflowY: "scroll", overflowX: "hidden" }}>
			{
				//<ListSubheader disableSticky={true}>Objektų sąrašas</ListSubheader>
			}
			{Object.keys(props.searchObjectsList).map((object) => (
				<ListItemButton
					sx={{ py: 0 }}
					divider
					onClick={() => {
						props.setSelectedObject(
							`${props.searchObjectsList[object].attributes.GlobalID.replace(/[{}]/g, "")}`
						)
						navigate(`objektas/${props.searchObjectsList[object].attributes.GlobalID.replace(/[{}]/g, "")}`)
					}}
					selected={
						props.searchObjectsList[object].attributes.GlobalID.replace(/[{}]/g, "") === props.selectedObject
					}
					key={props.searchObjectsList[object].attributes.GlobalID.replace(/[{}]/g, "")}
				>
					<ListItemText primary={props.searchObjectsList[object].attributes.OBJ_PAV} />
				</ListItemButton>
			))}
		</List>
	)
}
export default TableItems

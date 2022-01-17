import React from "react"

import ToggleButton from "@mui/material/ToggleButton"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

const TableToggle = (props) => {
	return (
		<ToggleButton
			sx={{
				bgcolor: "primary.main",
				width: "20px",
				height: "100vh",
				borderRadius: 0,
				"&:hover": {
					bgcolor: "primary.main",
				},
			}}
			value="check"
			selected={false}
			onChange={() => {
				props.setVisible(!props.visible)
			}}
		>
			{props.visible ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
		</ToggleButton>
	)
}

export default TableToggle

import React, { useEffect } from "react"
import ReactDOM from "react-dom"

import ToggleButton from "@mui/material/ToggleButton"
import Paper from "@mui/material/Paper"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

import { view } from "../../utils/arcgisItems"

const toggleNode = document.createElement("div")

const TableToggle = (props) => {
	useEffect(() => {
		if (props.visible) {
			ReactDOM.render(
				<Paper>
					<ToggleButton
						value="check"
						selected={false}
						color="secondary"
						onChange={() => {
							props.setVisible(false)
						}}
					>
						<ArrowBackIcon />
					</ToggleButton>
				</Paper>,
				toggleNode
			)
		} else {
			ReactDOM.render(
				<Paper>
					<ToggleButton
						value="check"
						selected={true}
						onChange={() => {
							props.setVisible(true)
						}}
					>
						<ArrowForwardIcon />
					</ToggleButton>
				</Paper>,
				toggleNode
			)
		}
		view.ui.add(toggleNode, "bottom-left")
	})

	return null
}

export default TableToggle

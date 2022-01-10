import React, { useRef, useEffect } from "react"
import { objects, view, searchWidget } from "../../utils/arcgisItems"
import displayFeatures from "../../utils/displayFeatures"
import { Outlet } from "react-router-dom"
import ReactDOM from "react-dom"

import ToggleButton from "@mui/material/ToggleButton"
import Paper from "@mui/material/Paper"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import "../../css/map.css"

const toggleNode = document.createElement("div")

const ObjectMap = (props) => {
	const mapDiv = useRef(null)

	useEffect(() => {
		objects.when(() => {
			view.container = mapDiv.current

			view.ui.add(searchWidget, {
				position: "top-left",
				index: 0,
			})
		}, [])
	})

	useEffect(() => {
		displayFeatures(props.objects)
	}, [props.objects])

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

	return (
		<div style={{ width: props.visible ? "75%" : "100%" }} className="map" ref={mapDiv}>
			<Outlet />
		</div>
	)
}

export default ObjectMap

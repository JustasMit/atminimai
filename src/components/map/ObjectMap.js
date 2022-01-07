import React, { useRef, useEffect } from "react"
import { objects, view, searchWidget } from "../../utils/arcgisItems"
import displayFeatures from "../../utils/displayFeatures"
import { Outlet } from "react-router-dom"

import "../../css/map.css"

const toggleDiv = document.createElement("div")
const toggleButton = document.createElement("calcite-button")
toggleButton.setAttribute("appearance", "outline")
toggleButton.setAttribute("color", "blue")
toggleDiv.appendChild(toggleButton)

const ObjectMap = (props) => {
	const mapDiv = useRef(null)

	useEffect(() => {
		objects.when(() => {
			view.container = mapDiv.current

			view.ui.add(searchWidget, {
				position: "top-left",
				index: 0,
			})
			toggleButton.onclick = () => {
				if (props.visible) {
					toggleButton.innerHTML = `<ASD`
					props.setVisible(false)
				} else {
					toggleButton.innerHTML = `ASD`
					props.setVisible(true)
				}
			}
		}, [])
	})

	useEffect(() => {
		displayFeatures(props.objects)
	}, [props.objects])

	useEffect(() => {
		if (props.visible) {
			toggleButton.innerHTML = `<ASD`
		} else {
			toggleButton.innerHTML = `ASD`
		}

		view.ui.add(toggleButton, {
			position: "bottom-left",
			index: 0,
		})
	})

	return (
		<div style={{ width: props.visible ? "75%" : "100%" }} className="map" ref={mapDiv}>
			<Outlet />
		</div>
	)
}

export default ObjectMap

import React, { useRef, useEffect } from "react"
import { objects, view, searchWidget } from "../../utils/arcgisItems"
import displayFeatures from "../../utils/displayFeatures"
import { Outlet } from "react-router-dom"
import "../../css/map.css"

const ObjectMap = (props) => {
	const mapDiv = useRef(null)

	useEffect(() => {
		view.container = mapDiv.current

		view.ui.add(
			searchWidget,
			{
				position: "top-left",
				index: 0,
			},
			[]
		)
	})

	useEffect(() => {
		displayFeatures(props.objects)
	}, [props.objects])

	return (
		// <div style={{ width: props.visible ? "75%" : "100%" }} className="map" ref={mapDiv}>
		// 	<Outlet />
		// </div>
		<div className="map" ref={mapDiv}>
			<Outlet />
		</div>
	)
}

export default ObjectMap

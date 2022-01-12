import React, { useRef, useEffect } from "react"
import { view } from "../../utils/arcgisItems"
import displayFeatures from "../../utils/displayFeatures"
import { Outlet } from "react-router-dom"
import "../../css/map.css"

const ObjectMap = (props) => {
	const mapDiv = useRef(null)

	useEffect(() => {
		view.container = mapDiv.current
	}, [])

	useEffect(() => {
		displayFeatures(props.objects)
	}, [props.objects])

	return (
		<div className="map" ref={mapDiv}>
			<Outlet />
		</div>
	)
}

export default ObjectMap

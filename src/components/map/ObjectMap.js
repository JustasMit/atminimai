import React, { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { view, objects } from "../../utils/arcgisItems"
import * as watchUtils from "@arcgis/core/core/watchUtils"
import "../../css/map.css"

const ObjectMap = () => {
	const navigate = useNavigate()
	const mapDiv = useRef(null)

	useEffect(() => {
		view.container = mapDiv.current
		view.on("click", (event) => {
			view.whenLayerView(objects).then((objectsView) => {
				watchUtils
					.whenNotOnce(objectsView, "updating")
					.then(() => {
						return objectsView.queryFeatures({
							geometry: event.mapPoint,
							distance: view.resolution * 6,
							spatialRelationship: "intersects",
						})
					})
					.then((response) => {
						navigate(`objektas/${response.features[0].attributes.GlobalID.replace(/[{}]/g, "")}`)
					})
			})
		})
	}, [])

	return <div className="map" ref={mapDiv}></div>
}

export default ObjectMap

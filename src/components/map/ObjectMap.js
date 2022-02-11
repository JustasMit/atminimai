import React, { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { view, objects, bgExpand, locateWidget } from "../../utils/arcgisItems"
import * as watchUtils from "@arcgis/core/core/watchUtils"
import "../../css/map.css"

const ObjectMap = (props) => {
	const navigate = useNavigate()
	const mapDiv = useRef(null)

	useEffect(() => {
		view.container = mapDiv.current

		view.ui.add(bgExpand, "top-left")
		view.ui.add(locateWidget, "top-left")

		view.whenLayerView(objects).then((objectsView) => {
			watchUtils.whenFalseOnce(objectsView, "updating").then(() => {
				objectsView
					.queryFeatures({
						outFields: ["OBJ_PAV", "TIPAS", "ATMINT_TIP", "GlobalID"],
						where: "",
						returnGeometry: false,
					})
					.then((response) => {
						if (response.features.length) {
							props.setInitialObjectsList(response.features)
              props.setInitialLoading(false)
						}
					})
					.catch((error) => {
						console.error(error)
					})
			})
		})

		view.on("click", (event) => {
			bgExpand.collapse()

			const opts = {
				include: objects,
			}
			view.hitTest(event, opts).then((response) => {
				if (response.results.length) {
					props.setPage(1)
					navigate(`objektas/${response.results[0].graphic.attributes.GlobalID.replace(/[{}]/g, "")}`)
				}
			})

			// view.whenLayerView(objects).then((objectsView) => {
			// 	watchUtils
			// 		.whenNotOnce(objectsView, "updating")
			// 		.then(() => {
			// 			return objectsView.queryFeatures({
			// 				geometry: event.mapPoint,
			// 				distance: view.resolution * 6,
			// 				spatialRelationship: "intersects",
			// 			})
			// 		})
			// 		.then((response) => {
			// 			if (response.features.length) {
			// 				props.setPageCount(response.features.length)
			// 				props.setPage(1)
			// 				navigate(`objektas/${response.features[0].attributes.GlobalID.replace(/[{}]/g, "")}`)
			// 			}
			// 		})
			// })
		})
	}, [])

	return <div className="map" ref={mapDiv}></div>
}

export default ObjectMap

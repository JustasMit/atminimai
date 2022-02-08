import React, { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { view, objects, map, basemap1, basemap2 } from "../../utils/arcgisItems"
import * as watchUtils from "@arcgis/core/core/watchUtils"
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery"
import Expand from "@arcgis/core/widgets/Expand"
import "../../css/map.css"

const ObjectMap = (props) => {
	const navigate = useNavigate()
	const mapDiv = useRef(null)

	useEffect(() => {
		view.container = mapDiv.current

		const basemapGallery = new BasemapGallery({
			view: view,
			source: [basemap1, basemap2],
		})
		const bgExpand = new Expand({
			view: view,
			content: basemapGallery,
			collapseIconClass: "esri-icon-left",
			collapseTooltip: "Suskleisti",
			expandTooltip: "Išskleisti bazinius žemėlapius",
		})
		view.ui.add(bgExpand, {
			position: "top-left",
		})

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
						if (response.features.length) {
							props.setPageCount(response.features.length)
							props.setPage(1)
							navigate(`objektas/${response.features[0].attributes.GlobalID.replace(/[{}]/g, "")}`)
						}
					})
			})
		})
	}, [])

	return <div className="map" ref={mapDiv}></div>
}

export default ObjectMap

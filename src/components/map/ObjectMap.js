import React, { useRef, useEffect } from "react"
import { objects, view } from "../../utils/arcgisItems"
import displayFeatures from "../../utils/displayFeatures"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "../../css/map.css"

const ObjectMap = (props) => {
	const navigate = useNavigate()
	const mapDiv = useRef(null)

	useEffect(() => {
		view.container = mapDiv.current

		view.on("click", (event) => {
			view.hitTest(event).then(function (response) {
				if (response.results.length) {
					props.setQueryObjects(response.results)
					//for (let graphic in response.results) {
					//	console.log(response.results[graphic].graphic.attributes)
					//	console.log(response.results[graphic])
					//}
					navigate(response.results[0].graphic.attributes.GlobalID.replace(/[{}]/g, ""))
				}
			})
		})
		// view.on("click", (event) => {
		// 	const point = view.toMap(event)

		// 	objects
		// 		.queryFeatures({
		// 			geometry: point,
		// 			distance: 5 * view.resolution,
		// 			units: "meters",
		// 			spatialRelationship: "intersects",
		// 			returnGeometry: false,
		// 			outFields: ["GlobalID"],
		// 			where: props.filter,
		// 		})
		// 		.then((response) => {
		// 			if (!!response.features.length) {
		//                 navigate(response.features[0].attributes.GlobalID.replace(/[{}]/g, ""))
		// 			} else {
		// 				return
		// 			}
		// 		})
		// 		.catch((error) => {
		// 			console.error(error)
		// 		})
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

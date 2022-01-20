import React, { useRef, useEffect } from "react"
import { objects, view } from "../../utils/arcgisItems"
import displayFeatures from "../../utils/displayFeatures"
import { Outlet, useNavigate } from "react-router-dom"
import "../../css/map.css"

const ObjectMap = (props) => {
	const navigate = useNavigate()
	const mapDiv = useRef(null)

	useEffect(() => {
		view.container = mapDiv.current
		view.on("click", (event) => {
			view.hitTest(event).then((response) => {
				if (response.results.length) {
					const filteredResponse = []
					Object.keys(response.results).forEach((result) => {
						if (!response.results[result].graphic.attributes.highlight) {
							filteredResponse.push(response.results[result])
						}
					})
					console.log(filteredResponse)
					props.setQueryObjects(filteredResponse)
					props.setObjectPopupPage(1)

					navigate(`object/${filteredResponse[0].graphic.attributes.GlobalID.replace(/[{}]/g, "")}`)
				}
			})
		})
	}, [])

	useEffect(() => {
		displayFeatures(props.objects)
	}, [props.objects])

	return (
		<>
			<div className="map" ref={mapDiv}></div>
			<Outlet />
		</>
	)
}

export default ObjectMap

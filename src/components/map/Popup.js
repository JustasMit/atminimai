import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import ReactDOM from "react-dom"
import { view, objects } from "../../utils/arcgisItems"
import ObjectPopupContent from "./ObjectPopupContent"

const popupNode = document.createElement("div")

const Popup = () => {
	const { objectID } = useParams()

	const setObjectPopupContent = async (response) => {
		return "ASDAFWG156156"
	}

	useEffect(() => {
		objects
			.queryFeatures({
				where: `GlobalID = '${objectID}'`,
				returnGeometry: true,
				outFields: ["*"],
			})
			.then((response) => {
				if (!!response.features.length) {
					view.goTo({
						target: response.features[0].geometry,
						zoom: 7,
					})

					ReactDOM.render(
						<ObjectPopupContent />,
						popupNode
					)

					console.log(response)
				} else {
					return
				}
			})
			.catch((error) => {
				console.error(error)
			})
		view.ui.add(popupNode, "top-right")
		console.log(objectID, "popup")
	}, [objectID])

	return null
}

export default Popup

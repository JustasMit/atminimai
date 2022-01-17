import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import ReactDOM from "react-dom"
import { view, objects } from "../../utils/arcgisItems"
import ObjectPopupContent from "./ObjectPopupContent"

const popupNode = document.createElement("div")

const Popup = (props) => {
	const { globalID } = useParams()

	useEffect(() => {
		console.log(globalID)
		ReactDOM.render(
			<ObjectPopupContent
				globalID={globalID}
                queryObjects={props.queryObjects}
				objectPopupPage={props.objectPopupPage}
				setObjectPopupPage={props.setObjectPopupPage}
			/>,
			popupNode
		)
		view.ui.add(popupNode, "top-right")
	}, [globalID])

	return null
}

export default Popup

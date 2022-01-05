import React, { useRef, useEffect } from "react"
import { objects, view, searchWidget } from "./ArcgisItems"
//import TableToggle from "./TableToggle"
//extend react component? render()?

import "../../css/map.css"

const toggleDiv = document.createElement("div")
const toggleButton = document.createElement("calcite-button")
toggleButton.setAttribute("appearance", "outline")
toggleButton.setAttribute("color", "blue")
toggleDiv.appendChild(toggleButton)

const ObjectMap = (props) => {
	const mapDiv = useRef(null)

	//const handleToggle = () => {
	//	if (props.visible) {
	//		toggleButton.childNodes[1].innerHTML = `<calcite-icon icon="chevron-left" scale="m"></calcite-icon>`
	//		props.setVisible(false)
	//	} else {
	//		toggleButton.childNodes[1].innerHTML = `<calcite-icon icon="chevron-right" scale="m"></calcite-icon>`
	//		props.setVisible(true)
	//	}
	//}

	useEffect(() => {
		objects.when(() => {
			view.container = mapDiv.current
			view.extent = objects.fullExtent

			view.ui.add(searchWidget, {
				position: "top-left",
				index: 0,
			})
			toggleButton.onclick = () => {
				if (props.visible) {
					toggleButton.innerHTML = `<calcite-icon icon="chevron-left" scale="m"></calcite-icon>`
					props.setVisible(false)
				} else {
					toggleButton.innerHTML = `<calcite-icon icon="chevron-right" scale="m"></calcite-icon>`
					props.setVisible(true)
				}
			}
		}, [])
	})

	useEffect(() => {
		if (props.visible) {
			toggleButton.innerHTML = `<calcite-icon icon="chevron-left" scale="m"></calcite-icon>`
		} else {
			toggleButton.innerHTML = `<calcite-icon icon="chevron-right" scale="m"></calcite-icon>`
		}

		view.ui.add(toggleButton, {
			position: "bottom-left",
			index: 0,
		})
	})
	return <div style={{width: props.visible ? "75%" : "100%"}} className="map" ref={mapDiv}></div>
}

export default ObjectMap

//import React, { useState } from 'react';
//import { CalciteButton, CalciteIcon, CalciteSlider } from '@esri/calcite-components-react';
//import '@esri/calcite-components/dist/calcite/calcite.css';
//import './ObjectMap.css';
//
//function ObjectMap() {
//  const [sliderValue, setSliderValue] = useState(50);
//
//  return (
//    <div className="ObjectMap">
//      <h1>Hello, React</h1>
//      <CalciteButton>Test</CalciteButton>
//      <CalciteIcon icon="banana" />
//      <CalciteSlider
//        min="1"
//        max="100"
//        value={sliderValue}
//        step="1"
//        onCalciteSliderUpdate={(e) => setSliderValue(e.target.value)} />
//      <p>The slider currently has a value of {sliderValue}</p>
//    </div>
//  );
//}
//
//export default ObjectMap;

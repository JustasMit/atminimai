import React, { useRef, useEffect, useState } from "react"
import ReactDOM from "react-dom"

import { view } from "./ArcgisItems"

const node = document.createElement("div")
node.innerHTML = `
    <calcite-button
        appearance="outline"
        color="blue"
        id="object-table-toggle-button"
    >
        <calcite-icon icon="chevron-right" scale="m"></calcite-icon>
    </calcite-button>
`
node.onclick = () => {
    console.log("bbd")
}
view.ui.add(node, {
    position: "bottom-left",
    index: 0,
})

const TableToggle = (props) => {
	const toggleButton = React.useRef(null)
	const handleToggle = () => {
		if (props.visible === true) {
			props.setVisible(false)
			//console.log("toggle false", props.visible)
			//toggleButton.current.innerHTML = `<calcite-icon icon="chevron-right" scale="m"></calcite-icon>`
		} else {
			props.setVisible(true)
			//console.log("toggle true")
			//toggleButton.current.innerHTML = `<calcite-icon icon="chevron-left" scale="m"></calcite-icon>`
		}
	}
	useEffect(() => {
		console.log("mounted")
	}, [])

	return (
        null
		//<calcite-button
		//	//ref={toggleButton}
		//	onClick={() => props.setVisible(!props.visible)}
		//	appearance="outline"
		//	color="blue"
		//	id="object-table-toggle-button"
		//>
		//	<calcite-icon icon="chevron-right" scale="m"></calcite-icon>
		//</calcite-button>
	)
}

export default TableToggle

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

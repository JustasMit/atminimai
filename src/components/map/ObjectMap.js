import React, { useRef, useEffect } from "react"
import { objects, view, searchWidget } from "./ArcgisItems"

import "../../css/map.css"

const ObjectMap = () => {
	const mapDiv = useRef(null)

	useEffect(() => {
		objects.when(() => {
			view.container = mapDiv.current
			view.extent = objects.fullExtent
			view.ui.add(searchWidget, {
				position: "top-left",
				index: 0,
			})
		})
	}, [])

	return <div className="map" ref={mapDiv}></div>
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

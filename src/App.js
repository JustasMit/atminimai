import React, { useRef, useEffect } from "react"
import Bookmarks from "@arcgis/core/widgets/Bookmarks"
import Expand from "@arcgis/core/widgets/Expand"
import MapView from "@arcgis/core/views/MapView"
import WebMap from "@arcgis/core/WebMap"

import "./App.css"

function App() {
	const mapDiv = useRef(null)

	useEffect(() => {
		if (mapDiv.current) {
			/**
			 * Initialize application
			 */
			const webmap = new WebMap({
				portalItem: {
					id: "aa1d3f80270146208328cf66d022e09c",
				},
			})

			const view = new MapView({
				container: mapDiv.current,
				map: webmap,
			})

			const bookmarks = new Bookmarks({
				view,
				// allows bookmarks to be added, edited, or deleted
				editingEnabled: true,
			})

			const bkExpand = new Expand({
				view,
				content: bookmarks,
				expanded: true,
			})

			// Add the widget to the top-right corner of the view
			view.ui.add(bkExpand, "top-right")

			// bonus - how many bookmarks in the webmap?
			webmap.when(() => {
				if (webmap.bookmarks && webmap.bookmarks.length) {
					console.log("Bookmarks: ", webmap.bookmarks.length)
				} else {
					console.log("No bookmarks in this webmap.")
				}
			})
		}
	}, [])

	return <div className="mapDiv" ref={mapDiv}></div>
}

export default App

//import React, { useState } from 'react';
//import { CalciteButton, CalciteIcon, CalciteSlider } from '@esri/calcite-components-react';
//import '@esri/calcite-components/dist/calcite/calcite.css';
//import './App.css';
//
//function App() {
//  const [sliderValue, setSliderValue] = useState(50);
//
//  return (
//    <div className="App">
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
//export default App;

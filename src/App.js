import React, { useRef, useEffect } from "react"
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import TileLayer from "@arcgis/core/layers/TileLayer"
import Search from "@arcgis/core/widgets/Search"

import "./App.css"

const App = () => {
	const mapDiv = useRef(null)

	useEffect(() => {
		if (mapDiv.current) {
			const objects = new FeatureLayer({
				url: "https://atviras.vplanas.lt/arcgis/rest/services/VilniausDNR/VilniausDNR/MapServer/0",
				outFields: ["*"],
				title: "Lentelės",
				minScale: 0,
				maxScale: 0,
			})

			const vilnius = new TileLayer({
				url: "https://atviras.vplanas.lt/arcgis/rest/services/Baziniai_zemelapiai/Vilnius_basemap_light_LKS/MapServer",
				title: "Vilnius",
				minScale: 0,
				maxScale: 0,
			})

			const map = new Map({
				layers: [vilnius, objects],
			})

			const view = new MapView({
				container: mapDiv.current,
				map: map,
				popup: {
					dockEnabled: true,
					dockOptions: {
						buttonEnabled: false,
						breakpoint: false,
						position: "top-right",
					},
				},
			})

			const source = [
				{
					layer: objects,
					placeholder: "Paieška...",
					searchFields: ["OBJ_PAV"],
					suggestionTemplate: "{OBJ_PAV} ({VIETA})",
					zoomScale: 2000,
				},
			]

			const searchWidget = new Search({
				view: view,
				sources: source,
				includeDefaultSources: false,
				locationEnabled: false,
				exactMatch: false,
			})

			objects.when(() => {
				view.extent = objects.fullExtent
				console.log(objects)
			})

			view.ui.add(searchWidget, {
				position: "top-left",
				index: 0,
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

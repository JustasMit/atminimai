import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import TileLayer from "@arcgis/core/layers/TileLayer"

export const objects = new FeatureLayer({
	url: "https://atviras.vplanas.lt/arcgis/rest/services/VilniausDNR/VilniausDNR/MapServer/0",
	outFields: ["*"],
	title: "Lentelės",
	minScale: 0,
	maxScale: 0,
})

export const vilnius = new TileLayer({
	url: "https://atviras.vplanas.lt/arcgis/rest/services/Baziniai_zemelapiai/Vilnius_basemap_light_LKS/MapServer",
	title: "Vilnius",
	minScale: 0,
	maxScale: 0,
})

export const map = new Map({
	layers: [vilnius],
})

export const view = new MapView({
	map: map,
	zoom: 2,
	slider: false,
	popup: {
		dockEnabled: true,
		dockOptions: {
			buttonEnabled: false,
			breakpoint: false,
			position: "top-right",
		},
	},
	ui: {
		components: ["attribution"],
	},
})

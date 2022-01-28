import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import TileLayer from "@arcgis/core/layers/TileLayer"

let objectsRenderer = {
	type: "simple",
	symbol: {
		type: "simple-marker",
		size: 12,
		color: "black",
		outline: {
			width: 0.5,
			color: "white",
		},
	},
}

export const objects = new FeatureLayer({
	url: "https://utility.arcgis.com/usrsvcs/servers/14627426b83f4fcf8198764db38287f3/rest/services/VilniausDNR/VilniausDNR/MapServer/0",
	outFields: ["*"],
	title: "Lentelės",
	renderer: objectsRenderer,
	minScale: 0,
	maxScale: 0,
})

export const persons = new FeatureLayer({
	url: "https://utility.arcgis.com/usrsvcs/servers/14627426b83f4fcf8198764db38287f3/rest/services/VilniausDNR/VilniausDNR/MapServer/2",
	outFields: ["*"],
	title: "Asmenys",
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
	layers: [vilnius, objects],
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

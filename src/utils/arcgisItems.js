import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import TileLayer from "@arcgis/core/layers/TileLayer"

const objectsRenderer = {
	type: "unique-value",
	field: "TIPAS",
	uniqueValueInfos: [
		{
			value: "1",
			symbol: {
				type: "picture-marker",
				url: "Atmint_atminimo_lenta.svg",
				width: "36px",
				height: "36px",
			},
		},
		{
			value: "2",
			symbol: {
				type: "picture-marker",
				url: "Atmint_skulptura.svg",
				width: "36px",
				height: "36px",
			},
		},
		{
			value: "3",
			symbol: {
				type: "picture-marker",
				url: "Atmint_atminimo_lenta_bareljefas.svg",
				width: "36px",
				height: "36px",
			},
		},
		{
			value: "4",
			symbol: {
				type: "picture-marker",
				url: "Atmint_freska.svg",
				width: "36px",
				height: "36px",
			},
		},
		{
			value: "5",
			symbol: {
				type: "picture-marker",
				url: "Atmint_pavadinimo_lentele.svg",
				width: "36px",
				height: "36px",
			},
		},
		{
			value: "6",
			symbol: {
				type: "picture-marker",
				url: "Atmint_uzrasas.svg",
				width: "36px",
				height: "36px",
			},
		},
		{
			value: "7",
			symbol: {
				type: "picture-marker",
				url: "Atmint_vietos_pazymejimas.svg",
				width: "36px",
				height: "36px",
			},
		},
		{
			value: "8",
			symbol: {
				type: "picture-marker",
				url: "Atmint_paminklas.svg",
				width: "36px",
				height: "36px",
			},
		},
	],
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

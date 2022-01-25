import { view } from "./arcgisItems"

const displayFeatures = (results) => {
	results.features.map((feature) => {
		return feature
	})
	view.graphics.removeAll()
	view.graphics.addMany(results.features)
}

export default displayFeatures

import { view } from "./arcgisItems"

const displayFeatures = (results) => {  
    //const popupTemplate = {
    //    title: "{OBJ_PAV}",
    //    content: "{OBJEKT_TXT}",
    //}

    results.features.map((feature) => {
        //feature.popupTemplate = popupTemplate
        return feature
    })

    //view.popup.close()
    view.graphics.removeAll()
    view.graphics.addMany(results.features)
}

export default displayFeatures

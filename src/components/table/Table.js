import React, {useEffect} from "react"
import Filter from "./Filter"
import TableItems from "./TableItems"
import { objects } from "../../utils/arcgisItems"
import "../../css/table.css"

const Table = (props) => {
    useEffect(() =>{
        objects
        .queryFeatures({
            outFields: ["*"],
            where: props.filter,
            returnGeometry: true,
        })
        .then((response) => {
            props.setObjectsList(response.features)
            if (response.features.length === 0) {
                alert("Nerasta objektų!\n")
                props.setSelectedObject("0")
                props.setSelectedMemory("0")
            }
        })
        .catch((error) => {
            console.error(error)
        })

    }, [props.filter])

	return (
		<div className="table">
			<Filter
				setSelectedObject={props.setSelectedObject}
				selectedObject={props.selectedObject}
				setSelectedMemory={props.setSelectedMemory}
				selectedMemory={props.selectedMemory}
                setObjectsList={props.setObjectsList}
                setFilter={props.setFilter}
			/>
			<TableItems objects={props.objects} />
		</div>
	)
}

export default Table

import React, { useEffect, useState } from "react"
import { view, objects } from "../../utils/arcgisItems"

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const ObjectPopupContent = (props) => {
	const [objectAttr, setObjectAttr] = useState([])

	useEffect(() => {
		const allAttributes = []
		objects
			.queryFeatures({
				outFields: ["*"],
				where: `GlobalID = '${props.globalID}'`,
			})
			.then(function (response) {
				let count = 0
				for (let attr in response.features[0].attributes) {
					if (
						response.features[0].attributes[attr] === null ||
						response.features[0].attributes[attr] === "" ||
						response.features[0].attributes[attr] === 0 ||
						attr === "OBJECTID" ||
						attr === "REG_TURTAS" ||
						attr === "UZSAKOVAS" ||
						attr === "PRIZIURI" ||
						attr === "PASTABA" ||
						attr === "Atmobj_id_temp" ||
						attr === "last_edited_user" ||
						attr === "last_edited_date" ||
						attr === "SHAPE" ||
						attr === "GlobalID" ||
						attr === "OBJ_FOTO" ||
						attr === "created_user" ||
						attr === "created_date"
					) {
					} else {
						const obj = {}

						obj.alias = response.features[0].layer.fields[count].alias
						if (response.features[0].layer.fields[count].domain === null) {
							obj.value = response.features[0].attributes[attr]
						} else {
							for (let code in response.features[0].layer.fields[count].domain.codedValues) {
								if (
									response.features[0].layer.fields[count].domain.codedValues[code].code ===
									response.features[0].attributes[attr]
								) {
									obj.value = response.features[0].layer.fields[count].domain.codedValues[code].name
								}
							}
						}

						obj.field = attr
						allAttributes.push(obj)
					}
					count++
				}
				setObjectAttr(allAttributes)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [props.globalID])

	return (
		<Card sx={{ minWidth: 400 }}>
			<CardContent>
				<Typography variant="h6" component="div">
					{objectAttr[2].value}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default ObjectPopupContent

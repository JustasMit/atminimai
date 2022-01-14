import React, { useEffect, useState } from "react"
import { view, objects } from "../../utils/arcgisItems"
import Graphic from "@arcgis/core/Graphic"

import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
function createData(name, calories) {
	return { name, calories }
}

const rows = [
	createData("Frozen yoghurt", 159),
	createData("Ice cream sandwich", 237),
	createData("Eclair", 2620),
	createData("Cupcake", 305),
	createData("Gingerbread", 3569),
]
const ObjectPopupContent = (props) => {
	const [objectAttr, setObjectAttr] = useState([])

	useEffect(() => {
		const allAttributes = []

		objects
			.queryFeatures({
				outFields: ["*"],
				returnGeometry: true,
				where: `GlobalID = '${props.globalID}'`,
			})
			.then((response) => {
				view.goTo({
					target: response.features[0].geometry,
					zoom: 8,
				})

				view.graphics.some((graphic) => {
					if (graphic.attributes["highlight"] == "highlight") {
						view.graphics.remove(graphic)
						return true
					}
				})
				const highlight = {
					type: "simple-marker",
					color: [255, 0, 0],
					outline: {
						color: [255, 255, 255],
						width: 3,
					},
				}
				const highlightAttributes = {
					highlight: "highlight",
				}
				const highlightGraphic = new Graphic({
					geometry: response.features[0].geometry,
					symbol: highlight,
					attributes: highlightAttributes,
				})
				view.graphics.add(highlightGraphic)

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

	return objectAttr.length ? (
		<Card sx={{ minWidth: 400, maxWidth: 500 }}>
			<CardContent>
				<Typography variant="h6" component="div">
					{objectAttr[2].value}
				</Typography>
				<TableContainer component={Paper}>
					<Table sx={{ maxWidth: 450 }} size="small">
						<TableBody>
							{Object.keys(objectAttr).map((attr) => (
								<TableRow key={objectAttr[attr].field} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
									<TableCell component="th" scope="row">
										{objectAttr[attr].alias}
									</TableCell>
									<TableCell align="right">{objectAttr[attr].value}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</CardContent>
		</Card>
	) : null
}

export default ObjectPopupContent

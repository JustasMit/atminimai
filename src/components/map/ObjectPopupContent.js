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
import Link from "@mui/material/Link"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"

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
	const [objectPer, setObjectPer] = useState([])
	const [objectAtt, setObjectAtt] = useState([])

	useEffect(() => {
		objects
			.queryFeatures({
				outFields: ["*"],
				returnGeometry: true,
				where: `GlobalID = '${props.globalID}'`,
			})
			.then((response) => {
				const allAttributes = []

				view.goTo({
					target: response.features[0].geometry,
					zoom: 7,
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
				const highlightGraphic = new Graphic({
					geometry: response.features[0].geometry,
					symbol: highlight,
					attributes: {
						highlight: "highlight",
					},
				})
				view.graphics.add(highlightGraphic)

				let count = 0
				for (let attr in response.features[0].attributes) {
					if (
						response.features[0].attributes[attr] === null ||
						response.features[0].attributes[attr] === "" ||
						response.features[0].attributes[attr] === 0 ||
						attr === "OBJECTID" ||
						attr === "IDENTIFIK" ||
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
				return response.features[0].attributes.OBJECTID
			})
			.then((OBJECTID) => {
				const allPersons = []
				objects
					.queryRelatedFeatures({
						outFields: ["*"],
						relationshipId: 0,
						objectIds: OBJECTID,
					})
					.then((response) => {
						if (Object.keys(response).length === 0) {
							setObjectPer([])
							return
						}
						Object.keys(response).forEach((objectId) => {
							const person = response[objectId].features
							person.forEach((person) => {
								allPersons.push(person)
							})
						})
						setObjectPer(allPersons)
					})
					.catch((error) => {
						console.error(error)
					})
				return OBJECTID
			})
			.then((OBJECTID) => {
				const allAttachments = []
				objects
					.queryAttachments({
						attachmentTypes: ["image/jpeg"],
						objectIds: OBJECTID,
					})
					.then((response) => {
						if (Object.keys(response).length === 0) {
							setObjectAtt([])
							return
						}
						Object.keys(response).forEach((objectId) => {
							const attachment = response[objectId]
							attachment.forEach((attachment) => {
								allAttachments.push(attachment)
							})
						})
						setObjectAtt(allAttachments)
					})
					.catch((error) => {
						console.error(error)
					})
			})
			.catch((error) => {
				console.error(error)
			})
		console.log(objectAttr)
		console.log(objectPer)
		console.log(objectAtt)
	}, [props.globalID])
	//scroll?, responsive width? button vietoj link?
	return objectAttr.length ? (
		<Card sx={{ width: 500 }}>
			<CardContent style={{ maxHeight: "100%", overflowY: "auto", overflowX: "hidden" }}>
				{Object.keys(objectAttr).map((attr) =>
					objectAttr[attr].field === "OBJ_PAV" ? (
						<Typography variant="h5" component="div">
							{objectAttr[attr].value}
						</Typography>
					) : null
				)}
				<TableContainer sx={{ mt: 1, mb: 1 }} component={Paper}>
					<Table sx={{ width: 450 }} size="small">
						<TableBody>
							{Object.keys(objectAttr).map((attr) =>
								objectAttr[attr].field === "OBJ_APRAS" ||
								objectAttr[attr].field === "AUTORIUS" ||
								objectAttr[attr].field === "OBJ_PAV" ||
								objectAttr[attr].field === "SALTINIS" ? null : (
									<TableRow key={objectAttr[attr].field} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
										<TableCell component="th" scope="row">
											{objectAttr[attr].alias}
										</TableCell>
										<TableCell align="right">{objectAttr[attr].value}</TableCell>
									</TableRow>
								)
							)}
						</TableBody>
					</Table>
				</TableContainer>
				{Object.keys(objectAttr).map((attr) =>
					objectAttr[attr].field === "OBJ_APRAS" ? (
						<Typography variant="h6" component="div">
							{objectAttr[attr].alias}
							<Typography variant="body2" component="div">
								{objectAttr[attr].value}
							</Typography>
						</Typography>
					) : objectAttr[attr].field === "AUTORIUS" ? (
						<Typography variant="h6" component="div">
							{objectAttr[attr].alias}
							<Typography variant="body2" component="div">
								{objectAttr[attr].value}
							</Typography>
						</Typography>
					) : objectAttr[attr].field === "SALTINIS" ? (
						<Typography variant="h6" component="div">
							{objectAttr[attr].alias}
							<Typography variant="body2" component="div">
								{objectAttr[attr].value}
							</Typography>
						</Typography>
					) : null
				)}
				{objectPer.length ? (
					<Typography variant="h6" component="div">
						Susiję asmenys
						<Typography variant="body2" component="div">
							{Object.keys(objectPer).map((per) => (
								<Link
									key={per}
								>{`${objectPer[per].attributes.Vardas__liet_} ${objectPer[per].attributes.Pavardė__liet_}`}</Link>
							))}
						</Typography>
					</Typography>
				) : null}
				{objectAtt.length
					? Object.keys(objectAtt).map((att) => (
							<img style={{ width: 400, objectFit: "contain" }} src={`${objectAtt[att].url}`} />
					  ))
					: null}
			</CardContent>
		</Card>
	) : null
}

export default ObjectPopupContent

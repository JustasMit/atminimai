import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ReactDOM from "react-dom"
import { view, objects } from "../../utils/arcgisItems"
import Graphic from "@arcgis/core/Graphic"
//import ObjectPopupContent from "./ObjectPopupContent"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Pagination from "@mui/material/Pagination"

const popupNode = document.createElement("div")
view.ui.add(popupNode, "top-right")

const ObjectPopup = (props) => {
	const { globalID } = useParams()
	const [objectAttr, setObjectAttr] = useState([])
	const [objectPer, setObjectPer] = useState([])
	const [objectAtt, setObjectAtt] = useState([])
	const navigate = useNavigate()

	const handlePage = (event, value) => {
		props.setObjectPopupPage(value)
		console.log(props.queryObjects[value - 1].graphic.attributes.GlobalID.replace(/[{}]/g, ""))
        console.log(value)
		navigate(
			`/object/${props.queryObjects[value - 1].graphic.attributes.GlobalID.replace(/[{}]/g, "")}`,
			{
				replace: true,
			}
		)
	}

	useEffect(() => {
		console.log(globalID)
		objects
			.queryFeatures({
				outFields: ["*"],
				returnGeometry: true,
				where: `GlobalID = '${globalID}'`,
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
		console.log(props.queryObjects)
	}, [globalID, props.objectPopupPage])

	return (
		<Box sx={{ top: 10, right: 10, position: "fixed", zIndex: 2 }}>
			{objectAttr.length ? (
				<Card sx={{ width: 500 }}>
					<CardContent style={{ maxHeight: window.innerHeight - 35, overflowY: "auto", overflowX: "hidden" }}>
						{props.queryObjects.length > 1 ? (
							<Box display="flex" justifyContent="center" alignItems="center">
								<Pagination
									count={props.queryObjects.length}
									page={props.objectPopupPage}
									onChange={handlePage}
								/>
							</Box>
						) : null}
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
											<TableRow
												key={objectAttr[attr].field}
												sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
											>
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
								<Typography component="div">
									{Object.keys(objectPer).map((per) => (
										<>
											<Link
												component="button"
												variant="body2"
												key={per}
											>{`${objectPer[per].attributes.Vardas__liet_} ${objectPer[per].attributes.Pavardė__liet_}`}</Link>
											<br></br>
										</>
									))}
								</Typography>
							</Typography>
						) : null}
						{objectAtt.length
							? Object.keys(objectAtt).map((att) => (
									<Box sx={{ width: 450, mt: 1 }}>
										<img style={{ maxWidth: "100%", maxHeight: "auto" }} src={`${objectAtt[att].url}`} />
									</Box>
							  ))
							: null}
					</CardContent>
				</Card>
			) : null}
		</Box>
	)
}

export default ObjectPopup

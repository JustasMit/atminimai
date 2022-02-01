import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { view, objects } from "../../utils/arcgisItems"
import Graphic from "@arcgis/core/Graphic"
import MuiLinkify from "material-ui-linkify"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
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
import CircularProgress from "@mui/material/CircularProgress"
import useMediaQuery from "@mui/material/useMediaQuery"

const ObjectPopup = (props) => {
	const { globalID } = useParams()
	const [objectAttr, setObjectAttr] = useState([])
	const [objectPer, setObjectPer] = useState([])
	const [objectAtt, setObjectAtt] = useState([])
	const [loading, setLoading] = useState(true)
	const [queryObjects, setQueryObjects] = useState([])
	const navigate = useNavigate()

	const handlePage = (event, value) => {
		navigate(`/objektas/${queryObjects.features[value - 1].attributes.GlobalID.replace(/[{}]/g, "")}`)
	}

	useEffect(() => {
		setLoading(true)
		objects
			.queryFeatures({
				outFields: ["GlobalID"],
				returnGeometry: true,
				where: `GlobalID = '${globalID}'`,
			})
			.then((response) => {
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

				objects
					.queryFeatures({
						geometry: response.features[0].geometry,
						spatialRelationship: "intersects",
						returnGeometry: true,
						outFields: ["*"],
					})
					.then((response) => {
						if (response.features.length === 0) {
							navigate("/")
							return
						}

						for (let obj in response.features) {
							if (response.features[obj].attributes.GlobalID.replace(/[{}]/g, "") === globalID) {
								props.setPage(parseInt(obj) + 1)
								props.setSelectedObject(`${globalID}`)
							}
						}
						props.setPageCount(response.features.length)

						setQueryObjects(response)
						return response
					})
					.then((response) => {
						const allAttributes = []

						let count = 0
						for (let attr in response.features[props.page - 1].attributes) {
							if (
								response.features[props.page - 1].attributes[attr] === null ||
								response.features[props.page - 1].attributes[attr] === "" ||
								response.features[props.page - 1].attributes[attr] === 0 ||
								attr === "OBJECTID" ||
								attr === "IDENTIFIK" ||
								attr === "REG_TURTAS" ||
								attr === "VERTE" ||
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

								obj.alias = response.features[props.page - 1].layer.fields[count].alias
								if (response.features[props.page - 1].layer.fields[count].domain === null) {
									obj.value = response.features[props.page - 1].attributes[attr]
								} else {
									for (let code in response.features[props.page - 1].layer.fields[count].domain.codedValues) {
										if (
											response.features[props.page - 1].layer.fields[count].domain.codedValues[code].code ===
											response.features[props.page - 1].attributes[attr]
										) {
											obj.value =
												response.features[props.page - 1].layer.fields[count].domain.codedValues[code].name
										}
									}
								}

								obj.field = attr
								allAttributes.push(obj)
							}
							count++
						}
						setObjectAttr(allAttributes)
						return response.features[props.page - 1].attributes.OBJECTID
					})
					.then((OBJECTID) => {
						const allPersons = []
						objects
							.queryRelatedFeatures({
								outFields: ["GlobalID", "Pavardė__liet_", "Vardas__liet_"],
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
					.then(() => {
						setLoading(false)
					})
					.catch((error) => {
						console.error(error)
					})
			})
			.catch((error) => {
				console.error(error)
			})
	}, [globalID, props.page])

	useEffect(() => {
		return () => {
			props.setPage(1)
			props.setPageCount(1)
			props.setSelectedObject("")
			props.setSearchInputValue("")
			setQueryObjects([])

			view.graphics.some((graphic) => {
				if (graphic.attributes["highlight"] == "highlight") {
					view.graphics.remove(graphic)
					return true
				}
			})
		}
	}, [])

	const matches = useMediaQuery("(min-width:995px)")
	return (
		<Box sx={{ top: 0, right: 0, position: "fixed", zIndex: 2 }}>
			<Card
				sx={{
					maxWidth: matches ? "auto" : 995,
					width: matches ? 600 : "100vw",
					mt: matches ? 1.5 : 0,
					mr: matches ? 1.5 : 0,
				}}
			>
				<CardContent
					sx={{
						maxHeight: matches ? window.innerHeight - 38 : window.innerHeight - 16,
						overflowY: "auto",
						overflowX: "hidden",
					}}
				>
					{props.pageCount > 1 ? (
						<Box component="div" display="flex" justifyContent="center" alignItems="center">
							<Pagination count={props.pageCount} page={props.page} onChange={handlePage} />
						</Box>
					) : null}
					{loading ? (
						<Box display="flex" justifyContent="center" alignItems="center">
							<CircularProgress />
						</Box>
					) : (
						<>
							<CardHeader
								sx={{ px: 0, pt: 0.5, pb: 1 }}
								action={
									<IconButton
										aria-label="close"
										onClick={() => {
											navigate("/")
										}}
									>
										<CloseIcon />
									</IconButton>
								}
								title={Object.keys(objectAttr).map((attr) =>
									objectAttr[attr].field === "OBJ_PAV" ? objectAttr[attr].value : null
								)}
							/>
							<TableContainer sx={{ mb: 1 }} component={Paper}>
								<Table size="small">
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
								objectAttr[attr].field === "OBJ_APRAS" || objectAttr[attr].field === "AUTORIUS" ? (
									<Typography variant="h6" component="div" key={objectAttr[attr].field}>
										{objectAttr[attr].alias}
										<Typography variant="body2" component="div">
											{objectAttr[attr].value}
										</Typography>
									</Typography>
								) : null
							)}
							{Object.keys(objectAttr).map((attr) =>
								objectAttr[attr].field === "SALTINIS" ? (
									<Typography variant="h6" component="div" key={objectAttr[attr].field}>
										{objectAttr[attr].alias}
										<MuiLinkify LinkProps={{ target: "_blank", rel: "noopener", rel: "noreferrer" }}>
											<Typography variant="body2" component="div">
												{objectAttr[attr].value}
											</Typography>
										</MuiLinkify>
									</Typography>
								) : null
							)}

							{objectPer.length ? (
								<Typography variant="h6" component="div">
									{objectPer.length > 1 ? "Susiję asmenys" : "Susijęs asmuo"}
									<Typography component="div">
										{Object.keys(objectPer).map((per) => (
											<div key={per}>
												<Link
													sx={{ mt: 0.5 }}
													textAlign="left"
													component="button"
													variant="body2"
													onClick={() => {
														props.setSearchInputValue("")
														navigate(`/asmuo/${objectPer[per].attributes.GlobalID.replace(/[{}]/g, "")}`)
													}}
												>{`${objectPer[per].attributes.Vardas__liet_} ${objectPer[per].attributes.Pavardė__liet_}`}</Link>
												<br></br>
											</div>
										))}
									</Typography>
								</Typography>
							) : null}
							{objectAtt.length
								? Object.keys(objectAtt).map((att) => (
										<Box sx={{ mt: 1 }} key={att}>
											<a href={`${objectAtt[att].url}`} target="_blank">
												<img style={{ maxWidth: "100%", maxHeight: "auto" }} src={`${objectAtt[att].url}`} />
											</a>
										</Box>
								  ))
								: null}
						</>
					)}
				</CardContent>
			</Card>
		</Box>
	)
}

export default ObjectPopup

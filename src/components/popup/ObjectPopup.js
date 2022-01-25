import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { view, objects } from "../../utils/arcgisItems"
import Graphic from "@arcgis/core/Graphic"

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
import Grid from "@mui/material/Grid"

const ObjectPopup = (props) => {
	const { globalID } = useParams()
	const [objectAttr, setObjectAttr] = useState([])
	const [objectPer, setObjectPer] = useState([])
	const [objectAtt, setObjectAtt] = useState([])
	const [loading, setLoading] = useState(true)
	const [page, setPage] = useState(1)
	const [pageCount, setPageCount] = useState(1)
	const [queryObjects, setQueryObjects] = useState([])
	const navigate = useNavigate()

	const handlePage = (event, value) => {
		navigate(`/objektas/${queryObjects.features[value - 1].attributes.GlobalID.replace(/[{}]/g, "")}`)
	}

	useEffect(() => {
		objects
			.queryFeatures({
				outFields: ["GlobalID"],
				returnGeometry: true,
				where: `GlobalID = '${globalID}'`,
			})
			.then((response) => {
				objects
					.queryFeatures({
						geometry: response.features[0].geometry,
						spatialRelationship: "intersects",
						returnGeometry: true,
						outFields: ["*"],
					})
					.then((response) => {
						setQueryObjects(response)
						return response
					})
					.then((response) => {
						for (let obj in response.features) {
							if (response.features[obj].attributes.GlobalID.replace(/[{}]/g, "") === globalID) {
								setPage(parseInt(obj) + 1)
							}
						}
						setPageCount(response.features.length)
						const allAttributes = []

						view.goTo({
							target: response.features[page - 1].geometry,
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
							geometry: response.features[page - 1].geometry,
							symbol: highlight,
							attributes: {
								highlight: "highlight",
							},
						})
						view.graphics.add(highlightGraphic)

						let count = 0
						for (let attr in response.features[page - 1].attributes) {
							if (
								response.features[page - 1].attributes[attr] === null ||
								response.features[page - 1].attributes[attr] === "" ||
								response.features[page - 1].attributes[attr] === 0 ||
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

								obj.alias = response.features[page - 1].layer.fields[count].alias
								if (response.features[page - 1].layer.fields[count].domain === null) {
									obj.value = response.features[page - 1].attributes[attr]
								} else {
									for (let code in response.features[page - 1].layer.fields[count].domain.codedValues) {
										if (
											response.features[page - 1].layer.fields[count].domain.codedValues[code].code ===
											response.features[page - 1].attributes[attr]
										) {
											obj.value =
												response.features[page - 1].layer.fields[count].domain.codedValues[code].name
										}
									}
								}

								obj.field = attr
								allAttributes.push(obj)
							}
							count++
						}
						setObjectAttr(allAttributes)
						return response.features[page - 1].attributes.OBJECTID
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
			})
		setLoading(false)
	}, [globalID, page])

	useEffect(() => {
		return () => {
			setPage(1)
			setPageCount(1)
			setQueryObjects([])
			view.graphics.some((graphic) => {
				if (graphic.attributes["highlight"] == "highlight") {
					view.graphics.remove(graphic)
					return true
				}
			})
		}
	}, [])

	return (
		<Box sx={{ top: 10, right: 10, position: "fixed", zIndex: 2 }}>
			<Card sx={{ width: 500 }}>
				<CardContent sx={{ maxHeight: window.innerHeight - 35, overflowY: "auto", overflowX: "hidden" }}>
					{loading ? (
						<Grid
							container
							spacing={0}
							direction="column"
							alignItems="center"
							justifyContent="center"
							sx={{ minHeight: "10vh" }}
						>
							<Grid item xs={3}>
								<CircularProgress />
							</Grid>
						</Grid>
					) : (
						<>
							{pageCount > 1 ? (
								<Box display="flex" justifyContent="center" alignItems="center">
									<Pagination count={pageCount} page={page} onChange={handlePage} />
								</Box>
							) : null}
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
								objectAttr[attr].field === "OBJ_APRAS" ||
								objectAttr[attr].field === "AUTORIUS" ||
								objectAttr[attr].field === "SALTINIS" ? (
									<Typography variant="h6" component="div" key={objectAttr[attr].field}>
										{objectAttr[attr].alias}
										<Typography variant="body2" component="div">
											{objectAttr[attr].value}
										</Typography>
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
														props.setSearchInputValue(null)
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
										<Box sx={{ width: 450, mt: 1 }} key={att}>
											<img style={{ maxWidth: "100%", maxHeight: "auto" }} src={`${objectAtt[att].url}`} />
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

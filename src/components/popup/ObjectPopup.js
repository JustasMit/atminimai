import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { view, objects } from "../../utils/arcgisItems"
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
import Backdrop from "@mui/material/Backdrop"

let highlight
const ObjectPopup = (props) => {
	const { globalID } = useParams()
	const [objectAttr, setObjectAttr] = useState([])
	const [objectPer, setObjectPer] = useState([])
	const [objectAtt, setObjectAtt] = useState([])
	const [loading, setLoading] = useState(true)
	const [queryObjects, setQueryObjects] = useState([])
	const [popupOpen, setPopupOpen] = useState(false)
	const [page, setPage] = useState(1)
	const [pageCount, setPageCount] = useState(1)
	const navigate = useNavigate()

	const handlePage = (event, value) => {
		navigate(`/objektas/${queryObjects[value - 1].attributes.GlobalID.replace(/[{}]/g, "")}`)
	}

	useEffect(() => {
		if (!props.initialLoading) {
			setPopupOpen(true)
			setLoading(true)

			let found = false
			for (let obj in props.mapQuery) {
				if (props.mapQuery[obj].attributes.GlobalID.replace(/[{}]/g, "") === globalID) {
					setPage(parseInt(obj) + 1)
					found = true
				}
			}

			if (found) {
				setQueryObjects(props.mapQuery)
				setPageCount(props.mapQuery.length)
			} else {
				setPageCount(1)
				setPage(1)
			}

			view
				.whenLayerView(objects)
				.then((objectsView) => {
					let query = objectsView.createQuery()
					query.where = `GlobalID = '{${globalID}}'`

					objectsView
						.queryFeatures(query)
						.then((response) => {
							if (highlight) {
								highlight.remove()
							}

							if (response.features.length === 0) {
								navigate("/")
								return
							}

							view.goTo({
								target: response.features[0].geometry,
								zoom: 8,
							})
							highlight = objectsView.highlight(response.features[0])
							props.setSelectedObject(`${globalID}`)

							return response
						})
						.then((response) => {
							const allAttributes = []

							let count = 0
							for (let attr in response.features[0].attributes) {
								if (
									response.features[0].attributes[attr] === null ||
									response.features[0].attributes[attr] === "" ||
									response.features[0].attributes[attr] === 0 ||
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
		}
	}, [globalID, props.initialLoading])

	useEffect(() => {
		return () => {
			setPage(1)
			setPageCount(1)
			props.setSelectedObject("")
			setQueryObjects([])
			setPopupOpen(false)

			if (highlight) {
				highlight.remove()
			}
		}
	}, [])

	const matches = useMediaQuery("(min-width:995px)")
	return (
		<>
			{!matches && <Backdrop sx={{ color: "#fff", zIndex: 2 }} open={popupOpen}></Backdrop>}
			<Box sx={{ top: 0, right: 0, position: "fixed", zIndex: 100 }}>
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
						{pageCount > 1 ? (
							<Box component="div" display="flex" justifyContent="center" alignItems="center">
								<Pagination count={pageCount} page={page} onChange={handlePage} />
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
													<img
														style={{ maxWidth: "100%", maxHeight: "auto" }}
														src={`${objectAtt[att].url}`}
													/>
												</a>
											</Box>
									  ))
									: null}
							</>
						)}
					</CardContent>
				</Card>
			</Box>
		</>
	)
}

export default ObjectPopup

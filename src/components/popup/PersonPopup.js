import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { persons } from "../../utils/arcgisItems"

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
import CircularProgress from "@mui/material/CircularProgress"
import useMediaQuery from "@mui/material/useMediaQuery"

const PersonPopup = (props) => {
	const { globalID } = useParams()
	const [personAttr, setPersonAttr] = useState([])
	const [personObj, setPersonObj] = useState([])
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {
		persons
			.queryFeatures({
				outFields: ["*"],
				where: `GlobalID = '${globalID}'`,
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
						attr === "GAT_ID" ||
						attr === "Daiktas" ||
						attr === "Vardas__pavardė_kitomis_kalbomi" ||
						attr === "Pseudonimas__slapyvardžiai" ||
						attr === "Pagrindinė_veikla" ||
						attr === "Veiklos_detalizavimas" ||
						attr === "Kiti_veiklos_momentai_faktai" ||
						attr === "Kiti_vertinimai__nuomonės" ||
						attr === "objekto_adresas" ||
						attr === "ATMINIMO_LENTA" ||
						attr === "KITA" ||
						attr === "KITA2" ||
						attr === "KITA3" ||
						attr === "KITA4" ||
						attr === "KITA5" ||
						attr === "KITA6" ||
						attr === "KITA7" ||
						attr === "MUZIEJUS_KOREGAVO" ||
						attr === "Meninė_vertė" ||
						attr === "gatvė" ||
						attr === "GATVĖ_1" ||
						attr === "lentelė_apie_asmenybė__instituc" ||
						attr === "objekto_adresas" ||
						attr === "lentos_prieinamumas" ||
						attr === "ATMINIMO_LENTA" ||
						attr === "created_user" ||
						attr === "created_date" ||
						attr === "last_edited_user" ||
						attr === "last_edited_date" ||
						attr === "GlobalID"
					) {
					} else {
						const obj = {}

						obj.alias = response.features[0].layer.fields[count].alias
						if (response.features[0].layer.fields[count].domain === null) {
							if (attr === "Gimimo_data" || attr === "Mirties_data") {
								let parsedDate = new Date(Date.parse(response.features[0].attributes[attr]))
								obj.value = parsedDate.toLocaleDateString("lt-LT")
							} else {
								obj.value = response.features[0].attributes[attr]
							}
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
				setPersonAttr(allAttributes)
				return response.features[0].attributes.OBJECTID
			})
			.then((OBJECTID) => {
				const allObjects = []
				persons
					.queryRelatedFeatures({
						outFields: ["GlobalID", "OBJ_PAV", "VIETA"],
						relationshipId: 0,
						objectIds: OBJECTID,
					})
					.then((response) => {
						if (Object.keys(response).length === 0) {
							setPersonObj([])
							return
						}

						Object.keys(response).forEach((objectId) => {
							const obj = response[objectId].features
							obj.forEach((obj) => {
								allObjects.push(obj)
							})
						})

						setPersonObj(allObjects)
					})
					.then(() => {
						setLoading(false)
					})
					.catch((error) => {
						console.error(error)
					})
			})
	}, [globalID])

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
								title={Object.keys(personAttr).map((attr) =>
									personAttr[attr].field === "Vardas__liet_" || personAttr[attr].field === "Pavardė__liet_"
										? `${personAttr[attr].value} `
										: null
								)}
							/>

							<TableContainer sx={{ mb: 1 }} component={Paper}>
								<Table size="small">
									<TableBody>
										{Object.keys(personAttr).map((attr) =>
											personAttr[attr].field === "Gimimo_data" ||
											personAttr[attr].field === "Gimimo_vieta" ||
											personAttr[attr].field === "Mirties_data" ||
											personAttr[attr].field === "Mirties_vieta" ||
											personAttr[attr].field === "Palaidojimo_vieta" ||
											personAttr[attr].field === "Veikla__profesija" ? (
												<TableRow
													key={personAttr[attr].field}
													sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
												>
													<TableCell component="th" scope="row">
														{personAttr[attr].alias}
													</TableCell>
													<TableCell align="right">{personAttr[attr].value}</TableCell>
												</TableRow>
											) : null
										)}
									</TableBody>
								</Table>
							</TableContainer>

							{Object.keys(personAttr).map((attr) =>
								personAttr[attr].field === "Vardas__liet_" ||
								personAttr[attr].field === "Pavardė__liet_" ||
								personAttr[attr].field === "Gimimo_data" ||
								personAttr[attr].field === "Gimimo_vieta" ||
								personAttr[attr].field === "Mirties_data" ||
								personAttr[attr].field === "Mirties_vieta" ||
								personAttr[attr].field === "Palaidojimo_vieta" ||
								personAttr[attr].field === "Veikla__profesija" ? null : (
									<Typography variant="h6" component="div" key={personAttr[attr].field}>
										{personAttr[attr].alias}
										<Typography variant="body2" component="div">
											{personAttr[attr].value}
										</Typography>
									</Typography>
								)
							)}
							{personObj.length ? (
								<Typography variant="h6" component="div">
									{personObj.length > 1 ? "Susiję objektai" : "Susijęs objektas"}
									<Typography component="div">
										{Object.keys(personObj).map((obj) => (
											<div key={obj}>
												<Link
													sx={{ mt: 0.5 }}
													textAlign="left"
													component="button"
													variant="body2"
													onClick={() => {
														props.setSearchInputValue(null)
														navigate(`/objektas/${personObj[obj].attributes.GlobalID.replace(/[{}]/g, "")}`)
													}}
												>
													{personObj[obj].attributes.OBJ_PAV}{" "}
													{personObj[obj].attributes.VIETA ? `(${personObj[obj].attributes.VIETA})` : null}
												</Link>
												<br></br>
											</div>
										))}
									</Typography>
								</Typography>
							) : null}
						</>
					)}
				</CardContent>
			</Card>
		</Box>
	)
}

export default PersonPopup

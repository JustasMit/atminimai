import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { view, objects, persons } from "../../utils/arcgisItems"
import Graphic from "@arcgis/core/Graphic"

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

const PersonPopup = (props) => {
	const { globalID } = useParams()
	const [personAttr, setPersonAttr] = useState([])
	const [personObj, setPersonObj] = useState([])
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
						attr === "Pagrindinė_veikla" ||
						attr === "Veiklos_detalizavimas" ||
						attr === "GATVĖ_1" ||
						attr === "ATMINIMO_LENTA" ||
						attr === "MUZIEJUS_KOREGAVO" ||
						attr === "Meninė_vertė" ||
						attr === "gatvė" ||
						attr === "lentelė_apie_asmenybė__instituc" ||
						attr === "objekto_adresas" ||
						attr === "lentos_prieinamumas" ||
						attr === "ATMINIMO_LENTA " ||
						attr === "GlobalID"
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
				setPersonAttr(allAttributes)
				console.log(personAttr)
				return response.features[0].attributes.OBJECTID
			})
			.then((OBJECTID) => {
				const allObjects = []
				persons
					.queryRelatedFeatures({
						outFields: ["GlobalID", "OBJ_PAV"],
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
						console.log(personObj)
					})
					.catch((error) => {
						console.error(error)
					})
			})
	}, [globalID])

	return (
		<Box sx={{ top: 10, right: 10, position: "fixed", zIndex: 2 }}>
			{personAttr.length ? (
				<Card sx={{ width: 500 }}>
					<CardContent style={{ maxHeight: window.innerHeight - 35, overflowY: "auto", overflowX: "hidden" }}>
						<Typography variant="h5" component="div">
							{Object.keys(personAttr).map((attr) =>
								personAttr[attr].field === "Vardas__liet_" || personAttr[attr].field === "Pavardė__liet_"
									? `${personAttr[attr].value} `
									: null
							)}
						</Typography>
						{
							<TableContainer sx={{ mt: 1, mb: 1 }} component={Paper}>
								<Table sx={{ width: 450 }} size="small">
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
						}
						{Object.keys(personAttr).map((attr) =>
							personAttr[attr].field === "Vardas__liet_" ||
							personAttr[attr].field === "Pavardė__liet_" ||
							personAttr[attr].field === "Gimimo_data" ||
							personAttr[attr].field === "Gimimo_vieta" ||
							personAttr[attr].field === "Mirties_data" ||
							personAttr[attr].field === "Mirties_vieta" ||
							personAttr[attr].field === "Palaidojimo_vieta" ||
							personAttr[attr].field === "Veikla__profesija" ? null : (
								<Typography variant="h6" component="div">
									{personAttr[attr].alias}
									<Typography variant="body2" component="div">
										{personAttr[attr].value}
									</Typography>
								</Typography>
							)
						)}
						{personObj.length ? (
							<Typography variant="h6" component="div">
								Susiję asmenys
								<Typography component="div">
									{Object.keys(personObj).map((obj) => (
										<>
											<Link
												component="button"
												variant="body2"
												onClick={() => {
													navigate(`/object/${personObj[obj].attributes.GlobalID.replace(/[{}]/g, "")}`)
												}}
												key={obj}
											>
												{personObj[obj].attributes.OBJ_PAV}
											</Link>
											<br></br>
										</>
									))}
								</Typography>
							</Typography>
						) : null}
					</CardContent>
				</Card>
			) : null}
		</Box>
	)
}

export default PersonPopup

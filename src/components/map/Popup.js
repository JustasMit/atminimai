import { useParams } from "react-router-dom"

const Popup = () => {
	const { objectID } = useParams()
	console.log(objectID)
	return null
}

export default Popup

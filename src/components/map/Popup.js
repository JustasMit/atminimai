import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Popup = () => {
    const { objectID } = useParams()

    useEffect(() =>{
        console.log(objectID)
    },[objectID])
    
	return null
}

export default Popup

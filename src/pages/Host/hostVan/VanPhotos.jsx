import { useOutletContext } from "react-router-dom"

export default function VanPhotos(){
    const {imageUrl} = useOutletContext();
    return (
        <img src={imageUrl} width={150}/>
    )
}
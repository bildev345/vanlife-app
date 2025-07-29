import { useOutletContext} from "react-router-dom"

export default function VanInfo(){
    const {name, type, description} = useOutletContext();
    return (
        <>
            <div className="host-van-details">
                <p><span>Name:</span> {name}</p>
                <p><span>Category:</span> {type}</p>
                <p><span>Description: </span>{description}</p>
            </div>
        </>
    )
}
import { useOutletContext } from "react-router-dom"

export default function VanPricing(){
    const {price} = useOutletContext();
    return (
        <p><span>${price}</span>/day</p>
    )
}
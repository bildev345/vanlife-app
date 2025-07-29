import { Link, useLoaderData, useLocation } from "react-router-dom"
import { getVans } from "../../api";

export function loader({params}){
    return getVans(params.id);
}
export default function VanDetail(){
    const location = useLocation();
    const van = useLoaderData();

    const search = location.state?.search || "";
    //const filterBy = search === "?" ? "" : search.substr(search.indexOf("=") + 1);
    const filterBy = location.state?.type || "all";
    return (
        <>
            <div className="product-detail">
                <Link 
                    className="return-back" 
                    to={`..${search}`}
                    relative="path"
                >
                    &larr; Back to { filterBy } vans
                </Link>
                <div>
                <img src={van.imageUrl} alt=""/>
                </div>
                <span className={van.type}>{van.type}</span>
                <p className="name">{van.name}</p>
                <p className="price">{van.price}$<span>/day</span></p>
                <p className="description">{van.description}</p>
                <Link className="rent">Rent this van</Link>
            </div>
        </>
    )
}
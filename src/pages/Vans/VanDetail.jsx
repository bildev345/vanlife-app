import { Await, defer, Link, useLoaderData, useLocation } from "react-router-dom"
import { getVans } from "../../api";
import { Suspense } from "react";

export function loader({params}){
    return defer({van : getVans(params.id)});
}
export default function VanDetail(){
    const location = useLocation();
    const vanPromise = useLoaderData();

    const search = location.state?.search || "";
    //const filterBy = search === "?" ? "" : search.substr(search.indexOf("=") + 1);
    const filterBy = location.state?.type || "all";

    const renderVanDetail = (van) => {
      return (
        <>
          <div>
            <img src={van.imageUrl} alt="" />
          </div>
          <span className={van.type}>{van.type}</span>
          <p className="name">{van.name}</p>
          <p className="price">
            {van.price}$<span>/day</span>
          </p>
          <p className="description">{van.description}</p>
        </>
      );
    };
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
                <Suspense fallback={<h2>Loading van...</h2>}>
                    <Await resolve={vanPromise.van}>
                        {renderVanDetail}
                    </Await>
                </Suspense>
                <Link className="rent">Rent this van</Link>
            </div>
        </>
    )
}
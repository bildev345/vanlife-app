import { Link, Outlet, useLoaderData } from "react-router-dom";
import HostVanNav from "../pages/Host/hostVan/HostVanNav";
import { getHostVans } from "../api";
import { requireAuth } from "../utils/utils";

export async function loader({params}){
    await requireAuth();
    return getHostVans(params.id);
}
export default function HostVanDetailLayout(){
    const hostVan = useLoaderData();

    return (
        <>
            <Link 
                className="return-back" 
                to=".."
                relative="path"
            >
                &larr; Back to all vans
            </Link>
            <div className="host-van-detail">
            <div>
                <img src={hostVan.imageUrl} alt="" />
                <div>
                    <p className={`vanType ${hostVan.type}`}>{hostVan.type}</p>
                    <p>{hostVan.name}</p>
                    <p>${hostVan.price}<span>/day</span></p>
                </div>
            </div>
            </div>
            <HostVanNav/>
            <main className="host-content">
                <Outlet context={hostVan}/>
            </main>
        </>
    )
}
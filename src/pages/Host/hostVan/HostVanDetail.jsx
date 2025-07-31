import { Await, defer, Link, Outlet, useLoaderData } from "react-router-dom";
import HostVanNav from "./HostVanNav";
import { getHostVans } from "../../../api";
import { requireAuth } from "../../../utils/utils";
import { Suspense } from "react";

export async function loader({request, params}){
    await requireAuth(request);
    return defer({hostVan : getHostVans(params.id)});
}
export default function HostVanDetail(){
    const dataPromise = useLoaderData();
    const renderHostVan = (hostVan) => {
      return (
        <>
          <div className="host-van-detail">
            <img src={hostVan.imageUrl} alt="" />
            <div>
              <p className={`vanType ${hostVan.type}`}>{hostVan.type}</p>
              <p>{hostVan.name}</p>
              <p>
                ${hostVan.price}
                <span>/day</span>
              </p>
            </div>
          </div>
          <HostVanNav />
          <main className="host-content">
            <Outlet context={hostVan} />
          </main>
        </>
      );
    };
    return (
        <>
            <Link 
                className="return-back" 
                to=".."
                relative="path"
            >
                &larr; Back to all vans
            </Link>
            <Suspense fallback={<h2>Loading host van...</h2>}>
                <Await resolve={dataPromise.hostVan}>
                    {renderHostVan}
                </Await>
            </Suspense>

        </>
    )
}
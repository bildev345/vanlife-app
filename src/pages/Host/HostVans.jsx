import { Await, defer, Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils/utils";
import { Suspense } from "react";

export async function loader({request}){
    await requireAuth(request);
    return defer({ vans :  getHostVans(null)});
}
export default function HostVans(){
    const hostVansPromise = useLoaderData();
    const vansList = (hostVans) => {
        return (
            hostVans.map(van => (
                        <Link 
                            key={van.id} 
                            to={van.id} 
                            className="host-van-link"
                        >
                            <div  className="host-van">
                                <div>
                                    <div>
                                        <img src={van.imageUrl} alt="" />
                                    </div>
                                    <div>
                                        <h3>{van.name}</h3>
                                        <span>${van.price}/day</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
            )
        )
    }
    return (
        <div className="host-vans">
            <h1 className="host-vans-title">Your listed vans</h1>
            <Suspense fallback={<h2>Loading hosted vans...</h2>}>
                <Await resolve={hostVansPromise.vans}>
                    {vansList}
                </Await>
            </Suspense>
        </div>
    )
}
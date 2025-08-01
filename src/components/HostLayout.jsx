import { NavLink, Outlet } from "react-router-dom";
import { requireAuth } from "../utils/utils";


/*export async function loader({request}){
    await requireAuth(request);
}*/
export default function HostLayout(){
    //using an inline style is recommended than className
    const activeStyle = {
        fontWeight : "bold",
        textDecoration : "underline",
        color : "#161616"
    };
    
    return (
        <>
            <nav className="host-nav">
                <NavLink 
                     to="."
                     end
                     style={({isActive}) => isActive ? activeStyle : null}
                >
                    Dashboard
                </NavLink>
                <NavLink 
                     to="income"
                     style={({isActive}) => isActive ? activeStyle : null}
                >
                    Income
                </NavLink>
                <NavLink 
                     to="vans"
                     style={({isActive}) => isActive ? activeStyle : null}
                >
                    Vans
                </NavLink>
                <NavLink 
                     to="reviews"
                     style={({isActive}) => isActive ? activeStyle : null}
                >
                    Reviews
                </NavLink>
            </nav>
            <main className="host-content">
                <Outlet/>
            </main>
        </>
    )
}
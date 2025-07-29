import { NavLink } from "react-router-dom";

export default function HostVanNav(){
    const activeStyle = {
        fontWeight : 700,
        textDecoration : "underline",
        fontSize : "18.15px",
        color : "#161616"
    };
    return (
            <nav className="host-nav detail-van">
                <NavLink
                    to="."
                    end
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                Details
                </NavLink>
                <NavLink
                    to="pricing"
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Pricing
                </NavLink>
                <NavLink
                    to="photos"
                    style={({isActive}) => isActive ? activeStyle : null}
                >
                    Photos
                </NavLink>
            </nav>
    )
}
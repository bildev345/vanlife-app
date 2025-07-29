import { Link, NavLink } from "react-router-dom";
import iconUrl from '/assets/images/Icon.png';

export const Header = () => {
    const activeStyle = {
        fontWeight : "bold",
        textDecoration : "underline",
        color : "#161616"
    };
    return (
        <header>
            <Link className="site-logo" to=".">#VanLife</Link>
            <nav>
                <NavLink 
                    to="host"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="about"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    About
                </NavLink>
                <NavLink 
                     to="vans"
                     style={({isActive}) => isActive ? activeStyle : null}
                >
                    Vans
                </NavLink>
                <NavLink 
                     to="login"
                     style={({isActive}) => isActive ? activeStyle : null}
                >
                    <img className="login-icon" src={iconUrl} alt="" />
                </NavLink>
            </nav>
        </header>
    )
}
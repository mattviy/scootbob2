import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarSt = () => {
    return (
        <nav className="navbar">
            <ul>
            <li key="signup" className="navbar-item">
                <NavLink  activeClassName='is-active' className="hvr-underline-from-left" to="/SignUp">Sign up</NavLink>
            </li>
            <li key="login" className="navbar-item">
                <NavLink activeClassName='is-active' className="hvr-underline-from-left"  to="/LogIn">Log in</NavLink>
            </li>
            <li key="home" className="navbar-item">
                <NavLink style={{"color": "#617073"}}exact={true} activeClassName='is-active' className="hvr-underline-from-left"  to="/">Scootbob</NavLink>
            </li>
            </ul>
        </nav>
    )
}

export default NavBarSt
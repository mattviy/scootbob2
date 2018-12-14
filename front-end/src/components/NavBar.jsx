import React from 'react'
import { NavLink } from "react-router-dom";
import '../NavBar.css'
import '../hover.css'

const NavBar = (props) => {
if (!props.log) {
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
                <NavLink exact={true} activeClassName='is-active' className="hvr-underline-from-left"  to="/">Home</NavLink>
            </li>
        </ul>
    </nav>
    )
}
  else {
      return(
        <nav className="navbar">
        <ul>
            <li key="pendingRides" className="navbar-item">
                <NavLink activeClassName='is-active' to="/PeandingRides">Pending Rides</NavLink>
            </li> 
            <li key="earnings" className="navbar-item">
                <NavLink activeClassName='is-active' to="/Earnings">Earnings</NavLink>
            </li> 
            <li key="home" className="navbar-item">
                <NavLink exact={true} activeClassName='is-active' to="/">Home</NavLink>
            </li>
            <li key="about" className="navbar-item">
                <NavLink exact={true} activeClassName='is-active' to="/About">About</NavLink>
            </li>
            <li key="home" className="navbar-item">
                <NavLink exact={true} activeClassName='is-active' to="/Contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
      )

  }
  };

export default NavBar
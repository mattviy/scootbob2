import React from 'react'
import { NavLink } from "react-router-dom";
import '../NavBar.css'
import '../hover.css'

const NavBar = (props) => {
    function getCookie(cname) {
        var decodedCookie = decodeURIComponent(document.cookie);
        
        var ca = decodedCookie.split(';');
        
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          
          if (c.indexOf("true") === 11 && props.type === "driver") {
              
              return ( <nav className="navbar">
              <ul>
                  <li key="pendingRides" className="navbar-item">
                      <NavLink activeClassName='is-active' className="hvr-underline-from-left" to={`/Profile/${props.type}/${props.name}`}>Pending Rides</NavLink>
                  </li> 
                  <li key="earnings" className="navbar-item">
                      <NavLink activeClassName='is-active' className="hvr-underline-from-left" to={`/Earnings/${props.type}/${props.name}`}>Earnings</NavLink>
                  </li> 
                  <li key="about" className="navbar-item">
                      <NavLink exact={true} activeClassName='is-active' className="hvr-underline-from-left" to="/About">About</NavLink>
                  </li>
                  <li key="about" className="navbar-item">
                      <NavLink exact={true} activeClassName='is-active' className="hvr-underline-from-left" to={`/Account/${props.type}/${props.name}`}>Account</NavLink>
                  </li>
                  <li key="contact" className="navbar-item">
                      <NavLink exact={true} activeClassName='is-active' className="hvr-underline-from-left" to="/Contact">Contact</NavLink>
                  </li>
                  <li key="logout" className="navbar-item">
                      <NavLink exact={true} activeClassName='is-active' className="hvr-underline-from-left" to="/Contact">Log Out</NavLink>
                  </li>
              </ul>
          </nav>)
          } else if (c.indexOf("true") === 11 && props.type === "drinker"){
              
              return(<nav className="navbar">
              <ul>
                  <li key="getRide" className="navbar-item">
                      <NavLink activeClassName='is-active' className="hvr-underline-from-left" to={`/Profile/${props.type}/${props.name}`}>Get a Ride</NavLink>
                  </li> 
                  <li key="rideLog" className="navbar-item">
                      <NavLink exact={true} activeClassName='is-active' className="hvr-underline-from-left" to={`/Rides/${props.type}/${props.name}`}>My Rides</NavLink>
                  </li>
                  <li key="about" className="navbar-item">
                      <NavLink exact={true} activeClassName='is-active' className="hvr-underline-from-left" to="/About">About</NavLink>
                  </li>
                  <li key="contact" className="navbar-item">
                      <NavLink exact={true} activeClassName='is-active' className="hvr-underline-from-left" to="/Contact">Contact</NavLink>
                  </li>
                  <li key="logout" className="navbar-item">
                      <NavLink exact={true} activeClassName='is-active' className="hvr-underline-from-left" to="/Logout">Log Out</NavLink>
                  </li>
              </ul>
          </nav>)
          }
else { 
    
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
}
} return getCookie()
  };

export default NavBar
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavbarLog extends Component {
    debugger
  render() {
    var driver = 
      <React.Fragment>
          <li key="pendingRides" className="navbar-item">
              <NavLink activeClassName='is-active' className="hvr-underline-from-left" to={`/Profile/${this.props.type}/${this.props.name}`}>Pending Rides</NavLink>
          </li> 
          <li key="earnings" className="navbar-item">
              <NavLink activeClassName='is-active' className="hvr-underline-from-left" to={`/Earnings/${this.props.type}/${this.props.name}`}>Earnings</NavLink>
          </li> 
      </React.Fragment>
    var drinker =
        <React.Fragment>
          <li key="getRide" className="navbar-item">
            <NavLink activeClassName='is-active' className="hvr-underline-from-left" to={`/Profile/${this.props.type}/${this.props.name}`}>Get a Ride</NavLink>
          </li> 
          <li key="rideLog" className="navbar-item">
            <NavLink exact={true} activeClassName='is-active' className="hvr-underline-from-left" to={`/Rides/${this.props.type}/${this.props.name}`}>My Rides</NavLink>
          </li>
        </React.Fragment>
        return (
          <nav className="navbar">
            <ul>
                {this.props.loggedIn && this.props.type === "driver" ? driver : drinker}
                <li key="about" className="navbar-item">
                    <NavLink exact={true} activeClassName='is-active' className="hvr-underline-from-left" to="/About">About</NavLink>
                </li>
                <li key="contact" className="navbar-item">
                    <NavLink exact={true} activeClassName='is-active' className="hvr-underline-from-left" to="/Contact">Contact</NavLink>
                </li>
                <li key="logout" className="navbar-item">
                    <a href={"/"} style={{"cursor": "pointer"}} className="hvr-underline-from-left" onClick={this.props.logout}>Log Out</a>
                </li>
            </ul>
          </nav>
        )
    }
    
  }


import DrinkerMap from "./drinkers/DrinkerMap.js";
import axios from 'axios'
import React, { Component } from 'react'
import LogIn from './LogIn'
// 
 class Profile extends Component {
    render() {
      var profileDrinker = <div className="profile">
                              <div className="map">
                                <DrinkerMap />
                              </div>
                            </div> 
      var profileDriver =  <div className="profile">
                              <h1>{this.props.name}</h1>
                            </div>

            return (
              <div>
                {this.props.loggedIn && this.props.type === "driver" ?  profileDriver 
                : this.props.loggedIn && this.props.type === "drinker" ? profileDrinker : <LogIn /> }
              </div>)
    }
  }
 

export default Profile 
 


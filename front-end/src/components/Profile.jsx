import DrinkerMap from "./drinkers/DrinkerMap.js";
import React, { Component } from 'react'
import LogIn from './LogIn'
import RequestedRides from './../components/drivers/RequestedRides'

 class Profile extends Component {
    render() {
      var profileDrinker = <div className="profile">
                              <div className="map">
                              <DrinkerMap userId={this.props.id} getRide={this.props.getRide}>
                                <button>Hello</button>
                              </DrinkerMap>
                              </div>
                            </div> 
      var profileDriver =  <RequestedRides>
                              <h1>{this.props.name}</h1>
                           </RequestedRides>
            return (
              <div>
                {this.props.loggedIn && this.props.type === "driver" ?  profileDriver 
                : this.props.loggedIn && this.props.type === "drinker" ? profileDrinker : <LogIn /> }
              </div>)
    }
  }


export default Profile 
 


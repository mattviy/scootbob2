import DrinkerMap from "./drinkers/DrinkerMap.js";
import axios from 'axios'
import React, { Component } from 'react'
import LogIn from './LogIn'
// 
 class Profile extends Component {

  state = {
    cookies: ''
  }

  componentDidMount() {
    debugger
    axios("http://localhost:3001/users/profile", {withCredentials: true, method: 'get'})
    .then((result)=> {
      debugger
      this.setState({cookies: result.data.cookies})
    })
    .catch((error)=> {
      debugger
      console.log(error)
    })
  }
  render() {
    var profile;

  if (this.state.cookies === 'Cookies are not set, log in is not possible'){
    debugger
    profile = <LogIn />}
    else if (this.state.cookies === 'Cookies are set, log in is possible' && this.props.type === "driver"){
      profile =   <div className="profile">
                    <h1>{this.props.name}</h1>
                  </div>
    } else if (this.state.cookies === 'Cookies are set, log in is possible' && this.props.type === "drinker"){
      profile =  
       <div className="profile">
          <div className="map">
          <DrinkerMap/>
       </div>
    </div>
    }
  return (
    <div>
      {profile}
    </div>
  )
}

 }

export default Profile 
 


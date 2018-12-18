import DrinkerMap from "./drinkers/DrinkerMap.js";
import axios from 'axios'
import React, { Component } from 'react'
// import LogIn from './LogIn'
import RequestedRides from './../components/drivers/RequestedRides'

 class Profile extends Component {

  state = {
    cookies: '',
    rides: [{
      name: "",
      originAdress: "",
      destinationAdress: "",
      priceOfRide: "",
      distanceValue: "",
      durationValue: "",
      statusRide: ""  
    }] 
  }
 
  componentWillMount() {
    
    axios("http://localhost:3001/users/rides", {
      withCredentials: true, 
      method: 'get'
    })
    .then((result)=> {
      this.setState({cookies: result.data.cookies})
    })
    .catch((error)=> {
      console.log(error)
    })
  }

  render() {
    var profile;
  if (!this.props.loggedIn){
    return  profile = <h1>test</h1>
  }
  else if (this.props.loggedIn && this.props.type === "drinker") {
    return <DrinkerMap />
  }
  else if (this.props.loggedIn && this.props.type === "driver") {
    return (
    <RequestedRides> 
      <h1>{this.props.name}</h1> 
    </RequestedRides>
    )
    
  }
  return {profile}
}

 }

export default Profile 
 


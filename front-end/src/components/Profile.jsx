import DrinkerMap from "./drinkers/DrinkerMap.js";
import axios from 'axios'
import React, { Component } from 'react'
// import LogIn from './LogIn'
import RequestedRides from './../components/drivers/RequestedRides'

 class Profile extends Component {

  state = {
    cookies: '',
    rides: [{
      name: "Matt Hamers",
      originAdress: "KNSM-Laan 339",
      destinationAdress: "Jisperveldstraat",
      priceOfRide: "10.00",
      distanceValue: "6.3",
      durationValue: "14",  
    }, 
    {
      name: "David Zlobic",
      originAdress: "Jisperveldstraat",
      destinationAdress: "KNSM-Laan 339",
      priceOfRide: "10.00",
      distanceValue: "6.3",
      durationValue: "14",  
    }] 
  }
 



  // componentDidMount() {
  //   debugger
  //   axios("http://localhost:3001/users/profile", {withCredentials: true, method: 'get'})
  //   .then((result)=> {
  //     debugger
  //     this.setState({cookies: result.data.cookies})
  //   })
  //   .catch((error)=> {
  //     debugger
  //     console.log(error)
  //   })
  // }

  render() {
    var profile;
  if (!this.props.loggedIn){
    return  profile = <h1>Kaghba</h1>
  }
  else if (this.props.loggedIn && this.props.type === "drinker") {
    return <DrinkerMap />
  }
  else if (this.props.loggedIn && this.props.type === "driver") {
    return (
    <RequestedRides rides={this.state.rides}> 
      <h1>{this.props.name}</h1> 
    </RequestedRides>
    )
    
  }
  return {profile}
}

 }

export default Profile 
 


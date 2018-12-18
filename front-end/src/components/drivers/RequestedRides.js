import React, { Component } from 'react'
import axios from 'axios';

export default class RequestedRides extends Component {
  state = {
    rides: []
  }
  
  acceptRide = () => {
    //write axios post req. to add the drivers ID to the ride and change status from "pending" to "accepted".
  }

  componentWillMount() {
    axios({
      method:'get',
      url:'http://localhost:3001/api/pending-rides',
      responseType:'json'
    })
    .then((result) => {
      this.setState({rides: result.data})
      console.log(this.state)
    })
    .catch((err)=> {
      console.log(err)
    })
  }

  render() {
    var requestedRides = this.state.rides.map((ride) => 
    <ul style={{color: `white`}}>
        <li>Requested by: USERSNAME</li>
        <li>Origin: {ride.originAdress}</li>
        <li>Destination: {ride.destinationAdress}</li>
        <li>Est. Price: {ride.priceOfRide}</li>
        <li>Distance: km {ride.distanceValue}</li>
        <li>Duration: min {ride.durationValue}</li>
        <li>Status: {ride.rideStatus}</li>
        <li><button onClick={this.acceptRide}>See Details</button></li>
        <li>__________________________________</li>
    </ul>
    )
    return (
      <div>
        <h1>
          <h1><b style={{color: `white`}}>PENDING RIDES REQUESTED BY THE USER</b></h1>
          {requestedRides}
        </h1>
      </div>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios';

export default class RequestedRides extends Component {
  state = {
    rides: []
  }
  
  componentWillMount() {
    axios({
      method:'get',
      url:'http://localhost:3001/api/pending-rides',
      responseType:'json'
    })
    .then((result) => {
      debugger
      this.setState({rides: result.data})
    })
    .catch((err)=> {
      console.log(err)
    })
  }
  acceptRide = (rideId) => {
    var state = this.state
    axios({
      method: 'post',
      url: 'http://localhost:3001/create-rides/update-ride', 
      withCredentials: true,
      data: {
        _id: rideId
      }
    })
    .then((result)=> {
      debugger
        var newState = state
        var indexClicked = newState
        for(let i = 0; i < newState.rides.length; i++) {
          if(newState.rides[i]._id === rideId) {
            indexClicked = i
            break;
          }
        }
        newState.rides[indexClicked].rideStatus = "Accepted"
        this.setState(newState)
        debugger
    })
    .catch((error)=> {
      debugger
    })
    console.log(rideId)
  } 
  render() {
    var requestedRides = this.state.rides.map((ride, index) => 
    <ul key={index} style={{color: `white`}}>
        <li>Requestedby: {ride.drinkerName}</li>
        <li>Origin: {ride.originAdress}</li>
        <li>Destinaion: {ride.destinationAdress}</li>
        <li>Est. Pice: {ride.priceOfRide}</li>
        <li>Distace: km {ride.distanceValue}</li>
        <li>Duraion: min {ride.durationValue}</li>
        <li>Status: {ride.rideStatus}</li>
        <li><button onClick={() => {this.acceptRide(ride._id)}}>Accept Ride</button></li>
        <li>__________________________________</li>
    </ul>
    )
    return (
      <div>
          <h1><b style={{color: `white`}}>PENDING RIDES REQUESTED BY THE USER</b></h1>
          {requestedRides}  
      </div>
    )
  }
}

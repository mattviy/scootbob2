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
      this.setState({rides: result.data})
    })
    .catch((err)=> {
      console.log(err)
    })
  }
  acceptRide = (documentId) => {
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:3001/create-rides/update-ride', 
    //   withCredentials: true,
    //   data: {
    //     _id: documentId

    //   }
    // })
    console.log(documentId)
  } 
  render() {
    var requestedRides = this.state.rides.map((ride, index) => 
    <ul key={index} style={{color: `white`}}>
        
        <li >Requested by: {ride.drinkerName}</li>
        <li >Origin: {ride.originAdress}</li>
        <li >Destination: {ride.destinationAdress}</li>
        <li >Est. Price: {ride.priceOfRide}</li>
        <li >Distance: km {ride.distanceValue}</li>
        <li >Duration: min {ride.durationValue}</li>
        <li  id={'status'} >Status: {ride.rideStatus}</li>
        <li ><button onClick={this.acceptRide(ride._id)}>Accept Ride</button></li>
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

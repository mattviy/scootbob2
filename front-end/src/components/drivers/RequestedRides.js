import React, { Component } from 'react'

export default class RequestedRides extends Component {
  render() {
    var requestedRides = this.props.rides.map((ride) => 
    <ul>
        <li>Requested by: {ride.name}</li>
        <li>Origin: {ride.originAdress}</li>
        <li>Destination: {ride.destinationAdress}</li>
        <li>Est. Price: {ride.priceOfRide}</li>
        <li>Distance: km {ride.distanceValue}</li>
        <li>Duration: min {ride.durationValue}</li>
    </ul>
    )
    return (
      <div>
        <h1>{requestedRides}</h1>
      </div>
    )
  }
}

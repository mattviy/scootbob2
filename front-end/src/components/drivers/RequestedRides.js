import React, { Component } from 'react'
import axios from 'axios';
import './Requestedrides.scss';

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
    <div className="ride-card" key={index}>
      <div className="flex">
        <div className="card">
          <div onClick={() => {this.acceptRide(ride._id)}} className="column-left">
            <div id="price">€{ride.priceOfRide}</div>
            <div id="accept">Accept</div>
          </div>
          <div className="column-right">
            <div><h1>{ride.drinkerName}</h1></div>
            <div id="origin-destination">
              <div id="origin-destination-background"></div>
              <ul>
                <li>{ride.originAdress}</li>
                <li id="origin">{ride.destinationAdress}</li>
              </ul>
            </div>
            <div>
              <table>
                  <tr>
                    <th>Distance</th> 
                    <th>Duration</th>
                    <th>Status</th>
                  </tr>
                  <tr>
                    <td>KM {ride.distanceValue}</td> 
                    <td>MIN {ride.durationValue}</td>
                    <td>{ride.rideStatus}</td>
                  </tr>
              </table>
            </div>
          </div>
        </div>
      </div>   
    </div>
    )
    return (
      <div>
          {requestedRides}  
      </div>
    )
  }
}

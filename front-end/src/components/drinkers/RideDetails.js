import React, { Component } from 'react'
import './RideDetails.scss';

export default class RideDetails extends Component {
  render() {
    return (
      <div className="RideDetails">
          <div className="info-box">
            <div><b>km </b><span id="in_kilo">{this.props.distanceValue}</span></div>
          </div>
          <div className="info-box">
            <div><b>€ </b><span id="ride-price">{this.props.priceOfRide}</span></div>
          </div>
          <div className="info-box">
            <div><b>min </b><span id="duration_value">{this.props.durationValue}</span></div>
          </div>
      </div>
    )
  }
}

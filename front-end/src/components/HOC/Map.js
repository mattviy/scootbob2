import React, { Component } from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCBPsUBhfOYqXts2pqPEDsbnV2gvcCGXJE&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100vh` }} />,
      containerElement: <div style={{ height: `100vh` }} />,
      mapElement: <div style={{ height: `100vh` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 52.37, lng: 4.89 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 52.37, lng: 4.89 }} />}
    </GoogleMap>
  )

export default MyMapComponent;
/*global google*/
import React from 'react'
import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'
import axios from "axios"
import RideDetails from './RideDetails';
import './DrinkerMap.scss';

const apiConfig = require('../../config.js');

const key = apiConfig.apiKey; 

const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");

class DrinkerMap2 extends React.Component {

render() {
    const DirectionsComponent = compose(
      withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `91vh` }} />,
        containerElement: <div style={{ height: `91vh` }} />,
        mapElement: <div style={{ height: `91vh`}} />,
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentWillMount() {
          debugger
          const refs = {
            searchBoxOrigin: {},
            searchBoxDestination:  {}
          } 
        this.setState({
          bounds: null,
          center: {
            lat: 41.9, lng: -87.624
          },
          markers: [],
          oLng: "", 
          oLat: "",
          dLat: "",
          dLng: "",
          oAdress: "",
          dAdress: "",
          distanceText: "",
          distanceValue: "",
          durationText: "",
          durationValue: "",
          priceOfRide: "", 
          rideStatus: "",
        onMapMounted: ref => {
          refs.map = ref;
        },
        onSearchBoxMounted: (ref) => {
          debugger
          if(ref != null){
          if (ref.containerElement.firstElementChild.id === "drinker-origin") {
            refs.searchBoxOrigin = ref;
          } else {
            refs.searchBoxDestination = ref;
          } 
        }
        },
        createRide: () => {
          if (this.state.oAdress !== "" && this.state.dAdress !== "" ) {
          axios({
            method: 'post',
            url: 'http://localhost:3001/create-rides', 
            withCredentials: true,
            data: {
              originLat: this.state.oLat,
              originLng: this.state.oLng,
              destinationLat: this.state.dLat,
              destinationLng: this.state.dLat,
              originAdress: this.state.oAdress, 
              destinationAdress: this.state.dAdress,
              distanceText: this.state.distanceText,
              distanceValue: this.state.distanceValue,
              durationText: this.state.durationText,
              durationValue: this.state.durationValue,
              priceOfRide: this.state.priceOfRide,
              rideStatus: this.state.rideStatus
            } 
          })
          } else {
            console.log("no input to create ride")
            // Pass values as props so that user sees the error.
          }
        },
        onPlacesChanged: () => {   
            var newState = {}
            if(typeof refs.searchBoxOrigin.getPlaces() != "undefined") {
              const placesOriginLat = refs.searchBoxOrigin.getPlaces()[0].geometry.location.lat();
              const placesOriginLng = refs.searchBoxOrigin.getPlaces()[0].geometry.location.lng();
              const placesOriginAdress = refs.searchBoxOrigin.getPlaces()[0].formatted_address;
              newState.oLat = placesOriginLat
              newState.oLng = placesOriginLng
              newState.oAdress = placesOriginAdress    
            }   
            if(typeof refs.searchBoxDestination.getPlaces() != "undefined") {
              const placesDestinationLat = refs.searchBoxDestination.getPlaces()[0].geometry.location.lat();
              const placesDestinationLng = refs.searchBoxDestination.getPlaces()[0].geometry.location.lng();
              const placesDestinationAdress = refs.searchBoxDestination.getPlaces()[0].formatted_address;
              newState.dLat = placesDestinationLat
              newState.dLng = placesDestinationLng
              newState.dAdress = placesDestinationAdress
            }
            this.setState(newState, () => { 

            })
          },
        })
      },
      componentDidUpdate() {
          const DirectionsService = new google.maps.DirectionsService();
          DirectionsService.route({
            origin: new google.maps.LatLng(this.state.oLat, this.state.oLng),
            destination: new google.maps.LatLng(this.state.dLat, this.state.dLng),
            travelMode: google.maps.TravelMode.DRIVING,
          }, (result, status) => { 
            if (status === google.maps.DirectionsStatus.OK) {   
              this.setState({
                directions: {...result},
                markers: true,
                distanceText: result.routes[0].legs[0].distance.text,
                distanceValue: (result.routes[0].legs[0].distance.value / 1000).toFixed(1),
                durationText: result.routes[0].legs[0].duration.text,
                durationValue: (result.routes[0].legs[0].duration.value / 60).toFixed(0),
                priceOfRide: ((result.routes[0].legs[0].distance.value / 1000) * 2).toFixed(2),
                rideStatus: "Pending"
              })
            } else {
              console.error(`error fetching directions ${result}`);
            }
          })
        }
    }) 
    )(props => { 
      return(
      <GoogleMap
      ref={props.onMapMounted}
      defaultZoom={12}
      defaultCenter={new google.maps.LatLng(52.377956, 4.897070)}
      options={{ 
        panControl: false,
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ]
      }}
      >
      <SearchBox
            controlPosition={window.google.maps.ControlPosition.BOTTOM_LEFT}
            ref={props.onSearchBoxMounted}  
            bounds={props.bounds}
            controlPosition={google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={props.onPlacesChanged}
            onChange = {props.getValue}
          >
            <input  
              name= "origin"
              id="drinker-origin"
              type="text"
              placeholder="Origin"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `90%`,
                height: `40px`,
                marginLeft: `5%`,
                marginTop: `60px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `16px`,
                outline: `none`,
                textOverflow: `ellipses`,
              }}
            />
          </SearchBox>
          <SearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            controlPosition={google.maps.ControlPosition.TOP_RIGHT}
            onPlacesChanged={props.onPlacesChanged}
            onChange = {props.getValue}
          >
            <input
              name= "destination"
              id="drinker-destination"
              type="text"
              placeholder="Destination"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `90%`,
                height: `40px`,
                marginRight: `5%`,
                marginTop: `120px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `16px`,
                outline: `none`,
                textOverflow: `ellipses`,
              }}
            />
          </SearchBox>
          <RideDetails distanceValue={props.distanceValue} durationValue={props.durationValue} priceOfRide={props.priceOfRide}/>
          <div className="confirmation" onClick={props.createRide}>
            <div className="confirmation-btn">CONFIRM</div>
          </div>
          {props.directions && <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers}/>}
      </GoogleMap>)
    });
return (
        <DirectionsComponent/>
    )
  }
}

export default DrinkerMap2;

/*global google*/
import React from 'react'
import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'
import axios from "axios"

const apiConfig = require('../config');
const key = apiConfig.apiKey; 

const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");

class DrinkerMap2 extends React.Component {

render() {
    const DirectionsComponent = compose(
      withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `81vh` }} />,
        containerElement: <div style={{ height: `81vh` }} />,
        mapElement: <div style={{ height: `81vh`}} />,
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentWillMount() {
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
        onMapMounted: ref => {
          refs.map = ref;
        },
        onSearchBoxMounted: ref => {
          if (ref.containerElement.firstElementChild.id === "drinker-origin") {
            refs.searchBoxOrigin = ref;
          } else {
            refs.searchBoxDestination = ref;
          } 
        },
        calcPrice: () => {
          axios({
            method: 'post',
            url: 'http://localhost:3001/create-rides', 
            withCredentials: true,
            data: {
              originLat: this.state.oLat,
              originLng: this.state.oLng,
              destinationLat: this.state.dLat,
              destinationLng: this.state.dLat,
            }
          })
        },
        receiveRideDetails: () => {
          debugger
        },
        onPlacesChanged: () => {   
            var newState = {}
            if(typeof refs.searchBoxOrigin.getPlaces() != "undefined") {
              const placesOriginLat = refs.searchBoxOrigin.getPlaces()[0].geometry.location.lat();
              const placesOriginLng = refs.searchBoxOrigin.getPlaces()[0].geometry.location.lng();
              newState.oLat = placesOriginLat
              newState.oLng = placesOriginLng
            }
            
            if(typeof refs.searchBoxDestination.getPlaces() != "undefined") {
              const placesDestinationLat = refs.searchBoxDestination.getPlaces()[0].geometry.location.lat();
              const placesDestinationLng = refs.searchBoxDestination.getPlaces()[0].geometry.location.lng();
              newState.dLat = placesDestinationLat
              newState.dLng = placesDestinationLng
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
                markers: true
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
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            controlPosition={google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={props.onPlacesChanged}
          >
            <input
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
          >
            <input
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
          <button onClick={props.calcPrice}>CONFIRM</button>
        {props.directions && <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers}/>}
      </GoogleMap>)
    });
return (
        <DirectionsComponent 
        />
    )
  }
}

export default DrinkerMap2;

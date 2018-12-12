import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap } from "react-google-maps"
import Map from './components/HOC/Map'


const FunctionsDrinkerMap = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCBPsUBhfOYqXts2pqPEDsbnV2gvcCGXJE&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100vh` }} />,
      containerElement: <div style={{ height: `100vh` }} />,
      mapElement: <div style={{ height: `100vh` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )
  
const DrinkerMapComponent = FunctionsDrinkerMap(Map);

export default DrinkerMapComponent;
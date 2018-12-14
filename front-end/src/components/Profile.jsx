import React from 'react'
import DrinkerMap from "./drinkers/DrinkerMap";

var Profile = (props) =>{
       return(
         <div className="profile">
            <div style={{zIndex:`0`}} className="map">
              <DrinkerMap /> 
            </div>
            <h1>Hello {props.name}</h1>
         </div>
        
       )
}
     

 export default Profile 
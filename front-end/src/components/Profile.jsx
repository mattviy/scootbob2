import React from 'react'
import DrinkerMap from "./drinkers/DrinkerMap";

var Profile = (props) =>{
       return(
         <div className="profile">
            <div className="map">
              <DrinkerMap /> 
            </div>
            <h1>Hello {props.name}</h1>
         </div>
        
       )
}
     

 export default Profile 
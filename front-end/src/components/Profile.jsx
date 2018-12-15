import React from 'react'
import DrinkerMap from "./drinkers/DrinkerMap";

var Profile = (props) =>{
       return(
         <div className="profile">
            <div style={{zIndex:`0`}} className="map">
              <DrinkerMap /> 
            </div>
         </div>
        
       )
}
     

 export default Profile 
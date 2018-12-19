import React from 'react'
import { Link } from 'react-router-dom';
import wheel from '../images/steering-wheel.svg'
import glass from '../images/cheers.svg'

export const LogIns = [
  {id: "driver",
   name: "Driver login",
   text: "Find your luck and cash on the road",
   signup: "Signup driver"
   },
  {id: "drinker",
  name: "Drinker login",
  text: "Get picked up, review your rides history",
  signup: "Signup driver"
  }
]


export const  LogIn = (props) => {
  
  var logins = LogIns.map((login, index)=> {
    return(
    <div className="loginContainer">
        <div className="button">
          <span className="button__mask"></span>
          <Link className="button__text" to= {`/LogIn/${login.id}`}><h3> {login.name}</h3></Link>
          <span className="button__text button__text--bis">{login.name}</span>
        </div>
        <p>{login.text}</p>
        <div><img alt="Wheel" src={login.id === 'driver' ? wheel : glass }/></div>
    </div>
    )
  })
    return(
        <div className="loginDiv">
          <h1>Log In</h1>
          <div className="buttons">
            {logins}
          </div>
        </div>  
    )  
  }

  export default LogIn




import React from 'react'
import { Link } from 'react-router-dom';
import wheel from '../images/steering-wheel.svg'
import glass from '../images/cheers.svg'

export const SignUps = [
  {id: "driver",
   name: "Driver Signup",
   text: "Sign up for Scootbob as a Driver"},
  {id: "drinker",
  name: "Drinker Signup",
  text: "Sign up for Scootbob as a Drinker"}
]

export const  SignUp = (props) => {
  var signups = SignUps.map((signup, index)=> {
    return(
     <div key={index} className="loginContainer">
        <div className="button">
          <span className="button__mask"></span>
          <Link className="button__text" to= {{pathname: `/SignUp/${signup.id}`, state: {id: signup.id, name: signup.name}}}><h3>{signup.name}</h3></Link>
          <span className="button__text button__text--bis">{signup.name}</span>
        </div>
        <p>{signup.text}</p>
        <div><img alt="Wheel" src={signup.id === 'driver' ? wheel : glass }/></div>
    </div>
    )
  })
  return(
      <div className="loginDiv">
        <h1>Sign Up</h1>
        <div className="buttons">
          {signups}
        </div>
      </div>
  )
  }

  export default SignUp

 
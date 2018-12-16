import React from 'react'
import { Link } from 'react-router-dom';
import '../SignUp.css'

export const SignUps = [
  {id: "driver",
   name: "Sign up as Driver",
   },
  {id: "drinker",
  name: "Sign up as Drinker"}
]

export const  SignUp = (props) => {
  var signups = SignUps.map((signup, index)=> {
    return(<div key={index}><Link to={{pathname: `/SignUp/${signup.id}`, state: {id: signup.id, name: signup.name}}}><h3> {signup.name}</h3></Link></div>
    )
  })
  return(
      <div>
        <h1>Sign Up</h1>
          {signups}
        <h1 style={{color: 'black'}}>{props.warning}{props.warningSignUp}</h1> 
      </div>
  )
  }

  export default SignUp


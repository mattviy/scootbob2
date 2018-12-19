import React from 'react'
import { SignUps } from "./SignUp";
import Form from "./Form";
 
const SignUpVar = (props) => {
  const driverDrinker = id => {
    return SignUps.find((login) => login.id === id
    )}
  const foundSignUp = driverDrinker(props.match.params.id);
  return (
    
    <div>
      <Form id={foundSignUp.id} change={props.change} submit={props.submitS}/>
      <div className="warning">{props.warningSignUp}</div> 
    </div>
  )}


  
export default SignUpVar

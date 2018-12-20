import React from 'react'
import { SignUps } from "./SignUp";
import Form from "./Form";
 
const SignUpVar = (props) => {
  const driverDrinker = id => {
    return SignUps.find((login) => login.id === id
    )}
  const foundSignUp = driverDrinker(props.match.params.id);
  return (
    <React.Fragment>
      <Form id={foundSignUp.id} warning={props.warningSignUp} change={props.change} submit={props.submitS}/>
     </React.Fragment>
      
  )}


  
export default SignUpVar

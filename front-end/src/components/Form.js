import React from 'react'


const Form = (props) => {
  return (
    <div className="form">  
    <h1>{props.id}</h1>
      <input onChange={props.change} placeholder="First Name" type="text" name="firstName"/>
      <input onChange={props.change} placeholder="Last Name" type="text" name="lastName"/>
      <input onChange={props.change} placeholder="E-mail Address" type="email" name="email"/>
      <input onChange={props.change} placeholder="Password" type="password" name="password"/>        
      <input onChange={props.change} placeholder="Confirm Password" type="password" name="confirmPassword"/>       
      <button id={props.id}  onClick={props.submit}></button> 
      <h1>{props.warning}</h1>
    </div>
    
  )
}

export default Form
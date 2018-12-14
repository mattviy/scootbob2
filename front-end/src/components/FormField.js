import React from 'react'

var FormField = (props) => {
  return(
    <div>
        <input type="text" name="firstName"/>
        <input type="text" name="lastName"/>
        <input type="email" name="email"/>
        <input type="password" name="password"/>        
        <input type="password" name="confirmPassword"/>       
        <button id={props.id}  onClick={props.onclick}></button> 
    </div>
  )
} 

export default FormField



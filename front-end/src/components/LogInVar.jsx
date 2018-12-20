import React from 'react'
import { LogIns } from "./LogIn";
import '../loginForm.css'
import { Link } from 'react-router-dom'

const LogInVar = props => {

  const findLogIn = id => {
    return LogIns.find((login) => login.id === id
  )};


  const { params } = props.match;
  const foundLogIn = findLogIn(params.id);
  
  return (
  <div className="loginContainer">
    <div className="login-page">
        <h1>{foundLogIn.name}</h1>
        <div className="form">
          <form className="login-form">
            <input placeholder="Username or e-mail" onChange={props.change} type="email" name="email"></input>
            <input placeholder="Password" onChange={props.change} type="password" name="password"></input>
            <button id={foundLogIn.id} className="submit" onClick={props.submit}>Log In</button>
            <div className="box"><p className="message">Not registered?</p><Link className="noRegister" to={{pathname: `/SignUp/${foundLogIn.id}`}}>Create an account</Link></div>
          </form>
        </div>
        <p className="warning">
    {props.confirmation}
    {props.warning}
    </p>
    </div>
    
  </div>
  )
}


  

export default LogInVar
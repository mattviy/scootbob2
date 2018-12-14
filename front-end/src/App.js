import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp"
import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";
import LogInVar from "./components/LogInVar";
import SignUpVar from "./components/SignUpVar";
import Profile from './components/Profile';
import './App.css'
import axios from 'axios';
import DrinkerMap from './components/drinkers/DrinkerMap';

class App extends Component {

  state = {
    firstName: '',
    lastName: '',
    user: '',
    email: '',
    password: '',
    confirmPassword: '',
    loggedIn: false,
    warning: '',
    warningSign: '',
    confirmation: ''
}

handleFormChange = (event) => {
  var inputChange = {}
  inputChange[event.target.name] = event.target.value
  this.setState(inputChange)
}

 signupForm = (props) => {
     debugger
  axios(`http://localhost:3001/signup/${props.currentTarget.id}`, {
      withCredentials: true,
      method: "POST",
      data: {
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
      } 
    })
    .then((result)=> {
      debugger
      if (result.data.confirmation.length > 0) {
          debugger
          this.setState({confirmation: result.data.confirmation})
          this.props.history.push(`/LogIn/${result.data.type}`) 
         
      } else {
          debugger
          this.setState({warningSign: result.data.warning })
          this.props.history.push(`/SignUp/${result.data.type}`)
      } 
  })
 }

  submitForm = (props) => {
      debugger
      axios(`http://localhost:3001/users/${props.currentTarget.id}`, {
        withCredentials: true,
        method: "POST",
        data: {
          email: this.state.email,
          password: this.state.password
        } 
      })
      .then((result)=> {
          debugger
          if (result.data.warning.length > 0) {
              debugger
              this.setState({warning: result.data.warning })
              this.props.history.push(`/LogIn/${result.data.type}`)
          } else {
              debugger
              this.setState({loggedIn: result.data.loggedIn})
              this.props.history.push("/Profile") 
          } 
      })
      .catch((err)=> {
          debugger
        console.log("Error: " + err)
      })
    }

  render() {
    return (
      <div className="App">
       <NavBar log={this.state.loggedIn} />
                <Switch> 
                    <Route exact path ='/Profile' render={(props) => <Profile {...props} name={this.state.username}/>}/>
                    <Route exact path = '/' component={Home}/>
                    <Route render={(props)=> <LogIn {...props}  warning={this.state.warning}/>} exact path= '/LogIn'/>
                    <Route render={(props) => <LogInVar {...props} change={this.handleFormChange} confirmation= {this.state.confirmation} submit= {this.submitForm} />} path= '/LogIn/:id'/>                
                    <Route render={(props)=> <SignUp {...props}  />} exact path= '/SignUp'/>
                    <Route render={(props) => <SignUpVar {...props} warningSignUp={this.state.warningSign}  change={this.handleFormChange} submitS= {this.signupForm} />} path= '/SignUp/:id'/>
                </Switch>
      </div>
    );
  }
}

export default App;

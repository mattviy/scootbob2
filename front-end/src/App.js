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
import Contact from './components/Contact';
import About from './components/About';
import './App.css'
import axios from 'axios';

class App extends Component {

  state = {
    name: '',
    firstName: '',
    lastName: '',
    user: '',
    email: '',
    password: '',
    confirmPassword: '',
    loggedIn: false,
    warning: '',
    warningSign: '',
    confirmation: '',
    type: ''
}

handleFormChange = (event) => {
  var inputChange = {}
  inputChange[event.target.name] = event.target.value
  this.setState(inputChange)
}

switchOffNotification = () => {
  setTimeout(()=> {
  this.setState({confirmation: '',
                  warningSign: '',
                  warning: ''})

  }, 6000)
}

 signupForm = (props) => {
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
      
      if (result.data.confirmation.length > 0) {
          this.setState({confirmation: result.data.confirmation}, this.switchOffNotification())
          this.props.history.push(`/LogIn/${result.data.type}`)
      } else {
          this.setState({warningSign: result.data.warning }, this.switchOffNotification())
          this.props.history.push(`/SignUp/${result.data.type}`)
      } 
  })
 }

  

  submitForm = (e) => {
    e.preventDefault();
    
      axios(`http://localhost:3001/users/${e.currentTarget.id}`, {
        withCredentials: true,
        method: "POST",
        data: {
          email: this.state.email,
          password: this.state.password
        } 
      })
      .then((result)=> {
        debugger
          if (result.data.loggedIn) {
              this.setState({loggedIn: result.data.loggedIn, type: result.data.type, name: result.data.name })
              this.props.history.push(`/Profile/${result.data.type}/${result.data.name}`) 
          }
           else  {
            
              this.setState({warning: result.data.warning}, this.switchOffNotification())
          } 
      })
      .catch((err)=> {
          
        console.log("Error: " + err)
      })
    }

  render() {
    return (
      <div className="App">
       <NavBar type={this.state.type} name={this.state.name} />
                <Switch> 
                    <Route path ='/Profile/:id' render={(props) => <Profile {...props} loggedIn={this.state.loggedIn} type={this.state.type} name={this.state.name}/>}/>
                    <Route exact path = '/' component={Home}/>
                    <Route exact path = '/About' component={About}/>
                    <Route exact path = '/Contact' component={Contact}/>
                    <Route render={(props)=> <LogIn {...props}  warning={this.state.warning}/>} exact path= '/LogIn'/>
                    <Route render={(props) => <LogInVar {...props} warning={this.state.warning} change={this.handleFormChange} confirmation= {this.state.confirmation} submit= {this.submitForm} />} path= '/LogIn/:id'/>                
                    <Route render={(props)=> <SignUp {...props}  />} exact path= '/SignUp'/>
                    <Route render={(props) => <SignUpVar {...props} warningSignUp={this.state.warningSign}  change={this.handleFormChange} submitS= {this.signupForm} />} path= '/SignUp/:id'/>
                </Switch>
      </div>
    );
   } 
  }

export default withRouter(App);

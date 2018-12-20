import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";
import LogInVar from "./components/LogInVar";
import SignUpVar from "./components/SignUpVar";
import Profile from './components/Profile';
import Contact from './components/Contact';
import About from './components/About';
import Ride from './components/Ride';
import './App.scss'
import './signupCss.scss'
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
    loggedIn: '',
    warning: '',
    warningSign: '',
    confirmation: '',
    type: '',
    id: ''
}

componentWillMount(){
  
  axios('http://localhost:3001/cookies', {withCredentials: true})
  .then((result)=> {
    
    result.data.loggedIn ? this.setState({loggedIn: true, type: result.data.type, name: result.data.name}) : this.setState({loggedIn: false})
    
  })
}

logout = () => {
  axios('http://localhost:3001/logout', {withCredentials: true})
  .then((result)=> {
    
    this.setState({loggedIn: result.data.loggedIn})
  })
  .catch((err)=>{
    
    console.log(err)
  })
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
          this.setState({warningSign: result.data.warning}, this.switchOffNotification())
          this.props.history.push(`/SignUp/${result.data.type}`)
      } 
    })
    .catch((err)=>{
      console.log(err)
    })
 }

  getRide = (props) => {
    
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
        
          if (result.data.loggedIn) {
            
              this.setState({loggedIn: true, type: result.data.type, name: result.data.name, id: result.data.id })
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
            <NavBar loggedIn={this.state.loggedIn} type={this.state.type} name={this.state.name} logout={this.logout}/>
            <Switch> 
                <Route path ='/Profile/:id' render={(props) => <Profile {...props} getRide={this.getRide} loggedIn={this.state.loggedIn} type={this.state.type} id={this.state.id} name={this.state.name}/>}/>
                <Route path ='/Ride/:id' render={(props) => <Ride {...props} loggedIn={this.state.loggedIn} type={this.state.type} name={this.state.name} id={this.state.id}/>}/>
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

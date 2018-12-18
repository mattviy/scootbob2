import React, { Component } from 'react'
import NavbarSt from './NavBarSt'
import NavbarLog from './NavbarLog'
import '../NavBar.css'
import '../hover.css'

export default class NavBar extends Component {
  debugger
  render() {
    var navbar;
    if (!this.props.loggedIn){
      debugger
      navbar = <NavbarSt />
    } else {
      debugger
      navbar = <NavbarLog loggedIn={this.props.loggedIn} type={this.props.type} name={this.props.name} logout={this.props.logout}/>    
    }
    return (
      <div>
        {navbar}
      </div>
    )
  }
}    


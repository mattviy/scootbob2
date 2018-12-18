import React, { Component } from 'react'
import NavbarSt from './NavBarSt'
import NavbarLog from './NavbarLog'
import '../NavBar.css'
import '../hover.css'

export default class NavBar extends Component {
  render() {
    var navbar;
    if (!this.props.loggedIn){
      navbar = <NavbarSt />
    } else {
      navbar = <NavbarLog type={this.props.type} name={this.props.name} logout={this.props.logout}/>    
    }
    return (
      <div>
        {navbar}
      </div>
    )
  }
}    


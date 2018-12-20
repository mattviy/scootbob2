

import React, { Component } from 'react'
export default class Form extends Component {
  render() {
    var textDriver = "Sign up as a driver if you're a responsible person who has good driving skills, Sign up as a driver if you're a responsible person who has good driving skills"
    var textDrinker = "Sign up as a drinker and start using ScootBob for your unplanned occassions, Sign up as a drinker and start using ScootBob for your unplanned occassions"
    return (
        <div className='signupContainer'>
        <div className="containerAll">
        <div className='signup'>
            <form>
              <input onChange={this.props.change} placeholder="First Name" type="text" name="firstName" type='text'  />
              <input onChange={this.props.change} placeholder="Last Name" type="text" name="lastName"  />
              <input onChange={this.props.change} placeholder="E-mail Address" type="email" name="email"/> 
              <input onChange={this.props.change} placeholder="Password" type="password" name="password"/>        
              <input onChange={this.props.change} placeholder="Confirm Password" type="password" name="confirmPassword"/>       
              <div className="button">
                <span className="button__mask"></span>
                <a id={this.props.id} className="button__text" onClick={this.props.submit}><h3>Sign up</h3></a>
                <span className="button__text button__text--bis">Sign up</span>
              </div>
            </form>
          </div>
          <div className='whysign'>
            <h1>Sign in as {this.props.id}</h1>
            <p>{this.props.id === 'driver' ? textDriver : textDrinker}</p>
            <p className="warning">{this.props.warning}</p> 
          </div>
        </div>
        </div>
        
        
    )
  }
}


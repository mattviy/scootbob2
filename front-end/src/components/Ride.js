import React, { Component } from 'react'
import axios from 'axios'
export default class Ride extends Component {

  state ={
    rides: {}
  }
  
  componentWillMount(){
    axios('http://localhost:3001/get-rides',
      {withCredentials: true,
      data: this.props.id,
      method: 'post'
      })
    .then((result)=>{
     console.log(result)
    })
    .catch((err)=>{
      debugger
    })
  }
  render() {
    
    return (
      <div>
      
      </div>
    )
  }
}

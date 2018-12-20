import React, { Component } from 'react'
import axios from 'axios'
import apiConfig from './../config.json';

export default class Ride extends Component {
  state ={
    rides: {}
  }
  
  componentWillMount(){
    axios(`${apiConfig.baseUrl}/get-rides`,
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

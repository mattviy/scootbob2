import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapWithADirectionsRenderer from './components/drinkers/MapDirectionRender';
import CreateRide from './components/rides/create-ride';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{zIndex: '0', height: '100vh'}} >
          <MapWithADirectionsRenderer />
        </div>
        
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{zIndex: '1', position: 'absolute', top: '5%'}}>
            <CreateRide />
          </div>
        </div>  
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DrinkerMap from './components/drinkers/DrinkerMap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{zIndex: '0', height: '100vh'}} >
          <DrinkerMap />
        </div>
      </div>
    );
  }
}

export default App;

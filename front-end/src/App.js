import React, { Component } from 'react';
import './App.css';
// import DrinkerMap from './components/drinkers/DrinkerMap';

import DrinkerMap from './components/drinkers/DrinkerMap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: (41.8507300, -87.6512600),
      destination: (41.8525800, -87.6514100)
    };
  };

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

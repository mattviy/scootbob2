import React from "react";

const Home = () => {
  return (
      <div className="containerFlex">
          <h1 className="animated fadeInDown delay-5s">Scootbob</h1>
          <h2 className="" style={{"font-weight" :"100"}}>The Designated Driver Service of the century</h2>
          <div className="conceptContainer"> 
            <p> <i className="fas fa-glass-martini"></i><br></br><br></br>Too wasted and you're with the car? Send your location to get picked up, our ScooterBob will come and get you home!</p>
            <p> <i className="fas fa-bicycle"></i><br></br><br></br>On arrival he will have to put his electrical, foldable bike in your car.</p>
            <p> <i className="fas fa-bed"></i><br></br><br></br>Our Scooterbob will then drive you to your location and drive back on the electric bike. Good luck with the hangover!</p>
          </div>
      </div>
  );
};

export default Home
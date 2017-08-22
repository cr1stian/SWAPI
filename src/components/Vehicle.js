import React, { Component } from 'react';
import '../style/App.css';


export default class Vehicle extends Component {


  constructor(props){
      super(props)
      this.state = {
        vehicles: []
      }
    }




componentDidMount(){

  fetch(`http://swapi.co/api/vehicles/`)
  .then( r => r.json() )
     .then( data => {
       this.setState({
         vehicles: data.results
       })
       console.log(data)
     })
}




  render() {
    return (
      <div className="main-container">

      {this.state.vehicles.map((aircraft) =>{

      return<div className="jumbotron" id="vehicle-cards" key={aircraft.url}>


      Vehicle: <h3>{aircraft.name}</h3>
      <br />
      Model: {aircraft.model}
      <br />
      Specs
      <hr />
      Manufacturer: {aircraft.manufacturer}
      <br />
      Class: {aircraft.vehicle_class}
      <br />
      Passengers: {aircraft.passengers}
      <br />
      Length: {aircraft.length}
      <br />
      Crew: {aircraft.crew}
      <br />
      Speed: {aircraft.max_atmosphering_speed}
      <br />
      Cargo Capacity: {aircraft.cargo_capacity}
      </div>

      })}


      </div>
    );
  }
}

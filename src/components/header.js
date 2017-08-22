import React, { Component } from 'react';
import '../style/App.css';

export default class Header extends Component {
  render() {
    return (
      <div className="App">
      <div className="jumbotron" id="header">
        <h1 className="display-3">STAR WARS</h1>
        <hr className="my-4"/>
        <p className="lead">Vehicles of Star Wars</p>
        </div>
      </div>
    );
  }
}

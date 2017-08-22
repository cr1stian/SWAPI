import React, { Component } from 'react';
import '../style/App.css';

export default class PersonName extends Component {
  constructor(props){
    super(props)
  }

  render() {

    return (
      <div>
      <h1 style={{fontSize: 20}}>{this.props.name} </h1>
      </div>

    );
  }
}

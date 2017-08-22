import React, { Component } from 'react';
import '../style/App.css';
import PersonName from './personName'

export default class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: this.props.initialName
    }
    this.nameChanger = this.nameChanger.bind(this)
}

nameChanger(event){
  this.setState({
    name: event.target.value
  })
}

  render() {
    return (
      <div className="jumbotron" id="nameForm">

      <h1>What is your name, pilot?</h1>
      <input type="text" onChange={this.nameChanger} placeholder="Your Name Here"/>
      <PersonName name={this.state.name}/>
      </div>

    );
  }
}

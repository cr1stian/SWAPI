import React, { Component } from 'react';
import '../style/App.css';
import Header from './header';
import Form from './form';
import Vehicle from './Vehicle';

export default class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />
      <Form initialName="Luke SkyWalker" />
      <Vehicle />
      </div>
    );
  }
}

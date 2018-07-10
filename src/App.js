import React, { Component } from 'react';
import Toggle from './Toggle';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Render Props</h1>
        </header>
        <Toggle />
      </div>
    );
  }
}

export default App;

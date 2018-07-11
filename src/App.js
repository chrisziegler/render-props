import React, { Component } from 'react';
import Toggle from './ToggleRenderProps';
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
        <Toggle
          render={({ on, toggle }) => (
            <div>
              {/* use an inline conditional */}
              {on && <h1>Show me!</h1>}
              {/* and how do we toggle on? */}
              <button onClick={toggle}>Show / Hide</button>
            </div>
          )}
        />
        <h4>More stuff here, reuse toggle component below</h4>
        <Toggle
          render={({ on, toggle }) => (
            <div>
              {/* use an inline conditional */}
              {on && <nav>nav item</nav>}
              {/* and how do we toggle on? */}
              <button onClick={toggle}>Menu</button>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;

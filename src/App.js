import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-1 hidden-sm"></div>
            	<div className="col-10">
                <a href="/"><img className="logo" src={logo} alt="Techs logo."/></a>
            	</div>
              <div className="col-1 hidden-sm"></div>
            </div>
          </div>
        </header>
        <main>

        </main>
      </div>
    );
  }
}

export default App;

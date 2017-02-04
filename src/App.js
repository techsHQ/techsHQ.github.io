import React, { Component } from 'react';
import './Reset.css';
import './App.css';
import logo from './logo.svg';
import { Tech } from './components/Tech'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      techs: [],
      next: '',
      prev: ''
    }
  }

  componentDidMount() {
    fetch('https://dry-ocean-29667.herokuapp.com/api/techs')
      .then(result => result.json())
      .then(json => {
        console.log(json.data)
        this.setState({
          techs: json.data.techs,
          next: json.data.next,
          prev: json.data.prev
        })
      })
  }

  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-3 hidden-sm"></div>
            	<div className="col-6">
                <a href="/"><img className="logo" src={logo} alt="Techs logo."/></a>
            	</div>
              <div className="col-3 hidden-sm"></div>
            </div>
          </div>
        </header>
        <main>
          <div className="container">
            {this.state.techs.map((tech, index) =>
              <Tech url={tech.url} publisher={tech.publisher} title={tech.title} pubDate={tech.pub_date} key={index} />
            )}

          </div>
        </main>
      </div>
    );
  }
}

export default App;

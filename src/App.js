import React, { Component } from 'react';
import './Reset.css';
import './App.css';
import logo from './logo.svg';
import { Tech } from './components/Tech'
import { Navigation } from './components/Navigation'

class App extends Component {
  state = {
    techs: [],
    next: '',
    prev: ''
  }

  componentDidMount() {
    fetch('https://dry-ocean-29667.herokuapp.com/api/techs')
      .then(result => result.json())
      .then(json => {
        this.setState({
          techs: json.data.techs,
          more: json.data.next
        })
      })
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  handleNavigation = event => {
    event.preventDefault()
    var href = event.target.getAttribute('href')
    fetch(href)
      .then(result => result.json())
      .then(json => {
        this.setState({
          techs: json.data.techs,
          more: json.data.next
        })
      })
  }

  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="row">
            	<div className="col-12">
                <a href="/"><img className="logo" src={logo} alt="Techs logo."/></a>
            	</div>
            </div>
          </div>
        </header>
        <main>
          <div className="container">
            {this.state.techs.map((tech, index) =>
              <Tech url={tech.url} publisher={tech.publisher} title={tech.title} pubDate={tech.pub_date} key={index} />
            )}
            <Navigation handleNavigation={this.handleNavigation} more={this.state.more} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;

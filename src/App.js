import React, { Component } from 'react';
import './Reset.css';
import './App.css';
import logo from './logo.svg';
import { Tech } from './components/Tech'
import { Navigation } from './components/Navigation'
import { ErrorMessage } from './components/ErrorMessage'

class App extends Component {
  state = {
    techs: [],
    next: '',
    prev: '',
    error: ''
  }

  componentDidMount() {
    this.fetchHome()
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  fetchHome = () => {
    this.fetchTechs('https://dry-ocean-29667.herokuapp.com/api/techs')
  }

  fetchTechs = location => {
    fetch(location)
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          this.setState({
            error: json.error.message
          })
          setTimeout(() => this.setState({error: ''}), 2500)
        } else {
          this.setState({
            techs: json.data.techs,
            more: json.data.next,
            error: ''
          })
        }
      })
  }

  handleNavigation = event => {
    event.preventDefault()
    var href = event.target.getAttribute('href')
    this.fetchTechs(href)
  }

  handleHome = event => {
    event.preventDefault()
    this.fetchHome()
  }

  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="row">
            	<div className="col-12">
                <a href="/" onClick={this.handleHome}><img className="logo" src={logo} alt="Techs logo."/></a>
            	</div>
            </div>
          </div>
        </header>
        <main>
          <div className="container">
            {this.state.error && <ErrorMessage err={this.state.error}/>}
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

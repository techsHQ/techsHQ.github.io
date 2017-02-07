import React, { Component } from 'react';
import './App.css';
import { Tech } from './Tech'
import { Navigation } from './Navigation'
import { ErrorMessage } from './ErrorMessage'
import { Header } from './Header'

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
        <Header handleHome={this.handleHome}/>
        <main>
          <div className="container">
            {this.state.error && <ErrorMessage err={this.state.error}/>}
            {this.state.techs.map((tech, index) =>
              <Tech url={tech.url} publisher={tech.publisher_display_name} title={tech.title} pubDate={tech.pub_date} key={index}/>
            )}
            <Navigation handleNavigation={this.handleNavigation} more={this.state.more}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

import React from 'react'
import logo from './logo.svg';
import './Header.css'

export function Header(props) {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <a href="/" onClick={props.handleHome}><img className="logo" src={logo} alt="Techs logo."/></a>
          </div>
        </div>
      </div>
    </header>
  )
}

import React from 'react'
import './Navigation.css'

export function Navigation(props) {

  return (
    <div className="row">
      <div className="col-12">
        <nav>
          <a href={props.more} onClick={props.handleNavigation}>More</a>
        </nav>
      </div>
    </div>
  )
}

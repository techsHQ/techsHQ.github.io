import React from 'react'

export function Navigation(props) {

  return (
    <div className="row">
      <div className="col-12">
        <nav>
          {props.prev ? (<a href={props.prev} onClick={props.handleNavigation}>previous</a>) : ('')}
          {props.prev ? ' | ' : ''}
          <a href={props.next} onClick={props.handleNavigation}>next</a>
        </nav>
      </div>
    </div>
  )
}

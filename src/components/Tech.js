import React from 'react'
import './Tech.css'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function Tech(props) {
  return (
    <div className="row">
      <div className="col-3 hidden-sm"></div>
      <div className="col-9">
        <p className="title"><a href={props.url}>{props.title}</a></p>
        <p className="tech-info">{new Date(props.pubDate).toLocaleDateString()} by <a href="#" className="publisher">{capitalizeFirstLetter(props.publisher)}</a></p>
      </div>
    </div>
  )
}

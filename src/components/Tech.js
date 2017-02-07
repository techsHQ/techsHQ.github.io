import React from 'react'
import './Tech.css'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function baseUrl(url) {
  var a = document.createElement('a')
  a.href = url
  return a.protocol + '//' + a.hostname.split('.').slice(-2).join('.')
}

export function Tech(props) {
  return (
    <div className="row">
      <div className="col-12">
        <p className="title"><a href={props.url} target="_blank">{props.title} <i className="fa fa-external-link" aria-hidden="true"></i>
</a></p>
        <p className="tech-info">{new Date(props.pubDate).toLocaleDateString()} by <a href={baseUrl(props.url)} target="_blank" className="publisher">{capitalizeFirstLetter(props.publisher)}</a></p>
      </div>
    </div>
  )
}

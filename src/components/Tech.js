import React from 'react'
import './Tech.css'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function baseUrl(url) {
  var a = document.createElement('a')
  a.href = url
  var temp = a.hostname.split('.')
  temp.shift()
  return a.protocol + '//' + temp.join('.')
}

export function Tech(props) {
  return (
    <div className="row">
      <div className="col-12">
        <p className="title"><a href={props.url} target="_blank">{props.title} <i className="fa fa-external-link fa-1" aria-hidden="true"></i>
</a></p>
        <p className="tech-info">{new Date(props.pubDate).toLocaleDateString()} by <a href={baseUrl(props.url)} className="publisher">{capitalizeFirstLetter(props.publisher)}</a></p>
      </div>
    </div>
  )
}

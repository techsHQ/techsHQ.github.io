import React from 'react'
import './ErrorMessage.css'

export function ErrorMessage(props) {
  return (
    <div className="row">
      <div className="col-12">
        <p className="error">{props.err}</p>
      </div>
    </div>
  )
}

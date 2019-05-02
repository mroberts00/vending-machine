import React from 'react'
import './Display.css'

const Display = (props) => {
  const { error, message } = props
  return (
    <div className="messageDisplay">
      <p className={error ? 'error' : null}>{error || message || 'Hi, please insert coins one at a time.'}</p>
    </div>
  )
}

export default Display
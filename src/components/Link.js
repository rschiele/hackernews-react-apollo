import React from 'react'

const Link = props => {
  return (
    <div>
      <h1>This is a Link</h1>
      {props.link.description} {props.link.url}
    </div>
  )
}

export default Link

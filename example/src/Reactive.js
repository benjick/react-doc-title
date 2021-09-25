import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { useTitle } from 'react-doc-title'

function Reactive() {
  const [title, setTitle] = React.useState('reactive')
  useTitle(title)
  return (
    <Jumbotron>
      <h1>Reactive titles</h1>
      Change this:
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </Jumbotron>
  )
}

export default Reactive

import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

function Home() {
  return (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a quick demo showing how to use this package. See
        <code>index.js</code> to see full usage
      </p>
      <p>
        <Button variant="light">
          <a href="https://github.com/benjick/react-doc-title">
            Go to Github repo
          </a>
        </Button>
      </p>
    </Jumbotron>
  )
}

export default Home

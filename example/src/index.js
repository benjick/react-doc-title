import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, Title, useTitle } from 'react-doc-title'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import Reactive from './Reactive'
import PreviewTitle from './PreviewTitle'

function Contact() {
  // Example with hook
  useTitle('Contact')
  return <p>Contact us</p>
}

function App() {
  return (
    <Provider title="My website">
      <PreviewTitle />
      <Menu />
      <hr />
      <Route path="/react-doc-title" exact component={Home} />
      <Route path="/react-doc-title/reactive" exact component={Reactive} />
      <Route
        path="/react-doc-title/about"
        render={() => (
          <>
            {/* Example with component */}
            <Title string="About" />
            <h3>About</h3>
            <Route path="/react-doc-title/about/contact" component={Contact} />
          </>
        )}
      />
    </Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
)

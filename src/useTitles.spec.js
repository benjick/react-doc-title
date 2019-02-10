import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import {Provider, Title, useTitle} from './'

function MyComponent() {
  useTitle('test3')
  return <p>test</p>
}

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it.only('can change title', () => {
  act(() => {
    ReactDOM.render(
      <Provider title='react-title'>
        <Title string='test' />
        <Title string='test2' />
        <MyComponent />
      </Provider>
      , container)
  })
  expect(document.title).toBe('test3 - test2 - test - react-title')
})

it('can change title', () => {
  // Test first render and effect
  act(() => {
    ReactDOM.render(
      <Provider title='react-title' append divider=' > '>
        <Title string='test' />
      </Provider>
      , container)
  })
  expect(document.title).toBe('react-title > test')
})
